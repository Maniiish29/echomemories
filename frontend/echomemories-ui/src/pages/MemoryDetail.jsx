import { useParams } from "react-router-dom";
import { useState } from "react";

const STEPS = {
  ASK: "ask",
  REMIND: "remind",
  ENCOURAGE: "encourage",
};

const MOCK_MEMORIES = [
  {
    id: 1,
    title: "Wedding Day",
    date: "June 12, 1998",
    description:
      "This was your daughter’s wedding in 1998. It was a warm summer afternoon filled with joy and music.",
    imageUrl:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800",
  },
  {
    id: 2,
    title: "Family Picnic",
    date: "August 4, 2005",
    description:
      "This was a peaceful family picnic near the river. You brought homemade food and spent the afternoon laughing together.",
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
  },
  {
    id: 3,
    title: "Graduation Day",
    date: "May 23, 2010",
    description:
      "This was graduation day. Years of hard work and dedication led to this proud moment.",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800",
  },
];

const MemoryDetail = () => {
  const { id } = useParams();
  const [step, setStep] = useState(STEPS.ASK);
  const [isLoading, setIsLoading] = useState(false);
  const [userText, setUserText] = useState("");
  const [aiResponse, setAiResponse] = useState("");

  const memory = MOCK_MEMORIES.find(
    (m) => m.id === Number(id)
  );

  if (!memory) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
        <p className="text-lg text-slate-600 dark:text-slate-300">
          Memory not found.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 px-6 py-16">
      <div className="max-w-2xl w-full text-center">

        {/* Image */}
        <div className="overflow-hidden rounded-3xl mb-10">
          <img
            src={memory.imageUrl}
            alt={memory.title}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Loading State */}
        {isLoading && (
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            Let me think for a moment...
          </p>
        )}

        {/* STEP: ASK */}
        {step === STEPS.ASK && !isLoading && (
          <>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-8">
              Does this moment feel familiar?
            </h2>

            <div className="flex flex-col gap-6">
              <button
                onClick={() => setStep(STEPS.ENCOURAGE)}
                className="py-4 rounded-2xl bg-indigo-600 text-white text-xl"
              >
                🌼 Yes, I remember this
              </button>

              <button
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => {
                    setIsLoading(false);
                    setStep(STEPS.REMIND);
                  }, 1000);
                }}
                className="py-4 rounded-2xl border border-slate-300 dark:border-slate-700 text-xl text-slate-800 dark:text-slate-200"
              >
                🤍 I'm not sure yet
              </button>
            </div>
          </>
        )}

        {/* STEP: REMIND */}
        {step === STEPS.REMIND && !isLoading && (
          <>
            <p className="text-xl text-slate-700 dark:text-slate-300 mb-10 leading-relaxed">
              {memory.description}
            </p>

            <button
              onClick={() => setStep(STEPS.ENCOURAGE)}
              className="py-4 px-8 rounded-2xl bg-indigo-600 text-white text-xl"
            >
              🌿 I remember now
            </button>
          </>
        )}

        {/* STEP: ENCOURAGE */}
        {step === STEPS.ENCOURAGE && !isLoading && (
          <div className="flex flex-col items-center">

            {!aiResponse && (
              <>
                <p className="text-xl text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  Tell me about what you remember.
                </p>

                <textarea
                  value={userText}
                  onChange={(e) => setUserText(e.target.value)}
                  placeholder="You can take your time..."
                  className="w-full p-4 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  rows={4}
                />

                <button
                  onClick={() => {
                    if (!userText.trim()) return;

                    setIsLoading(true);

                    setTimeout(() => {
                      setIsLoading(false);
                      setAiResponse(
                        "That sounds very meaningful. Thank you for sharing that with me. Would you like to tell me more about how you felt that day?"
                      );
                    }, 1000);
                  }}
                  className="mt-6 py-4 px-8 rounded-2xl bg-indigo-600 text-white text-xl"
                >
                  Share
                </button>
              </>
            )}

            {aiResponse && (
              <>
                <p className="text-xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
                  {aiResponse}
                </p>

                <button
                  onClick={() => {
                    setUserText("");
                    setAiResponse("");
                    setStep(STEPS.ASK);
                  }}
                  className="py-4 px-8 rounded-2xl bg-indigo-600 text-white text-xl"
                >
                  Look at Memory Again
                </button>
              </>
            )}

          </div>
        )}

      </div>
    </div>
  );
};

export default MemoryDetail;
