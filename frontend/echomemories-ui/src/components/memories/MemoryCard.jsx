const MemoryCard = ({ title, date, description, imageUrl }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">

      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Soft gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60 group-hover:opacity-80 transition" />
      </div>

      {/* Content */}
      <div className="p-6">

        {/* Date */}
        <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
          {date}
        </p>

        {/* Title */}
        <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {description}
        </p>

      </div>
    </div>
  );
};

export default MemoryCard;
