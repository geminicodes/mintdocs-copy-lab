import { motion } from "framer-motion";
import { Users, Lightbulb, Zap } from "lucide-react";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const features = [
  {
    icon: Users,
    title: "Instant AI Focus Group",
    description: "Run your message through 20 synthetic personas and get both data and real-sounding comments.",
  },
  {
    icon: Lightbulb,
    title: "Actionable Insights",
    description: "Not just scores — get top suggested edits and sample quotes to iterate immediately.",
  },
  {
    icon: Zap,
    title: "Built for speed & savings",
    description: "Avoid wasteful ad spend — validate copy first, then launch with confidence.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <motion.article
              key={i}
              initial={reduceMotion ? {} : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.16 }}
              className="bg-card border border-border p-6 rounded-2xl shadow-lg hover:shadow-xl transition-fast"
            >
              <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <Icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
