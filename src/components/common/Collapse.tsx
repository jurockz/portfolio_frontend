import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  StyledCollapseContainer,
  StyledTitleContainer,
} from "../../styles/Collapse.styled";
import { alignT } from "../../types/common";
import Text from "./Text";

interface CollapseProps {
  children: string | JSX.Element | JSX.Element[];
  title: string;
  initExpanded?: boolean;
  width?: string;
  align?: alignT;
}

export default ({
  children,
  title,
  initExpanded = false,
  width,
  align,
}: CollapseProps) => {
  const [isExpanded, setExpanded] = useState<boolean>(initExpanded);

  return (
    <StyledCollapseContainer align={align}>
      <AnimatePresence initial={false}>
        <StyledTitleContainer
          width={width}
          onClick={() => setExpanded(!isExpanded)}
        >
          <Text $paddingBottom={10} $paddingTop={10} $color="black">
            {title}
          </Text>
        </StyledTitleContainer>
        {isExpanded && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.div
              variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
              transition={{ duration: 0.8 }}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </StyledCollapseContainer>
  );
};
