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
  height: 100%;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  align-items: center;
  scrollbar-width: none;
`;

export const PortalIntro = styled.section`
  width: 80%;
  min-height: 100%;
  display: flex;
  animation: ${fadeIn} 700ms ease both;
  .portalContainer {
    width: 100%;
    height: 100%;
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

  @media (max-width: 600px) {
    font-size: clamp(54px, 12vw, 82px);
    letter-spacing: -0.075em;
  }

  @media (max-width: 380px) {
    font-size: 48px;
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
  gap: 28px;

  margin-top: 40px;

  @media (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 24px;

    margin-top: 28px;
  }
`;

export const IntroDescription = styled.p`
  max-width: 430px;
  margin: 0;

  color: var(--portal-muted);

  font-size: clamp(15px, 1.35vw, 18px);
  font-weight: 400;
  line-height: 1.95;
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
  min-height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 850ms ease both;
  animation-delay: 120ms;
  text-align: center;
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
    width: min(100%, 460px);
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

  @media (max-width: 420px) {
    width: 72px;
    height: 72px;
  }
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
  width: 50%;
  margin: 36px auto 0;
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
`;



export const PortalChoices = styled.section`
  grid-column: 1 / -1;
  display: flex;
  width: 100%;
  min-height: 90%;
  justify-content: space-around;
  align-items: center;
`;

export const PortalChoice = styled.button<{
  $variant: "business" | "tech";
}>`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 40%;
  height: 70%;
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

  @media (max-width: 760px) {
    min-height: 390px;
  }

  @media (max-width: 420px) {
    min-height: 370px;
    padding: 24px;
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

  margin: 20px 0 0;

  color: var(--business-muted);

  font-size: 13px;
  line-height: 1.9;

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
  min-height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 24px;

  border-top: 1px solid var(--app-border);

  @media (max-width: 650px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
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
`;

export const FooterDivider = styled.span`
  width: 20px;
  height: 1px;

  display: inline-block;

  background: var(--portal-accent);
`;
