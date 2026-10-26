<div align="center">

Portfolio API · Backend

API REST para centralizar el contenido del portfolio e integrar GitHub, Vercel y Render.





</div>

📌 Descripción

Backend del portfolio de Mauricio Gómez. Expone endpoints HTTP que entregan contenido del portfolio y consultan las APIs de GitHub, Vercel y Render. Las credenciales se mantienen en el entorno del servidor.

🧰 Tecnologías

Python — lenguaje del backend.

FastAPI — framework para endpoints REST.

HTTPX — solicitudes HTTP asíncronas a servicios externos.

python-dotenv — carga de variables desde .env en desarrollo.

CORS middleware — control de los orígenes que pueden consumir la API.

🔌 Endpoints

Método

Ruta

Descripción

GET

/api/health

Devuelve el estado básico de la API.

GET

/api/portfolio

Entrega el contenido editorial del portfolio.

GET

/api/github/repos

Consulta repositorios propios de GitHub.

GET

/api/vercel/deployments

Consulta deployments de producción de Vercel.

GET

/api/render/deployments

Consulta los servicios de Render y recorre sus páginas de resultados.

Respuesta de salud

{
  "status": "ok",
  "service": "Mauricio Gomez Portfolio API"
}

Los endpoints de integraciones devuelven JSON. La forma exacta de cada elemento depende de los campos normalizados por el endpoint correspondiente.

⚙️ Requisitos

Python 3.10 o una versión compatible con las dependencias del proyecto.

pip.

Tokens de proveedor para habilitar las integraciones de Vercel y Render.

Acceso de red a las APIs externas.

🚀 Instalación local

Desde la carpeta del backend:

1. Crear un entorno virtual

python -m venv .venv

Windows (PowerShell):

.\.venv\Scripts\Activate.ps1

macOS / Linux:

source .venv/bin/activate

2. Instalar dependencias

Si el proyecto contiene requirements.txt:

pip install -r requirements.txt

Si todavía no existe, instalá las dependencias utilizadas por la aplicación y guardalas en el archivo:

pip install fastapi "uvicorn[standard]" httpx python-dotenv
pip freeze > requirements.txt

3. Configurar variables de entorno

Creá un archivo .env en la raíz del backend:

GITHUB_USER=Marter012
VERCEL_TOKEN=replace_with_your_vercel_token
VERCEL_TEAM_ID=
RENDER_API_KEY=replace_with_your_render_api_key
ALLOWED_ORIGINS=http://localhost:5173,http://127.0.0.1:5173

Reemplazá los valores de ejemplo por tus credenciales reales. VERCEL_TEAM_ID puede quedar vacío si la cuenta no requiere un identificador de equipo.

Variable

Obligatoria

Descripción

GITHUB_USER

No

Usuario de GitHub consultado por la API. El valor predeterminado es Marter012.

VERCEL_TOKEN

Para consultar Vercel

Token de acceso privado de Vercel.

VERCEL_TEAM_ID

No

ID del equipo de Vercel, cuando corresponda.

RENDER_API_KEY

Para consultar Render

API key de Render con permisos adecuados para listar servicios.

ALLOWED_ORIGINS

Recomendado

Orígenes permitidos por CORS, separados por comas.

No subas .env al repositorio. Añadilo a .gitignore y cargá los mismos secretos en el panel del proveedor de hosting.

4. Ejecutar la API

Si el punto de entrada está en app/main.py y la instancia FastAPI se llama app:

uvicorn app.main:app --reload --host 0.0.0.0 --port 8001

Si la estructura del proyecto es diferente, adaptá app.main:app a la ubicación real del módulo.

La API local estará disponible en http://localhost:8001. La documentación interactiva de FastAPI estará en http://localhost:8001/docs.

🔗 Integraciones externas

GitHub

GET /api/github/repos obtiene repositorios del usuario configurado en GITHUB_USER. El backend devuelve información útil para la interfaz, como nombre, descripción, URL, lenguaje, estrellas, forks y fecha de actualización.

Vercel

GET /api/vercel/deployments consulta proyectos y deployments, priorizando las versiones de producción y resolviendo una URL pública cuando hay un alias disponible.

Variables necesarias:

VERCEL_TOKEN

VERCEL_TEAM_ID (opcional)

Render

GET /api/render/deployments consulta los servicios de Render usando RENDER_API_KEY y recorre los resultados paginados. La respuesta normaliza campos como nombre, URL, estado, fecha, proveedor, tipo de servicio y miniatura cuando corresponde.

Para crear una API key, ingresá a tu cuenta de Render y generala desde la sección de API keys de la configuración de la cuenta. Guardala como variable de entorno RENDER_API_KEY en el backend; no la uses en el frontend.

🌐 CORS

El backend utiliza ALLOWED_ORIGINS para determinar qué orígenes del navegador pueden acceder a la API. Separá los dominios con comas y agregá tanto el dominio de producción del frontend como los orígenes locales necesarios.

Ejemplo:

ALLOWED_ORIGINS=http://localhost:5173,https://tu-frontend.vercel.app

No habilites orígenes innecesarios en producción.

☁️ Despliegue en Render

Configuración típica para una aplicación FastAPI:

Root Directory: carpeta del backend, si está dentro de un monorepo.

Build Command: pip install -r requirements.txt

Start Command: uvicorn app.main:app --host 0.0.0.0 --port $PORT

Asegurate de que el comando coincida con la estructura real del proyecto. Cargá VERCEL_TOKEN, VERCEL_TEAM_ID, RENDER_API_KEY, GITHUB_USER y ALLOWED_ORIGINS en Environment del servicio según corresponda.

🧪 Verificación

Con el servidor en ejecución, comprobá:

GET http://localhost:8001/api/health
GET http://localhost:8001/api/portfolio
GET http://localhost:8001/api/github/repos
GET http://localhost:8001/api/vercel/deployments
GET http://localhost:8001/api/render/deployments

Si una integración falla, revisá la respuesta HTTP, los logs del servidor y la validez de la credencial correspondiente.

🔒 Seguridad

No devuelvas tokens en las respuestas de la API.

No guardes credenciales en el código fuente.

No uses variables VITE_* para secretos del backend.

Mantené .env fuera de Git.

Limitá los orígenes CORS a los dominios necesarios.

Aplicá permisos mínimos a las credenciales de proveedores.
