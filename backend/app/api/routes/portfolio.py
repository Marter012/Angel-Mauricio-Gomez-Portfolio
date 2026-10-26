"""Rutas para el contenido editorial del portfolio."""
from typing import Any

from fastapi import APIRouter

from app.services.portfolio_service import portfolio_service

router = APIRouter(tags=["Portfolio"])


@router.get("/portfolio", response_model=dict[str, Any])
async def get_portfolio() -> dict[str, Any]:
    return portfolio_service.get_content()
