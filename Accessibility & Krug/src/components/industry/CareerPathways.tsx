import React, { useState } from "react";

export const CareerPathways = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpand = (pathway: string) => {
    setExpanded(expanded === pathway ? null : pathway);
  };

  const pathways = [
    {
      title: "Software Development",
      description: "Build innovative software solutions and applications.",
      details: {
        pros: [
          "High demand for skilled developers.",
          "Opportunities for remote work.",
          "Diverse industries to work in.",
        ],
        cons: [
          "Can involve long hours and tight deadlines.",
          "Requires continuous learning to keep up with new technologies.",
        ],
        insights: [
          "Focus on mastering a few programming languages.",
          "Contribute to open-source projects to build your portfolio.",
        ],
      },
    },
    {
      title: "Data Science",
      description:
        "Analyze and interpret complex data to drive decision-making.",
      details: {
        pros: [
          "Growing field with high earning potential.",
          "Opportunities to work on impactful projects.",
        ],
        cons: [
          "Requires strong mathematical and statistical skills.",
          "Can involve working with messy or incomplete data.",
        ],
        insights: [
          "Learn tools like Python, R, and SQL.",
          "Develop expertise in machine learning and data visualization.",
        ],
      },
    },
    {
      title: "UX/UI Design",
      description: "Design user-friendly interfaces and experiences.",
      details: {
        pros: [
          "Creative and collaborative work environment.",
          "High demand for user-centered design skills.",
        ],
        cons: [
          "Requires balancing user needs with business goals.",
          "Feedback and revisions can be frequent.",
        ],
        insights: [
          "Build a strong portfolio showcasing your design work.",
          "Learn tools like Figma, Sketch, and Adobe XD.",
        ],
      },
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Career Pathways
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Discover the diverse career opportunities available to DCS
            graduates.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pathways.map((pathway) => (
            <div
              key={pathway.title}
              className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className="px-4 py-5 sm:p-6 cursor-pointer flex justify-between items-center"
                onClick={() => toggleExpand(pathway.title)}
              >
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {pathway.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {pathway.description}
                  </p>
                </div>
                <svg
                  className={`w-6 h-6 text-gray-500 transform transition-transform duration-300 ${
                    expanded === pathway.title ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {expanded === pathway.title && (
                <div className="px-4 py-5 sm:p-6 space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">Pros:</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-500">
                      {pathway.details.pros.map((pro, index) => (
                        <li key={index}>{pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Cons:</h4>
                    <ul className="list-disc pl-5 text-sm text-gray-500">
                      {pathway.details.cons.map((con, index) => (
                        <li key={index}>{con}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Industry Insights:
                    </h4>
                    <ul className="list-disc pl-5 text-sm text-gray-500">
                      {pathway.details.insights.map((insight, index) => (
                        <li key={index}>{insight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
