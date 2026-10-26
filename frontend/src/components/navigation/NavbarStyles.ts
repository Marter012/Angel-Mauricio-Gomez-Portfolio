import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";

type NavbarVariant = "home" | "technical" | "business";

/* =========================================
   ANIMACIONES
========================================= */

const appear = keyframes`
  from {
    opacity: 0;
    transform: translateY(-9px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const underlineIn = keyframes`
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
`;

/* =========================================
   TEMAS
========================================= */

const petroleumTheme = css`
  --navbar-bg: var(--app-primary, #123f3d);
  --navbar-fg: var(--app-canvas, #f3eadb);

  --navbar-muted: color-mix(
    in srgb,
    var(--app-canvas, #f3eadb) 70%,
    transparent
  );

  --navbar-accent: var(--app-accent, #c18a50);

  --navbar-border: color-mix(
    in srgb,
    var(--app-canvas, #f3eadb) 17%,
    transparent
  );
`;

const businessTheme = css`
  --navbar-bg: #F3EADB;
  --navbar-fg: var(--app-primary, #123f3d);

  --navbar-muted: color-mix(
    in srgb,
    var(--app-primary, #123f3d) 68%,
    transparent
  );

  --navbar-accent: var(--app-accent, #b7834e);

  --navbar-border: color-mix(
    in srgb,
    var(--app-primary, #123f3d) 18%,
    transparent
  );
`;

/* =========================================
   CONTENEDOR PRINCIPAL
========================================= */

export const NavbarRoot = styled.nav<{
  $variant: NavbarVariant;
}>`
  ${({ $variant }) =>
    $variant === "business"
      ? businessTheme
      : petroleumTheme}

  position: fixed;
  z-index: 1000;

  inset: 0 0 auto;

  width: 100%;
  height: 100px;

  color: var(--navbar-fg);

  background: color-mix(
    in srgb,
    var(--navbar-bg) 94%,
    transparent
  );

  border-bottom: 1px solid var(--navbar-border);

  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  animation: ${appear} 480ms cubic-bezier(0.2, 0.75, 0.25, 1)
    both;

  transition:
    background-color 240ms ease,
    color 240ms ease;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: none;
  }
`;

/* =========================================
   DISTRIBUCIÓN
========================================= */

export const NavbarInner = styled.div<{
  $variant: NavbarVariant;
}>`
  width: min(100% - 48px, 1730px);

  min-height: 94px;

  margin: 0 auto;

  display: grid;

  grid-template-columns: 1fr auto 1fr;

  align-items: center;

  gap: 24px;

  .navbar-right {
    justify-self: end;

    display: flex;

    align-items: center;

    gap: clamp(18px, 2vw, 34px);
  }

  @media (max-width: 1000px) {
    width: calc(100% - 36px);

    gap: 16px;
  }

  @media (max-width: 760px) {
    width: calc(100% - 32px);

    min-height: 76px;

    grid-template-columns: auto 1fr;

    gap: 12px;

    .navbar-right {
      display: none;
    }
  }
`;

/* =========================================
   VOLVER AL INICIO
========================================= */

export const HomeLink = styled(Link)`
  display: inline-flex;

  align-items: center;

  justify-self: start;

  gap: 12px;

  width: fit-content;

  color: var(--navbar-muted);

  text-decoration: none;

  font-size: 0.78rem;

  font-weight: 500;

  letter-spacing: 0.09em;

  text-transform: uppercase;

  white-space: nowrap;

  transition:
    color 220ms ease,
    gap 220ms ease;

  svg {
    color: var(--navbar-accent);

    flex-shrink: 0;

    transition: transform 220ms ease;
  }

  &:hover {
    color: var(--navbar-fg);

    gap: 16px;

    svg {
      transform: translateX(-3px);
    }
  }

  &:focus-visible {
    outline: 2px solid var(--navbar-accent);

    outline-offset: 5px;
  }

  @media (max-width: 900px) {
    font-size: 0.7rem;

    letter-spacing: 0.04em;

    gap: 8px;
  }

  @media (max-width: 760px) {
    grid-column: 1;
    grid-row: 1;
  }
`;

/* =========================================
   MARCA CENTRAL
========================================= */

export const Brand = styled(Link)<{
  $centered?: boolean;
}>`
  position: relative;

  justify-self: center;

  display: inline-flex;

  align-items: baseline;

  justify-content: center;

  gap: 7px;

  color: var(--navbar-fg);

  text-decoration: none;

  white-space: nowrap;

  font-size: 0.82rem;

  letter-spacing: 0.09em;

  animation: ${appear} 650ms 70ms both;

  strong {
    font-weight: 800;
  }

  span {
    color: var(--navbar-muted);

    font-weight: 500;
  }

  &::after {
    content: "";

    position: absolute;

    left: 0;
    right: 0;
    bottom: -9px;

    height: 1px;

    background: var(--navbar-accent);

    transform: scaleX(0);

    transform-origin: center;
  }

  &:hover::after {
    animation: ${underlineIn} 260ms ease forwards;
  }

  @media (max-width: 1000px) {
    font-size: 0.72rem;

    letter-spacing: 0.04em;

    gap: 5px;
  }

  @media (max-width: 760px) {
    grid-column: 2;
    grid-row: 1;

    justify-self: end;

    align-items: flex-end;

    flex-direction: column;

    white-space: normal;

    text-align: right;

    font-size: 0.67rem;

    gap: 3px;

    span {
      font-size: 0.56rem;
    }
  }
`;

/* =========================================
   HABLEMOS
========================================= */

export const ContactLink = styled.a`
  justify-self: end;

  display: inline-flex;

  align-items: center;

  gap: 13px;

  width: fit-content;

  color: var(--navbar-fg);

  text-decoration: none;

  font-size: 0.76rem;

  font-weight: 800;

  letter-spacing: 0.1em;

  text-transform: uppercase;

  white-space: nowrap;

  svg {
    color: var(--navbar-accent);

    transition: transform 220ms ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }

  &:focus-visible {
    outline: 2px solid var(--navbar-accent);

    outline-offset: 5px;
  }

  @media (max-width: 760px) {
    display: none;
  }
`;

/* =========================================
   DISPONIBILIDAD
========================================= */

export const Availability = styled.span`
  display: inline-flex;

  align-items: center;

  gap: 9px;

  color: var(--navbar-muted);

  font-size: 0.64rem;

  font-weight: 700;

  letter-spacing: 0.07em;

  text-transform: uppercase;

  white-space: nowrap;

  span {
    width: 7px;
    height: 7px;

    border-radius: 50%;

    background: #75bd8b;

    box-shadow: 0 0 0 4px
      color-mix(in srgb, #75bd8b 16%, transparent);
  }
`;

/* =========================================
   MENSAJES DEL PORTAL
========================================= */

export const HomeSideNotes = styled.div<{
  $side: "left" | "right";
}>`
  display: flex;

  flex-direction: column;

  gap: 8px;

  justify-self: ${({ $side }) =>
    $side === "left" ? "start" : "end"};

  align-items: ${({ $side }) =>
    $side === "left" ? "flex-start" : "flex-end"};

  @media (max-width: 760px) {
    display: none;
  }
`;

export const HomeSideNote = styled.span`
  color: var(--navbar-muted);

  font-size: 0.65rem;

  font-weight: 600;

  letter-spacing: 0.1em;

  text-transform: uppercase;

  transition:
    color 200ms ease,
    transform 200ms ease;

  &:hover {
    color: var(--navbar-fg);

    transform: translateY(-1px);
  }

  @media (max-width: 1000px) {
    font-size: 0.56rem;

    letter-spacing: 0.05em;
  }
`;

/* =========================================
   BOTÓN MÓVIL
========================================= */

export const MobileMenuToggle = styled.button`
  display: none;

  width: 40px;
  height: 40px;

  align-items: center;
  justify-content: center;

  border: 1px solid var(--navbar-border);

  background: transparent;

  color: var(--navbar-fg);

  font-size: 1rem;

  cursor: pointer;

  @media (max-width: 760px) {
    display: inline-flex;

    grid-column: 1;
    grid-row: 1;
  }
`;

/* =========================================
   MENÚ DESPLEGABLE MÓVIL
========================================= */

export const MobileActions = styled.div<{
  $open: boolean;
  $variant: NavbarVariant;
}>`
  display: none;

  @media (max-width: 760px) {
    display: ${({ $open }) =>
      $open ? "flex" : "none"};

    position: absolute;

    top: 100%;

    left: -16px;
    right: -16px;

    padding: 18px 20px 22px;

    flex-direction: column;

    align-items: flex-start;

    gap: 14px;

    background: var(--navbar-bg);

    border-bottom: 1px solid var(--navbar-border);

    box-shadow: 0 18px 30px rgb(0 0 0 / 12%);

    animation: ${appear} 220ms ease both;

    ${HomeLink},
    ${ContactLink} {
      display: inline-flex;

      color: var(--navbar-fg);

      font-size: 0.68rem;
    }

    ${HomeSideNote} {
      color: var(--navbar-muted);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;