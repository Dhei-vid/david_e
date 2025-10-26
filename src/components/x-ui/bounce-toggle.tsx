"use client";

import { motion, Transition } from "motion/react";
import { Dispatch, SetStateAction } from "react";

interface ToggleSwitchProps {
  isOn: boolean;
  setIsOn: Dispatch<SetStateAction<boolean>>;
}

/**
 * A toggle switch that demonstrates custom easing functions with both bounce and spring animations.
 */
function ToggleSwitch({ isOn, setIsOn }: ToggleSwitchProps) {
  return (
    <div className="container">
      <div className="switch" data-is-on={isOn} onClick={() => setIsOn(!isOn)}>
        <motion.div
          className="ball"
          layout
          transition={isOn ? spring : bounce}
        />
      </div>
    </div>
  );
}

/**
 * ================  Constants  =========================
 */

const bounce: Transition = {
  duration: 1.2,
  ease: bounceEase,
};

const spring: Transition = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

/**
 * ================  Utils  =========================
 */

// From https://easings.net/#easeOutBounce
function bounceEase(x: number) {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
}

/**
 * ==============   Styles   ================
 */

function Stylesheet() {
  return (
    <style>
      {`
        .container {
          // display: flex;
          // align-items: center;
          // justify-content: center;
          // flex-direction: column;
        }

        .switch {
          width: 90px;
          height: 40px;
          background-color: rgba(179, 118, 118, 0.2);
          display: flex;
          justify-content: flex-start; /* Start on the left */
          align-items: center;
          border-radius: 50px;
          padding: 5px;
          cursor: pointer;
        }

        .switch[data-is-on="true"] {
          justify-content: flex-end; /* Move ball to the right */
        }

        .ball {
          width: 50px;
          height: 30px;
          background-color: #f5f5f5;
          border-radius: 50px;
          will-change: transform;
        }
      `}
    </style>
  );
}

export default function BounceToggle({ isOn, setIsOn }: ToggleSwitchProps) {
  return (
    <div>
      <ToggleSwitch isOn={isOn} setIsOn={setIsOn} />
      <Stylesheet />
    </div>
  );
}
