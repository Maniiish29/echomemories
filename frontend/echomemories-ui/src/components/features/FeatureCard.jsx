const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 transition hover:shadow-lg hover:-translate-y-1">

      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-2xl transition group-hover:scale-110">

        {icon}
      </div>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>

      <p className="mt-2 text-slate-600 dark:text-slate-400">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
