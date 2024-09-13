import React from "react";
import { motion } from "framer-motion";

const animationVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 },
};

const DownAnimation = <T extends React.ComponentType<any>>(Component: T) => {
  return ({ children, ...props }: React.ComponentProps<T>) => {
    const MotionComponent = motion(Component as any);

    return (
      <MotionComponent
        initial="hidden"
        whileInView="visible"
        variants={animationVariants}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        {...(props as React.ComponentProps<T>)} // Type assertion to match prop types
      >
        {children}
      </MotionComponent>
    );
  };
};

DownAnimation.displayName = "DownAnimation";

export default DownAnimation;
