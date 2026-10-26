"""Lógica de aplicación para repositorios de GitHub."""
from typing import Any

import httpx
from fastapi import HTTPException

from app.repositories.github_repository import github_repository


class GitHubService:
    async def list_repositories(self) -> list[dict[str, Any]]:
        try:
            return await github_repository.get_repositories()
        except httpx.HTTPStatusError as exc:
            print(f"ERROR GITHUB HTTP: {exc.response.status_code}: {exc}")
            raise HTTPException(
                status_code=502,
                detail="No se pudieron consultar los repositorios de GitHub.",
            ) from exc
        except httpx.HTTPError as exc:
            print(f"ERROR GITHUB: {type(exc).__name__}: {exc}")
            raise HTTPException(
                status_code=502,
                detail="No se pudo establecer conexión con GitHub.",
            ) from exc


github_service = GitHubService()
