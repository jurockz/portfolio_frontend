import { motion } from "framer-motion";
import { StyledChipWrapper } from "../../styles/Chips.styled";
import { AnimationI } from "../../types/common";

export interface ChipsWrapperProps extends AnimationI {
  children?: React.ReactNode;
  $maxWidth?: string;
}

const MotionStyledChipsWrapper = motion.create(StyledChipWrapper);

const directionMap = {
  bottom: { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } },
  right: { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } },
  left: { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } },
  top: { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 } },
};

export default function AnimationWrapper({
  children,
  $animate,
  $fadeIn = "bottom",
  $maxWidth,
}: ChipsWrapperProps) {
  if ($animate) {
    const variant = directionMap[$fadeIn] || directionMap.top;
    return (
      <MotionStyledChipsWrapper
        initial="hidden"
        whileInView="visible"
        variants={variant}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        $maxWidth={$maxWidth}
      >
        {children}
      </MotionStyledChipsWrapper>
    );
  } else {
    return (
      <StyledChipWrapper $maxWidth={$maxWidth}>{children}</StyledChipWrapper>
    );
  }
}
