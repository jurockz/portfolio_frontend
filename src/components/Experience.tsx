import {
  StyledExpContainer,
  StyledLogoContainer,
  StyledSection,
} from "../styles/Experience.styled";

import check24Logo from "../assets/check24_logo.svg";
import micromerceLogo from "../assets/micromerce_logo_text.svg";
import rhLogo from "../assets/rh_logo_text.svg";
import { StyledWordSpan } from "../styles/Common.styled";
import Text from "./common/Text";

export default function Experience() {
  return (
    <StyledSection id="Experience" colorb="white">
      <StyledExpContainer>
        <StyledLogoContainer>
          <img src={check24Logo} width={200} alt="check24 Logo" />
        </StyledLogoContainer>
        <Text
          $paddingBottom={10}
          $maxWidth="60%"
          $mediaMaxWidth="80%"
          $animate
          $fadeIn="bottom"
        >
          Bei <StyledWordSpan>CHECK24</StyledWordSpan> habe ich zunächst in der
          QA-Abteilung manuelle Tests für die Apps und die Website durchgeführt.
          Bereits nach kurzer Zeit übernahm ich zunehmend Programmieraufgaben,
          wodurch ich erste Erfahrungen im Frontend mit{" "}
          <StyledWordSpan>HTML</StyledWordSpan>,{" "}
          <StyledWordSpan>CSS</StyledWordSpan>,{" "}
          <StyledWordSpan>JavaScript</StyledWordSpan> und{" "}
          <StyledWordSpan>React</StyledWordSpan> sowie im Backend mit{" "}
          <StyledWordSpan>Python</StyledWordSpan>,{" "}
          <StyledWordSpan>Flask</StyledWordSpan> und{" "}
          <StyledWordSpan>MongoDB</StyledWordSpan> sammeln konnte. Zudem
          erlernte ich den Umgang mit <StyledWordSpan>Git</StyledWordSpan> und
          arbeitete im Scrum-Team.
        </Text>
        <Text
          $paddingBottom={10}
          $maxWidth="60%"
          $mediaMaxWidth="80%"
          $animate
          $fadeIn="bottom"
        >
          Darüber hinaus erstellte ich mit{" "}
          <StyledWordSpan>Python</StyledWordSpan> und{" "}
          <StyledWordSpan>Selenium/Appium</StyledWordSpan> automatisierte Tests
          für die CHECK24-Website und -App. Gegen Ende meiner Tätigkeit bekam
          ich die Verantwortung übertragen, die QA-Website, auf der die
          Ergebnisse der automatisierten Testläufe und Analysen angezeigt
          werden, neu zu designen und zu entwickeln. Hierbei konnte ich mein
          gesammeltes Wissen erfolgreich anwenden und erhielt durchweg positive
          Rückmeldungen.
        </Text>
      </StyledExpContainer>

      <StyledExpContainer>
        <StyledLogoContainer>
          <img src={micromerceLogo} width={200} alt="check24 Logo" />
        </StyledLogoContainer>
        <Text
          $paddingBottom={10}
          $maxWidth="60%"
          $mediaMaxWidth="80%"
          $animate
          $fadeIn="bottom"
        >
          Um meine Frontend-Erfahrungen weiter auszubauen, wechselte ich zu{" "}
          <StyledWordSpan>Micromerce</StyledWordSpan>. Dort konnte ich mein
          Wissen und meine praktischen Fähigkeiten, insbesondere in{" "}
          <StyledWordSpan>React</StyledWordSpan> und{" "}
          <StyledWordSpan>TypeScript</StyledWordSpan>, deutlich vertiefen. In
          dieser Zeit habe ich nicht nur meine Fähigkeit, Probleme eigenständig
          zu lösen, verbessert, sondern auch von der Unterstützung erfahrener
          Kollegen profitiert, sei es durch direkte Hilfe oder im Rahmen von
          Pair Programming. Zu meinen Aufgaben bei Micromerce gehörte es, neue
          Features in das Frontend des Micromerce-CRM-Systems zu integrieren,
          Code zu refaktorisieren und Bugs zu identifizieren und zu beheben.
          Nach einem Jahr entschied ich mich, meine Stelle zu kündigen, um im
          letzten Studienjahr meinen Fokus auf den erfolgreichen Abschluss
          meines Bachelors zu legen. Diese Entscheidung erwies sich als richtig,
          wie meine sehr gut abgeschlossene Bachelorthesis zeigt.
        </Text>
      </StyledExpContainer>

      <StyledExpContainer>
        <StyledLogoContainer>
          <img src={rhLogo} width={200} alt="check24 Logo" />
        </StyledLogoContainer>
        <Text
          $paddingBottom={10}
          $maxWidth="60%"
          $mediaMaxWidth="80%"
          $animate
          $fadeIn="bottom"
        >
          An der Hochschule wurden uns in mehreren Modulen die Grundlagen der
          objektorientierten Programmierung beigebracht. Jedes Semester
          erstellten wir ein Coding-Projekt, um das theoretische Wissen aus den
          Modulen zu festigen. Dabei entwickelte ich unter anderem ein{" "}
          <StyledWordSpan>React</StyledWordSpan>-Projekt zur Visualisierung
          verschiedener <StyledWordSpan>Wegfindungsalgorithmen</StyledWordSpan>.
          Außerdem erstellte ich mit <StyledWordSpan>Java</StyledWordSpan>,{" "}
          <StyledWordSpan>Spring Boot</StyledWordSpan>,{" "}
          <StyledWordSpan>WebSocket</StyledWordSpan> und{" "}
          <StyledWordSpan>SQL</StyledWordSpan> im Backend sowie{" "}
          <StyledWordSpan>TypeScript</StyledWordSpan> und{" "}
          <StyledWordSpan>React</StyledWordSpan> im Frontend eine
          Chat-Applikation. Gegen Ende meines Studiums beschäftigte ich mich im
          Rahmen meiner Bachelor-Thesis intensiv mit{" "}
          <StyledWordSpan>Python</StyledWordSpan> und{" "}
          <StyledWordSpan>TensorFlow</StyledWordSpan>. Für meine Bachelor-
          Thesis mit dem Titel „Übersetzung handschriftlicher mathematischer
          Ausdrücke in LaTeX: Implementierung und Evaluation eines
          transformerbasierten Modells“ erhielt ich die Auszeichnung für die{" "}
          <StyledWordSpan>beste Bachelor-Thesis</StyledWordSpan> im Fachbereich
          Informatik.
        </Text>
      </StyledExpContainer>
    </StyledSection>
  );
}
