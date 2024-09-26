import React from "react";
import { motion } from "framer-motion";

const DownAnimation = <T extends React.ComponentType<any>>(Component: T) => {
  return ({ children, ...props }: React.ComponentProps<T>) => {
    const MotionComponent = motion(Component as any);

    return (
      <MotionComponent
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        {...(props as React.ComponentProps<T>)}
      >
        {children}
      </MotionComponent>
    );
  };
};

DownAnimation.displayName = "DownAnimation";

export default DownAnimation;
