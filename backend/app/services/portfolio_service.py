"""Casos de uso relacionados con el contenido del portfolio."""
from typing import Any

from app.repositories.portfolio_repository import portfolio_repository


class PortfolioService:
    def get_content(self) -> dict[str, Any]:
        return portfolio_repository.get_content()


portfolio_service = PortfolioService()
