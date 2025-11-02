"use client";

import { useEffect, useState } from "react";
import { animate } from "framer-motion";

// Not smooth, needs more work

const useAnimateText = ({ text }: { text: string }) => {
  const [cursor, setCursor] = useState<number>(0);
  const duration = 12;

  useEffect(() => {
    const controls = animate(0, text.length, {
      duration: duration,
      ease: "linear",
      onUpdate(latest) {
        setCursor(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [text.length]);

  return text.slice(0, cursor);
};

export default useAnimateText;
