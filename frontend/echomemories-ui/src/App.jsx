function App() {
  return (
    <div className="min-h-screen bg-background">
      <header className="py-6 border-b">
        <div className="container-memory">
          <h1 className="text-3xl font-bold text-gradient">
            EchoMemories
          </h1>
        </div>
      </header>

      <main className="container-memory py-24 text-center">
        <h2 className="text-5xl font-bold mb-6">
          A gentle place to hold memories
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          EchoMemories helps you capture, revisit, and cherish meaningful
          moments with clarity and calm.
        </p>

        <div className="mt-10">
          <button className="btn-primary">
            Start a Memory
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
