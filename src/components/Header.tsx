import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";

export function Header() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-brand rounded flex items-center justify-center text-primary-foreground font-bold shadow-lg">
          MD
        </div>
        <span className="text-lg font-semibold">MintDocs</span>
      </div>
      
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-xs font-medium hover:bg-secondary/80 transition-fast flex items-center gap-2"
          aria-pressed={isDark}
          aria-label="Toggle dark mode"
        >
          {isDark ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
          {isDark ? "Dark" : "Light"}
        </button>
        <a
          className="text-sm text-muted-foreground hover:text-foreground transition-fast"
          href="#beta"
        >
          Join Beta
        </a>
      </div>
    </motion.header>
  );
}
