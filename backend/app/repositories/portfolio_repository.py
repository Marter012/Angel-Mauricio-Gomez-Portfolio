"""Acceso al contenido editorial del portfolio."""
import json
from pathlib import Path
from typing import Any

_DATA_FILE = Path(__file__).resolve().parents[1] / "data" / "portfolio.json"


class PortfolioRepository:
    """Lee el contenido editorial almacenado en JSON."""

    def get_content(self) -> dict[str, Any]:
        with _DATA_FILE.open("r", encoding="utf-8") as file:
            return json.load(file)


portfolio_repository = PortfolioRepository()
