export default function AssessmentPage() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">AI Assessment</h1>
        
        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
          <h2 className="font-semibold mb-2">Assessment Overview</h2>
          <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">
            This is a demo assessment. In the full version, you'll answer 40 questions across AI domains relevant to operations.
          </p>
          <div className="text-sm space-y-1">
            <div>• Duration: 60 minutes</div>
            <div>• Questions: 40 (multiple choice, multi-select, scenarios)</div>
            <div>• Domains: AI Fundamentals, Predictive Maintenance, CMMS, Energy Analytics, Compliance</div>
            <div>• Pass threshold: 80%</div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border border-black/10 dark:border-white/10 rounded-lg p-6">
            <h3 className="font-semibold mb-3">Question 1 of 40</h3>
            <p className="mb-4">Which AI technique is best for predicting asset failures?</p>
            <div className="space-y-2">
              {["Clustering", "Time-series forecasting", "Rule-based systems", "Reinforcement learning"].map((option, i) => (
                <label key={i} className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="q1" value={i} className="text-blue-600" />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="border border-black/10 dark:border-white/10 rounded-lg p-6">
            <h3 className="font-semibold mb-3">Question 2 of 40</h3>
            <p className="mb-4">Select valid best practices for prompt engineering in CMMS triage.</p>
            <div className="space-y-2">
              {["Provide structured examples", "Avoid schema", "Specify output format", "Use vague language"].map((option, i) => (
                <label key={i} className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" name="q2" value={i} className="text-blue-600" />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-2 bg-foreground text-background rounded-md">
            Submit Assessment
          </button>
          <button className="px-6 py-2 border border-black/15 dark:border-white/15 rounded-md">
            Save Progress
          </button>
        </div>
      </div>
    </section>
  );
}
