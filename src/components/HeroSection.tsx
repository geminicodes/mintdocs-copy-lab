import { motion } from "framer-motion";
import { BetaSignup } from "./BetaSignup";
import { TopActions } from "./TopActions";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function HeroSection() {
  return (
    <motion.section
      initial={reduceMotion ? {} : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18 }}
      className="max-w-6xl mx-auto px-6 py-16"
    >
      <div className="flex flex-col lg:flex-row items-start gap-12">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-brand bg-clip-text text-transparent">
            Test your copy with an AI focus group — in 30 seconds.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-prose">
            Paste a headline, tweet or ad. Get sentiment breakdowns,
            share-likelihood, and sample persona comments — before you spend on ads.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <a
              href="#beta"
              className="px-6 py-3 bg-gradient-brand text-primary-foreground rounded-xl shadow-lg hover:shadow-xl transition-fast font-semibold"
            >
              Try Free
            </a>
            <a
              href="#features"
              className="px-6 py-3 border border-border rounded-xl text-foreground hover:bg-secondary transition-fast font-medium"
            >
              How it works
            </a>

            <motion.div
              initial={reduceMotion ? {} : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className="flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-2.5 shadow-sm"
            >
              <div className="text-xs text-muted-foreground">Confidence</div>
              <div className="text-2xl font-bold bg-gradient-brand bg-clip-text text-transparent">
                82%
              </div>
              <div className="text-xs text-muted-foreground">prediction</div>
            </motion.div>
          </div>

          <BetaSignup />
        </div>

        <TopActions />
      </div>
    </motion.section>
  );
}
