import { useEffect, useState } from "react";
import MemoryCard from "../components/memories/MemoryCard";

const Memories = () => {
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/memories")
      .then((res) => res.json())
      .then((data) => setMemories(data))
      .catch((err) => console.error("Error fetching memories:", err));
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Your Memories
          </h1>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {memories.map((memory) => (
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
