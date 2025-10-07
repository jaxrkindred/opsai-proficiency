const posts = [
  { slug: "ai-transforming-maintenance", title: "How AI Is Transforming Maintenance Operations" },
  { slug: "cmms-data-quality", title: "Data Quality and CMMS: The AI Opportunity" },
  { slug: "predictive-maintenance", title: "Predictive Maintenance with AI" },
  { slug: "safety-compliance-automation", title: "Safety and Compliance Through Automation" },
  { slug: "energy-optimization-ml", title: "Energy Optimization with Machine Learning" },
];

export default function BlogIndex() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">Blog</h1>
        <ul className="space-y-3">
          {posts.map((p) => (
            <li key={p.slug}>
              <a className="hover:underline" href={`/blog/${p.slug}`}>{p.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

