import styled, { css, keyframes } from "styled-components";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const focusRing = css`
  &:focus-visible {
    outline: 2px solid var(--app-accent);
    outline-offset: 4px;
  }
`;

export const BusinessHeader = styled.header`
  width: min(100% - 9vw, 1440px);
  min-height: 88px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 24px;
  border-bottom: 1px solid var(--app-border-light);

  @media (max-width: 760px) {
    width: min(100% - 36px, 1440px);
    min-height: 72px;
    grid-template-columns: 1fr auto;
    gap: 14px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    justify-items: start;
    padding: 18px 0;
    gap: 16px;
  }
`;

export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-self: start;
  gap: 10px;
  padding: 10px 0;
  border: 0;
  background: transparent;
  color: var(--business-muted);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  transition:
    color 180ms ease,
    transform 180ms ease;

  svg {
    font-size: 0.9rem;
  }

  &:hover {
    color: var(--app-primary);
    transform: translateX(-3px);
  }

  ${focusRing}
`;

export const BusinessSignature = styled.a`
  justify-self: center;
  white-space: nowrap;
  font-size: 0.8rem;
  font-weight: 900;
  letter-spacing: 0.08em;

  span {
    color: var(--business-muted);
    font-weight: 600;
  }

  ${focusRing}

  @media (max-width: 760px) {
    justify-self: end;
    font-size: 0.68rem;
  }

  @media (max-width: 480px) {
    justify-self: start;
    white-space: normal;
  }
`;

export const BusinessMain = styled.main`
  height: 100%;
  width: 100%;
  color: var(--business-text);
  background: var(--business-bg);
  font-family: inherit;

  overflow-y: auto;
  scrollbar-width: none;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BusinessCover = styled.section`
  width: 80%;
  min-height: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);
  align-items: center;
  gap: clamp(44px, 7vw, 112px);
`;

export const BusinessCoverCopy = styled.div`
  max-width: 700px;
  animation: ${fadeUp} 650ms ease both;
`;

export const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--business-accent);
  font-size: 0.7rem;
  font-weight: 900;
  letter-spacing: 0.16em;
  line-height: 1.5;
  text-transform: uppercase;

  &::before {
    content: "";
    display: inline-block;
    width: 26px;
    height: 1px;
    background: currentColor;
  }
`;

export const BusinessTitle = styled.h1`
  margin: 24px 0 28px;
  max-width: 780px;
  font-size: clamp(3.3rem, 6.2vw, 6.8rem);
  font-weight: 600;
  letter-spacing: -0.075em;
  line-height: 0.99;

  @media (max-width: 520px) {
    margin: 22px 0 24px;
    font-size: clamp(3rem, 14vw, 4.6rem);
    letter-spacing: -0.07em;
  }
`;

export const TitleAccent = styled.em`
  color: var(--business-accent);
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 500;
`;

export const BusinessDescription = styled.p`
  max-width: 570px;
  margin: 0;
  color: var(--business-muted);
  font-size: clamp(1rem, 1.35vw, 1.15rem);
  line-height: 1.85;
`;

export const BusinessActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
  margin-top: 36px;

  @media (max-width: 520px) {
    align-items: stretch;
    flex-direction: column;
  }
`;

const buttonBase = css`
  min-height: 52px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  padding: 15px 20px;
  border: 1px solid transparent;
  border-radius: 2px;
  font-size: 0.7rem;
  font-weight: 900;
  letter-spacing: 0.07em;
  line-height: 1.4;
  text-align: center;
  transition:
    background 180ms ease,
    color 180ms ease,
    border-color 180ms ease,
    transform 180ms ease;

  svg {
    flex: 0 0 auto;
    transition: transform 180ms ease;
  }

  &:hover {
    transform: translateY(-2px);
  }

  &:hover svg {
    transform: translateX(3px);
  }

  ${focusRing}

  @media (max-width: 520px) {
    width: 100%;
  }
`;

export const PrimaryButton = styled.a`
  ${buttonBase}
  background: var(--app-primary);
  color: var(--business-bg);
  border-color: var(--app-primary);

  &:hover {
    background: var(--business-accent);
    border-color: var(--business-accent);
    color: var(--business-text);
  }
`;

export const SecondaryButton = styled.a`
  ${buttonBase}
  background: transparent;
  color: var(--business-text);
  border-color: var(--app-border-light);

  &:hover {
    border-color: var(--business-accent);
    color: var(--app-primary);
  }
`;

export const PortraitStage = styled.div`
  position: relative;
  width: min(100%, 490px);
  min-height: 530px;
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  isolation: isolate;
  animation: ${fadeUp} 750ms 100ms ease both;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    width: 78%;
    aspect-ratio: 1;
    border: 1px solid
      color-mix(in srgb, var(--business-accent) 55%, transparent);
    border-radius: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 63%;
    aspect-ratio: 1;
    border-radius: 50%;
    background: color-mix(in srgb, var(--business-accent) 18%, transparent);
  }

  @media (max-width: 900px) {
    min-height: 500px;
  }

  @media (max-width: 520px) {
    min-height: 390px;
    width: 100%;
  }
`;

export const PortraitLabel = styled.span`
  position: absolute;
  top: 4%;
  left: 0;
  max-width: 150px;
  color: var(--business-muted);
  font-size: 0.63rem;
  font-weight: 900;
  letter-spacing: 0.14em;
  line-height: 1.7;
`;

export const PortraitFrame = styled.div`
  width: min(75%, 340px);
  aspect-ratio: 0.78;
  overflow: hidden;
  border: 8px solid color-mix(in srgb, var(--business-bg) 85%, transparent);
  border-radius: 48% 48% 3px 3px;
  background: color-mix(
    in srgb,
    var(--business-accent) 25%,
    var(--business-bg)
  );
  box-shadow: 0 30px 80px
    color-mix(in srgb, var(--app-primary) 18%, transparent);
  transform: rotate(2deg);

  @media (max-width: 520px) {
    width: 72%;
  }
`;

export const PortraitImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
`;

export const FloatingNote = styled.div<{ $position: "productivity" | "order" }>`
  position: absolute;
  z-index: 2;
  ${({ $position }) =>
    $position === "productivity"
      ? css`
          top: 27%;
          left: -2%;
        `
      : css`
          right: -2%;
          bottom: 22%;
        `}
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 235px;
  padding: 15px 17px;
  border: 1px solid color-mix(in srgb, var(--business-text) 8%, transparent);
  background: var(--business-bg);
  box-shadow: 0 12px 40px
    color-mix(in srgb, var(--app-primary) 10%, transparent);

  > svg {
    flex: 0 0 auto;
    color: var(--business-accent);
    font-size: 1.2rem;
  }

  @media (max-width: 520px) {
    max-width: 195px;
    padding: 12px;
    gap: 9px;

    ${({ $position }) =>
      $position === "productivity"
        ? css`
            left: 0;
            top: 24%;
          `
        : css`
            right: 0;
            bottom: 17%;
          `}
  }
`;

export const FloatingNoteText = styled.span`
  display: grid;
  gap: 4px;
`;

export const FloatingNoteTitle = styled.strong`
  font-size: 0.76rem;
  font-weight: 900;
`;

export const FloatingNoteDescription = styled.small`
  color: var(--business-muted);
  font-size: 0.66rem;
  line-height: 1.4;
`;

export const CircleText = styled.span`
  position: absolute;
  right: 4%;
  top: 7%;
  writing-mode: vertical-rl;
  color: var(--business-muted);
  font-size: 0.6rem;
  font-weight: 900;
  letter-spacing: 0.18em;
`;

export const BusinessManifesto = styled.section`
  padding: clamp(68px, 9vw, 128px) 24px;
  display: grid;
  justify-items: center;
  width: 100%;
  min-height: 100%;
  gap: 26px;
  border-top: 1px solid var(--app-border-light);
  border-bottom: 1px solid var(--app-border-light);
  text-align: center;
`;

export const ManifestoNumber = styled.span`
  color: var(--business-accent);
  font-size: 0.68rem;
  font-weight: 900;
  letter-spacing: 0.14em;
`;

export const ManifestoText = styled.p`
  max-width: 950px;
  margin: 0;
  font-size: clamp(2rem, 4.8vw, 4.6rem);
  font-weight: 500;
  letter-spacing: -0.055em;
  line-height: 1.12;
`;

export const ManifestoDetail = styled.span`
  color: var(--business-muted);
  font-size: 0.66rem;
  font-weight: 900;
  letter-spacing: 0.12em;
`;

export const BusinessSolutions = styled.section`
  width: 100%;
  min-height: 100%;
  display: flex;
  @media (max-width: 720px) {
    width: min(100% - 36px, 1240px);
    padding: 78px 0;
  }
`;

export const SectionHeading = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  margin: 24px 0 22px;
  font-size: clamp(2.8rem, 5.4vw, 5.3rem);
  font-weight: 600;
  letter-spacing: -0.07em;
  line-height: 1.02;

  @media (max-width: 520px) {
    font-size: clamp(2.6rem, 12vw, 4rem);
  }
`;

export const SectionDescription = styled.p`
  max-width: 540px;
  margin: 0;
  color: var(--business-muted);
  font-size: 1rem;
  line-height: 1.8;
`;

export const SolutionList = styled.div`
  border-top: 1px solid var(--app-border-light);
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SolutionCard = styled.a`
  display: grid;
  height: 100%;
  grid-template-columns: 52px 68px minmax(0, 1fr) 42px;
  align-items: center;
  gap: clamp(18px, 3vw, 42px);
  padding: 30px 0;
  border-bottom: 1px solid var(--app-border-light);
  transition:
    padding 200ms ease,
    background 200ms ease;
  cursor: pointer;
  &:hover {
    padding-left: 12px;
    padding-right: 12px;
    background: color-mix(in srgb, var(--business-accent) 5%, transparent);
  }

  @media (max-width: 650px) {
    grid-template-columns: 32px 48px minmax(0, 1fr) 24px;
    gap: 14px;
    padding: 24px 0;
  }

  @media (max-width: 440px) {
    grid-template-columns: 30px minmax(0, 1fr) 24px;
    gap: 12px;
  }
`;

export const SolutionIndex = styled.span`
  align-self: start;
  padding-top: 5px;
  color: var(--business-accent);
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.06em;
`;

export const SolutionSymbol = styled.div`
  width: 58px;
  height: 58px;
  display: grid;
  place-items: center;
  border: 1px solid var(--app-border-light);
  border-radius: 50%;
  color: var(--business-accent);
  font-size: 1.25rem;
  transition:
    color 180ms ease,
    background 180ms ease,
    border-color 180ms ease;

  ${SolutionCard}:hover & {
    color: var(--business-bg);
    background: var(--app-primary);
    border-color: var(--app-primary);
  }

  @media (max-width: 650px) {
    width: 46px;
    height: 46px;
    font-size: 1.05rem;
  }

  @media (max-width: 440px) {
    display: none;
  }
`;

export const SolutionCopy = styled.div`
  min-width: 0;
`;

export const SolutionTitle = styled.h3`
  margin: 0 0 9px;
  font-size: clamp(1.1rem, 2vw, 1.55rem);
  font-weight: 700;
  letter-spacing: -0.035em;
`;

export const SolutionDescription = styled.p`
  max-width: 650px;
  margin: 0;
  color: var(--business-muted);
  font-size: 0.93rem;
  line-height: 1.75;
`;

export const SolutionArrow = styled.span`
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border: 1px solid var(--app-border-light);
  border-radius: 50%;
  color: var(--business-accent);
  transition:
    transform 180ms ease,
    color 180ms ease,
    background 180ms ease;

  ${SolutionCard}:hover & {
    transform: translateX(4px);
    color: var(--business-bg);
    background: var(--app-primary);
  }

  @media (max-width: 650px) {
    width: 30px;
    height: 30px;
    font-size: 0.8rem;
  }
`;

export const BusinessProcess = styled.section`
  padding: clamp(82px, 10vw, 140px) max(4.5vw, calc((100% - 1240px) / 2));
  display: grid;
  grid-template-columns: minmax(250px, 0.8fr) minmax(0, 1.2fr);
  gap: clamp(50px, 9vw, 140px);
  background: var(--app-primary);
  color: var(--business-bg);

  ${Eyebrow} {
    color: var(--business-accent);
  }

  ${TitleAccent} {
    color: var(--business-accent);
  }

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    padding: 78px 24px;
    gap: 48px;
  }
`;

export const ProcessHeading = styled.div`
  align-self: start;
`;

export const ProcessTitle = styled.h2`
  margin: 24px 0 0;
  font-size: clamp(2.9rem, 5vw, 5rem);
  font-weight: 600;
  letter-spacing: -0.07em;
  line-height: 1.03;

  @media (max-width: 520px) {
    font-size: clamp(2.7rem, 12vw, 4rem);
  }
`;

export const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(20px, 3vw, 42px);
  align-self: center;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

export const ProcessStep = styled.article`
  padding-top: 20px;
  border-top: 1px solid color-mix(in srgb, var(--business-bg) 26%, transparent);

  @media (max-width: 650px) {
    padding: 24px 0;
    border-top: 0;
    border-bottom: 1px solid
      color-mix(in srgb, var(--business-bg) 26%, transparent);
  }
`;

export const StepNumber = styled.span`
  display: block;
  margin-bottom: 32px;
  color: var(--business-accent);
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.1em;

  @media (max-width: 650px) {
    margin-bottom: 16px;
  }
`;

export const StepTitle = styled.h3`
  margin: 0 0 12px;
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: -0.025em;
`;

export const StepDescription = styled.p`
  margin: 0;
  color: color-mix(in srgb, var(--business-bg) 70%, transparent);
  font-size: 0.9rem;
  line-height: 1.8;
`;

export const BusinessContact = styled.section`
  width: min(100% - 9vw, 1240px);
  margin: 0 auto;
  padding: clamp(90px, 11vw, 155px) 0;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 0.72fr);
  align-items: end;
  gap: clamp(40px, 8vw, 120px);

  @media (max-width: 800px) {
    width: min(100% - 36px, 1240px);
    grid-template-columns: 1fr;
    gap: 36px;
    padding: 78px 0;
  }
`;

export const ContactCopy = styled.div`
  max-width: 700px;
`;

export const ContactTitle = styled.h2`
  margin: 24px 0;
  font-size: clamp(3rem, 6vw, 6rem);
  font-weight: 600;
  letter-spacing: -0.075em;
  line-height: 1;

  @media (max-width: 520px) {
    font-size: clamp(2.8rem, 13vw, 4.3rem);
  }
`;

export const ContactDescription = styled.p`
  max-width: 500px;
  margin: 0;
  color: var(--business-muted);
  font-size: 1rem;
  line-height: 1.8;
`;

export const ContactActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;

  ${PrimaryButton} {
    min-width: 220px;
  }

  @media (max-width: 800px) {
    align-items: stretch;
  }
`;

export const ContactProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--business-muted);
  font-size: 0.82rem;
  line-height: 1.6;
  transition: color 180ms ease;

  svg {
    flex: 0 0 auto;
    color: var(--business-accent);
    transition: transform 180ms ease;
  }

  &:hover {
    color: var(--app-primary);
  }

  &:hover svg {
    transform: translateX(4px);
  }

  ${focusRing}
`;

export const BusinessFooter = styled.footer`
  width: min(100% - 9vw, 1440px);
  min-height: 92px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 20px;
  border-top: 1px solid var(--app-border-light);

  @media (max-width: 760px) {
    width: min(100% - 36px, 1440px);
    grid-template-columns: 1fr auto;
    padding: 24px 0;
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    justify-items: start;
    gap: 12px;
  }
`;

export const FooterName = styled.span`
  font-size: 0.74rem;
  font-weight: 900;
  letter-spacing: 0.1em;
`;

export const FooterCaption = styled.span`
  justify-self: center;
  color: var(--business-muted);
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.1em;

  @media (max-width: 760px) {
    display: none;
  }
`;

export const FooterBackButton = styled.button`
  justify-self: end;
  padding: 10px 0;
  border: 0;
  background: transparent;
  color: var(--business-muted);
  font-size: 0.68rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  transition: color 180ms ease;
  display: flex;
  align-items: center;
  justify-content: center;
cursor: pointer;
  svg{
    font-size: 2rem;
  }

  &:hover {
    color: var(--app-primary);
  }

  ${focusRing}

  @media (max-width: 520px) {
    justify-self: start;
  }
`;
