import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

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

    try {
      // Insert email into Supabase beta_signups table
      const { error } = await supabase
        .from('beta_signups')
        .insert([{ email }]);

      if (error) {
        console.error("Supabase error:", error);
        toast.error("Something went wrong. Please try again.");
        setSignupState("error");
        return;
      }

      setSignupState("success");
      setEmail("");
      toast.success("Thanks! Check your inbox — we'll be in touch when beta launches.");
    } catch (error) {
      console.error("Error submitting email:", error);
      toast.error("Something went wrong. Please try again.");
      setSignupState("error");
    }
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
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8 p-6 bg-card border border-border rounded-2xl text-center"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">You're on the waitlist! 🎉</h3>
          <p className="text-muted-foreground">
            Check your inbox — we'll send you a confirmation email and notify you when beta launches.
          </p>
        </motion.div>
      )}
    </form>
  );
}
