"""Acceso y normalización de datos de la API de Vercel."""
from datetime import datetime
from typing import Any
from urllib.parse import quote

import httpx

from app.core.config import settings


class VercelRepository:
    BASE_URL = "https://api.vercel.com"

    async def get_latest_production_deployments(self) -> list[dict[str, Any]]:
        if not settings.vercel_token:
            raise ValueError("Falta configurar VERCEL_TOKEN.")

        headers = {
            "Authorization": f"Bearer {settings.vercel_token}",
            "User-Agent": "mauricio-portfolio",
        }
        team_params: dict[str, Any] = {}
        if settings.vercel_team_id:
            team_params["teamId"] = settings.vercel_team_id

        async with httpx.AsyncClient(timeout=15) as client:
            projects_response = await client.get(
                f"{self.BASE_URL}/v9/projects",
                headers=headers,
                params={**team_params, "limit": 100},
            )
            projects_response.raise_for_status()
            projects_payload = projects_response.json()
            projects = projects_payload.get("projects", [])

            projects_map: dict[str, dict[str, Any]] = {}
            for project in projects:
                project_id = project.get("id")
                if not project_id:
                    continue

                targets = project.get("targets") or {}
                production_target = targets.get("production") or {}
                production_aliases = production_target.get("alias", [])
                if not isinstance(production_aliases, list):
                    production_aliases = []

                if not production_aliases:
                    project_aliases = project.get("alias", [])
                    if isinstance(project_aliases, list):
                        production_aliases = project_aliases

                production_domain = next(
                    (
                        alias for alias in production_aliases
                        if isinstance(alias, str) and alias.endswith(".vercel.app")
                    ),
                    None,
                )
                if not production_domain and production_aliases:
                    first_alias = production_aliases[0]
                    if isinstance(first_alias, str):
                        production_domain = first_alias

                projects_map[project_id] = {
                    "name": project.get("name", "project"),
                    "production_domain": production_domain,
                }

            deployments_response = await client.get(
                f"{self.BASE_URL}/v6/deployments",
                headers=headers,
                params={**team_params, "limit": 100},
            )
            deployments_response.raise_for_status()
            deployments_payload = deployments_response.json()

        latest_by_project: dict[str, dict[str, Any]] = {}
        for item in deployments_payload.get("deployments", []):
            deployment_url = item.get("url")
            if not deployment_url or item.get("target") != "production":
                continue

            project_id = item.get("projectId")
            project_info = projects_map.get(project_id, {})
            project_name = project_info.get("name") or item.get("name") or "deployment"
            production_domain = project_info.get("production_domain")
            public_url = f"https://{production_domain}" if production_domain else f"https://{deployment_url}"
            thumbnail_url = (
                "https://api.microlink.io/"
                f"?url={quote(public_url, safe='')}"
                "&screenshot=true&meta=false&embed=screenshot.url"
                "&viewport.width=1200&viewport.height=630"
            )

            created = item.get("createdAt")
            if isinstance(created, int):
                created = datetime.fromtimestamp(created / 1000).isoformat()

            deployment = {
                "uid": item.get("uid", ""),
                "name": project_name,
                "url": public_url,
                "thumbnail": thumbnail_url,
                "state": item.get("state", "UNKNOWN"),
                "createdAt": created or "",
                "target": item.get("target"),
            }

            existing = latest_by_project.get(project_name)
            if existing is None or deployment["createdAt"] > existing.get("createdAt", ""):
                latest_by_project[project_name] = deployment

        deployments = list(latest_by_project.values())
        deployments.sort(key=lambda item: item.get("createdAt", ""), reverse=True)
        return deployments


vercel_repository = VercelRepository()
