Portfolio · Frontend

Interfaz web interactiva del portfolio, conectada a una API REST propia.






</div>

📌 Descripción

Frontend del portfolio de Mauricio Gómez. Presenta las experiencias personal, comercial y técnica; consume el contenido del backend y muestra repositorios de GitHub y deployments de Vercel y Render.

🧰 Tecnologías

React 19 — construcción de la interfaz.

TypeScript — tipado estático.

Vite — servidor de desarrollo y build.

styled-components — estilos encapsulados por componente.

React Icons — iconografía.

React Router — soporte de navegación por rutas.

⚙️ Requisitos

Node.js y npm compatibles con la versión de Vite utilizada.

Backend iniciado localmente o desplegado en una URL accesible.

Variables de entorno de frontend configuradas.

🚀 Instalación local

1. Instalar dependencias

Desde la carpeta del frontend:

npm install

2. Configurar la API

Creá un archivo .env en la raíz del frontend. Podés tomar .env.example como referencia.

VITE_API_URL=http://localhost:8001

VITE_API_URL debe contener la URL base del backend, sin /api al final. En producción, reemplazá el valor local por la URL pública de la API.

Las variables con prefijo VITE_ se incorporan al bundle del navegador. Nunca coloques tokens privados de GitHub, Vercel o Render en este archivo.

3. Iniciar el servidor de desarrollo

npm run dev

Vite mostrará la URL local en la terminal; normalmente es http://localhost:5173.

🔌 Integración con el backend

El frontend utiliza la API para separar el contenido editorial de la interfaz y consultar los datos dinámicos de los proveedores.

Endpoint

Uso en la interfaz

GET /api/health

Comprobar disponibilidad de la API.

GET /api/portfolio

Perfil, textos, enlaces, proyectos destacados, tecnologías y contenido editorial.

GET /api/github/repos

Repositorios y enlaces al código.

GET /api/vercel/deployments

Aplicaciones publicadas en Vercel.

GET /api/render/deployments

Servicios de Render.

El frontend no debe comunicarse directamente con APIs de proveedores usando credenciales privadas. Esas solicitudes pertenecen al backend.

Flujo de datos

flowchart TD
    V[Visitante] --> UI[React UI]
    UI --> CFG[VITE_API_URL]
    CFG --> API[FastAPI backend]
    API --> P[Contenido del portfolio]
    API --> G[GitHub]
    API --> VE[Vercel]
    API --> R[Render]
    P --> API
    G --> API
    VE --> API
    R --> API
    API --> UI

🧭 Experiencias de la interfaz

Portal: punto de entrada para elegir una experiencia.

Business: presentación de servicios y soluciones para negocios.

Technical: proyectos, tecnologías, repositorios y deployments.

Navbar: navegación y accesos de contacto.

Los componentes visuales y sus estilos se mantienen en el frontend; el contenido editorial se obtiene de la API.

🖼️ Tarjetas de deployments

La interfaz puede mostrar una miniatura cuando el backend dispone de una URL de imagen. Cuando una imagen no está disponible o el servicio se identifica como API/backend, puede utilizar una ilustración descriptiva alternativa en lugar de dejar un espacio vacío.

La disponibilidad de capturas depende del tipo de servicio, de su URL pública y del proveedor de miniaturas.

🧪 Scripts disponibles

Comando

Descripción

npm run dev

Inicia Vite en modo desarrollo.

npm run build

Ejecuta la comprobación de TypeScript y genera el build de producción.

npm run preview

Sirve localmente el build generado para revisarlo.

Para generar y comprobar el build:

npm run build
npm run preview

☁️ Despliegue en Vercel

Importá el repositorio o conectá el proyecto en Vercel.

Configurá la carpeta raíz del frontend si está dentro de un monorepo.

Definí la variable VITE_API_URL con la URL pública del backend.

Ejecutá el despliegue.

Confirmá que el dominio del frontend esté incluido en ALLOWED_ORIGINS en el backend.

Cuando cambies una variable VITE_*, generá un nuevo build para que el valor quede incluido en la aplicación publicada.

🛠️ Resolución de problemas

Error de CORS

Verificá que el dominio exacto del frontend figure en ALLOWED_ORIGINS en el backend. Los cambios de CORS se aplican del lado del servidor.

No se muestran repositorios o deployments

Comprobá que los endpoints correspondientes respondan correctamente y revisá los logs del backend. Vercel y Render requieren sus respectivas credenciales configuradas en el servidor.

La API no responde en local

Verificá que FastAPI esté iniciado en el puerto configurado en VITE_API_URL y que la URL no contenga una ruta duplicada /api.

La imagen de un deployment no carga

El servicio puede no tener una captura disponible o puede ser una API/backend sin interfaz visual. La tarjeta debería mostrar una ilustración alternativa si ese fallback está implementado en la versión actual del frontend.

🔐 Seguridad

No agregues credenciales privadas a archivos del frontend.

No publiques .env.

Recordá que cualquier variable VITE_* puede ser visible en el navegador.

La comunicación con GitHub, Vercel y Render debe realizarse a través del backend.