import MemoryCard from "../components/memories/MemoryCard";

const MOCK_MEMORIES = [
  {
    id: 1,
    title: "Wedding Day",
    date: "June 12, 1998",
    description:
      "A beautiful summer wedding surrounded by family and laughter.",
    imageUrl:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800",
  },
  {
    id: 2,
    title: "Family Picnic",
    date: "August 4, 2005",
    description:
      "An afternoon at the park with homemade food and joyful moments.",
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
  },
  {
    id: 3,
    title: "Graduation Day",
    date: "May 23, 2010",
    description:
      "Celebrating years of hard work and new beginnings.",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800",
  },
];

const Memories = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Your Memories
          </h1>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {MOCK_MEMORIES.map((memory) => (
            <MemoryCard
              key={memory.id}
              id={memory.id}
              title={memory.title}
              date={memory.date}
              description={memory.description}
              imageUrl={memory.imageUrl}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Memories;
