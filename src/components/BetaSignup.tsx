import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

type SignupState = "idle" | "loading" | "success" | "error";

export function BetaSignup() {
  const [email, setEmail] = useState("");
  const [signupState, setSignupState] = useState<SignupState>("idle");

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    setSignupState("loading");

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      setSignupState("error");
      return;
    }

    // Simulate API call (replace with actual backend when available)
    setTimeout(() => {
      setSignupState("success");
      setEmail("");
      toast.success("Thanks! Check your inbox — we'll be in touch when beta launches.");
    }, 1000);
  };

  return (
    <form id="beta" onSubmit={handleSignup} className="mt-8 max-w-md">
      <div className="flex gap-2">
        <input
          id="email"
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 border border-input rounded-lg px-4 py-2.5 bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-fast"
          required
        />
        <button
          type="submit"
          className="px-6 py-2.5 bg-gradient-accent text-accent-foreground rounded-lg hover:opacity-90 transition-fast font-semibold shadow-lg disabled:opacity-50"
          disabled={signupState === "loading"}
        >
          {signupState === "loading" ? "Joining…" : "Join Beta"}
        </button>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">
        <strong>Beta spots limited</strong> — founding pricing at <strong>$4/month</strong> for early adopters.
      </p>

      {signupState === "success" && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.18 }}
          className="mt-4 text-sm text-accent font-medium"
        >
          ✓ You're on the list! Check your inbox soon.
        </motion.p>
      )}
    </form>
  );
}
