export function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 py-12 text-sm text-muted-foreground border-t border-border">
      <div className="flex flex-col md:flex-row md:justify-between gap-8">
        <div className="flex-1">
          <div className="font-semibold text-foreground mb-3 text-base">MintDocs</div>
          <div className="leading-relaxed">
            AI focus groups for your copy — fast, cheap, and practical.
          </div>
        </div>
        
        <div className="flex-1">
          <div className="font-semibold text-foreground mb-3 text-base">FAQ</div>
          <div className="space-y-2 leading-relaxed">
            <p>We don't store or share your raw copy.</p>
            <p>Beta users get founding pricing — limited spots at <strong>$4/month</strong>.</p>
            <p>Cancel anytime. No credit card required for beta.</p>
          </div>
        </div>
      </div>
      
      <div className="mt-10 pt-6 border-t border-border text-xs text-center">
        © {new Date().getFullYear()} MintDocs • Privacy • Terms
      </div>
    </footer>
  );
}
