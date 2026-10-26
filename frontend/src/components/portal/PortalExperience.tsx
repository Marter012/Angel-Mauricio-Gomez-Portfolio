import { FaArrowDown, FaArrowRight, FaCode, FaLightbulb } from "react-icons/fa";
import type { Experience } from "../../types/portfolio-ui";
import type { PortfolioData } from "../../types/portfolio";
import portraitPhoto from "../../assets/personalPhoto.png";
import {
  PortalMain,
  PortalIntro,
  SectionIndex,
  PulseDot,
  IntroTitle,
  IntroTitleAccent,
  IntroBottom,
  IntroDescription,
  VerticalNote,
  PortalShowcase,
  PortraitStage,
  PortraitBackdrop,
  PortalPortrait,
  PortraitCoordinate,
  PortraitStamp,
  PortraitStampInitials,
  PortraitStampCaption,
  PortalMessage,
  Eyebrow,
  PortalMessageText,
  PortalChoices,
  PortalChoice,
  ChoiceNumber,
  ChoiceSymbol,
  ChoiceContent,
  ChoiceKicker,
  ChoiceTitle,
  ChoiceDescription,
  ChoiceAction,
  ChoiceGiant,
  PortalFooter,
  FooterStatement,
  FooterDivider,
} from "./PortalExperienceStyles";
import { Line } from "../../utils/GlobalStyles.js";

type Props = {
  portfolio: PortfolioData;
  setExperience: (experience: Experience) => void;
};

function Initials({ name }: { name: string }) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0] ?? "")
    .join("")
    .toUpperCase();
}

export default function PortalExperience({ portfolio, setExperience }: Props) {
  const { site, portal } = portfolio;

  return (
    <PortalMain id="inicio">
      <PortalIntro>
        <div className="portalContainer">
          <SectionIndex>
            <PulseDot />
            {portal.welcome}
          </SectionIndex>

          <IntroTitle>
            {portal.headlineLines.slice(0, -1).map((line, index) => (
              <span key={`${line}-${index}`}>
                {line}
                <br />
              </span>
            ))}
            <IntroTitleAccent>
              {portal.headlineLines[portal.headlineLines.length - 1]}
            </IntroTitleAccent>
          </IntroTitle>

          <IntroBottom>
            <IntroDescription>{portal.description}</IntroDescription>
            <VerticalNote>
              {portal.verticalNote}
              <FaArrowDown aria-hidden="true" />
            </VerticalNote>
          </IntroBottom>
        </div>

        <PortraitStage>
          <PortraitBackdrop />
          <PortalPortrait
            src={portraitPhoto}
            alt={`Retrato profesional de ${site.name}`}
          />
          <PortraitCoordinate $position="top">
            {portal.coordinate}
          </PortraitCoordinate>
          <PortraitCoordinate $position="bottom">
            {portal.coordinateCaption}
          </PortraitCoordinate>
          <PortraitStamp>
            <PortraitStampInitials>
              <Initials name={site.name} />
            </PortraitStampInitials>
            <PortraitStampCaption>{portal.stamp}</PortraitStampCaption>
          </PortraitStamp>
        </PortraitStage>
      </PortalIntro>

      <PortalShowcase>
        <Line />
        <PortalMessage>
          <Eyebrow>{portal.messageEyebrow}</Eyebrow>
          <PortalMessageText>
            {portal.messageLines.map((line, index) => (
              <span key={`${line}-${index}`}>
                {line}
                {index < portal.messageLines.length - 1 && <br />}
              </span>
            ))}
          </PortalMessageText>
        </PortalMessage>
        <Line />
      </PortalShowcase>

      <PortalChoices>
        <PortalChoice
          type="button"
          $variant="business"
          onClick={() => setExperience("business")}
          aria-label={portal.businessChoice.action}
        >
          <ChoiceNumber>{portal.businessChoice.number}</ChoiceNumber>
          <ChoiceSymbol>
            <FaLightbulb aria-hidden="true" />
          </ChoiceSymbol>
          <ChoiceContent>
            <ChoiceKicker>{portal.businessChoice.kicker}</ChoiceKicker>
            <ChoiceTitle>
              {portal.businessChoice.titleLines.map((line, index) => (
                <span key={`${line}-${index}`}>
                  {line}
                  {index < portal.businessChoice.titleLines.length - 1 && (
                    <br />
                  )}
                </span>
              ))}
            </ChoiceTitle>
            <ChoiceDescription>
              {portal.businessChoice.description}
            </ChoiceDescription>
          </ChoiceContent>
          <ChoiceAction>
            {portal.businessChoice.action}
            <FaArrowRight aria-hidden="true" />
          </ChoiceAction>
          <ChoiceGiant aria-hidden="true">↗</ChoiceGiant>
        </PortalChoice>

        <PortalChoice
          type="button"
          $variant="tech"
          onClick={() => setExperience("technical")}
          aria-label={portal.technicalChoice.action}
        >
          <ChoiceNumber>{portal.technicalChoice.number}</ChoiceNumber>
          <ChoiceSymbol>
            <FaCode aria-hidden="true" />
          </ChoiceSymbol>
          <ChoiceContent>
            <ChoiceKicker>{portal.technicalChoice.kicker}</ChoiceKicker>
            <ChoiceTitle>
              {portal.technicalChoice.titleLines.map((line, index) => (
                <span key={`${line}-${index}`}>
                  {line}
                  {index < portal.technicalChoice.titleLines.length - 1 && (
                    <br />
                  )}
                </span>
              ))}
            </ChoiceTitle>
            <ChoiceDescription>
              {portal.technicalChoice.description}
            </ChoiceDescription>
          </ChoiceContent>
          <ChoiceAction>
            {portal.technicalChoice.action}
            <FaArrowRight aria-hidden="true" />
          </ChoiceAction>
          <ChoiceGiant aria-hidden="true">{"</>"}</ChoiceGiant>
        </PortalChoice>
      </PortalChoices>

      <PortalFooter>
        <FooterStatement>{portal.footerLeft}</FooterStatement>
        <FooterStatement>
          {portal.footerRight.split("|")[0]}
          <FooterDivider />
          {portal.footerRight.split("|")[1] ?? ""}
        </FooterStatement>
      </PortalFooter>
    </PortalMain>
  );
}
