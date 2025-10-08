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
    <form id="beta" onSubmit={handleSignup} className="mt-10 w-full max-w-2xl">
      <div className="flex gap-2">
        <input
          id="email"
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 border border-input rounded-lg px-4 py-3 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-fast"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-fast font-medium disabled:opacity-50"
          disabled={signupState === "loading"}
        >
          {signupState === "loading" ? "Joining…" : "Join Beta"}
        </button>
      </div>
      <p className="mt-3 text-sm text-muted-foreground text-center">
        <strong>Beta spots limited</strong> — founding pricing at <strong>$4/month</strong> for early adopters.
      </p>

      {signupState === "success" && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.18 }}
          className="mt-4 text-sm text-foreground font-medium text-center"
        >
          ✓ You're on the list! Check your inbox soon.
        </motion.p>
      )}
    </form>
  );
}
