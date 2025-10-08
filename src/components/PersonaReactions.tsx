import { motion } from "framer-motion";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const sampleComments = [
  { label: "Founder", text: "This could save me time — clear and practical.", color: "from-blue-500 to-indigo-600" },
  { label: "Marketer", text: "Feels a bit generic. Add a specific benefit.", color: "from-purple-500 to-pink-600" },
  { label: "Gen Z", text: "Shorten it — make it punchier for social.", color: "from-green-500 to-emerald-600" },
];

export function PersonaReactions() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="bg-card border border-border p-8 rounded-2xl shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">Sample persona reactions</h3>
          <div className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-lg">
            from a 20-person micro focus group
          </div>
        </div>

        <ul className="space-y-4">
          {sampleComments.map((comment, i) => (
            <motion.li
              key={i}
              initial={reduceMotion ? {} : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.02 * i, duration: 0.16 }}
              className="flex items-start gap-4 bg-secondary/50 p-4 rounded-xl hover:bg-secondary transition-fast"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${comment.color} flex items-center justify-center text-white font-bold text-lg shadow-lg shrink-0`}>
                {comment.label[0]}
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold mb-1">{comment.label}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{comment.text}</div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
