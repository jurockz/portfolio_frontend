import React from "react";
import { motion } from "framer-motion";

const animationVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 },
};

const DownAnimation = (Component: React.ElementType) => {
  return ({ children, ...props }: React.ComponentProps<any>) => {
    const MotionComponent = motion(Component);

    return (
      <MotionComponent
        initial="hidden"
        whileInView="visible"
        variants={animationVariants}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        {...props}
      >
        {children}
      </MotionComponent>
    );
  };
};

DownAnimation.displayName = "DownAnimation";

export default DownAnimation;
