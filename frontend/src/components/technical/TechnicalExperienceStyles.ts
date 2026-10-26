import styled, { keyframes } from "styled-components";

const rise = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const surface = "color-mix(in srgb, var(--technical-text) 4%, var(--technical-bg))";
const line = "color-mix(in srgb, var(--technical-text) 15%, transparent)";

export const TechnicalExperiencePage = styled.div`
  --technical-card: ${surface};
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: min(100%, 100svh);
  overflow: hidden;
  isolation: isolate;
  color: var(--technical-text);
  background: var(--technical-bg);
  font-family: inherit;
  *, *::before, *::after { box-sizing: border-box; }
  img { display: block; max-width: 100%; }
  a, button { -webkit-tap-highlight-color: transparent; }
  a:focus-visible, button:focus-visible, input:focus-visible {
    outline: 2px solid var(--technical-accent);
    outline-offset: 3px;
  }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: .01ms !important;
      transition-duration: .01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export const TechnicalRail = styled.aside`
  position: relative;
  z-index: 3;
  display: flex;
  flex: 0 0 70px;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  padding: 22px 10px;
  border-right: 1px solid ${line};
  background: var(--technical-bg);
  @media (max-width: 760px) {
    display: flex;
    flex: 0 0 auto;
    flex-direction: row;
    justify-content: space-between;
    gap: 12px;
    width: 100%;
    padding: 10px clamp(12px, 4vw, 22px);
    border-right: 0;
    border-bottom: 1px solid ${line};
    position: sticky;
    top: 0;
    background: var(--technical-bg);
  }
`;

export const RailMonogram = styled.button`
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  flex: 0 0 auto;
  border: 1px solid var(--technical-accent);
  border-radius: 50%;
  background: var(--app-primary);
  color: white;
  font-weight: 800;
  font-size: 11px;
  cursor: pointer;
  transition: transform .2s ease;
  &:hover { transform: rotate(-7deg) scale(1.04); }
`;

export const RailNavigation = styled.nav`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  a {
    display: grid;
    place-items: center;
    width: 38px;
    height: 36px;
    border: 1px solid transparent;
    border-radius: 9px;
    color: var(--technical-muted);
    font-family: var(--mono, monospace);
    font-size: 10px;
    text-decoration: none;
    transition: color .2s, border-color .2s, background .2s;
  }
  a:hover, a[aria-current="location"] {
    color: var(--technical-accent);
    border-color: color-mix(in srgb, var(--technical-accent) 45%, transparent);
    background: color-mix(in srgb, var(--technical-accent) 9%, transparent);
  }
  @media (max-width: 760px) {
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
    gap: clamp(3px, 1.2vw, 8px);
    a { width: clamp(29px, 8vw, 36px); height: 32px; font-size: 9px; }
  }
`;

export const RailBottom = styled.span`
  writing-mode: vertical-rl;
  font-size: 9px;
  letter-spacing: .16em;
  opacity: .65;
  @media (max-width: 760px) { display: none; }
`;

export const TechnicalContent = styled.main`
  position: relative;
  flex: 1;
  width: calc(100% - 70px);
  height: 100%;
  min-width: 0;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: color-mix(in srgb, var(--technical-accent) 45%, transparent) transparent;
  &::-webkit-scrollbar { width: 6px; }
  &::-webkit-scrollbar-thumb { background: color-mix(in srgb, var(--technical-accent) 45%, transparent); border-radius: 8px; }
  > section[id] { scroll-margin-top: 20px; }
  @media (max-width: 760px) {
    width: 100%;
    height: auto;
    flex: 1 1 auto;
  }
`;

export const TechnicalTopbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 62px;
  padding: 14px clamp(18px, 4vw, 58px);
  border-bottom: 1px solid ${line};
  font-family: var(--mono, monospace);
  font-size: 9px;
  letter-spacing: .1em;
  > span { font-weight: 700; }
  > span i { color: var(--technical-accent); font-style: normal; }
  > a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: inherit;
  }
  > a:hover { color: var(--technical-accent); }
  @media (max-width: 600px) {
    flex-wrap: wrap;
    > span { width: 100%; }
  }
`;

export const StatusPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--technical-muted);
  font-size: 9px;
  span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--app-success);
    box-shadow: 0 0 0 4px color-mix(in srgb, var(--app-success) 15%, transparent);
  }
  @media (max-width: 600px) { display: none; }
`;

export const ErrorNotice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 18px clamp(18px, 4vw, 58px) 0;
  padding: 12px 15px;
  border: 1px solid color-mix(in srgb, var(--app-warning) 45%, transparent);
  background: color-mix(in srgb, var(--app-warning) 8%, transparent);
  font-size: 12px;
  span { opacity: .75; overflow-wrap: anywhere; }
`;

export const TechnicalCover = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(250px, .7fr);
  align-items: center;
  gap: clamp(28px, 6vw, 90px);
  padding: clamp(44px, 7vw, 100px) clamp(20px, 6vw, 84px);
  padding-top: 0;
  border-bottom: 1px solid ${line};
  @media (max-width: 850px) { grid-template-columns: 1fr; }
  @media (max-width: 480px) {
    gap: 24px;
    padding-top: 36px;
    padding-bottom: 42px;
  }
`;

export const TechnicalCoverCopy = styled.div`
  min-width: 0;
  animation: ${rise} .55s ease both;
  h1 {
    margin: 22px 0 20px;
    font-family: var(--display, inherit);
    font-size: clamp(46px, 7vw, 94px);
    line-height: .98;
    letter-spacing: -.075em;
    font-weight: 650;
  }
  h1 span { font-weight: inherit; }
  h1 em { color: var(--technical-accent); font-style: normal; }
  > p { max-width: 620px; margin: 0; font-size: clamp(14px, 1.3vw, 17px); line-height: 1.85; opacity: .76; }
  .cover-summary {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 20px;
    margin-top: 25px;
    color: var(--technical-muted);
    font-family: var(--mono, monospace);
    font-size: 9px;
    letter-spacing: .04em;
  }
  .cover-summary span { display: inline-flex; align-items: center; gap: 7px; }
  .cover-summary svg { color: var(--technical-accent); }
`;

export const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--technical-accent);
  font-family: var(--mono, monospace);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .14em;
  line-height: 1.6;
  text-transform: uppercase;
`;

export const CoverActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-height: 44px;
    padding: 12px 15px;
    border: 1px solid ${line};
    font-family: var(--mono, monospace);
    font-size: 9px;
    font-weight: 700;
    letter-spacing: .08em;
    text-decoration: none;
    transition: transform .2s, border-color .2s, background .2s;
  }
  a:first-child { color: var(--technical-bg); background: var(--app-canvas); border-color: var(--app-primary); }
  a:hover { transform: translateY(-3px); border-color: var(--technical-accent); }
`;

export const TechnicalProfile = styled.div`
  position: relative;
  width: min(100%, 365px);
  justify-self: end;
  animation: ${rise} .7s .1s ease both;
  @media (max-width: 850px) { width: min(100%, 420px); justify-self: start; }
`;

export const ProfileImage = styled.div`
  position: relative;
  aspect-ratio: 4 / 4.2;
  overflow: hidden;
  border: 1px solid ${line};
  background: color-mix(in srgb, var(--technical-accent) 12%, var(--technical-bg));
  img { width: 100%; height: 100%; object-fit: cover; object-position: center 25%; filter: saturate(.82); }
`;

export const ProfileImageIndex = styled.span`
  position: absolute;
  left: 14px;
  bottom: 14px;
  padding: 8px 10px;
  color: var(--technical-bg);
  background: var(--app-primary);
  font-family: var(--mono, monospace);
  font-size: 9px;
  letter-spacing: .1em;
`;

export const ProfileData = styled.div`
  padding: 17px 0 0;
  > span { font-family: var(--mono, monospace); font-size: 9px; letter-spacing: .13em; opacity: .65; }
  h2 { margin: 8px 0 4px; font-size: clamp(23px, 3vw, 32px); letter-spacing: -.05em; }
  p { margin: 0; font-size: 13px; opacity: .7; }
`;

export const ProfileTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 15px;
  span { padding: 7px 9px; border: 1px solid ${line}; font-size: 10px; }
`;

export const TechnicalStats = styled.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border-bottom: 1px solid ${line};
  article {
    min-width: 0;
    padding: 23px clamp(14px, 3vw, 38px);
    border-right: 1px solid ${line};
  }
  article:last-child { border-right: 0; }
  span { display: block; min-height: 2.8em; font-family: var(--mono, monospace); font-size: 9px; line-height: 1.6; letter-spacing: .06em; opacity: .68; }
  strong { display: block; margin-top: 8px; color: var(--technical-accent); font-size: clamp(24px, 3.2vw, 38px); letter-spacing: -.06em; }
  @media (max-width: 700px) { grid-template-columns: repeat(2, minmax(0, 1fr)); article:nth-child(2) { border-right: 0; } article:nth-child(-n+2) { border-bottom: 1px solid ${line}; } }
`;

export const TechnicalAbout = styled.section`
  display: grid;
  grid-template-columns: minmax(0, .9fr) minmax(0, 1fr);
  gap: clamp(24px, 7vw, 100px);
  padding: clamp(60px, 9vw, 115px) clamp(20px, 6vw, 84px);
  border-bottom: 1px solid ${line};
  @media (max-width: 800px) { grid-template-columns: 1fr; gap: 25px; }
  @media (max-width: 480px) { padding-top: 48px; padding-bottom: 48px; }
`;

export const AboutHeading = styled.div`
  h2 { margin: 18px 0 0; font-size: clamp(32px, 4.8vw, 59px); line-height: 1.08; letter-spacing: -.065em; }
  h2 span { display: inline; }
`;

export const AboutCopy = styled.div`
  align-self: end;
  p { margin: 0 0 16px; max-width: 620px; font-size: 14px; line-height: 1.9; opacity: .76; }
  a { display: inline-flex; align-items: center; gap: 10px; margin-top: 10px; color: var(--technical-accent); font-family: var(--mono, monospace); font-size: 9px; font-weight: 700; letter-spacing: .1em; text-decoration: none; }
`;

export const TechnicalProjects = styled.section`
  padding: clamp(60px, 9vw, 110px) clamp(20px, 6vw, 84px);
  border-bottom: 1px solid ${line};
`;

export const SectionHeading = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 22px;
  margin-bottom: 30px;
  h2 { margin: 15px 0 0; font-size: clamp(34px, 5vw, 62px); line-height: 1.02; letter-spacing: -.07em; }
  @media (max-width: 620px) { align-items: flex-start; flex-direction: column; }
  @media (max-width: 420px) {
    h2 { font-size: clamp(30px, 9vw, 40px); overflow-wrap: anywhere; }
  }
`;

export const SectionSideNote = styled.div`
  color: var(--technical-muted);
  font-family: var(--mono, monospace);
  font-size: 9px;
  letter-spacing: .08em;
  line-height: 1.9;
  text-align: right;
  span { display: inline; }
  @media (max-width: 620px) { text-align: left; }
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  @media (max-width: 760px) { grid-template-columns: 1fr; }
`;

export const ProjectCard = styled.article`
  display: flex;
  min-width: 0;
  flex-direction: column;
  padding: clamp(18px, 2.5vw, 30px);
  border: 1px solid ${line};
  background: ${surface};
  transition: transform .22s ease, border-color .22s ease;
  &:hover { transform: translateY(-3px); border-color: color-mix(in srgb, var(--technical-accent) 55%, transparent); }
  h3 { margin: 18px 0 10px; font-size: clamp(22px, 2.7vw, 31px); line-height: 1.12; letter-spacing: -.05em; overflow-wrap: anywhere; }
  > p { margin: 0; font-size: 13px; line-height: 1.8; opacity: .74; }
  details { margin-top: 16px; font-size: 12px; }
  summary { color: var(--technical-accent); cursor: pointer; font-weight: 700; }
  details p { line-height: 1.8; opacity: .75; }
`;

export const ProjectCardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const ProjectNumber = styled.span`
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border: 1px solid ${line};
  color: var(--technical-accent);
  font-family: var(--mono, monospace);
  font-size: 10px;
`;

export const ProjectCategory = styled.span`
  color: var(--technical-muted);
  font-family: var(--mono, monospace);
  font-size: 9px;
  letter-spacing: .07em;
  text-align: right;
`;

export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 19px;
  span { padding: 6px 8px; border: 1px solid ${line}; font-size: 10px; }
`;

export const ProjectOpen = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  align-self: flex-start;
  margin-top: 22px;
  color: var(--technical-accent);
  font-family: var(--mono, monospace);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .1em;
  text-decoration: none;
  svg { transition: transform .2s; }
  &:hover svg { transform: translateX(4px); }
`;

export const TechnicalDeployments = styled.section`
  padding: clamp(60px, 9vw, 110px) clamp(20px, 6vw, 84px);
  border-bottom: 1px solid ${line};
`;

export const DeploymentControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 22px;
`;

export const DeploymentSearch = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1 1 250px;
  max-width: 440px;
  min-height: 42px;
  padding: 0 12px;
  border: 1px solid ${line};
  color: var(--technical-muted);
  input { width: 100%; min-width: 0; border: 0; outline: none; background: transparent; color: var(--technical-text); font: inherit; font-size: 12px; }
  input::placeholder { color: var(--technical-muted); opacity: .7; }
  button { border: 0; background: transparent; color: inherit; font-size: 20px; cursor: pointer; }
  @media (max-width: 480px) { flex-basis: 100%; max-width: none; }
`;

export const ProviderFilters = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  color: var(--technical-muted);
`;

export const FilterButton = styled.button<{ $active: boolean }>`
  min-height: 36px;
  padding: 8px 12px;
  border: 1px solid ${({ $active }) => $active ? "var(--technical-accent)" : line};
  background: ${({ $active }) => $active ? "color-mix(in srgb, var(--technical-accent) 12%, transparent)" : "transparent"};
  color: ${({ $active }) => $active ? "var(--technical-accent)" : "var(--technical-text)"};
  font-size: 11px;
  cursor: pointer;
`;

export const DeploymentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  @media (max-width: 1050px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 650px) { grid-template-columns: 1fr; }
  @media (max-width: 420px) { gap: 12px; }
`;

export const DeploymentItem = styled.a<{ $disabled?: boolean }>`
  display: flex;
  min-width: 0;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid ${line};
  background: ${surface};
  color: inherit;
  text-decoration: none;
  cursor: ${({ $disabled }) => $disabled ? "default" : "pointer"};
  transition: transform .22s ease, border-color .22s ease;
  &:hover { transform: ${({ $disabled }) => $disabled ? "none" : "translateY(-4px)"}; border-color: color-mix(in srgb, var(--technical-accent) 55%, transparent); }
`;

export const DeploymentVisual = styled.div<{ $api: boolean }>`
  position: relative;
  aspect-ratio: 1.7;
  min-height: 155px;
  overflow: hidden;
  background: color-mix(in srgb, var(--technical-accent) 8%, var(--technical-bg));
  img { width: 100%; height: 100%; object-fit: cover; transition: transform .35s ease; }
  a:hover & img { transform: scale(1.035); }
`;

export const FallbackVisual = styled.div<{ $api: boolean }>`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 155px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 16px;
  background: ${({ $api }) => $api ? "color-mix(in srgb, var(--app-primary) 94%, var(--technical-accent))" : "color-mix(in srgb, var(--technical-accent) 9%, var(--technical-bg))"};
  color: var(--technical-text);
  .visual-kicker { color: var(--technical-accent); font-family: var(--mono, monospace); font-size: 8px; letter-spacing: .14em; }
  > svg { margin: 4px 0; color: var(--technical-accent); font-size: 25px; }
  > strong { font-family: var(--mono, monospace); font-size: 8px; letter-spacing: .1em; }
  > small { font-family: var(--mono, monospace); font-size: 8px; opacity: .65; }
  > small span { color: var(--technical-accent); }
  .web-window { display: grid; grid-template-columns: repeat(3, 1fr); gap: 5px; width: min(160px, 75%); margin: 3px 0; padding: 9px; border: 1px solid ${line}; }
  .web-window i { height: 3px; background: var(--technical-accent); opacity: .65; }
  .web-window span { grid-column: span 3; height: 5px; background: color-mix(in srgb, var(--technical-text) 22%, transparent); }
`;

export const ApiGlyph = styled.strong`
  display: grid;
  place-items: center;
  width: 48px;
  height: 42px;
  margin: 1px 0;
  border: 1px solid color-mix(in srgb, var(--technical-accent) 50%, transparent);
  color: var(--technical-accent);
  font-family: var(--mono, monospace);
  font-size: 22px;
  font-weight: 700;
`;

export const ApiLines = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 90px;
  i { height: 3px; background: color-mix(in srgb, var(--technical-text) 35%, transparent); }
  i:nth-child(2) { width: 72%; }
  i:nth-child(3) { width: 86%; }
`;

export const DeploymentIndex = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  display: grid;
  place-items: center;
  width: 28px;
  height: 27px;
  background: var(--app-primary);
  color: var(--technical-bg);
  font-family: var(--mono, monospace);
  font-size: 9px;
`;

export const DeploymentCopy = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  padding: 17px;
  min-width: 0;
  h3 { margin: 13px 0 8px; font-size: 19px; letter-spacing: -.04em; overflow-wrap: anywhere; }
  p { margin: 0; font-size: 12px; line-height: 1.75; opacity: .72; }
  .deployment-meta { margin-top: 9px; font-family: var(--mono, monospace); font-size: 9px; opacity: .65; overflow-wrap: anywhere; }
  .deployment-open { display: inline-flex; align-items: center; gap: 8px; margin-top: auto; padding-top: 20px; color: var(--technical-accent); font-family: var(--mono, monospace); font-size: 9px; letter-spacing: .08em; }
`;

export const DeploymentBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const ProviderBadge = styled.span<{ $provider: "vercel" | "render" }>`
  padding: 5px 7px;
  border: 1px solid ${({ $provider }) => $provider === "render" ? "var(--technical-accent)" : line};
  color: ${({ $provider }) => $provider === "render" ? "var(--technical-accent)" : "var(--technical-text)"};
  font-family: var(--mono, monospace);
  font-size: 8px;
  letter-spacing: .08em;
`;

export const StateBadge = styled.span<{ $active: boolean }>`
  padding: 5px 7px;
  border: 1px solid ${({ $active }) => $active ? "color-mix(in srgb, var(--app-success) 55%, transparent)" : line};
  color: ${({ $active }) => $active ? "var(--app-success)" : "var(--technical-muted)"};
  font-family: var(--mono, monospace);
  font-size: 8px;
  letter-spacing: .06em;
`;

export const TechnicalEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
  min-height: 130px;
  padding: 22px;
  border: 1px dashed ${line};
  color: var(--technical-muted);
  font-size: 13px;
  text-align: center;
`;

export const LoadingOrbit = styled.span`
  width: 19px;
  height: 19px;
  border: 2px solid ${line};
  border-top-color: var(--technical-accent);
  border-radius: 50%;
  animation: spin .8s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`;

export const TechnicalStack = styled.section`
  padding: clamp(60px, 9vw, 110px) clamp(20px, 6vw, 84px);
  border-bottom: 1px solid ${line};
`;

export const StackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 55px;
  @media (max-width: 1000px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 520px) { grid-template-columns: 1fr; }
  @media (max-width: 360px) { gap: 8px; }
`;

export const StackCard = styled.article`
  min-width: 0;
  padding: 20px;
  border: 1px solid ${line};
  background: ${surface};
  h3 { margin: 18px 0 13px; font-size: 20px; letter-spacing: -.04em; }
`;

export const StackCardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--technical-accent);
  > svg { font-size: 20px; }
  > span { font-family: var(--mono, monospace); font-size: 9px; opacity: .6; }
`;

export const StackItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  span { padding: 7px 8px; border: 1px solid ${line}; font-size: 10px; overflow-wrap: anywhere; }
`;

export const RepositoryList = styled.div`
  min-width: 0;
`;

export const RepositoryHeading = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 10px;
  > div { flex: 1; }
  h3 { margin: 8px 0 0; font-size: 24px; letter-spacing: -.05em; }
  > span { color: var(--technical-muted); font-family: var(--mono, monospace); font-size: 9px; }
  > label { display: flex; align-items: center; gap: 8px; padding: 8px 10px; border: 1px solid ${line}; color: var(--technical-muted); }
  input { width: 110px; border: 0; outline: 0; background: transparent; color: var(--technical-text); font: inherit; font-size: 11px; }
  input::placeholder { color: var(--technical-muted); }
  @media (max-width: 480px) {
    > div { min-width: 0; }
    > label { flex: 1 1 100%; }
    input { width: 100%; min-width: 0; }
  }
`;

export const RepositoryRow = styled.a`
  display: grid;
  grid-template-columns: 22px minmax(0, 1fr) 18px;
  gap: 13px;
  align-items: center;
  padding: 15px 5px;
  border-top: 1px solid ${line};
  color: inherit;
  text-decoration: none;
  > svg:first-child { color: var(--technical-accent); }
  span { min-width: 0; }
  strong, small { display: block; }
  strong { font-size: 13px; overflow-wrap: anywhere; }
  small { margin-top: 5px; font-size: 11px; line-height: 1.5; opacity: .65; overflow-wrap: anywhere; }
  > svg:last-child { transition: transform .2s; }
  &:hover { background: color-mix(in srgb, var(--technical-accent) 5%, transparent); }
  &:hover > svg:last-child { transform: translateX(4px); }
`;

export const RepositoryEmpty = styled.div`
  padding: 18px 0;
  border-top: 1px solid ${line};
  font-size: 12px;
  opacity: .7;
`;

export const TechnicalContact = styled.section`
  padding: clamp(70px, 11vw, 140px) clamp(20px, 6vw, 84px);
  text-align: center;
  h2 { margin: 20px 0; font-size: clamp(38px, 7vw, 78px); line-height: 1.03; letter-spacing: -.07em; }
  p { max-width: 530px; margin: 0 auto; font-size: 14px; line-height: 1.8; opacity: .72; }
`;

export const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-top: 28px;
  padding: 15px 20px;
  background: var(--app-primary);
  color: var(--technical-bg) !important;
  font-family: var(--mono, monospace);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .1em;
  text-decoration: none;
  transition: transform .2s;
  &:hover { transform: translateY(-3px); }
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 35px;
  a, button { display: inline-flex; align-items: center; gap: 8px; border: 0; background: none; color: inherit; font-family: var(--mono, monospace); font-size: 9px; letter-spacing: .08em; text-decoration: none; cursor: pointer; }
  a:hover, button:hover { color: var(--technical-accent); }
`;

export const TechnicalFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 20px clamp(20px, 6vw, 84px);
  border-top: 1px solid ${line};
  font-family: var(--mono, monospace);
  font-size: 8px;
  letter-spacing: .09em;
  opacity: .72;
  a { display: inline-flex; align-items: center; gap: 8px; color: inherit; text-decoration: none; }
  @media (max-width: 650px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding-top: 18px;
    padding-bottom: 18px;
  }
`;

