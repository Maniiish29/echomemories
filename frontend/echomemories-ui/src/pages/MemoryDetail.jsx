import { useParams } from "react-router-dom";
import { useState } from "react";

const STEPS = {
  ASK: "ask",
  REMIND: "remind",
  ENCOURAGE: "encourage",
};

const MOCK_MEMORY = {
  id: 1,
  title: "Wedding Day",
  date: "June 12, 1998",
  description:
    "This was your daughter’s wedding in 1998. It was a warm summer afternoon filled with joy and music.",
  imageUrl:
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800",
};

const MemoryDetail = () => {
  const { id } = useParams();
  const [step, setStep] = useState(STEPS.ASK);

  // Later this will fetch real memory by id
  const memory = MOCK_MEMORY;

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 px-6 py-16">
      <div className="max-w-2xl w-full text-center">

        {/* Memory Image */}
        <div className="overflow-hidden rounded-3xl mb-10">
          <img
            src={memory.imageUrl}
            alt={memory.title}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* STEP: ASK */}
        {step === STEPS.ASK && (
          <>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-8">
              Does this moment feel familiar?
            </h2>

            <div className="flex flex-col gap-6">
              <button
                onClick={() => setStep(STEPS.ENCOURAGE)}
                className="py-4 rounded-2xl bg-indigo-600 text-white text-xl"
              >
                Yes, I remember
              </button>

              <button
                onClick={() => setStep(STEPS.REMIND)}
                className="py-4 rounded-2xl border border-slate-300 dark:border-slate-700 text-xl text-slate-800 dark:text-slate-200"
              >
                I'm not sure
              </button>
            </div>
          </>
        )}

        {/* STEP: REMIND */}
        {step === STEPS.REMIND && (
          <>
            <p className="text-xl text-slate-700 dark:text-slate-300 mb-10 leading-relaxed">
              {memory.description}
            </p>

            <button
              onClick={() => setStep(STEPS.ENCOURAGE)}
              className="py-4 px-8 rounded-2xl bg-indigo-600 text-white text-xl"
            >
              That sounds familiar
            </button>
          </>
        )}

        {/* STEP: ENCOURAGE */}
        {step === STEPS.ENCOURAGE && (
          <>
            <p className="text-xl text-slate-700 dark:text-slate-300 mb-10 leading-relaxed">
              Would you like to tell me about what you remember?
            </p>

            <button
              onClick={() => setStep(STEPS.ASK)}
              className="py-4 px-8 rounded-2xl bg-indigo-600 text-white text-xl"
            >
              Look Again
            </button>
          </>
        )}

      </div>
    </div>
  );
};

export default MemoryDetail;
