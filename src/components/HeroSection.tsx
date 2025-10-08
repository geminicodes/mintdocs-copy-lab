import { motion } from "framer-motion";
import { BetaSignup } from "./BetaSignup";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function HeroSection() {
  return (
    <motion.section
      initial={reduceMotion ? {} : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18 }}
      className="max-w-6xl mx-auto px-6 py-16"
    >
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-foreground">
          Test your copy with an AI focus group — in 30 seconds.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          Paste a headline, tweet or ad. Get sentiment breakdowns,
          share-likelihood, and sample persona comments — before you spend on ads.
        </p>

        <BetaSignup />
      </div>
    </motion.section>
  );
}
