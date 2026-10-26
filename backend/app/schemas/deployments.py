"""Tipos de respuesta compartidos para deployments."""
from typing import Any
from pydantic import BaseModel, ConfigDict


class DeploymentItem(BaseModel):
    """Modelo flexible: conserva campos específicos por proveedor."""
    model_config = ConfigDict(extra="allow")

    uid: str = ""
    name: str
    url: str | None = None
    thumbnail: str | None = None
    state: str = "UNKNOWN"
    createdAt: str = ""
    target: str | None = None
    provider: str | None = None
    type: str | None = None
    repo: str | None = None
    branch: str | None = None
