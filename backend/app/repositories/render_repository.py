"""Acceso y normalización de servicios de la API de Render."""
from typing import Any
from urllib.parse import quote

import httpx

from app.core.config import settings


class RenderRepository:
    BASE_URL = "https://api.render.com/v1"

    async def get_services(self) -> list[dict[str, Any]]:
        if not settings.render_api_key:
            raise ValueError(
                "Falta configurar RENDER_API_KEY. Agregá la variable en el .env "
                "local y en las variables de entorno del backend."
            )

        headers = {
            "Authorization": f"Bearer {settings.render_api_key}",
            "Accept": "application/json",
            "User-Agent": "mauricio-gomez-portfolio",
        }
        services: list[dict[str, Any]] = []
        cursor: str | None = None

        async with httpx.AsyncClient(timeout=20) as client:
            while True:
                params: dict[str, Any] = {
                    "limit": 100,
                    "includePreviews": "false",
                }
                if cursor:
                    params["cursor"] = cursor

                response = await client.get(
                    f"{self.BASE_URL}/services",
                    headers=headers,
                    params=params,
                )
                response.raise_for_status()
                page = response.json()
                if not isinstance(page, list):
                    raise ValueError("La API de Render devolvió un formato inesperado.")

                for entry in page:
                    if not isinstance(entry, dict):
                        continue
                    service = entry.get("service", entry)
                    if not isinstance(service, dict):
                        continue

                    service_id = service.get("id")
                    service_name = service.get("name") or service.get("slug") or "Render service"
                    service_type = service.get("type") or "unknown"
                    service_url = service.get("url")

                    if isinstance(service_url, str) and service_url and not service_url.startswith(("http://", "https://")):
                        service_url = f"https://{service_url}"

                    suspended = service.get("suspended")
                    if suspended == "suspended":
                        state = "SUSPENDED"
                    elif suspended == "not_suspended":
                        state = "ACTIVE"
                    else:
                        state = "UNKNOWN"

                    created_at = service.get("createdAt") or ""
                    thumbnail_url = None
                    if service_url and service_type in ("web_service", "static_site"):
                        thumbnail_url = (
                            "https://api.microlink.io/"
                            f"?url={quote(service_url, safe='')}"
                            "&screenshot=true&meta=false&embed=screenshot.url"
                            "&viewport.width=1200&viewport.height=630"
                        )

                    services.append({
                        "uid": service_id or service.get("slug", ""),
                        "id": service_id or "",
                        "name": service_name,
                        "url": service_url,
                        "thumbnail": thumbnail_url,
                        "state": state,
                        "createdAt": created_at,
                        "target": "production",
                        "provider": "render",
                        "type": service_type,
                        "repo": service.get("repo"),
                        "branch": service.get("branch"),
                    })

                if len(page) < 100:
                    break
                next_cursor = page[-1].get("cursor") if page and isinstance(page[-1], dict) else None
                if not next_cursor or next_cursor == cursor:
                    break
                cursor = next_cursor

        services.sort(key=lambda item: item.get("createdAt", ""), reverse=True)
        return services


render_repository = RenderRepository()
