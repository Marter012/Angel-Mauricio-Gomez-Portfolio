<div align="center">

Angel Mauricio Gomez · Portfolio

Portfolio profesional Full Stack con frontend React y API REST en FastAPI.







Español

</div>

📌 Descripción

Portfolio personal dividido en dos aplicaciones coordinadas:

Frontend: experiencia visual e interactiva desarrollada con React, TypeScript, Vite y styled-components.

Backend: API REST con FastAPI que centraliza el contenido del portfolio y consulta datos de GitHub, Vercel y Render.

La separación permite mantener la presentación desacoplada de las integraciones externas y evita exponer tokens privados en el navegador.

🧱 Arquitectura e integración

flowchart LR
    U[Visitante] --> FE[Frontend React + TypeScript]
    FE -->|HTTP / JSON| API[Backend FastAPI]
    API -->|Repositorios| GH[GitHub API]
    API -->|Deployments| VE[Vercel API]
    API -->|Servicios| RE[Render API]
    API -->|Contenido del portfolio| DATA[Configuración editorial]
    GH --> API
    VE --> API
    RE --> API
    DATA --> API
    API --> FE

El frontend consume el backend mediante VITE_API_URL. Las credenciales de GitHub, Vercel y Render se configuran únicamente en el entorno del backend.

🔌 Endpoints principales

Método

Endpoint

Descripción

GET

/api/health

Comprueba que la API esté disponible.

GET

/api/portfolio

Devuelve el perfil, textos, enlaces, proyectos destacados, tecnologías y contenido de las experiencias.

GET

/api/github/repos

Obtiene repositorios propios de GitHub.

GET

/api/vercel/deployments

Obtiene deployments de producción de Vercel.

GET

/api/render/deployments

Obtiene servicios de Render, con paginación de resultados.

Los endpoints de proveedores externos requieren que sus credenciales estén configuradas. Si una integración no está configurada o el proveedor responde con un error, revisá los logs del backend.

🗂️ Estructura sugerida

repository/
├── README.md
├── frontend/
│   ├── README.md
│   ├── package.json
│   └── src/
└── backend/
    ├── README.md
    ├── requirements.txt
    └── app/
        └── main.py

Si tus carpetas tienen otros nombres, conservá tu estructura real y ubicá cada README en la raíz de la carpeta correspondiente.

🚀 Puesta en marcha local

1. Iniciar el backend

Entrá en la carpeta del backend, creá y activá un entorno virtual e instalá las dependencias:

python -m venv .venv

Windows (PowerShell):

.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt

macOS / Linux:

source .venv/bin/activate
pip install -r requirements.txt

Configurá las variables de entorno del backend y ejecutá:

uvicorn app.main:app --reload --host 0.0.0.0 --port 8001

La ruta app.main:app corresponde a app/main.py con una instancia FastAPI llamada app. Si tu archivo está en otra ubicación, ajustá el comando a tu estructura.

2. Iniciar el frontend

Entrá en la carpeta del frontend:

npm install

Creá un archivo .env a partir de .env.example y configurá la URL de la API:

VITE_API_URL=http://localhost:8001

Luego iniciá Vite:

npm run dev

3. Verificar la integración

Con el backend activo, abrí estas rutas en el navegador:

http://localhost:8001/api/health

http://localhost:8001/api/portfolio

http://localhost:8001/api/github/repos

http://localhost:8001/api/vercel/deployments

http://localhost:8001/api/render/deployments

Las últimas tres rutas dependen de la configuración de sus respectivas credenciales.

🔐 Variables de entorno

Backend — configurá estos valores en un archivo .env local y en el panel de variables de entorno del hosting:

Variable

Obligatoria

Uso

GITHUB_USER

No

Usuario de GitHub; por defecto se utiliza Marter012.

VERCEL_TOKEN

Sí para Vercel

Token privado para consultar proyectos y deployments.

VERCEL_TEAM_ID

No

Identificador de equipo de Vercel, si corresponde.

RENDER_API_KEY

Sí para Render

API key privada para consultar los servicios de Render.

ALLOWED_ORIGINS

Recomendado en producción

Lista de orígenes del frontend permitidos por CORS, separados por comas.

Ejemplo de ALLOWED_ORIGINS:

ALLOWED_ORIGINS=http://localhost:5173,https://tu-frontend.vercel.app

Frontend:

Variable

Uso

VITE_API_URL

URL base del backend, sin agregar /api al final.

⚠️ Seguridad: nunca incluyas VERCEL_TOKEN ni RENDER_API_KEY en el frontend, en variables VITE_*, ni en el repositorio. El archivo .env no debe subirse a Git.

☁️ Despliegue

Frontend: puede desplegarse en Vercel u otro hosting estático compatible con Vite. Definí VITE_API_URL con la URL pública del backend.

Backend: puede desplegarse en Render u otro hosting compatible con aplicaciones Python ASGI. Configurá las variables privadas y permití el dominio del frontend en ALLOWED_ORIGINS.

Después de cambiar variables VITE_*, generá nuevamente el build del frontend.

🧪 Build del frontend

npm run build

Para probar localmente el resultado generado:

npm run preview

🛠️ Tecnologías

Capa

Tecnologías

Interfaz

React, TypeScript, Vite

Estilos

styled-components

Iconografía

React Icons

API

Python, FastAPI

Solicitudes HTTP externas

HTTPX

Integraciones

GitHub REST API, Vercel API, Render API

Configuración local

python-dotenv y variables de entorno

📄 Licencia

Agregá aquí la licencia que corresponda al repositorio. No se debe asumir una licencia de uso sin haberla elegido y agregado formalmente.

