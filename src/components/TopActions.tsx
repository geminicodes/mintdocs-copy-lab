import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function top3ActionsFromText(text: string): string[] {
  const suggestions: string[] = [];
  if (!text) return ["Shorten the headline", "Make the benefit concrete", "Test an alternate CTA"];
  if (text.length > 120) suggestions.push("Shorten the headline to < 80 chars");
  if (/(free|cheap|easy)/i.test(text)) suggestions.push("Avoid bargain language — emphasize value");
  if (/click here|learn more/i.test(text)) suggestions.push("Try a stronger CTA (e.g. 'Start free trial')");
  if (!suggestions.length) suggestions.push("Try adding a clear metric (\"increase X by 20%\")");
  return suggestions.slice(0, 3);
}

const demoMessage = "Get more signups with our one-click onboarding booster.";

export function TopActions() {
  const actions = top3ActionsFromText(demoMessage);

  return (
    <motion.div
      initial={reduceMotion ? {} : { opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.06, duration: 0.18 }}
      className="lg:w-96 bg-card border border-border rounded-2xl p-6 shadow-xl"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary" />
          Top 3 actions (auto-suggest)
        </h3>
        <div className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded">
          rule-based
        </div>
      </div>
      
      <ul className="mt-5 space-y-3">
        {actions.map((suggestion, i) => (
          <motion.li
            key={i}
            initial={reduceMotion ? {} : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 + i * 0.05, duration: 0.15 }}
            className="flex items-start gap-3"
          >
            <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-xs shrink-0">
              {i + 1}
            </div>
            <span className="text-sm text-card-foreground leading-relaxed">{suggestion}</span>
          </motion.li>
        ))}
      </ul>
      
      <p className="mt-5 text-xs text-muted-foreground border-t border-border pt-4">
        Rule-based tips — instant & free. Upgrade for AI-powered insights.
      </p>
    </motion.div>
  );
}
