import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const STEPS = {
  ASK: "ask",
  REMIND: "remind",
  ENCOURAGE: "encourage",
};

const MemoryDetail = () => {
  const { id } = useParams();

  const [memory, setMemory] = useState(null);
  const [step, setStep] = useState(STEPS.ASK);
  const [isLoading, setIsLoading] = useState(false);
  const [userText, setUserText] = useState("");
  const [aiResponse, setAiResponse] = useState("");

  // 🔥 Fetch memory from backend
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/memories/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setMemory(data);
        } else {
          setMemory(null);
        }
      })
      .catch((err) => console.error("Error fetching memory:", err));
  }, [id]);

  if (!memory) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading memory...</p>
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

        {/* Loading state */}
        {isLoading && (
          <p className="text-xl text-slate-600 mb-8">
            Let me think for a moment...
          </p>
        )}

        {/* ASK */}
        {step === STEPS.ASK && !isLoading && (
          <>
            <h2 className="text-3xl font-semibold mb-8">
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
                className="py-4 rounded-2xl border text-xl"
              >
                🤍 I'm not sure yet
              </button>
            </div>
          </>
        )}

        {/* REMIND */}
        {step === STEPS.REMIND && !isLoading && (
          <>
            <p className="text-xl mb-10 leading-relaxed">
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

        {/* ENCOURAGE */}
        {step === STEPS.ENCOURAGE && !isLoading && (
          <div className="flex flex-col items-center">

            {!aiResponse && (
              <>
                <p className="text-xl mb-6">
                  Tell me about what you remember.
                </p>

                <textarea
                  value={userText}
                  onChange={(e) => setUserText(e.target.value)}
                  placeholder="You can take your time..."
                  className="w-full p-4 rounded-2xl border resize-none"
                  rows={4}
                />

                <button
                  onClick={() => {
                    if (!userText.trim()) return;

                    setIsLoading(true);

                    setTimeout(() => {
                      setIsLoading(false);
                      setAiResponse(
                        `It sounds like your ${memory.title} was meaningful to you. Thank you for sharing that with me. Would you like to tell me more about how you felt that day?`
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
                <p className="text-xl mb-8 leading-relaxed">
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