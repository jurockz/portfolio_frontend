import {
  StyledProjectContainer,
  StyledProjectsContainer,
  StyledLogoContainer,
} from "../styles/Projects.styled";
import github_icon from "../assets/github_icon.svg";
import Chips from "./common/Chips";
import { StyledTextLink, StyledWordSpan } from "../styles/Common.styled";
import Logo from "./common/Logo";
import Text from "./common/Text";

export default function Projects() {
  return (
    <StyledProjectsContainer id="Projects" colorb="white">
      <Text
        $color="black"
        $fontSize={60}
        $paddingBottom={100}
        $fontWeight="bold"
        $mediaPaddingBottom={50}
        $animate
        $fadeIn="bottom"
      >
        Projekte
      </Text>
      <StyledProjectContainer id="portfolio_project">
        <Text
          $color="black"
          $fontSize={30}
          $paddingBottom={10}
          $fontWeight="bold"
          $animate
          $fadeIn="bottom"
        >
          Portfolio
        </Text>
        <Text
          $paddingTop={20}
          $paddingBottom={20}
          $maxWidth="60%"
          $mediaMaxWidth="80%"
          $animate
          $fadeIn="bottom"
        >
          Diese <StyledWordSpan>Portfolio-Website</StyledWordSpan> ist
          selbstverständlich auch eines meiner Projekte. Da ich bei meiner
          Arbeit bei Micromerce und in vielen anderen Projekten viel Erfahrung
          mit <StyledWordSpan>React</StyledWordSpan> und{" "}
          <StyledWordSpan>TypeScript</StyledWordSpan> gesammelt habe, fiel meine
          Wahl auch hier auf diese Kombination. Für das Styling nutze ich die
          CSS-Library <StyledWordSpan>styled-components</StyledWordSpan>, da sie
          es ermöglicht, Styles direkt in den Komponenten zu definieren, was zu
          besserer Modularität und Übersichtlichkeit führt. Bei jedem Projekt
          setze ich mir zum Ziel, etwas Neues zu lernen. Deshalb habe ich in
          diesem Projekt die Library
          <StyledWordSpan>Framer Motion</StyledWordSpan> genutzt, um mehrere
          Scroll-Animationen zu implementieren. Die Website wird über einen{" "}
          <StyledWordSpan>Nginx-Server</StyledWordSpan> ausgeliefert.
        </Text>
        <Chips
          title={{
            children: "Techstack:",
            $paddingBottom: 10,
            $color: "black",
          }}
          chipWrapper={{
            $maxWidth: "400px",
          }}
          content={[
            "Typescript",
            "React",
            "Framer Motion",
            "styled-components",
            "Vite",
            "Nginx",
          ]}
          padding={{
            $paddingBottom: 10,
          }}
        />
        <Logo
          src={github_icon}
          width={60}
          height={60}
          href="https://github.com/jurockz/portfolio_frontend"
          alt="github"
        />
      </StyledProjectContainer>

      <StyledProjectContainer id="chat_project">
        <Text
          $color="black"
          $fontSize={30}
          $paddingBottom={10}
          $fontWeight="bold"
          $animate
          $fadeIn="bottom"
        >
          Chat Applikation
        </Text>
        <Text
          $paddingTop={20}
          $maxWidth="60%"
          $mediaMaxWidth="80%"
          $animate
          $fadeIn="bottom"
        >
          In diesem Projekt habe ich erneut eine{" "}
          <StyledWordSpan>Chat-Applikation</StyledWordSpan> entwickelt. Zuvor
          hatte ich bereits in einem Uni-Projekt eine ähnliche Anwendung mit{" "}
          <StyledWordSpan>React</StyledWordSpan>,{" "}
          <StyledWordSpan>Java</StyledWordSpan> und{" "}
          <StyledWordSpan>Spring Boot</StyledWordSpan> erstellt. Diesmal wollte
          ich jedoch die Umsetzung mit <StyledWordSpan>Vue</StyledWordSpan>,{" "}
          <StyledWordSpan>Node.js</StyledWordSpan>,{" "}
          <StyledWordSpan>Express</StyledWordSpan> und{" "}
          <StyledWordSpan>Socket.io</StyledWordSpan> angehen. Mit{" "}
          <StyledWordSpan>Node.js</StyledWordSpan> und{" "}
          <StyledWordSpan>Express</StyledWordSpan> hatte ich bereits
          Erfahrungen, während <StyledWordSpan>Vue</StyledWordSpan> für mich
          Neuland war. Schnell stellte ich jedoch fest, dass sich mein Wissen
          aus <StyledWordSpan>React</StyledWordSpan>-Projekten problemlos auf{" "}
          <StyledWordSpan>Vue</StyledWordSpan> übertragen ließ. Im Gegensatz zu
          meinem Uni-Projekt habe ich bisher nur einen Gruppenchat umgesetzt, da
          ich das Projekt innerhalb eines Wochenendes fertiggestellt habe. In
          Zukunft plane ich, auch private Chats zu integrieren. Private Chats
          machen jedoch nur mit einem gut durchdachten{" "}
          <StyledWordSpan>User-Management-System</StyledWordSpan> Sinn, weshalb
          ich mich aktuell mit <StyledWordSpan>Keycloak</StyledWordSpan>{" "}
          auseinandersetze.
        </Text>
        <StyledTextLink
          href="https://auju.org/chat"
          target="_blanc"
          $color="#57669c"
          $fontSize={18}
          $paddingBottom={20}
        >
          Probiere den Chat hier selber aus !
        </StyledTextLink>
        <Chips
          title={{
            children: "Techstack:",
            $paddingBottom: 10,
            $color: "black",
          }}
          chipWrapper={{
            $maxWidth: "300px",
          }}
          content={[
            "Typescript",
            "Vue",
            "Node.js",
            "Express",
            "Socket.io",
            "Vite",
            "Nginx",
          ]}
          padding={{
            $paddingBottom: 10,
          }}
        />
        <StyledLogoContainer>
          <Logo
            src={github_icon}
            width={60}
            height={60}
            href="https://github.com/jurockz/vue-chat-frontend"
            alt="github"
            title="Frontend"
          />
          <Logo
            src={github_icon}
            width={60}
            height={60}
            href="https://github.com/jurockz/node-chat-api"
            alt="github"
            title="Backend"
          />
        </StyledLogoContainer>
      </StyledProjectContainer>
    </StyledProjectsContainer>
  );
}
