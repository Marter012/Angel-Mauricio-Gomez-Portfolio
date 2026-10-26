"""Agregador central de rutas de la API."""
from fastapi import APIRouter

from app.api.routes import github, health, portfolio, render, vercel

api_router = APIRouter(prefix="/api")
api_router.include_router(health.router)
api_router.include_router(portfolio.router)
api_router.include_router(github.router)
api_router.include_router(vercel.router)
api_router.include_router(render.router)
