"""Lógica de aplicación para servicios de Render."""
from typing import Any

import httpx
from fastapi import HTTPException

from app.repositories.render_repository import render_repository


class RenderService:
    async def list_deployments(self) -> list[dict[str, Any]]:
        try:
            return await render_repository.get_services()
        except ValueError as exc:
            raise HTTPException(status_code=500, detail=str(exc)) from exc
        except httpx.HTTPStatusError as exc:
            status_code = exc.response.status_code
            print(f"ERROR RENDER API HTTP: {status_code}: {exc}")
            if status_code in (401, 403):
                detail = "Render rechazó RENDER_API_KEY. Verificá que la clave sea válida y pertenezca a tu cuenta."
            else:
                detail = f"No se pudieron consultar los servicios de Render (HTTP {status_code})."
            raise HTTPException(status_code=502, detail=detail) from exc
        except httpx.HTTPError as exc:
            print(f"ERROR RENDER API: {type(exc).__name__}: {exc}")
            raise HTTPException(
                status_code=502,
                detail="No se pudo establecer conexión con la API de Render.",
            ) from exc
        except (TypeError, ValueError) as exc:
            print(f"ERROR RENDER API RESPONSE: {type(exc).__name__}: {exc}")
            raise HTTPException(
                status_code=502,
                detail="La API de Render devolvió una respuesta inesperada.",
            ) from exc


render_service = RenderService()
