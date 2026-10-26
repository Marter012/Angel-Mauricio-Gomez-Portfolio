import { useMemo, useState } from "react";
import {
  FaArrowDown, FaArrowRight, FaCode, FaEnvelope, FaGithub,
  FaInstagram, FaLaptopCode, FaServer, FaSearch, FaExternalLinkAlt,
  FaLayerGroup, FaGlobe, FaDatabase, FaFilter,
} from "react-icons/fa";
import technicalExperience from "../../assets/techinicalExperience.png";
import type { Deployment, PortfolioData, Repo } from "../../types/portfolio";
import type { Experience } from "../../types/portfolio-ui";
import { formatProjectName, isApiProject } from "../../utils/portfolioHelpers";
import {
  TechnicalExperiencePage,
  TechnicalHeaderGroup, TechnicalRail, RailMonogram, RailNavigation,
  RailBottom, TechnicalContent, TechnicalTopbar, StatusPill, TechnicalCover,
  TechnicalCoverCopy, Eyebrow, CoverActions, TechnicalProfile, ProfileImage,
  ProfileImageIndex, ProfileData, ProfileTags, TechnicalStats, TechnicalAbout,
  AboutHeading, AboutCopy, TechnicalProjects, SectionHeading, SectionSideNote,
  ProjectGrid, ProjectCard, ProjectCardTop, ProjectNumber, ProjectCategory,
  ProjectTags, ProjectOpen, TechnicalDeployments, DeploymentControls,
  DeploymentSearch, ProviderFilters, FilterButton, DeploymentGrid,
  DeploymentItem, DeploymentVisual, FallbackVisual, ApiGlyph, ApiLines,
  DeploymentIndex, DeploymentCopy, DeploymentBadges, ProviderBadge,
  StateBadge, TechnicalEmpty, LoadingOrbit, TechnicalStack, StackGrid,
  StackCard, StackCardTop, StackItems, RepositoryList, RepositoryHeading,
  RepositoryRow, RepositoryEmpty, TechnicalContact, ContactButton,
  SocialLinks, TechnicalFooter, ErrorNotice,
} from "./TechnicalExperienceStyles";

type Props = {
  portfolio: PortfolioData;
  setExperience: (experience: Experience | null) => void;
  loading: boolean;
  loadErrors: string[];
  visibleRepos: Repo[];
  visibleDeployments: Deployment[];
  selectedRepos: Repo[];
};

type ProviderFilter = "all" | "vercel" | "render";

function isApiDeployment(deployment: Deployment): boolean {
  return isApiProject(`${deployment.name} ${deployment.type ?? ""} ${deployment.repo ?? ""}`);
}

function DeploymentCard({ deployment, index }: { deployment: Deployment; index: number }) {
  const [imageFailed, setImageFailed] = useState(false);
  const api = isApiDeployment(deployment);
  const hasPreview = Boolean(deployment.thumbnail) && !api && !imageFailed;
  const providerName = deployment.provider === "render" ? "RENDER" : "VERCEL";
  const state = (deployment.state || "UNKNOWN").toUpperCase();
  const isActive = ["READY", "ACTIVE", "LIVE", "SUCCEEDED"].includes(state);

  return (
    <DeploymentItem href={deployment.url || undefined} target={deployment.url ? "_blank" : undefined} rel={deployment.url ? "noreferrer" : undefined} $disabled={!deployment.url}>
      <DeploymentVisual $api={api}>
        {hasPreview ? (
          <img
            src={deployment.thumbnail ?? undefined}
            alt={`Vista previa de ${formatProjectName(deployment.name)}`}
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <FallbackVisual $api={api}>
            {api ? (
              <>
                <span className="visual-kicker">API · BACKEND</span>
                <ApiGlyph aria-hidden="true">{"{ }"}</ApiGlyph>
                <ApiLines><i /><i /><i /></ApiLines>
                <strong>INTERCAMBIO DE DATOS</strong>
                <small>REQUEST <span>→</span> RESPONSE</small>
              </>
            ) : (
              <>
                <span className="visual-kicker">APLICACIÓN PUBLICADA</span>
                <FaGlobe aria-hidden="true" />
                <div className="web-window"><i /><i /><i /><span /><span /><span /></div>
                <strong>INTERFAZ WEB</strong>
              </>
            )}
          </FallbackVisual>
        )}
        <DeploymentIndex>{String(index + 1).padStart(2, "0")}</DeploymentIndex>
      </DeploymentVisual>

      <DeploymentCopy>
        <DeploymentBadges>
          <ProviderBadge $provider={deployment.provider}>{providerName}</ProviderBadge>
          <StateBadge $active={isActive}>{state.replaceAll("_", " ")}</StateBadge>
        </DeploymentBadges>
        <h3>{formatProjectName(deployment.name)}</h3>
        <p>{api
          ? "Servicio de backend que expone endpoints y procesa solicitudes para otras aplicaciones."
          : deployment.provider === "render"
            ? "Servicio publicado en Render. Puede ser una API, un backend o una aplicación web."
            : "Aplicación desplegada en producción para acceder a sus funcionalidades desde el navegador."}</p>
        {deployment.branch && <small className="deployment-meta">Rama: {deployment.branch}</small>}
        <strong className="deployment-open">{deployment.url ? "ABRIR SERVICIO" : "URL NO DISPONIBLE"} <FaExternalLinkAlt /></strong>
      </DeploymentCopy>
    </DeploymentItem>
  );
}

export default function TechnicalExperience({
  portfolio,
  setExperience,
  loading,
  loadErrors,
  visibleRepos,
  visibleDeployments,
  selectedRepos,
}: Props) {
  const { site, technical, metrics, featuredProjects, technologyGroups } = portfolio;
  const [providerFilter, setProviderFilter] = useState<ProviderFilter>("all");
  const [deploymentSearch, setDeploymentSearch] = useState("");
  const [repoSearch, setRepoSearch] = useState("");
  const [activeSection, setActiveSection] = useState("perfil");

  const filteredDeployments = useMemo(() => visibleDeployments.filter((deployment) => {
    const matchesProvider = providerFilter === "all" || deployment.provider === providerFilter;
    const matchesSearch = `${deployment.name} ${deployment.type ?? ""} ${deployment.provider}`
      .toLowerCase().includes(deploymentSearch.toLowerCase().trim());
    return matchesProvider && matchesSearch;
  }), [visibleDeployments, providerFilter, deploymentSearch]);

  const filteredRepos = useMemo(() => selectedRepos.filter((repo) =>
    `${repo.name} ${repo.description ?? ""} ${repo.language ?? ""}`
      .toLowerCase().includes(repoSearch.toLowerCase().trim())
  ), [selectedRepos, repoSearch]);

  const repoByProject = (key: string) =>
    visibleRepos.find((repo) => repo.name.toLowerCase() === key.toLowerCase());

  return (
    <TechnicalExperiencePage>
      <TechnicalHeaderGroup>
        <TechnicalTopbar>
          <span>{site.name.toUpperCase()} <i> / </i> PORTFOLIO TÉCNICO</span>
          <StatusPill><span /> {site.role}</StatusPill>
          <a href={`mailto:${site.email}`}><FaEnvelope /> CONTACTO</a>
        </TechnicalTopbar>
      <TechnicalRail>
        <RailMonogram type="button" onClick={() => setExperience(null)} aria-label="Volver al inicio">
          {site.name.trim().split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase()}
        </RailMonogram>
        <RailNavigation aria-label="Navegación técnica">
          {[
            ["perfil", "01"],
            ["proyectos", "02"],
            ["deployments", "03"],
            ["tecnologias", "04"],
            ["contacto", "05"],
          ].map(([id, number]) => (
            <a key={id} href={`#${id}`} title={id} aria-current={activeSection === id ? "location" : undefined} onClick={() => setActiveSection(id)}>{number}</a>
          ))}
        </RailNavigation>
        <RailBottom>{site.location.toUpperCase()}</RailBottom>
      </TechnicalRail>
      </TechnicalHeaderGroup>

      <TechnicalContent onScroll={(event) => {
        const container = event.currentTarget;
        const ids = ["perfil", "proyectos", "deployments", "tecnologias", "contacto"];
        const active = ids.filter((id) => {
          const section = container.querySelector<HTMLElement>(`#${id}`);
          return section && section.getBoundingClientRect().top < window.innerHeight * 0.45;
        }).at(-1);
        if (active) setActiveSection(active);
      }}>
{loadErrors.length > 0 && (
          <ErrorNotice role="status">
            <strong>Algunas fuentes no respondieron.</strong>
            <span>{loadErrors.join(" · ")}</span>
          </ErrorNotice>
        )}

        <TechnicalCover id="perfil">
          <TechnicalCoverCopy>
            <Eyebrow>{technical.eyebrow}</Eyebrow>
            <h1>
              {technical.headlineLines.map((line, index) => (
                <span key={`${line}-${index}`}>{line}<br /></span>
              ))}
              <em>{technical.headlineAccent}</em>
            </h1>
            <p>{technical.description}</p>
            <CoverActions>
              <a href="#proyectos">EXPLORAR PROYECTOS <FaArrowDown /></a>
              <a href={site.github} target="_blank" rel="noreferrer"><FaGithub /> GITHUB <FaExternalLinkAlt /></a>
            </CoverActions>
            <div className="cover-summary">
              <span><FaLayerGroup /> {visibleRepos.length} repositorios consultados</span>
              <span><FaGlobe /> {visibleDeployments.length} deployments detectados</span>
            </div>
          </TechnicalCoverCopy>

          <TechnicalProfile>
            <ProfileImage>
              <img src={technicalExperience} alt={`Perfil de ${site.name}`} />
              <ProfileImageIndex>PROFILE / 01</ProfileImageIndex>
            </ProfileImage>
            <ProfileData>
              <span>{technical.profileLabel}</span>
              <h2>{site.name}</h2>
              <p>{technical.profileRole}</p>
              <ProfileTags>{technical.profileTags.map((tag) => <span key={tag}>{tag}</span>)}</ProfileTags>
            </ProfileData>
          </TechnicalProfile>
        </TechnicalCover>

        <TechnicalStats>
          {metrics.map((metric) => (
            <article key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.label.toLowerCase().includes("repositorio") ? `${visibleRepos.length}` : metric.label.toLowerCase().includes("deployment") ? `${visibleDeployments.length}` : metric.value}</strong>
            </article>
          ))}
        </TechnicalStats>

        <TechnicalAbout>
          <AboutHeading>
            <Eyebrow>{technical.aboutEyebrow}</Eyebrow>
            <h2>{technical.aboutTitleLines.map((line, index) => <span key={`${line}-${index}`}>{line}{index < technical.aboutTitleLines.length - 1 && <br />}</span>)}</h2>
          </AboutHeading>
          <AboutCopy>
            {technical.aboutParagraphs.map((paragraph, index) => <p key={`${paragraph.slice(0, 24)}-${index}`}>{paragraph}</p>)}
            <a href={site.github} target="_blank" rel="noreferrer">EXPLORAR GITHUB <FaArrowRight /></a>
          </AboutCopy>
        </TechnicalAbout>

        <TechnicalProjects id="proyectos">
          <SectionHeading>
            <div>
              <Eyebrow>{technical.projectsEyebrow}</Eyebrow>
              <h2>{technical.projectsTitleLines.map((line, index) => <span key={`${line}-${index}`}>{line}{index < technical.projectsTitleLines.length - 1 && <br />}</span>)}</h2>
            </div>
            <SectionSideNote>{technical.projectsNote.map((line, index) => <span key={line}>{line}{index < technical.projectsNote.length - 1 && <br />}</span>)}</SectionSideNote>
          </SectionHeading>
          {featuredProjects.length === 0 ? (
            <TechnicalEmpty>No hay proyectos destacados configurados en la API.</TechnicalEmpty>
          ) : (
            <ProjectGrid>
              {featuredProjects.map((project, index) => {
                const repo = repoByProject(project.key);
                return (
                  <ProjectCard key={project.key}>
                    <ProjectCardTop><ProjectNumber>{String(index + 1).padStart(2, "0")}</ProjectNumber><ProjectCategory>{project.type}</ProjectCategory></ProjectCardTop>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <details><summary>Detalles técnicos</summary><p>{project.details}</p></details>
                    <ProjectTags>{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</ProjectTags>
                    <ProjectOpen href={repo?.html_url || site.github} target="_blank" rel="noreferrer">VER CÓDIGO <FaArrowRight /></ProjectOpen>
                  </ProjectCard>
                );
              })}
            </ProjectGrid>
          )}
        </TechnicalProjects>

        <TechnicalDeployments id="deployments">
          <SectionHeading>
            <div>
              <Eyebrow>{technical.deploymentsEyebrow}</Eyebrow>
              <h2>{technical.deploymentsTitleLines.map((line, index) => <span key={`${line}-${index}`}>{line}{index < technical.deploymentsTitleLines.length - 1 && <br />}</span>)}</h2>
            </div>
            <SectionSideNote><span>{visibleDeployments.filter((item) => item.provider === "vercel").length} Vercel</span><br /><span>{visibleDeployments.filter((item) => item.provider === "render").length} Render</span></SectionSideNote>
          </SectionHeading>

          <DeploymentControls>
            <DeploymentSearch>
              <FaSearch aria-hidden="true" />
              <input aria-label="Buscar deployments" value={deploymentSearch} onChange={(event) => setDeploymentSearch(event.target.value)} placeholder="Buscar servicio o aplicación..." />
              {deploymentSearch && <button type="button" onClick={() => setDeploymentSearch("")} aria-label="Limpiar búsqueda">×</button>}
            </DeploymentSearch>
            <ProviderFilters aria-label="Filtrar por plataforma">
              <FaFilter aria-hidden="true" />
              {(["all", "vercel", "render"] as ProviderFilter[]).map((provider) => (
                <FilterButton key={provider} type="button" $active={providerFilter === provider} onClick={() => setProviderFilter(provider)}>
                  {provider === "all" ? "Todos" : provider === "vercel" ? "Vercel" : "Render"}
                </FilterButton>
              ))}
            </ProviderFilters>
          </DeploymentControls>

          {loading ? (
            <TechnicalEmpty><LoadingOrbit /> Consultando GitHub, Vercel y Render...</TechnicalEmpty>
          ) : filteredDeployments.length === 0 ? (
            <TechnicalEmpty>No hay deployments que coincidan con los filtros seleccionados.</TechnicalEmpty>
          ) : (
            <DeploymentGrid>{filteredDeployments.map((deployment, index) => <DeploymentCard key={`${deployment.provider}-${deployment.uid}`} deployment={deployment} index={index} />)}</DeploymentGrid>
          )}
        </TechnicalDeployments>

        <TechnicalStack id="tecnologias">
          <SectionHeading>
            <div><Eyebrow>{technical.stackEyebrow}</Eyebrow><h2>{technical.stackTitleLines.map((line, index) => <span key={`${line}-${index}`}>{line}{index < technical.stackTitleLines.length - 1 && <br />}</span>)}</h2></div>
          </SectionHeading>
          <StackGrid>
            {technologyGroups.map((group, index) => (
              <StackCard key={group.label}>
                <StackCardTop>
                  {group.label.toLowerCase().includes("front") ? <FaCode /> : group.label.toLowerCase().includes("back") ? <FaServer /> : group.label.toLowerCase().includes("data") ? <FaDatabase /> : <FaLaptopCode />}
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </StackCardTop>
                <h3>{group.label}</h3>
                <StackItems>{group.items.map((item) => <span key={item}>{item}</span>)}</StackItems>
              </StackCard>
            ))}
          </StackGrid>

          <RepositoryList>
            <RepositoryHeading>
              <div><Eyebrow>GITHUB / CÓDIGO</Eyebrow><h3>Repositorios</h3></div>
              <label><FaSearch /><input aria-label="Buscar repositorios" value={repoSearch} onChange={(event) => setRepoSearch(event.target.value)} placeholder="Buscar..." /></label>
              <span>{filteredRepos.length} resultados</span>
            </RepositoryHeading>
            {filteredRepos.length === 0 ? <RepositoryEmpty>No hay repositorios que coincidan con la búsqueda.</RepositoryEmpty> : filteredRepos.slice(0, 8).map((repo) => (
              <RepositoryRow key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer">
                <FaGithub />
                <span><strong>{formatProjectName(repo.name)}</strong><small>{repo.description || "Repositorio sin descripción."}{repo.language ? ` · ${repo.language}` : ""}</small></span>
                <FaArrowRight />
              </RepositoryRow>
            ))}
          </RepositoryList>
        </TechnicalStack>

        <TechnicalContact id="contacto">
          <Eyebrow>{technical.contactEyebrow}</Eyebrow>
          <h2>{technical.contactTitleLines.map((line, index) => <span key={`${line}-${index}`}>{line}{index < technical.contactTitleLines.length - 1 && <br />}</span>)}</h2>
          <p>{technical.contactDescription}</p>
          <ContactButton href={`mailto:${site.email}`}>CONTACTARME <FaEnvelope /></ContactButton>
          <SocialLinks>
            <a href={site.github} target="_blank" rel="noreferrer"><FaGithub /> GITHUB</a>
            <a href={site.instagram} target="_blank" rel="noreferrer"><FaInstagram /> INSTAGRAM</a>
            <button type="button" onClick={() => setExperience("business")}>VER SOLUCIONES PARA NEGOCIOS <FaArrowRight /></button>
          </SocialLinks>
        </TechnicalContact>

        <TechnicalFooter>
          <span>{site.name}</span>
          <span>{technical.footerLabel} · {new Date().getFullYear()}</span>
          <a href="#perfil">VOLVER ARRIBA <FaArrowDown /></a>
        </TechnicalFooter>
      </TechnicalContent>
    </TechnicalExperiencePage>
  );
}
