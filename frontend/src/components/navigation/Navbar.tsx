import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";

import type { PortfolioData } from "../../types/portfolio";
import { ROUTE_PATHS } from "../../routes/route";

import {
  NavbarRoot,
  NavbarInner,
  HomeLink,
  Brand,
  ContactLink,
  Availability,
  HomeSideNote,
  HomeSideNotes,
  MobileMenuToggle,
  MobileActions,
} from "./NavbarStyles";

type NavbarVariant = "home" | "technical" | "business";

function getNavbarVariant(pathname: string): NavbarVariant {
  if (pathname.startsWith(ROUTE_PATHS.business)) {
    return "business";
  }

  if (pathname.startsWith(ROUTE_PATHS.technical)) {
    return "technical";
  }

  return "home";
}

type Props = { portfolio: PortfolioData | null };

export default function Navbar({ portfolio }: Props) {
  const { pathname } = useLocation();

  const variant = getNavbarVariant(pathname);
  const isHome = variant === "home";
  const isBusiness = variant === "business";

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const site = portfolio?.site;

  return (
    <NavbarRoot $variant={variant}>
      <NavbarInner $variant={variant}>
        {isHome ? (
          <>
            <HomeSideNotes $side="left">
              <HomeSideNote>Experiencias únicas</HomeSideNote>
              <HomeSideNote>Ideas con identidad</HomeSideNote>
            </HomeSideNotes>

            <Brand
              to={ROUTE_PATHS.home}
              onClick={closeMenu}
              $centered
              aria-label={`${site?.name ?? "Portfolio"}, inicio`}
            >
              <strong>{site?.name ?? "PORTFOLIO"}</strong>
              <span>· {site?.role ?? "SOLUCIONES DIGITALES"}</span>
            </Brand>

            <HomeSideNotes $side="right">
              <HomeSideNote>Trabajos personalizados</HomeSideNote>
              <HomeSideNote>Diseño · Desarrollo · Tecnología</HomeSideNote>
            </HomeSideNotes>

            <MobileMenuToggle
              className={isHome ? "active" : ""}
              type="button"
              aria-label={
                menuOpen ? "Cerrar información" : "Mostrar información"
              }
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </MobileMenuToggle>

            <MobileActions $open={menuOpen} $variant={variant}>
              <HomeSideNote>Experiencias únicas</HomeSideNote>
              <HomeSideNote>Ideas con identidad</HomeSideNote>
              <HomeSideNote>Trabajos personalizados</HomeSideNote>
              <HomeSideNote>Diseño · Desarrollo · Tecnología</HomeSideNote>
            </MobileActions>
          </>
        ) : (
          <>
            <HomeLink to={ROUTE_PATHS.home} onClick={closeMenu}>
              <FaArrowLeft aria-hidden="true" />
              <span>Volver al inicio</span>
            </HomeLink>

            <Brand
              to={ROUTE_PATHS.home}
              onClick={closeMenu}
              aria-label={`${site?.name ?? "Portfolio"}, inicio`}
            >
              <strong>{site?.name ?? "PORTFOLIO"}</strong>
              <span>· {site?.role ?? "SOLUCIONES DIGITALES"}</span>
            </Brand>

            <div className="navbar-right">
              {!isBusiness && (
                <Availability>
                  <span />
                  Disponible para proyectos
                </Availability>
              )}

              <ContactLink
                href={site?.email ? `mailto:${site.email}` : ROUTE_PATHS.home}
              >
                <span>Hablemos</span>
                <FaArrowRight aria-hidden="true" />
              </ContactLink>
            </div>

            <MobileMenuToggle
              type="button"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </MobileMenuToggle>

            <MobileActions $open={menuOpen} $variant={variant}>
              <HomeLink to={ROUTE_PATHS.home} onClick={closeMenu}>
                <FaArrowLeft aria-hidden="true" />
                <span>Volver al inicio</span>
              </HomeLink>

              {!isBusiness && (
                <Availability>
                  <span />
                  Disponible para proyectos
                </Availability>
              )}

              <ContactLink
                href={site?.email ? `mailto:${site.email}` : ROUTE_PATHS.home}
                onClick={closeMenu}
              >
                <span>Hablemos</span>
                <FaArrowRight aria-hidden="true" />
              </ContactLink>
            </MobileActions>
          </>
        )}
      </NavbarInner>
    </NavbarRoot>
  );
}
