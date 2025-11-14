"use client";

import { Button } from "../ui/button";
import { ComponentProps, ReactNode } from "react";
import { motion } from "motion/react";

interface ButtonXProps extends ComponentProps<"button"> {
  children?: ReactNode;
  size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg";
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
}

const ButtonX = ({ size, variant, children, ...props }: ButtonXProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="w-fit relative inline-block rounded-full p-2 bg-glass-500"
    >
      <div className="rounded-full bg-white/90 dark:bg-gray-900/90">
        <Button size={size} variant={variant} {...props}>
          {children}
        </Button>
      </div>
    </motion.div>
  );
};

export default ButtonX;
