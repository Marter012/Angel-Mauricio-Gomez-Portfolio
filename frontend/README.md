::: {align="center"}

💻 PORTFOLIO · FRONTEND

Interfaz web desarrollada con React y TypeScript

<p>

<img src="https://img.shields.io/badge/React-UI-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">{=html}
<img src="https://img.shields.io/badge/TypeScript-Typed-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">{=html}
<img src="https://img.shields.io/badge/Vite-Development-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">{=html}
<img src="https://img.shields.io/badge/styled--components-Styles-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white" alt="styled-components">{=html}

</p>

Descripción · Tecnologías ·
Instalación · Configuración
:::

📌 Descripción

Frontend del portfolio profesional de Angel Mauricio Gomez. Ofrece una
experiencia visual e interactiva para presentar el perfil, los proyectos
y la información técnica, consumiendo los datos mediante el backend
FastAPI.

✨ Características

🎨 Interfaz moderna y adaptable a distintos tamaños de pantalla.

⚛️ Componentes construidos con React.

🔷 Tipado estático mediante TypeScript.

⚡ Entorno de desarrollo y build con Vite.

💅 Estilos organizados con styled-components.

🔌 Comunicación con la API del portfolio.

🔒 Sin necesidad de guardar tokens privados de GitHub, Vercel o
Render en el navegador.

🧰 Tecnologías

Tecnología                         Uso

React                              Componentes e interfaz
TypeScript                         Tipado y mantenimiento del código
Vite                               Servidor de desarrollo y build
styled-components                  Estilos encapsulados en componentes
Fetch/Axios según implementación   Consumo de la API

🧱 Comunicación con el backend

flowchart LR
    USER[Visitante] --> FE[Frontend React]
    FE -->|VITE_API_URL + endpoints| API[Backend FastAPI]
    API --> DATA[Datos del portfolio]
    API --> GH[GitHub]
    API --> VE[Vercel]
    API --> RE[Render]
    DATA --> API
    GH --> API
    VE --> API
    RE --> API

El frontend debe comunicarse con el backend. Las credenciales de
servicios externos se mantienen del lado del servidor.

🚀 Instalación

Requisitos

Node.js compatible con las dependencias del proyecto.

npm.

Pasos

Instalá las dependencias:

npm install

Creá un archivo .env en la raíz del frontend:

VITE_API_URL=http://127.0.0.1:8000

Iniciá el entorno de desarrollo:

npm run dev

Vite mostrará en la terminal la dirección local para abrir la
aplicación.

⚙️ Configuración

VITE_API_URL debe contener la URL base del backend. Por ejemplo:

Entorno      Valor de ejemplo

Desarrollo   http://127.0.0.1:8000
Producción   URL HTTPS pública del backend

No agregues /api al final si los servicios del frontend ya incorporan
ese prefijo al construir las rutas. Evitá definir tokens privados en
variables VITE_*, porque se incluyen en el código accesible desde el
navegador.

📜 Scripts habituales

Los scripts disponibles dependen del package.json. En un proyecto Vite
suelen ser:

npm run dev
npm run build
npm run preview

dev: inicia el servidor de desarrollo.

build: genera la versión de producción.

preview: permite revisar localmente el build generado.

🔌 Endpoints consumidos

El frontend puede consultar las siguientes rutas del backend:

Método   Endpoint                    Uso

GET    /api/portfolio            Mostrar el contenido del portfolio
GET    /api/github/repos         Mostrar repositorios
GET    /api/vercel/deployments   Mostrar deployments de Vercel
GET    /api/render/deployments   Mostrar deployments de Render
GET    /api/health               Comprobar el estado del backend

La disponibilidad de cada sección depende de las rutas y los componentes
habilitados en la versión del proyecto.

☁️ Despliegue

Para publicar el frontend en Vercel u otro hosting estático:

Conectá el repositorio del frontend.

Configurá el comando de build definido por el proyecto, normalmente
npm run build.

Configurá VITE_API_URL con la URL pública HTTPS del backend.

Verificá que el backend permita el origen del frontend.

Probá las secciones que consultan GitHub, Vercel y Render.

🛠️ Solución de problemas

La API no responde: comprobá VITE_API_URL y que el backend
esté activo.

Error CORS: agregá el dominio del frontend a ALLOWED_ORIGINS
en el backend.

No aparecen deployments: revisá las credenciales y los logs del
backend.

Cambios en .env no aplicados: reiniciá el servidor de
desarrollo después de modificar variables.

::: {align="center"}
Portfolio Frontend · React + TypeScript
:::