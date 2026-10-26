import {
  FaArrowRight, FaBolt, FaEnvelope, FaLaptopCode,
  FaLightbulb, FaRegClock, FaStore,
} from "react-icons/fa";
import businessExperience from "../../assets/businessExperience.png";
import type { PortfolioData } from "../../types/portfolio";
import type { Experience } from "../../types/portfolio-ui";
import {
  BusinessMain, BusinessCover, BusinessCoverCopy, Eyebrow, BusinessTitle,
  TitleAccent, BusinessDescription, BusinessActions, PrimaryButton,
  SecondaryButton, PortraitStage, PortraitLabel, PortraitFrame, PortraitImage,
  FloatingNote, FloatingNoteText, FloatingNoteTitle, FloatingNoteDescription,
  CircleText, BusinessManifesto, ManifestoNumber, ManifestoText, ManifestoDetail,
  BusinessSolutions, SectionHeading, SectionTitle, SectionDescription,
  SolutionList, SolutionCard, SolutionIndex, SolutionSymbol, SolutionCopy,
  SolutionTitle, SolutionDescription, SolutionArrow, BusinessProcess,
  ProcessHeading, ProcessTitle, ProcessSteps, ProcessStep, StepNumber,
  StepTitle, StepDescription, BusinessContact, ContactCopy, ContactTitle,
  ContactDescription, ContactActions, ContactProjectLink, BusinessFooter,
  FooterName, FooterCaption, FooterBackButton,
} from "./BusinessExperienceStyles";
import { HiMiniArrowLeftCircle } from "react-icons/hi2";

type Props = {
  portfolio: PortfolioData;
  setExperience: (experience: Experience | null) => void;
};

const solutionIcons = [FaStore, FaLaptopCode, FaBolt, FaLightbulb];

export default function BusinessExperience({ portfolio, setExperience }: Props) {
  const { site, business } = portfolio;
  const whatsapp = site.whatsapp || `https://wa.me/`;
  const contactHref = (message: string) =>
    `${whatsapp}${whatsapp.includes("?") ? "&" : "?"}text=${encodeURIComponent(message)}`;

  return (
    <BusinessMain id="negocio">
      <BusinessCover>
        <BusinessCoverCopy>
          <Eyebrow>{business.eyebrow}</Eyebrow>
          <BusinessTitle>{business.title}<br /><TitleAccent>{business.accent}</TitleAccent></BusinessTitle>
          <BusinessDescription>{business.description}</BusinessDescription>
          <BusinessActions>
            <PrimaryButton href="#contacto-negocio">CONVERSEMOS SOBRE TU IDEA <FaArrowRight aria-hidden="true" /></PrimaryButton>
            <SecondaryButton href="#soluciones">VER POSIBILIDADES</SecondaryButton>
          </BusinessActions>
        </BusinessCoverCopy>

        <PortraitStage>
          <PortraitLabel>{business.portraitLabel}</PortraitLabel>
          <PortraitFrame><PortraitImage src={businessExperience} alt={`Ilustración de soluciones digitales para ${site.name}`} /></PortraitFrame>
          <FloatingNote $position="productivity">
            <FaRegClock aria-hidden="true" />
            <FloatingNoteText>
              <FloatingNoteTitle>{business.productivityTitle}</FloatingNoteTitle>
              <FloatingNoteDescription>{business.productivityDescription}</FloatingNoteDescription>
            </FloatingNoteText>
          </FloatingNote>
          <FloatingNote $position="order">
            <FaStore aria-hidden="true" />
            <FloatingNoteText>
              <FloatingNoteTitle>{business.organizationTitle}</FloatingNoteTitle>
              <FloatingNoteDescription>{business.organizationDescription}</FloatingNoteDescription>
            </FloatingNoteText>
          </FloatingNote>
          <CircleText>DIGITALIZAR PARA MEJORAR</CircleText>
        </PortraitStage>
      </BusinessCover>

      <BusinessManifesto>
        <ManifestoNumber>{business.manifestoNumber}</ManifestoNumber>
        <ManifestoText>{business.manifestoText}</ManifestoText>
        <ManifestoDetail>{business.manifestoDetail}</ManifestoDetail>
      </BusinessManifesto>

      <BusinessSolutions id="soluciones">
        <SectionHeading>
          <Eyebrow>{business.solutionsEyebrow}</Eyebrow>
          <SectionTitle>{business.solutionsTitle}<br /><TitleAccent>{business.solutionsAccent}</TitleAccent></SectionTitle>
          <SectionDescription>{business.solutionsDescription}</SectionDescription>
        </SectionHeading>
        <SolutionList>
          {business.solutions.map((solution, index) => {
            const Icon = solutionIcons[index % solutionIcons.length];
            return (
              <SolutionCard href={contactHref(solution.message)} key={`${solution.title}-${index}`}>
                <SolutionIndex>{String(index + 1).padStart(2, "0")}</SolutionIndex>
                <SolutionSymbol><Icon aria-hidden="true" /></SolutionSymbol>
                <SolutionCopy>
                  <SolutionTitle>{solution.title}</SolutionTitle>
                  <SolutionDescription>{solution.description}</SolutionDescription>
                </SolutionCopy>
                <SolutionArrow><FaArrowRight aria-hidden="true" /></SolutionArrow>
              </SolutionCard>
            );
          })}
        </SolutionList>
      </BusinessSolutions>

      <BusinessProcess>
        <ProcessHeading>
          <Eyebrow>{business.processEyebrow}</Eyebrow>
          <ProcessTitle>
            {business.processTitleLines.map((line, index) => (
              <span key={`${line}-${index}`}>{index === business.processTitleLines.length - 1 ? <TitleAccent>{line}</TitleAccent> : line}{index < business.processTitleLines.length - 1 && <br />}</span>
            ))}
          </ProcessTitle>
        </ProcessHeading>
        <ProcessSteps>
          {business.processSteps.map((step, index) => (
            <ProcessStep key={`${step.title}-${index}`}>
              <StepNumber>{String(index + 1).padStart(2, "0")}</StepNumber>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </ProcessStep>
          ))}
        </ProcessSteps>
      </BusinessProcess>

      <BusinessContact id="contacto-negocio">
        <ContactCopy>
          <Eyebrow>{business.contactEyebrow}</Eyebrow>
          <ContactTitle>
            {business.contactTitleLines.map((line, index) => (
              <span key={`${line}-${index}`}>{line}{index < business.contactTitleLines.length - 1 && <br />}</span>
            ))}
          </ContactTitle>
          <ContactDescription>{business.contactDescription}</ContactDescription>
        </ContactCopy>
        <ContactActions>
          <PrimaryButton href={`mailto:${site.email}`}>ESCRIBIR UN EMAIL <FaEnvelope aria-hidden="true" /></PrimaryButton>
          <ContactProjectLink href={site.github} target="_blank" rel="noreferrer">
            También podés conocer mis proyectos <FaArrowRight aria-hidden="true" />
          </ContactProjectLink>
        </ContactActions>
      </BusinessContact>

      <BusinessFooter>
        <FooterName>{site.name}</FooterName>
        <FooterCaption>{business.footerCaption}</FooterCaption>
        <FooterBackButton type="button" onClick={() => setExperience(null)}>VOLVER AL INICIO <HiMiniArrowLeftCircle /></FooterBackButton>
      </BusinessFooter>
    </BusinessMain>
  );
}
