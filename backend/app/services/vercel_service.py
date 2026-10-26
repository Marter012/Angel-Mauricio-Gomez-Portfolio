"""Lógica de aplicación para deployments de Vercel."""
from typing import Any

import httpx
from fastapi import HTTPException

from app.repositories.vercel_repository import vercel_repository


class VercelService:
    async def list_deployments(self) -> list[dict[str, Any]]:
        try:
            return await vercel_repository.get_latest_production_deployments()
        except ValueError as exc:
            raise HTTPException(status_code=500, detail=str(exc)) from exc
        except httpx.HTTPStatusError as exc:
            status_code = exc.response.status_code
            print(f"ERROR VERCEL HTTP: {status_code}: {exc}")
            detail = (
                "Vercel rechazó VERCEL_TOKEN. Verificá el token y los permisos."
                if status_code in (401, 403)
                else f"No se pudieron consultar los deployments de Vercel (HTTP {status_code})."
            )
            raise HTTPException(status_code=502, detail=detail) from exc
        except httpx.HTTPError as exc:
            print(f"ERROR VERCEL: {type(exc).__name__}: {exc}")
            raise HTTPException(
                status_code=502,
                detail="No se pudo establecer conexión con la API de Vercel.",
            ) from exc


vercel_service = VercelService()
