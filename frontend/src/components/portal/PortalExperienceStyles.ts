import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const arrowMovement = keyframes`
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(10px);
  }
`;

const pulse = keyframes`
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 0.45;
    transform: scale(0.82);
  }
`;

export const PortalMain = styled.main`
  width: 100%;
  min-width: 0;
  min-height: 100%;
  height: 100%;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: clip;
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 760px) {
    height: auto;
    min-height: 100dvh;
    align-items: stretch;
  }
`;

export const PortalIntro = styled.section`
  width: min(86%, 1440px);
  min-height: min(820px, 88dvh);
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(300px, 0.88fr);
  align-items: center;
  gap: clamp(32px, 5vw, 88px);
  animation: ${fadeIn} 700ms ease both;
  min-width: 0;
  margin-inline: auto;
  padding: clamp(48px, 7vh, 92px) 0;

  .portalContainer {
    width: 100%;
    min-width: 0;
    max-width: 760px;
  }

  @media (max-width: 1000px) {
    width: 88%;
    min-height: auto;
    grid-template-columns: minmax(0, 1fr) minmax(260px, 0.8fr);
    gap: clamp(24px, 4vw, 48px);
    padding: 56px 0 64px;
  }

  @media (max-width: 760px) {
    width: calc(100% - 40px);
    grid-template-columns: minmax(0, 1fr);
    gap: 34px;
    padding: 42px 0 48px;
  }

  @media (max-width: 380px) {
    width: calc(100% - 28px);
    gap: 28px;
    padding: 32px 0 40px;
  }
`;

export const SectionIndex = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
  margin-bottom: clamp(28px, 4vw, 52px);
  color: var(--portal-muted);

  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.17em;
  line-height: 1.6;
  text-transform: uppercase;
`;

export const PulseDot = styled.span`
  width: 8px;
  height: 8px;
  flex: 0 0 8px;

  border-radius: 50%;
  background: var(--portal-accent);

  animation: ${pulse} 2.2s ease-in-out infinite;
`;

export const IntroTitle = styled.h1`
  margin: 0;

  color: var(--portal-text);

  font-size: clamp(64px, 8.1vw, 124px);
  font-weight: 600;
  letter-spacing: -0.085em;
  line-height: 0.92;

  overflow-wrap: normal;
  max-width: 100%;

  @media (max-width: 600px) {
    font-size: clamp(42px, 10.5vw, 68px);
    letter-spacing: -0.075em;
    overflow-wrap: anywhere;
  }

  @media (max-width: 380px) {
    font-size: clamp(36px, 10.5vw, 44px);
  }
`;

export const IntroTitleAccent = styled.span`
  display: inline-block;

  color: var(--portal-accent);

  font-family: var(--app-font-display);
  font-size: 1.04em;
  font-weight: 400;
  font-style: italic;
   letter-spacing: 1px;
`;

export const IntroBottom = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: clamp(18px, 2vw, 32px);
  margin-top: clamp(28px, 3vw, 42px);

  @media (max-width: 760px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
    margin-top: 26px;
  }
`;

export const IntroDescription = styled.p`
  max-width: 430px;
  min-width: 0;
  margin: 0;

  color: var(--portal-muted);

  font-size: clamp(15px, 1.35vw, 18px);
  font-weight: 400;
  line-height: 1.95;

  @media (max-width: 600px) {
    font-size: 15px;
    line-height: 1.8;
    overflow-wrap: anywhere;
  }
`;

export const VerticalNote = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  flex-shrink: 0;

  color: var(--portal-accent);

  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.12em;

  svg {
    width: 13px;
    height: 13px;

    transition: transform var(--app-transition);
    animation: ${arrowMovement} 1s ease-in-out infinite;
  }


  @media (hover: hover) {
    &:hover svg {
      transform: translateY(4px);
    }
  }
  
`;

export const PortalShowcase = styled.section`
  width: 100%;
  min-height: clamp(250px, 34vh, 420px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: clamp(20px, 3vh, 34px);
  padding: 34px 7%;
  animation: ${fadeIn} 850ms ease both;
  animation-delay: 120ms;
  text-align: center;

  & > hr,
  & > div[role="separator"] {
    width: 100%;
    max-width: 1120px;
    opacity: 0.75;
  }

  @media (max-width: 760px) {
    min-height: auto;
    gap: 22px;
    padding: 28px 20px 36px;
  }
`;

export const PortraitStage = styled.div`
  position: relative;

  width: min(100%, 430px);
  margin-inline: auto;

  aspect-ratio: 0.86;

  display: flex;
  align-items: center;
  justify-content: center;

  isolation: isolate;

  &::before {
    content: "";

    position: absolute;
    inset: 8% 4% 4% 10%;

    border: 1px solid var(--app-border);
    transform: rotate(-7deg);

    z-index: -1;
    pointer-events: none;
  }

  &::after {
    content: "";

    position: absolute;
    inset: 4% 10% 8% 4%;

    border: 1px solid var(--app-accent);
    opacity: 0.45;

    transform: rotate(-3deg);

    z-index: -1;
    pointer-events: none;
  }

  @media (max-width: 1000px) {
    width: min(100%, 420px);
  }

  @media (max-width: 760px) {
    width: min(100%, 390px);
    justify-self: center;
  }

  @media (max-width: 600px) {
    width: min(100%, 360px);
  }

  @media (max-width: 380px) {
    width: min(100%, 310px);
  }
`;

export const PortraitBackdrop = styled.div`
  position: absolute;
  inset: 7% 7% 7% 7%;

  background: var(--app-surface);

  border: 1px solid var(--app-border);

  z-index: -1;
`;

export const PortalPortrait = styled.img`
  width: 82%;
  height: 82%;

  object-fit: cover;
  object-position: center top;
  border-radius: var(--app-radius-sm);

  filter: saturate(0.82);

  transition:
    filter var(--app-transition-slow),
    transform var(--app-transition-slow);

  @media (hover: hover) {
    &:hover {
      filter: saturate(1);
      transform: translateY(-5px);
    }
  }
`;

export const PortraitCoordinate = styled.span<{
  $position: "top" | "bottom";
}>`
  position: absolute;
  ${({ $position }) =>
    $position === "top" ? "top: 2%; left: 0;" : "right: 0; bottom: 1%;"}

  color: var(--portal-muted);

  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.14em;

  @media (max-width: 420px) {
    font-size: 8px;
  }
`;

export const PortraitStamp = styled.div`
  position: absolute;
  right: -1%;
  bottom: 13%;

  width: 88px;
  height: 88px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  border: 1px solid var(--app-accent);
  border-radius: 50%;

  background: var(--app-primary);
  color: var(--portal-text);

  transform: rotate(8deg);

`;

export const PortraitStampInitials = styled.span`
  color: var(--portal-accent);

  font-family: var(--app-font-display);
  font-size: 28px;
  font-style: italic;
  line-height: 1;
  
`;

export const PortraitStampCaption = styled.span`
  color: var(--portal-muted);

  font-size: 6px;
  font-weight: 700;
  letter-spacing: 0.08em;
`;

export const PortalMessage = styled.div`
  width: min(72%, 900px);
  min-width: 0;
  margin: 0 auto;

  @media (max-width: 900px) {
    width: 82%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Eyebrow = styled.span`
  display: block;

  margin-bottom: 13px;

  color: var(--portal-accent);

  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.15em;
  line-height: 1.7;
`;

export const PortalMessageText = styled.p`
  margin: 0;

  color: var(--portal-text);

  font-family: var(--app-font-display);
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1.5;

  @media (max-width: 600px) {
    font-size: clamp(1.6rem, 6.5vw, 2.1rem);
    line-height: 1.35;
    overflow-wrap: anywhere;
  }
`;



export const PortalChoices = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  width: min(86%, 1440px);
  min-height: auto;
  margin-inline: auto;
  padding: clamp(42px, 6vw, 84px) 0;
  align-items: stretch;
  gap: clamp(20px, 3vw, 44px);

  @media (max-width: 900px) {
    width: 88%;
    gap: 22px;
  }

  @media (max-width: 760px) {
    width: calc(100% - 40px);
    grid-template-columns: minmax(0, 1fr);
    padding: 32px 0 42px;
    gap: 18px;
  }

  @media (max-width: 380px) {
    width: calc(100% - 28px);
  }
`;

export const PortalChoice = styled.button<{
  $variant: "business" | "tech";
}>`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  min-width: 0;
  min-height: clamp(340px, 31vw, 430px);
  height: auto;
  cursor: pointer;

  padding: clamp(25px, 3.2vw, 44px);

  overflow: hidden;

  text-align: left;

  border: 1px solid
    ${({ $variant }) =>
      $variant === "business"
        ? "var(--app-border-light)"
        : "var(--app-border)"};

  border-radius: var(--app-radius-lg);
  filter: brightness(0.9);
  background: ${({ $variant }) =>
    $variant === "business"
      ? "var(--app-canvas-light)"
      : "var(--app-primary-dark)"};

  color: ${({ $variant }) =>
    $variant === "business" ? "var(--business-text)" : "var(--technical-text)"};

  transition:
    transform var(--app-transition),
    border-color var(--app-transition),
    background var(--app-transition);

  &:focus-visible {
    outline: 2px solid var(--app-accent);
    outline-offset: 4px;
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-10px);
      filter: brightness(1);
      border-color: var(--app-accent);
    }

    &:hover > span:last-child {
      transform: translate(4px, -4px);
    }
  }

  @media (max-width: 900px) {
    min-height: 370px;
    padding: 28px;
  }

  @media (max-width: 760px) {
    min-height: 330px;
    padding: 28px;
  }

  @media (max-width: 420px) {
    min-height: 320px;
    padding: 22px;
  }
`;

export const ChoiceNumber = styled.span`
  color: var(--business-muted);

  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.15em;

  ${PortalChoice}[data-variant="tech"] & {
    color: var(--technical-muted);
  }
`;

export const ChoiceSymbol = styled.span`
  width: 52px;
  height: 52px;

  margin-top: 35px;
  margin-bottom: 28px;

  display: grid;
  place-items: center;

  border: 1px solid var(--app-border-light);
  border-radius: var(--app-radius-md);

  color: var(--app-accent-dark);

  svg {
    width: 19px;
    height: 19px;
  }

  ${PortalChoice}[data-variant="tech"] & {
    border-color: var(--app-border);
    color: var(--app-accent);
  }

  @media (max-width: 420px) {
    margin-top: 26px;
    margin-bottom: 22px;
  }
`;

export const ChoiceContent = styled.div`
  position: relative;
  z-index: 1;
`;

export const ChoiceKicker = styled.span`
  display: block;

  margin-bottom: 15px;

  color: var(--business-muted);

  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.12em;
  line-height: 1.7;

  ${PortalChoice}[data-variant="tech"] & {
    color: var(--technical-muted);
  }
`;

export const ChoiceTitle = styled.h2`
  margin: 0;

  font-size: clamp(28px, 3vw, 42px);
  font-weight: 600;
  letter-spacing: -0.055em;
  line-height: 1.12;

  @media (max-width: 420px) {
    font-size: 29px;
  }
`;

export const ChoiceDescription = styled.p`
  max-width: 420px;
  min-width: 0;

  margin: 20px 0 0;

  color: var(--business-muted);

  font-size: 13px;
  line-height: 1.9;
  overflow-wrap: anywhere;

  ${PortalChoice}[data-variant="tech"] & {
    color: var(--technical-muted);
  }
`;

export const ChoiceAction = styled.span`
  position: relative;
  z-index: 1;

  display: flex;
  align-items: center;
  gap: 12px;

  margin-top: auto;
  padding-top: 34px;

  color: var(--business-accent);

  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.12em;

  svg {
    width: 13px;
    height: 13px;

    transition: transform var(--app-transition);
  }

  ${PortalChoice}[data-variant="tech"] & {
    color: var(--technical-accent);
  }

  ${PortalChoice}:hover & svg {
    transform: translateX(4px);
  }
`;

export const ChoiceGiant = styled.span`
  position: absolute;
  right: 24px;
  top: 16px;

  color: var(--app-accent);

  font-family: var(--app-font-display);
  font-size: clamp(54px, 7vw, 88px);
  font-weight: 400;
  line-height: 1;

  opacity: 0.13;

  pointer-events: none;

  transition:
    opacity var(--app-transition),
    transform var(--app-transition);

  ${PortalChoice}:hover & {
    opacity: 0.28;
  }
`;

export const PortalFooter = styled.footer`
  width: 100%;
  min-height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 20px 7%;
  border-top: 1px solid var(--app-border);

  @media (max-width: 650px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
    padding: 22px 18px;
  }
`;

export const FooterStatement = styled.p`
  display: flex;
  align-items: center;
  gap: 12px;

  margin: 0;

  color: var(--portal-muted);

  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.13em;
  line-height: 1.8;
  min-width: 0;
  overflow-wrap: anywhere;
`;

export const FooterDivider = styled.span`
  width: 20px;
  height: 1px;

  display: inline-block;

  background: var(--portal-accent);
`;