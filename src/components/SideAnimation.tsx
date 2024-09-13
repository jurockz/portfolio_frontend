import React from "react";
import { motion } from "framer-motion";

const animationVariantsLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const animationVariantsRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const SideAnimation = <T extends React.ElementType>(Component: T) => {
  return ({
    children,
    side,
    ...props
  }: {
    children: React.ReactNode;
    side: "left" | "right";
  } & React.ComponentProps<T>) => {
    const MotionComponent = motion(Component);
    const variants =
      side === "left" ? animationVariantsLeft : animationVariantsRight;

    return (
      <MotionComponent
        initial="hidden"
        whileInView="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        {...props}
      >
        {children}
      </MotionComponent>
    );
  };
};

SideAnimation.displayName = "SideAnimation";

export default SideAnimation;
