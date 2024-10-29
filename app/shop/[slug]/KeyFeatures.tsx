"use client";

const KeyFeatures = ({ features }: { features: string[] }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">KeyFeatures</h2>
      <ul className="p-4 py-8 space-y-3 md:p-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-green-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default KeyFeatures;
