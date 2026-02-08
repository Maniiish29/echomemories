import FeatureCard from "./FeatureCard";

const FEATURES = [
  {
    title: "Personal Photo Stories",
    description:
      "Upload cherished photographs and add meaningful context to preserve memories.",
    icon: "📷",
  },
  {
    title: "Gentle Conversation Prompts",
    description:
      "AI-powered prompts designed to encourage warm and natural storytelling.",
    icon: "💬",
  },
  {
    title: "Caregiver Friendly",
    description:
      "Built to support caregivers with clarity, simplicity, and compassion.",
    icon: "🤍",
  },
];

const FeaturesGrid = () => {
  return (
    <section className="bg-slate-50 dark:bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-blue">
            Why EchoMemories?
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Thoughtfully designed to make remembering feel natural and comforting.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesGrid;
