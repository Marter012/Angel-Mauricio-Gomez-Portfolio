"""Rutas de integración con GitHub."""
from typing import Any

from fastapi import APIRouter

from app.services.github_service import github_service

router = APIRouter(tags=["GitHub"])


@router.get("/github/repos", response_model=list[dict[str, Any]])
async def get_repositories() -> list[dict[str, Any]]:
    return await github_service.list_repositories()
