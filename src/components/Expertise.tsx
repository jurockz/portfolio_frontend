import {
  StyledContainer,
  StyledTitle,
  StyledSection,
  StyledSecContainer,
  StyledDefaultWrapper,
} from "../styles/Expertise.styled";
import Chips from "./common/Chips";
import DownAnimation from "./DownAnimation";
import { motion } from "framer-motion";

const DownStyledTitle = DownAnimation(StyledTitle);
const UpStyledWrapper = motion(StyledDefaultWrapper);

export default function Expertise() {
  return (
    <StyledSection id="Expertise" colorb="#ffffff">
      <StyledContainer>
        <div>
          <Chips
            title={{
              children: "Kenntnisse",
              $fontSize: 40,
              $paddingBottom: 20,
              $color: "black",
              $animate: true,
              $fadeIn: "bottom",
            }}
            chipWrapper={{
              $animate: true,
              $fadeIn: "bottom",
            }}
            content={[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Next js",
              "Vue",
              "Node.js",
              "Express",
              "Python",
              "Flask",
              "TensorFlow",
              "Selenium",
              "MongoDB",
              "Java",
              "Spring Boot",
            ]}
          />
        </div>
        <StyledSecContainer>
          <UpStyledWrapper
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <StyledTitle>Sprachen</StyledTitle>

            <div>Deutsch - Muttersprache</div>
            <div>Englisch - Fließend in Wort und Schrift</div>
          </UpStyledWrapper>
          <div>
            <Chips
              title={{
                children: "Hobbys",
                $fontSize: 40,
                $paddingBottom: 20,
                $color: "black",
                $animate: true,
                $fadeIn: "bottom",
              }}
              chipWrapper={{
                $animate: true,
                $fadeIn: "bottom",
              }}
              content={["Basketball", "Joggen", "Malen"]}
            />
          </div>
        </StyledSecContainer>
      </StyledContainer>
    </StyledSection>
  );
}
