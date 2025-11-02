"use client";

import { FC } from "react";
import { motion, stagger } from "framer-motion";
import { splitString } from "@/lib/splitText";

interface IAnimateText {
  text: string;
  delay?: number;
  duration?: number;
}

const charVariants = {
  hidden: { opacity: 0, y: 6 },
  reveal: { opacity: 1, y: 0 },
};

const AnimateText1: FC<IAnimateText> = ({ text, delay = 0, duration }) => {
  const chars = splitString(text);

  return (
    <motion.span
      initial="hidden"
      whileInView="reveal"
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delayChildren: stagger(0.05, { ease: "linear" }),
        duration,
        delay,
      }}
      className="inline-block"
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          variants={charVariants}
          transition={{ duration: duration }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimateText1;
