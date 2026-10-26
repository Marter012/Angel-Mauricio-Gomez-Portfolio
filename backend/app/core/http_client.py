"""Factoría del cliente HTTP para integraciones externas."""
import httpx


def create_http_client(timeout: float = 15.0) -> httpx.AsyncClient:
    """Crea un cliente HTTP asíncrono con timeout explícito."""
    return httpx.AsyncClient(timeout=timeout)
