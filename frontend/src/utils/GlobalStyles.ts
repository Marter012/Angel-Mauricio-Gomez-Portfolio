import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
/* ========================================
PALETA PRINCIPAL
======================================== */

--app-primary: #061715;
--app-primary-dark: #0B302E;
--app-primary-light: #1B514D;

--app-accent: #C49A63;
--app-accent-light: #D9B887;
--app-accent-dark: #A87B45;

--app-canvas: #F3EADB;
--app-canvas-light: #FAF6EE;
--app-canvas-dark: #E8DCC8;

/* ========================================
   TEXTOS
======================================== */

--app-ink: #F8F3E9;
--app-ink-muted: #C2C9BF;

--app-text-dark: #173B38;
--app-text-dark-muted: #61716A;

/* ========================================
   SUPERFICIES
======================================== */

--app-surface: #194744;
--app-surface-hover: #225650;
--app-surface-light: #EAE0CF;

/* ========================================
   BORDES Y SEPARADORES
======================================== */

--app-border: #42645D;
--app-border-light: #D8CBB5;
--app-border-strong: #789087;

/* ========================================
   ESTADOS
======================================== */

--app-success: #7FA58B;
--app-warning: #D8AE69;
--app-error: #B86E61;
--app-info: #91B8B2;

/* ========================================
   COLORES POR EXPERIENCIA
======================================== */

--portal-bg: var(--app-primary);
--portal-text: var(--app-ink);
--portal-muted: var(--app-ink-muted);
--portal-accent: var(--app-accent);

--technical-bg: var(--app-primary);
--technical-text: var(--app-ink);
--technical-muted: var(--app-ink-muted);
--technical-accent: var(--app-accent);

--business-bg: var(--app-canvas-light);
--business-text: var(--app-text-dark);
--business-muted: var(--app-text-dark-muted);
--business-accent: var(--app-accent-dark);

/* ========================================
   SISTEMA DE DISEÑO
======================================== */

--app-font-body: "Inter", "Segoe UI", sans-serif;
--app-font-display: "Georgia", "Times New Roman", serif;

--app-radius-sm: 8px;
--app-radius-md: 16px;
--app-radius-lg: 24px;
--app-radius-xl: 32px;

--app-container: 1440px;

--app-space-xs: 8px;
--app-space-sm: 16px;
--app-space-md: 24px;
--app-space-lg: 40px;
--app-space-xl: 64px;

--app-transition: 220ms ease;
--app-transition-slow: 500ms ease;

--app-navbar-height: 104px;

}

*,
*::before,
*::after {
box-sizing: border-box;
}

html {
min-width: 320px;
scroll-behavior: smooth;
scroll-padding-top: var(--app-navbar-height);
background: var(--app-primary);
-webkit-text-size-adjust: 100%;
}

body {
margin: 0;
min-width: 320px;
min-height: 100vh;
min-height: 100dvh;
width: 100%;
font-family: var(--app-font-body);
background: var(--app-primary);
color: var(--app-ink);
-webkit-font-smoothing: antialiased;
text-rendering: optimizeLegibility;
overflow-wrap: break-word;
}

body,
button,
input,
textarea,
select {
font-family: var(--app-font-body);
}

button,
input,
textarea,
select {
font-size: inherit;
}

button {
color: inherit;
-webkit-tap-highlight-color: transparent;
}

a {
color: inherit;
text-decoration: none;
}

img,
picture,
video,
canvas,
svg {
display: block;
max-width: 100%;
}

img {
height: auto;
}

#root {
width: 100%;
min-width: 0;
min-height: 100vh;
min-height: 100dvh;
}

button:focus-visible,
a:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
outline: 2px solid var(--app-accent);
outline-offset: 4px;
}

::selection {
background: var(--app-accent);
color: var(--app-primary-dark);
}

@media (max-width: 768px) {
:root {
--app-navbar-height: 84px;
--app-space-lg: 28px;
--app-space-xl: 40px;
}

html {
  scroll-padding-top: var(--app-navbar-height);
}

body {
  overflow-wrap: anywhere;
}

img,
video,
canvas {
  max-width: 100%;
}

}

@media (max-width: 480px) {
:root {
--app-space-xs: 6px;
--app-space-sm: 12px;
--app-space-md: 18px;
--app-space-lg: 24px;
--app-space-xl: 32px;
}
}

@media (prefers-reduced-motion: reduce) {
*,
*::before,
*::after {
scroll-behavior: auto !important;
animation-duration: 0.01ms !important;
animation-iteration-count: 1 !important;
transition-duration: 0.01ms !important;
}
}
`;

export default GlobalStyles;

/* ========================================
LÍNEA DIVISORIA COMPARTIDA
======================================== */

export const Line = styled.hr`
display: block;
width: 100%;
max-width: 100%;
min-width: 0;
border: none;
border-top: 1px solid var(--app-border);
margin: 16px 0;
flex-shrink: 1;

@media (max-width: 480px) {
margin: 12px 0;
}
`;
