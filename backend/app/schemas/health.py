"""Esquemas de respuesta de salud."""
from pydantic import BaseModel


class HealthResponse(BaseModel):
    status: str
    service: str
