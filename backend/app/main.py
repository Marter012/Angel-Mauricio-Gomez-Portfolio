import os
from datetime import datetime, timezone
from typing import Any

import httpx
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from urllib.parse import quote
load_dotenv()

app = FastAPI(title="Mauricio Gomez Portfolio API", version="2.0.0")

allowed_origins = [
    origin.strip()
    for origin in os.getenv(
        "ALLOWED_ORIGINS",
        "http://localhost:5173,http://127.0.0.1:5173",
    ).split(",")
    if origin.strip()
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=False,
    allow_methods=["GET"],
    allow_headers=["*"],
)

GITHUB_USER = os.getenv("GITHUB_USER", "Marter012").strip()
VERCEL_TOKEN = os.getenv("VERCEL_TOKEN", "").strip()
VERCEL_TEAM_ID = os.getenv("VERCEL_TEAM_ID", "").strip()
RENDER_API_KEY = os.getenv("RENDER_API_KEY", "").strip()


def vercel_params() -> dict[str, str]:
    return {"teamId": VERCEL_TEAM_ID} if VERCEL_TEAM_ID else {}


@app.get("/api/health")
async def health() -> dict[str, str]:
    return {"status": "ok", "service": "Mauricio Gomez Portfolio API"}



@app.get("/api/portfolio")
async def portfolio_content() -> dict[str, Any]:
    """Contenido editorial del portfolio; la interfaz lo consume desde esta API."""
    return {
        "site": {
            "name": "Mauricio Gómez",
            "role": "Full Stack Developer",
            "location": "Argentina",
            "email": "angel.mauricio.gomez@outlook.com",
            "github": "https://github.com/Marter012",
            "vercel": "https://vercel.com/marter012s-projects",
            "instagram": "https://www.instagram.com/mauricio.gomez.a/",
            "whatsapp": "https://wa.me/549351647858",
        },
        "portal": {
            "welcome": "BIENVENIDO A MI ESPACIO DIGITAL",
            "headlineLines": ["Ideas que", "impulsan", "soluciones."],
            "description": "Soy Mauricio Gómez. Desarrollo soluciones digitales para personas, negocios y proyectos que quieren avanzar, simplificar procesos y convertir ideas en resultados.",
            "verticalNote": "EXPLORÁ MI TRABAJO",
            "coordinate": "ARGENTINA · AR",
            "coordinateCaption": "SOFTWARE · PRODUCTO · IDEAS",
            "stamp": "DESARROLLO DIGITAL",
            "messageEyebrow": "TECNOLOGÍA CON PROPÓSITO",
            "messageLines": ["Cada proyecto empieza con una idea.", "El objetivo es convertirla en algo útil."],
            "businessChoice": {
                "number": "01 / NEGOCIOS",
                "kicker": "PARA PERSONAS Y EMPRESAS",
                "titleLines": ["Tu negocio puede", "llegar más lejos."],
                "description": "Desarrollo aplicaciones, automatizaciones y herramientas digitales para optimizar tareas, mejorar procesos y ayudarte a trabajar mejor.",
                "action": "EXPLORAR SOLUCIONES",
            },
            "technicalChoice": {
                "number": "02 / TECNOLOGÍA",
                "kicker": "PARA DESARROLLADORES Y EQUIPOS",
                "titleLines": ["Código, arquitectura", "y soluciones reales."],
                "description": "Conocé mis proyectos, tecnologías, decisiones técnicas e implementaciones de software.",
                "action": "VER PROYECTOS",
            },
            "footerLeft": "DESARROLLO · AUTOMATIZACIÓN · SISTEMAS",
            "footerRight": "DOS RECORRIDOS|UN MISMO OBJETIVO",
        },
        "technical": {
            "eyebrow": "FULL STACK DEVELOPER · SOFTWARE ENGINEERING",
            "headlineLines": ["Transformo", "problemas en"],
            "headlineAccent": "sistemas.",
            "description": "Desarrollo aplicaciones web, APIs y soluciones de software combinando arquitectura, experiencia de usuario y una visión integral del producto.",
            "profileLabel": "PERFIL PROFESIONAL",
            "profileRole": "Desarrollo Full Stack",
            "profileTags": ["Frontend", "Backend", "Integraciones"],
            "aboutEyebrow": "01 / ENFOQUE",
            "aboutTitleLines": ["Entender el problema", "antes de escribir código."],
            "aboutParagraphs": [
                "Me interesa desarrollar software que sea claro para quien lo utiliza y sostenible para quien lo mantiene.",
                "Trabajo conectando interfaces, APIs, datos e integraciones para construir soluciones completas, priorizando decisiones técnicas que respondan a necesidades reales.",
            ],
            "projectsEyebrow": "02 / TRABAJO SELECCIONADO",
            "projectsTitleLines": ["Proyectos", "desarrollados."],
            "projectsNote": ["SOLUCIONES REALES", "FRONTEND · BACKEND · PRODUCTO"],
            "deploymentsEyebrow": "03 / ENTORNOS PUBLICADOS",
            "deploymentsTitleLines": ["Del código", "a producción."],
            "stackEyebrow": "04 / HERRAMIENTAS",
            "stackTitleLines": ["Mi entorno", "de desarrollo."],
            "contactEyebrow": "05 / CONTACTO",
            "contactTitleLines": ["¿Desarrollamos", "algo interesante?"],
            "contactDescription": "Si tenés una idea, un producto para mejorar o un desafío técnico, podemos conversar.",
            "footerLabel": "DESARROLLO FULL STACK",
        },
        "business": {
            "eyebrow": "TECNOLOGÍA CON SENTIDO",
            "title": "Simplificamos procesos. Potenciamos",
            "accent": "tus resultados.",
            "description": "Desarrollo sistemas, páginas web y automatizaciones para ayudarte a organizar tu negocio, simplificar tareas y aprovechar mejor tu tiempo.",
            "portraitLabel": "UNA SOLUCIÓN PENSADA PARA VOS",
            "productivityTitle": "Más tiempo",
            "productivityDescription": "Menos tareas repetitivas",
            "organizationTitle": "Más organización",
            "organizationDescription": "Información centralizada",
            "manifestoNumber": "01 / EL PUNTO DE PARTIDA",
            "manifestoText": "No hace falta saber de programación para mejorar la forma en que trabajás.",
            "manifestoDetail": "EMPEZAMOS POR LO QUE NECESITÁS RESOLVER.",
            "solutionsEyebrow": "02 / POSIBILIDADES",
            "solutionsTitle": "¿Qué te gustaría",
            "solutionsAccent": "hacer más fácil?",
            "solutionsDescription": "Cada proyecto empieza con una necesidad concreta. Estas son algunas de las formas en que puedo ayudarte.",
            "solutions": [
                {
                    "title": "Organizar tu negocio",
                    "description": "Sistemas para gestionar ventas, pedidos, productos, clientes y movimientos desde un mismo lugar.",
                    "message": "Hola Mauricio, estoy buscando una solución digital para organizar mi negocio y gestionar mis ventas, pedidos, productos y clientes desde un mismo lugar. Me gustaría conocer tus servicios.",
                },
                {
                    "title": "Tener presencia en internet",
                    "description": "Páginas web para presentar tus servicios, mostrar tus productos y facilitar el contacto con clientes.",
                    "message": "Hola Mauricio, me gustaría tener presencia en internet y contar con una página web para mostrar mis servicios o productos y facilitar el contacto con mis clientes. Quisiera conocer las opciones que ofrecés.",
                },
                {
                    "title": "Ahorrar tiempo",
                    "description": "Automatizaciones para reducir tareas repetitivas y evitar tener que hacer todo manualmente.",
                    "message": "Hola Mauricio, quiero optimizar mi negocio y ahorrar tiempo mediante la automatización de tareas repetitivas. Me gustaría conocer qué soluciones digitales podríamos implementar.",
                },
                {
                    "title": "Mejorar algo que ya existe",
                    "description": "Revisar un sistema, simplificar su uso o agregar funcionalidades que realmente necesites.",
                    "message": "Hola Mauricio, tengo un sistema o proyecto digital que me gustaría mejorar. Quiero simplificar su uso, corregir aspectos que podrían funcionar mejor o incorporar nuevas funcionalidades.",
                },
            ],
            "processEyebrow": "03 / CÓMO TRABAJAMOS",
            "processTitleLines": ["Una idea.", "Un plan.", "Una solución."],
            "processSteps": [
                {
                    "title": "Te escucho",
                    "description": "Me contás qué necesitás, qué te complica y qué te gustaría mejorar.",
                },
                {
                    "title": "Buscamos el camino",
                    "description": "Definimos una solución realista, entendible y adaptada a tus necesidades.",
                },
                {
                    "title": "La desarrollamos",
                    "description": "Trabajamos para convertir la propuesta en una herramienta útil para tu día a día.",
                },
            ],
            "contactEyebrow": "04 / TU PRÓXIMO PASO",
            "contactTitleLines": ["Contame qué", "querés mejorar."],
            "contactDescription": "No necesitás llegar con una solución definida. Podemos empezar por conversar sobre tu idea.",
            "footerCaption": "DESARROLLO DIGITAL · ARGENTINA",
        },
        "featuredProjects": [
            {
                "key": "system-manage-print",
                "title": "System Manage Print",
                "type": "Aplicación web + agente de escritorio",
                "description": "Ecosistema para gestionar impresiones desde una aplicación web, conectando frontend, backend y un agente local para impresoras térmicas.",
                "details": "El sistema conecta una aplicación web con un agente instalado en Windows mediante WebSocket, permitiendo enviar trabajos de impresión de forma local y mantener el proceso controlado desde la interfaz.",
                "technologies": ["React", "TypeScript", "WebSocket", "Windows Service"],
            },
            {
                "key": "api-boutique-sabores",
                "title": "Boutique de Sabores",
                "type": "Sistema de gestión comercial",
                "description": "Plataforma full stack para productos, pedidos, stock, caja, movimientos, autenticación y operación diaria de un negocio.",
                "details": "Incluye gestión de productos, pedidos, movimientos de stock, caja, promociones y autenticación con roles. El frontend consume una API REST desarrollada con FastAPI y MongoDB.",
                "technologies": ["React", "FastAPI", "Python", "MongoDB"],
            },
            {
                "key": "tesina-tatu-carreta",
                "title": "Tatú Carreta",
                "type": "Sistema de escritorio",
                "description": "Sistema de gestión desarrollado para centralizar entradas, movimientos y administración mediante una interfaz JavaFX conectada a SQLite.",
                "details": "Aplicación de escritorio desarrollada en JavaFX con persistencia SQLite, enfocada en administrar entradas, movimientos y diferentes estados dentro del sistema.",
                "technologies": ["Java", "JavaFX", "SQLite", "Maven"],
            },
            {
                "key": "setsu",
                "title": "Setsu",
                "type": "Sistema de ventas",
                "description": "Plataforma web de venta de sushi con catálogo interactivo, carrito de compra y generación de pedidos directos por WhatsApp.",
                "details": "Sistema de ventas desarrollado para una propuesta gastronómica de sushi. Permite explorar el menú, seleccionar productos, gestionar el pedido y finalizar la compra mediante una redirección directa a WhatsApp con el detalle completo del pedido.",
                "technologies": ["React", "TypeScript", "JavaScript", "WhatsApp"],
            },
        ],
        "technologyGroups": [
            {"label": "Frontend", "items": ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Vite"]},
            {"label": "Backend", "items": ["Python", "FastAPI", "Node.js", "REST APIs", "WebSocket"]},
            {"label": "Data & Tools", "items": ["MongoDB", "SQLite", "Git", "GitHub", "Vercel", "Postman"]},
            {"label": "Desktop", "items": ["Java", "JavaFX", "Maven", "Windows Services"]},
        ],
        "metrics": [
            {"value": "0", "label": "repositorios públicos"},
            {"value": "4", "label": "proyectos destacados"},
            {"value": "0", "label": "deployments publicados"},
            {"value": "∞", "label": "ganas de seguir desarrollando"},
        ],
    }


@app.get("/api/github/repos")
async def github_repositories() -> list[dict[str, Any]]:
    headers = {
        "Accept": "application/vnd.github+json",
        "User-Agent": "mauricio-gomez-portfolio",
        "X-GitHub-Api-Version": "2026-03-10",
    }

    try:
        async with httpx.AsyncClient(timeout=12) as client:
            response = await client.get(
                f"https://api.github.com/users/{GITHUB_USER}/repos",
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
    except Exception as exc:
        print(f"ERROR GITHUB: {type(exc).__name__}: {exc}")

        raise HTTPException(
            status_code=502,
            detail=f"No se pudieron consultar los repositorios de GitHub: {exc}",
        )
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


@app.get("/api/vercel/deployments")
async def vercel_deployments() -> list[dict[str, Any]]:
    if not VERCEL_TOKEN:
            raise HTTPException(
                status_code=500,
                detail=(
                    "Falta configurar VERCEL_TOKEN. "
                    "Revisá el archivo .env del backend."
                ),
        )

    headers = {
        "Authorization": f"Bearer {VERCEL_TOKEN}",
        "User-Agent": "mauricio-portfolio",
    }

    team_params: dict[str, Any] = {}

    if VERCEL_TEAM_ID:
        team_params["teamId"] = VERCEL_TEAM_ID

    async with httpx.AsyncClient(timeout=15) as client:
        # ----------------------------------------------------
        # 1. Get Vercel projects
        # ----------------------------------------------------

        projects_response = await client.get(
            "https://api.vercel.com/v9/projects",
            headers=headers,
            params={
                **team_params,
                "limit": 100,
            },
        )

        projects_response.raise_for_status()

        projects_payload = projects_response.json()

        projects = projects_payload.get("projects", [])

        projects_map: dict[str, dict[str, Any]] = {}

        for project in projects:
            project_id = project.get("id")

            if not project_id:
                continue

            project_name = project.get(
                "name",
                "project",
            )

            # ------------------------------------------------
            # Production aliases
            # ------------------------------------------------

            targets = project.get("targets") or {}

            production_target = targets.get(
                "production"
            ) or {}

            production_aliases = production_target.get(
                "alias",
                [],
            )

            if not isinstance(production_aliases, list):
                production_aliases = []

            # ------------------------------------------------
            # Fallback to project aliases
            # ------------------------------------------------

            if not production_aliases:
                project_aliases = project.get(
                    "alias",
                    [],
                )

                if isinstance(project_aliases, list):
                    production_aliases = project_aliases

            production_domain = None

            for alias in production_aliases:
                if not isinstance(alias, str):
                    continue

                if alias.endswith(".vercel.app"):
                    production_domain = alias
                    break

            # If no vercel.app alias was found,
            # use the first available production alias.

            if not production_domain and production_aliases:
                first_alias = production_aliases[0]

                if isinstance(first_alias, str):
                    production_domain = first_alias

            projects_map[project_id] = {
                "name": project_name,
                "production_domain": production_domain,
            }

        # ----------------------------------------------------
        # 2. Get deployments
        # ----------------------------------------------------

        deployments_response = await client.get(
            "https://api.vercel.com/v6/deployments",
            headers=headers,
            params={
                **team_params,
                "limit": 100,
            },
        )

        deployments_response.raise_for_status()

        deployments_payload = deployments_response.json()

    # --------------------------------------------------------
    # 3. Keep latest production deployment per project
    # --------------------------------------------------------

    latest_by_project: dict[str, dict[str, Any]] = {}

    for item in deployments_payload.get(
        "deployments",
        [],
    ):
        deployment_url = item.get("url")

        if not deployment_url:
            continue

        # ----------------------------------------------------
        # Only production deployments
        # ----------------------------------------------------

        if item.get("target") != "production":
            continue

        project_id = item.get("projectId")

        project_info = projects_map.get(
            project_id,
            {},
        )

        project_name = (
            project_info.get("name")
            or item.get("name")
            or "deployment"
        )

        production_domain = project_info.get(
            "production_domain"
        )

        # ----------------------------------------------------
        # Public production URL
        # ----------------------------------------------------

        if production_domain:
            public_url = (
                f"https://{production_domain}"
            )
        else:
            # Fallback only if Vercel did not provide
            # a production alias.
            public_url = (
                f"https://{deployment_url}"
            )

        # ----------------------------------------------------
        # Thumbnail
        # ----------------------------------------------------

        thumbnail_url = (
    "https://api.microlink.io/"
    f"?url={quote(public_url, safe='')}"
    "&screenshot=true"
    "&meta=false"
    "&embed=screenshot.url"
    "&viewport.width=1200"
    "&viewport.height=630"
)

        # ----------------------------------------------------
        # Creation date
        # ----------------------------------------------------

        created = item.get("createdAt")

        if isinstance(created, int):
            created = datetime.fromtimestamp(
                created / 1000
            ).isoformat()

        deployment = {
            "uid": item.get(
                "uid",
                "",
            ),
            "name": project_name,
            "url": public_url,
            "thumbnail": thumbnail_url,
            "state": item.get(
                "state",
                "UNKNOWN",
            ),
            "createdAt": created or "",
            "target": item.get(
                "target"
            ),
        }

        # ----------------------------------------------------
        # Keep newest deployment
        # ----------------------------------------------------

        existing = latest_by_project.get(
            project_name
        )

        if existing is None:
            latest_by_project[
                project_name
            ] = deployment
            continue

        existing_date = existing.get(
            "createdAt",
            "",
        )

        current_date = deployment.get(
            "createdAt",
            "",
        )

        if current_date > existing_date:
            latest_by_project[
                project_name
            ] = deployment

    # --------------------------------------------------------
    # 4. Final list
    # --------------------------------------------------------

    deployments = list(
        latest_by_project.values()
    )

    deployments.sort(
        key=lambda item: item.get(
            "createdAt",
            "",
        ),
        reverse=True,
    )

    return deployments

@app.get("/api/render/deployments")
async def render_deployments() -> list[dict[str, Any]]:
    """Devuelve los servicios de Render para mostrarlos en el portfolio.

    Render pagina los resultados mediante cursores; se recorren todas las
    páginas para no limitar la respuesta a los primeros 100 servicios.
    """
    if not RENDER_API_KEY:
        raise HTTPException(
            status_code=500,
            detail=(
                "Falta configurar RENDER_API_KEY. "
                "Agregá la variable en el archivo .env local y en las variables "
                "de entorno del servicio backend en Render."
            ),
        )

    headers = {
        "Authorization": f"Bearer {RENDER_API_KEY}",
        "Accept": "application/json",
        "User-Agent": "mauricio-gomez-portfolio",
    }

    services: list[dict[str, Any]] = []
    cursor: str | None = None

    try:
        async with httpx.AsyncClient(timeout=20) as client:
            while True:
                params: dict[str, Any] = {
                    "limit": 100,
                    # Los previews no son deployments principales del portfolio.
                    "includePreviews": "false",
                }
                if cursor:
                    params["cursor"] = cursor

                response = await client.get(
                    "https://api.render.com/v1/services",
                    headers=headers,
                    params=params,
                )
                response.raise_for_status()
                page = response.json()

                if not isinstance(page, list):
                    raise ValueError("La API de Render devolvió un formato inesperado.")

                for entry in page:
                    if not isinstance(entry, dict):
                        continue

                    service = entry.get("service", entry)
                    if not isinstance(service, dict):
                        continue

                    service_id = service.get("id")
                    service_name = service.get("name") or service.get("slug") or "Render service"
                    service_type = service.get("type") or "unknown"
                    service_url = service.get("url")

                    # Los servicios privados, workers y cron jobs no tienen
                    # necesariamente una URL pública para abrir desde el portfolio.
                    if isinstance(service_url, str) and service_url and not service_url.startswith(("http://", "https://")):
                        service_url = f"https://{service_url}"

                    suspended = service.get("suspended")
                    if suspended == "suspended":
                        state = "SUSPENDED"
                    elif suspended == "not_suspended":
                        state = "ACTIVE"
                    else:
                        state = "UNKNOWN"

                    created_at = service.get("createdAt") or ""
                    thumbnail_url = None
                    if service_url and service_type in ("web_service", "static_site"):
                        thumbnail_url = (
                            "https://api.microlink.io/"
                            f"?url={quote(service_url, safe='')}"
                            "&screenshot=true&meta=false&embed=screenshot.url"
                            "&viewport.width=1200&viewport.height=630"
                        )

                    services.append({
                        "uid": service_id or service.get("slug", ""),
                        "id": service_id or "",
                        "name": service_name,
                        "url": service_url,
                        "thumbnail": thumbnail_url,
                        "state": state,
                        "createdAt": created_at,
                        "target": "production",
                        "provider": "render",
                        "type": service_type,
                        "repo": service.get("repo"),
                        "branch": service.get("branch"),
                    })

                # Cada entrada de Render contiene su propio cursor. El último
                # cursor permite solicitar la siguiente página.
                if len(page) < 100:
                    break

                next_cursor = page[-1].get("cursor") if page and isinstance(page[-1], dict) else None
                if not next_cursor or next_cursor == cursor:
                    break
                cursor = next_cursor

    except httpx.HTTPStatusError as exc:
        status_code = exc.response.status_code
        print(f"ERROR RENDER API: HTTP {status_code}: {exc}")
        if status_code in (401, 403):
            detail = (
                "Render rechazó RENDER_API_KEY. Verificá que la clave sea válida "
                "y que pertenezca a tu cuenta."
            )
        else:
            detail = f"No se pudieron consultar los servicios de Render (HTTP {status_code})."
        raise HTTPException(status_code=502, detail=detail) from exc
    except httpx.HTTPError as exc:
        print(f"ERROR RENDER API: {type(exc).__name__}: {exc}")
        raise HTTPException(
            status_code=502,
            detail="No se pudo establecer conexión con la API de Render.",
        ) from exc
    except (ValueError, TypeError) as exc:
        print(f"ERROR RENDER API RESPONSE: {type(exc).__name__}: {exc}")
        raise HTTPException(
            status_code=502,
            detail="La API de Render devolvió una respuesta inesperada.",
        ) from exc

    services.sort(key=lambda item: item.get("createdAt", ""), reverse=True)
    return services
