type Params = { params: { code: string } };

export default function VerifyPage({ params }: Params) {
  const { code } = params;
  return (
    <section className="px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Certificate Verification</h1>
        <div className="text-sm text-black/70 dark:text-white/70 mb-6">Code: {code}</div>
        <div className="rounded-xl border border-black/10 dark:border-white/10 p-6">
          <p className="text-sm">This is a placeholder verification page. Once certificates are generated, this route will display certificate metadata, validity, and score breakdown.</p>
        </div>
      </div>
    </section>
  );
}

