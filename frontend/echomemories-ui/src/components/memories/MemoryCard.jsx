import { Link } from "react-router-dom";

const MemoryCard = ({ id, title, date, description, imageUrl }) => {
  return (
    <Link
      to={`/memories/${id}`}
      className="group block overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 transition-all duration-300 hover:shadow-xl"
    >
      <div className="h-48 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-6">
        <p className="text-xs uppercase text-slate-500 dark:text-slate-400">
          {date}
        </p>

        <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>

        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default MemoryCard;
