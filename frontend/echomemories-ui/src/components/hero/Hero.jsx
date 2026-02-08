const Hero = () => {
  return (
    <section className="bg-white dark:bg-slate-950 py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">

        {/* Badge */}
        <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 dark:bg-slate-800 px-4 py-1 text-sm text-slate-600 dark:text-slate-300">
          ✨ Gentle AI-Assisted Reminiscence
        </span>

        {/* Heading */}
        <h1 className="mt-8 text-4xl sm:text-5xl font-extrabold leading-tight text-slate-900 dark:text-white">
          Cherish Every{" "}
          <span className="text-indigo-600">Memory</span>,<br />
          Share Every{" "}
          <span className="text-indigo-600">Story</span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
          A warm, supportive space where photographs become gateways to
          meaningful conversations and treasured moments.
        </p>

        {/* CTA */}
        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-lg bg-indigo-600 px-8 py-3 text-white font-medium hover:bg-indigo-500 transition">
            Begin Your Journey
          </button>

          <button className="rounded-lg border border-indigo-600 px-8 py-3 text-indigo-600 font-medium hover:bg-indigo-50 dark:hover:bg-slate-900 transition">
            I’m a Caregiver
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
