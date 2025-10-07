export default function Home() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 items-center">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Are You AI-Ready for Operations?
          </h1>
          <p className="text-base md:text-lg text-black/70 dark:text-white/70">
            Test your AI proficiency for maintenance, energy, and facility management.
            Get certified and lead your team into the next era of intelligent operations.
          </p>
          <div className="flex gap-3">
            <a href="/assessment" className="rounded-md px-4 py-2 bg-foreground text-background">
              Take the AI Assessment
            </a>
            <a href="/pricing" className="rounded-md px-4 py-2 border border-black/15 dark:border-white/15">
              View Pricing
            </a>
          </div>
          <div className="text-sm text-black/60 dark:text-white/60">
            Free self-assessment. Official certification available for individuals and teams.
          </div>
        </div>
        <div className="rounded-xl border border-black/10 dark:border-white/10 p-6">
          <div className="text-sm font-semibold mb-2">Proof of Credibility</div>
          <ul className="text-sm space-y-2 list-disc pl-5">
            <li>Assessment-led learning modeled after leading AI proficiency programs</li>
            <li>Enterprise-ready: seats, RBAC, verification</li>
            <li>Secure by default: rate limits, CSP, validated inputs</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
