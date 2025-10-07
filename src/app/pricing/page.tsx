export default function PricingPage() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">Pricing</h1>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="border border-black/10 dark:border-white/10 rounded-xl p-6">
            <div className="text-sm font-semibold mb-1">Self-Assessment</div>
            <div className="text-3xl font-semibold mb-4">Free</div>
            <p className="text-sm text-black/70 dark:text-white/70 mb-4">Personalized AI literacy report and recommendations.</p>
            <a href="/assessment" className="rounded-md px-4 py-2 bg-foreground text-background inline-block">Start Free</a>
          </div>
          <div className="border border-black/10 dark:border-white/10 rounded-xl p-6">
            <div className="text-sm font-semibold mb-1">Official Certification</div>
            <div className="text-3xl font-semibold mb-4">$79</div>
            <p className="text-sm text-black/70 dark:text-white/70 mb-4">40 questions. Shareable certificate and verification page.</p>
            <a href="#" className="rounded-md px-4 py-2 bg-foreground text-background inline-block">Purchase</a>
          </div>
          <div className="border border-black/10 dark:border-white/10 rounded-xl p-6">
            <div className="text-sm font-semibold mb-1">Team Pack</div>
            <div className="text-3xl font-semibold mb-4">$999</div>
            <p className="text-sm text-black/70 dark:text-white/70 mb-4">50 seats, org dashboard, and verification for hiring.</p>
            <a href="#" className="rounded-md px-4 py-2 bg-foreground text-background inline-block">Buy 50 Seats</a>
          </div>
        </div>
      </div>
    </section>
  );
}

