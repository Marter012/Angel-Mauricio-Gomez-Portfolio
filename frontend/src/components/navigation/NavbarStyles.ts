import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";

type NavbarVariant = "home" | "technical" | "business";

const appear = keyframes`
  from { opacity: 0; transform: translateY(-9px); }
  to { opacity: 1; transform: translateY(0); }
`;

const underlineIn = keyframes`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`;

const petroleumTheme = css`
  --navbar-bg: var(--app-primary);
  --navbar-fg: var(--app-ink);
  --navbar-muted: color-mix(in srgb, var(--app-ink) 70%, transparent);
  --navbar-accent: var(--app-accent);
  --navbar-border: color-mix(in srgb, var(--app-ink) 17%, transparent);
`;

const businessTheme = css`
  --navbar-bg: var(--app-canvas-light);
  --navbar-fg: var(--app-text-dark);
  --navbar-muted: color-mix(in srgb, var(--app-text-dark) 68%, transparent);
  --navbar-accent: var(--app-accent-dark);
  --navbar-border: color-mix(in srgb, var(--app-text-dark) 18%, transparent);
`;

export const NavbarRoot = styled.nav<{ $variant: NavbarVariant }>`
  ${({ $variant }) => $variant === "business" ? businessTheme : petroleumTheme}
  position: fixed;
  z-index: 1100;
  inset: 0 0 auto;
  width: 100%;
  min-width: 0;
  min-height: var(--app-navbar-height);
  color: var(--navbar-fg);
  background: color-mix(in srgb, var(--navbar-bg) 94%, transparent);
  border-bottom: 1px solid var(--navbar-border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  animation: ${appear} 480ms cubic-bezier(.2,.75,.25,1) both;
  transition: background-color 240ms ease, color 240ms ease;

  @media (max-width: 760px) {
    min-height: 66px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: none;
  }
`;

export const NavbarInner = styled.div<{ $variant: NavbarVariant }>`
  position: relative;
  width: min(100% - 48px, 1730px);
  min-height: var(--app-navbar-height);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  align-items: center;
  gap: 24px;

  .navbar-right {
    justify-self: end;
    min-width: 0;
    display: flex;
    align-items: center;
    gap: clamp(12px, 2vw, 30px);
  }

  @media (max-width: 1000px) {
    width: calc(100% - 36px);
    gap: 14px;
  }

  @media (max-width: 760px) {
    width: calc(100% - 28px);
    min-height: 66px;
    grid-template-columns: 42px minmax(0, 1fr);
    gap: 10px;

    .navbar-right {
      display: none;
    }
  }

  @media (max-width: 360px) {
    width: calc(100% - 20px);
    gap: 8px;
  }
`;

export const HomeLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-self: start;
  gap: 10px;
  min-width: 0;
  color: var(--navbar-muted);
  text-decoration: none;
  font-size: .76rem;
  font-weight: 700;
  letter-spacing: .07em;
  text-transform: uppercase;
  white-space: normal;

  svg {
    color: var(--navbar-accent);
    flex: 0 0 auto;
    transition: transform 220ms ease;
  }

  &:hover { color: var(--navbar-fg); }
  &:hover svg { transform: translateX(-3px); }

  &:focus-visible {
    outline: 2px solid var(--navbar-accent);
    outline-offset: 5px;
  }

  @media (max-width: 900px) {
    font-size: .68rem;
    letter-spacing: .03em;
    gap: 7px;
  }

  /* Prevent overlap with the hamburger in the compact header.
     The menu copy remains visible inside MobileActions. */
  @media (max-width: 760px) {
    display: none;
    font-size: .62rem;
  }
`;

export const Brand = styled(Link)<{ $centered?: boolean }>`
  position: relative;
  justify-self: center;
  display: inline-flex;
  align-items: baseline;
  justify-content: center;
  gap: 6px;
  min-width: 0;
  color: var(--navbar-fg);
  text-decoration: none;
  white-space: normal;
  text-align: center;
  font-size: .82rem;
  letter-spacing: .06em;
  animation: ${appear} 650ms 70ms both;

  strong { font-weight: 800; overflow-wrap: anywhere; }
  span { color: var(--navbar-muted); font-weight: 500; }

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

  &:hover::after { animation: ${underlineIn} 260ms ease forwards; }

  @media (max-width: 1000px) {
    font-size: .72rem;
    letter-spacing: .03em;
    gap: 4px;
  }

  @media (max-width: 760px) {
    grid-column: 2;
    grid-row: 1;
    justify-self: end;
    align-items: flex-end;
    flex-direction: column;
    text-align: right;
    font-size: .67rem;
    gap: 3px;

    span { font-size: .56rem; }
  }

  @media (max-width: 360px) {
    font-size: .59rem;

    strong { max-width: 100%; }
    span { font-size: .51rem; letter-spacing: 0; }
  }
`;

export const ContactLink = styled.a`
  justify-self: end;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  color: var(--navbar-fg);
  text-decoration: none;
  font-size: .72rem;
  font-weight: 800;
  letter-spacing: .08em;
  text-transform: uppercase;
  white-space: nowrap;

  svg { color: var(--navbar-accent); transition: transform 220ms ease; }
  &:hover svg { transform: translateX(5px); }

  &:focus-visible {
    outline: 2px solid var(--navbar-accent);
    outline-offset: 5px;
  }

  @media (max-width: 760px) { display: none; }
`;

export const Availability = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  min-width: 0;
  color: var(--navbar-muted);
  font-size: .62rem;
  font-weight: 700;
  letter-spacing: .05em;
  text-transform: uppercase;
  white-space: normal;

  span {
    width: 7px;
    height: 7px;
    flex: 0 0 auto;
    border-radius: 50%;
    background: var(--app-success);
    box-shadow: 0 0 0 4px color-mix(in srgb, var(--app-success) 16%, transparent);
  }
`;

export const HomeSideNotes = styled.div<{ $side: "left" | "right" }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
  justify-self: ${({ $side }) => $side === "left" ? "start" : "end"};
  align-items: ${({ $side }) => $side === "left" ? "flex-start" : "flex-end"};

  @media (max-width: 760px) { display: none; }
`;

export const HomeSideNote = styled.span`
  color: var(--navbar-muted);
  font-size: .65rem;
  font-weight: 600;
  letter-spacing: .08em;
  text-transform: uppercase;
  overflow-wrap: anywhere;
  transition: color 200ms ease, transform 200ms ease;

  &:hover { color: var(--navbar-fg); transform: translateY(-1px); }

  @media (max-width: 1000px) {
    font-size: .56rem;
    letter-spacing: .04em;
  }
`;

export const MobileMenuToggle = styled.button`
  display: none;
  width: 40px;
  height: 40px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--navbar-border);
  border-radius: 0;
  background: transparent;
  color: var(--navbar-fg);
  font-size: 1rem;
  cursor: pointer;
  touch-action: manipulation;

  &:focus-visible {
    outline: 2px solid var(--navbar-accent);
    outline-offset: 3px;
  }

  @media (max-width: 760px) {
    display: inline-flex;
    grid-column: 1;
    grid-row: 1;
    justify-self: start;
    position: relative;
    z-index: 2;
  }
`;

export const MobileActions = styled.div<{ $open: boolean; $variant: NavbarVariant }>`
  display: none;

  @media (max-width: 760px) {
    display: ${({ $open }) => $open ? "flex" : "none"};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 1101;
    max-height: calc(100dvh - 66px);
    overflow-x: hidden;
    overflow-y: auto;
    overscroll-behavior: contain;
    padding: 18px 20px max(22px, env(safe-area-inset-bottom));
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
    background: var(--navbar-bg);
    border-bottom: 1px solid var(--navbar-border);
    box-shadow: 0 18px 30px rgb(0 0 0 / 12%);
    animation: ${appear} 220ms ease both;

    ${HomeLink}, ${ContactLink} {
      display: inline-flex;
      color: var(--navbar-fg);
      font-size: .68rem;
    }

    ${HomeSideNote} { color: var(--navbar-muted); }
    ${Availability} { color: var(--navbar-muted); }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
