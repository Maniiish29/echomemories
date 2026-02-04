import Header from "../components/layout/Header";


export default function Index() {
  return (
    <div>
      <Header />

      <main className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-4">
          Welcome to EchoMemories
        </h2>

        <p className="text-gray-600 text-lg">
          A gentle place to hold and revisit meaningful memories.
        </p>
      </main>
    </div>
  );
}
