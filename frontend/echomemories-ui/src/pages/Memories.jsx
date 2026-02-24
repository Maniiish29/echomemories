import { useEffect, useState } from "react";
import MemoryCard from "../components/memories/MemoryCard";

const Memories = () => {
  const [memories, setMemories] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
    imageUrl: "",
  });

  // Fetch memories
  useEffect(() => {
    fetch("http://127.0.0.1:8000/memories")
      .then((res) => res.json())
      .then((data) => setMemories(data))
      .catch((err) => console.error("Error fetching memories:", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:8000/memories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newMemory) => {
        setMemories((prev) => [...prev, newMemory]);
        setFormData({
          title: "",
          date: "",
          description: "",
          imageUrl: "",
        });
      })
      .catch((err) => console.error("Error creating memory:", err));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-16">
      <div className="mx-auto max-w-7xl px-6">

        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
          Your Memories
        </h1>

        {/* INLINE FORM */}
        <form onSubmit={handleSubmit} className="mb-12 space-y-4 bg-white dark:bg-slate-800 p-6 rounded-xl shadow">

          <input
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="w-full p-3 rounded border"
            required
          />

          <input
            type="text"
            placeholder="Date"
            value={formData.date}
            onChange={(e) =>
              setFormData({ ...formData, date: e.target.value })
            }
            className="w-full p-3 rounded border"
            required
          />

          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="w-full p-3 rounded border"
            rows={3}
            required
          />

          <input
            type="text"
            placeholder="Image URL"
            value={formData.imageUrl}
            onChange={(e) =>
              setFormData({ ...formData, imageUrl: e.target.value })
            }
            className="w-full p-3 rounded border"
            required
          />

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded"
          >
            Add Memory
          </button>

        </form>

        {/* GRID */}
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