import { motion, useReducedMotion } from "framer-motion";
import bseLogo from "@/assets/bse-logo.png";

export type SealTone = "dark" | "light";
export type SealSize = "hero" | "section" | "compact" | "membership";

interface AboutSealMotifProps {
  tone?: SealTone;
  size?: SealSize;
  showLogo?: boolean;
  className?: string;
}

const AboutSealMotif = ({
  tone = "dark",
  size = "section",
  showLogo = false,
  className = "",
}: AboutSealMotifProps) => {
  const shouldReduceMotion = useReducedMotion();
  const breathingAnimation = shouldReduceMotion
    ? undefined
    : { scale: [0.98, 1.04, 0.98], opacity: [0.28, 0.62, 0.28] };

  return (
    <div
      aria-hidden="true"
      className={`bse-seal-motif bse-seal-motif--${tone} bse-seal-motif--${size} ${className}`}
    >
      <motion.span
        className="bse-seal-motif__ring bse-seal-motif__ring--outer"
        animate={breathingAnimation}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="bse-seal-motif__ring bse-seal-motif__ring--middle" />
      <span className="bse-seal-motif__ring bse-seal-motif__ring--inner" />
      <span className="bse-seal-motif__cross-x" />
      <span className="bse-seal-motif__cross-y" />
      <span className="bse-seal-motif__point" />
      {showLogo && (
        <span className="bse-seal-motif__mark">
          <img src={bseLogo} alt="" />
        </span>
      )}
    </div>
  );
};

export default AboutSealMotif;
