import { motion } from "framer-motion";
import { StyledText } from "../../styles/Common.styled";
import { AnimationI, TextI } from "../../types/common";

export interface CompTextI extends TextI, AnimationI {
  children?: React.ReactNode;
}

const MotionStyledText = motion.create(StyledText);

const directionMap = {
  bottom: { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } },
  right: { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } },
  left: { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } },
  top: { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 } },
};

export default ({
  children,
  $animate,
  $fadeIn = "bottom",
  ...restProps
}: CompTextI) => {
  if ($animate) {
    const variant = directionMap[$fadeIn] || directionMap.top;
    return (
      <MotionStyledText
        initial="hidden"
        whileInView="visible"
        variants={variant}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        {...restProps}
      >
        {children}
      </MotionStyledText>
    );
  } else {
    return <StyledText {...restProps}>{children}</StyledText>;
  }
};
