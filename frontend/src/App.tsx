import { useEffect, useMemo, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import styled from "styled-components";
import "./styles.css";
import type { Deployment, PortfolioData, Repo } from "./types/portfolio";
import type { Experience } from "./types/portfolio-ui";
import { isPersonalPortfolio } from "./utils/portfolioHelpers";
import PortalExperience from "./components/portal/PortalExperience";
import BusinessExperience from "./components/business/BusinessExperience";
import TechnicalExperience from "./components/technical/TechnicalExperience";
import Navbar from "./components/navigation/Navbar";
import { getRouteForExperience, ROUTE_PATHS } from "./routes/route";

const API_URL = import.meta.env.VITE_API_URL;

const LoadingState = styled.div`
  display: flex;
  min-height: 45vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 24px;
  color: var(--app-ink);
  text-align: center;

  p {
    max-width: 760px;
    line-height: 1.7;
    opacity: 0.75;
    overflow-wrap: anywhere;
  }

  button {
    padding: 10px 14px;
    border: 1px solid var(--app-accent);
    background: transparent;
    color: inherit;
    cursor: pointer;
  }
`;

const LoadingSpinner = styled.span`
  width: 24px;
  height: 24px;
  border: 2px solid var(--app-border);
  border-top-color: var(--app-accent);
  border-radius: 50%;
  animation: loading-rotate 0.8s linear infinite;

  @keyframes loading-rotate {
    to {
      transform: rotate(360deg);
    }
  }
`;

const RouteContent = styled.div`
  padding-top: 100px;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media (max-width: 760px) {
    padding-top: 66px;
  }
`;

async function fetchApi<T>(path: string): Promise<T> {
  const response = await fetch(`${API_URL}${path}`);

  if (!response.ok) {
    let detail = `Error HTTP ${response.status}`;

    try {
      const payload = await response.json();
      if (typeof payload?.detail === "string") detail = payload.detail;
    } catch {
      // La respuesta de error no siempre contiene JSON.
    }

    throw new Error(detail);
  }

  return response.json() as Promise<T>;
}

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  const [portfolio, setPortfolio] = useState<PortfolioData | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [vercelDeployments, setVercelDeployments] = useState<Deployment[]>([]);
  const [renderDeployments, setRenderDeployments] = useState<Deployment[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadErrors, setLoadErrors] = useState<string[]>([]);
  const [countdown, setCountdown] = useState(50);

  useEffect(() => {
    let active = true;

    async function loadPortfolio() {
      const results = await Promise.allSettled([
        fetchApi<PortfolioData>("/api/portfolio"),
        fetchApi<Repo[]>("/api/github/repos"),
        fetchApi<Deployment[]>("/api/vercel/deployments"),
        fetchApi<Deployment[]>("/api/render/deployments"),
      ]);

      if (!active) return;

      const errors: string[] = [];
      const [portfolioResult, reposResult, vercelResult, renderResult] =
        results;

      if (portfolioResult.status === "fulfilled") {
        setPortfolio(portfolioResult.value);
      } else {
        errors.push(
          `Portfolio: ${
            portfolioResult.reason instanceof Error
              ? portfolioResult.reason.message
              : "no disponible"
          }`,
        );
      }

      if (
        reposResult.status === "fulfilled" &&
        Array.isArray(reposResult.value)
      ) {
        setRepos(reposResult.value);
      } else {
        errors.push(
          `GitHub: ${
            reposResult.status === "rejected" &&
            reposResult.reason instanceof Error
              ? reposResult.reason.message
              : "no disponible"
          }`,
        );
      }

      if (
        vercelResult.status === "fulfilled" &&
        Array.isArray(vercelResult.value)
      ) {
        setVercelDeployments(
          vercelResult.value.map((deployment) => ({
            ...deployment,
            provider: "vercel" as const,
          })),
        );
      } else {
        errors.push(
          `Vercel: ${
            vercelResult.status === "rejected" &&
            vercelResult.reason instanceof Error
              ? vercelResult.reason.message
              : "no disponible"
          }`,
        );
      }

      if (
        renderResult.status === "fulfilled" &&
        Array.isArray(renderResult.value)
      ) {
        setRenderDeployments(
          renderResult.value.map((deployment) => ({
            ...deployment,
            provider: "render" as const,
          })),
        );
      } else {
        errors.push(
          `Render: ${
            renderResult.status === "rejected" &&
            renderResult.reason instanceof Error
              ? renderResult.reason.message
              : "no disponible"
          }`,
        );
      }

      setLoadErrors(errors);
      setLoading(false);
    }

    void loadPortfolio();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const visibleRepos = useMemo(
    () => repos.filter((repo) => !isPersonalPortfolio(repo.name)),
    [repos],
  );

  const visibleDeployments = useMemo(
    () =>
      [...vercelDeployments, ...renderDeployments]
        .filter(
          (deployment) =>
            deployment.name && !isPersonalPortfolio(deployment.name),
        )
        .sort((a, b) => (b.createdAt || "").localeCompare(a.createdAt || "")),
    [vercelDeployments, renderDeployments],
  );

  const visibleFeaturedProjects = useMemo(
    () =>
      (portfolio?.featuredProjects ?? []).filter(
        (project) => !isPersonalPortfolio(`${project.key} ${project.title}`),
      ),
    [portfolio],
  );

  const featuredRepoNames = useMemo(
    () =>
      new Set(
        visibleFeaturedProjects.map((project) => project.key.toLowerCase()),
      ),
    [visibleFeaturedProjects],
  );

  const selectedRepos = useMemo(() => {
    const featured = visibleRepos.filter((repo) =>
      featuredRepoNames.has(repo.name.toLowerCase()),
    );
    const remaining = visibleRepos.filter(
      (repo) => !featuredRepoNames.has(repo.name.toLowerCase()),
    );

    return [...featured, ...remaining].slice(0, 8);
  }, [visibleRepos, featuredRepoNames]);

  const setExperience = (experience: Experience) => {
    navigate(getRouteForExperience(experience));
  };

  useEffect(() => {
    if (portfolio || !loading) return;

    setCountdown(50);

    const intervalId = window.setInterval(() => {
      setCountdown((current) => {
        if (current <= 1) {
          window.clearInterval(intervalId);
          window.location.reload();
          return 0;
        }

        return current - 1;
      });
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [portfolio, loading]);

  if (!portfolio && loading) {
    return (
      <>
        <Navbar portfolio={null} />
        <RouteContent>
          <LoadingState role="status">
            <LoadingSpinner />
            Cargando información...
            <br />
            (Recargando pagina en {" "}
            {countdown}s)
          </LoadingState>
        </RouteContent>
      </>
    );
  }

  if (!portfolio) {
    return (
      <>
        <Navbar portfolio={null} />
        <RouteContent>
          <LoadingState role="alert">
            <strong>No se pudo cargar el portfolio.</strong>
            <p>{loadErrors.join(" · ")}</p>
            <button type="button" onClick={() => window.location.reload()}>
              Reintentar
            </button>
          </LoadingState>
        </RouteContent>
      </>
    );
  }

  return (
    <>
      <Navbar portfolio={portfolio} />
      <RouteContent>
        <Routes>
          <Route
            path={ROUTE_PATHS.home}
            element={
              <PortalExperience
                portfolio={portfolio}
                setExperience={setExperience}
              />
            }
          />
          <Route
            path={ROUTE_PATHS.business}
            element={
              <BusinessExperience
                portfolio={portfolio}
                setExperience={setExperience}
              />
            }
          />
          <Route
            path={ROUTE_PATHS.technical}
            element={
              <TechnicalExperience
                portfolio={portfolio}
                setExperience={setExperience}
                loading={loading}
                loadErrors={loadErrors}
                visibleRepos={visibleRepos}
                visibleDeployments={visibleDeployments}
                selectedRepos={selectedRepos}
              />
            }
          />
          <Route
            path="*"
            element={<Navigate to={ROUTE_PATHS.home} replace />}
          />
        </Routes>
      </RouteContent>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
