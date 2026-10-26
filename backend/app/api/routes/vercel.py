"""Rutas de integración con Vercel."""
from typing import Any

from fastapi import APIRouter

from app.services.vercel_service import vercel_service

router = APIRouter(tags=["Vercel"])


@router.get("/vercel/deployments", response_model=list[dict[str, Any]])
async def get_deployments() -> list[dict[str, Any]]:
    return await vercel_service.list_deployments()
