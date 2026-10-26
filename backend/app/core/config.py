"""Configuración central y variables de entorno del backend."""
from functools import lru_cache
import os

from dotenv import load_dotenv

load_dotenv()


class Settings:
    """Configuración sencilla sin añadir dependencias adicionales."""

    def __init__(self) -> None:
        self.app_name = os.getenv("APP_NAME", "Mauricio Gomez Portfolio API").strip()
        self.app_version = os.getenv("APP_VERSION", "2.0.0").strip()
        self.github_user = os.getenv("GITHUB_USER", "Marter012").strip()
        self.vercel_token = os.getenv("VERCEL_TOKEN", "").strip()
        self.vercel_team_id = os.getenv("VERCEL_TEAM_ID", "").strip()
        self.render_api_key = os.getenv("RENDER_API_KEY", "").strip()
        raw_origins = os.getenv(
            "ALLOWED_ORIGINS",
        )
        self.allowed_origins = [origin.strip() for origin in raw_origins.split(",") if origin.strip()]


@lru_cache
def get_settings() -> Settings:
    return Settings()


settings = get_settings()
