"""Acceso a la API externa de GitHub."""
from typing import Any

import httpx

from app.core.config import settings


class GitHubRepository:
    BASE_URL = "https://api.github.com"

    async def get_repositories(self) -> list[dict[str, Any]]:
        headers = {
            "Accept": "application/vnd.github+json",
            "User-Agent": "mauricio-gomez-portfolio",
            "X-GitHub-Api-Version": "2026-03-10",
        }
        async with httpx.AsyncClient(timeout=12) as client:
            response = await client.get(
                f"{self.BASE_URL}/users/{settings.github_user}/repos",
                params={
                    "sort": "updated",
                    "direction": "desc",
                    "per_page": 30,
                    "type": "owner",
                },
                headers=headers,
            )
            response.raise_for_status()
            repositories = response.json()

        return [
            {
                "id": repository["id"],
                "name": repository["name"],
                "description": repository.get("description"),
                "html_url": repository["html_url"],
                "homepage": repository.get("homepage"),
                "language": repository.get("language"),
                "stargazers_count": repository.get("stargazers_count", 0),
                "forks_count": repository.get("forks_count", 0),
                "updated_at": repository.get("updated_at", ""),
            }
            for repository in repositories
            if not repository.get("fork", False)
        ]


github_repository = GitHubRepository()
