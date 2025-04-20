import React from "react";

interface CourseOption {
  code: string;
  title?: string;
}

interface RequirementRow {
  category?: string;
  requirement: string;
  options: CourseOption[];
  semester?: string;
  categoryRowSpan?: number;
}

export const MajorRequirements: React.FC = () => {
  // Core CS Methods courses
  const csMethods: RequirementRow[] = [
    {
      category: "CS Methods",
      requirement: "Introduction to Programming",
      options: [{ code: "DCS 109[D,R,S,T]" }, { code: "109" }, { code: "111" }],
      categoryRowSpan: 2,
    },
    {
      requirement: "Software Development",
      options: [{ code: "DCS 211" }, { code: "229" }],
    },
  ];

  // Additional Core Methods courses
  const additionalMethods: RequirementRow[] = [
    {
      category: "Additional Core Methods",
      requirement: "Data Science & Analysis",
      options: [
        { code: "DCS 105" },
        { code: "204" },
        { code: "212" },
        { code: "307" },
        { code: "375" },
      ],
      categoryRowSpan: 4,
    },
    {
      requirement: "Critical Digital Studies",
      options: [
        { code: "DCS 105" },
        { code: "106" },
        { code: "204" },
        { code: "206" },
        { code: "212" },
        { code: "301C" },
        { code: "305" },
      ],
    },
    {
      requirement: "Human-Centered Design",
      options: [
        { code: "DCS 106" },
        { code: "301C" },
        { code: "304" },
        { code: "305" },
        { code: "325" },
        { code: "S31" },
      ],
    },
    {
      requirement: "Community-Engaged Learning*",
      options: [
        { code: "DCS 106" },
        { code: "212" },
        { code: "301C" },
        { code: "304" },
        { code: "325" },
      ],
    },
  ];

  // Additional requirements
  const additionalReqs: RequirementRow[] = [
    {
      requirement: "Two 300-level DCS Electives**",
      options: [],
    },
    {
      requirement: "Senior Design Capstone",
      options: [{ code: "DCS 4XX (exact # TBA), W3" }],
    },
    {
      requirement: "Additional Electives to reach 10 total courses**",
      options: [],
    },
  ];

  // Combine all requirement sections
  const allRequirements = [
    ...csMethods,
    ...additionalMethods,
    ...additionalReqs,
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        DCS Major Requirements Guide - Classes of '27 and '28
      </h2>

      <p className="mb-4">
        The DCS major will consist of <strong>10 courses</strong>, covering
        fundamental aspects of computer science, data science, and critical
        digital studies. Students will learn to build, analyze, and critique
        digital solutions while engaging in interdisciplinary collaboration.
      </p>

      <div className="bg-red-100 border-l-4 border-red-800 p-4 mb-6">
        <p className="font-medium">
          **This worksheet serves as a guide, and is for planning purposes
          only**
        </p>
        <p className="mt-2">
          As we fast-track the major for classes of 2027 and 2028, throughout
          the W2025 semester DCS continues to work out the specific details of
          the major, and so some course options below may be subject to change.
          This mapping, based on our current understanding, should give you a
          reasonable sense at this early stage of planning.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="w-1/4 py-2 px-4 border text-left">Requirement</th>
              <th className="w-1/2 py-2 px-4 border text-left">
                Possible Options (circle choice)
              </th>
              <th className="w-1/4 py-2 px-4 border text-left">Semester</th>
            </tr>
          </thead>
          <tbody>
            {allRequirements.map((row, index) => (
              <tr
                key={index}
                className={
                  index < 2
                    ? "bg-blue-50"
                    : index >= 2 && index < 6
                    ? "bg-yellow-50"
                    : index === 6
                    ? "bg-green-50"
                    : index === 7
                    ? "bg-red-50"
                    : "bg-purple-50"
                }
              >
                {row.category && row.categoryRowSpan && (
                  <td
                    rowSpan={row.categoryRowSpan}
                    className="border px-4 py-2 align-top font-medium"
                  >
                    {row.category}
                  </td>
                )}
                <td className="border px-4 py-2">{row.requirement}</td>
                <td className="border px-4 py-2">
                  {row.options.map((option, i) => (
                    <span key={i} className="inline-block mr-2">
                      {option.code}
                      {i < row.options.length - 1 && ", "}
                    </span>
                  ))}
                </td>
                <td className="border px-4 py-2"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 space-y-2 text-sm">
        <p>
          *For yellow core methods courses, no course can count for more than 2
          methods.
        </p>
        <p>
          *An approved CEL-tagged course outside DCS can be substituted with
          permission.
        </p>
        <p>**Core methods courses may be used to complete this requirement.</p>
        <p>
          **Up to <strong>two</strong> Short Term courses (s20 or higher) can
          count towards the major; up to <strong>one</strong> elective may be a
          non-DCS Bates course with permission.
        </p>
      </div>
    </div>
  );
};
