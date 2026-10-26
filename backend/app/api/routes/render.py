"""Rutas de integración con Render."""
from typing import Any

from fastapi import APIRouter

from app.services.render_service import render_service

router = APIRouter(tags=["Render"])


@router.get("/render/deployments", response_model=list[dict[str, Any]])
async def get_deployments() -> list[dict[str, Any]]:
    return await render_service.list_deployments()
