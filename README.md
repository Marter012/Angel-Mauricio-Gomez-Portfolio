::: {align="center"}

🚀 ANGEL MAURICIO GOMEZ · PORTFOLIO

Portfolio profesional Full Stack

Frontend con React y TypeScript · API REST con Python y FastAPI

<p>

<img src="https://img.shields.io/badge/React-2026-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">{=html}
<img src="https://img.shields.io/badge/TypeScript-Frontend-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">{=html}
<img src="https://img.shields.io/badge/FastAPI-Backend-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI">{=html}
<img src="https://img.shields.io/badge/Vite-Build-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">{=html}

</p>

Español · English ·
Arquitectura · Instalación
:::

🇦🇷 Español

📌 Descripción

Portfolio personal organizado en dos aplicaciones coordinadas: un
frontend interactivo y un backend API REST. Centraliza la
información del portfolio y consulta datos de servicios externos para
presentar proyectos, repositorios y deployments en una interfaz moderna
y adaptable.

✨ Características

🖥️ Frontend responsive: experiencia visual construida con React,
TypeScript, Vite y styled-components.

⚙️ API centralizada: backend desarrollado con Python y FastAPI.

🐙 GitHub: consulta información de repositorios.

▲ Vercel: integración para consultar deployments.

🚀 Render: integración para consultar servicios y deployments.

🔐 Separación de credenciales: los tokens de servicios externos
permanecen en el backend.

🧩 Arquitectura modular: presentación e integraciones externas
separadas.

🧱 Arquitectura

flowchart TD
    U[Visitante] --> FE[Frontend React + TypeScript]
    FE -->|HTTP / JSON| API[Backend FastAPI]
    API --> GH[GitHub API]
    API --> VE[Vercel API]
    API --> RE[Render API]
    API --> DATA[Contenido del portfolio]

El frontend obtiene la información mediante la API del backend. Las
credenciales de GitHub, Vercel y Render se configuran exclusivamente en
el entorno del backend.

🧰 Tecnologías

Capa            Tecnologías

Frontend        React, TypeScript, Vite, styled-components
Backend         Python, FastAPI
Integraciones   GitHub API, Vercel API, Render API
Comunicación    HTTP, REST, JSON

📂 Estructura del proyecto

portfolio/
├── FrontEnd/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── .env.example
├── BackEnd/
│   ├── app/
│   ├── requirements.txt
│   └── .env.example
└── README.md

Los nombres exactos de carpetas pueden variar según cómo estén
organizados los repositorios.

🚀 Instalación

1. Backend

Entrá en la carpeta del backend, creá un entorno virtual e instalá las
dependencias:

python -m venv .venv

En Windows:

.venv\Scripts\activate

Instalá las dependencias y ejecutá la API:

pip install -r requirements.txt
uvicorn app.main:app --reload

Configurá las variables de entorno del backend antes de iniciar el
servicio.

2. Frontend

Entrá en la carpeta del frontend e instalá las dependencias:

npm install

Creá un archivo .env con la URL base del backend:

VITE_API_URL=http://127.0.0.1:8000

Iniciá el servidor de desarrollo:

npm run dev

Importante: VITE_API_URL debe apuntar al backend y no incluir
/api al final si el código agrega ese prefijo en cada endpoint.

🔌 Endpoints principales

Método   Endpoint                    Propósito

GET    /api/health               Verificar el estado de la API
GET    /api/portfolio            Obtener el contenido del portfolio
GET    /api/github/repos         Consultar repositorios de GitHub
GET    /api/vercel/deployments   Consultar deployments de Vercel
GET    /api/render/deployments   Consultar deployments de Render

Los endpoints dependen de la configuración del backend y de la
disponibilidad de las APIs externas.

🔐 Variables de entorno

Backend --- configurar según las integraciones habilitadas:

GITHUB_USER=tu_usuario
VERCEL_TOKEN=tu_token_vercel
VERCEL_TEAM_ID=
RENDER_API_KEY=tu_api_key_render
ALLOWED_ORIGINS=http://localhost:5173

Frontend:

VITE_API_URL=http://127.0.0.1:8000

No subas archivos .env al repositorio.

No expongas tokens en variables VITE_*: estas variables pueden
quedar disponibles en el bundle del navegador.

En producción, configurá las URLs y los orígenes permitidos
correspondientes al despliegue.

📚 Documentación relacionada

BackEnd/README.md: instalación, configuración
y endpoints del backend.

FrontEnd/README.md: instalación y ejecución
del frontend.

🇬🇧 English

📌 Overview

A personal Full Stack portfolio built as two coordinated applications:
an interactive frontend and a REST API backend. It centralizes
portfolio content and retrieves data from external services to showcase
projects, repositories, and deployments through a modern, responsive
interface.

✨ Features

🖥️ Responsive frontend built with React, TypeScript, Vite, and
styled-components.

⚙️ Centralized REST API developed with Python and FastAPI.

🐙 GitHub repository integration.

▲ Vercel deployment integration.

🚀 Render service and deployment integration.

🔐 External API credentials kept on the backend.

🧩 Modular separation between presentation and external
integrations.

🧰 Tech stack

Layer           Technologies

Frontend        React, TypeScript, Vite, styled-components
Backend         Python, FastAPI
Integrations    GitHub API, Vercel API, Render API
Communication   HTTP, REST, JSON

🚀 Quick start

Install backend dependencies with pip install -r requirements.txt.

Configure the backend environment variables.

Run the API with uvicorn app.main:app --reload.

Install frontend dependencies with npm install.

Set VITE_API_URL to the backend base URL.

Run the frontend with npm run dev.

Keep API tokens on the backend and never commit .env files.

::: {align="center"}
Desarrollado por Angel Mauricio Gomez · Full Stack Developer
:::