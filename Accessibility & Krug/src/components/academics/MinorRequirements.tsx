import React from "react";

export const MinorRequirements: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        DCS Minor Requirements
      </h2>

      <p className="mb-6 text-lg">
        The minor consists of <strong>six courses</strong>.
      </p>

      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-red-50 p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              1. Course Requirements
            </h3>
          </div>
          <div className="p-4">
            <p>
              Courses are listed, or cross-listed, as DCS, not including DCS
              401.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-red-50 p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              2. Substitution Options
            </h3>
          </div>
          <div className="p-4">
            <p className="mb-2">
              With prior approval of the chair of DCS, up to two of the six
              courses may be replaced by another option, such as an internship
              or a course taken outside Bates. If approved, DCS 401 may be
              included as one of these courses.
            </p>
            <p className="text-blue-600 italic mb-2">
              *F-1 visa holders are not eligible for internships outside their
              major area of study. For more information, students should consult
              with
              <a
                href="#"
                className="text-blue-700 underline hover:text-blue-800"
              >
                {" "}
                Shelley Palmer in the Center for Global Education
              </a>
              .
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-red-50 p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              3. Course Level Requirements
            </h3>
          </div>
          <div className="p-4">
            <p>
              At least two courses are at the 200-level or 300-level, or the s20
              level or above.
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-red-50 p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              4. Content Area Requirements
            </h3>
          </div>
          <div className="p-4 space-y-4">
            <p className="font-medium">
              Students must complete at least one course in each of the
              following areas:
            </p>

            <div className="pl-5 space-y-4">
              <div>
                <p className="mb-1 font-medium">◦ Critical Digital Studies:</p>
                <p className="pl-4">
                  At least one course in Critical Digital Studies designated
                  with the (DCS: Critical Digital St.) attribute;
                </p>
              </div>

              <div>
                <p className="mb-1 font-medium">
                  ◦ Programming and Computer Science Theory:
                </p>
                <p className="pl-4">
                  At least one course on Programming and Computer Science Theory
                  designated with the (DCS: Programming & Theory) attribute;
                </p>
              </div>

              <div>
                <p className="mb-1 font-medium">
                  ◦ Digital and Computational Praxis:
                </p>
                <p className="pl-4">
                  At least one course on Digital and Computational Praxis
                  designated with the (DCS: Praxis) attribute. This includes
                  courses on Computational Modeling and Statistics, Data
                  Analysis, Computational Creativity and Art, and Digital
                  Community Engagement.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-red-50 p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              5. Faculty Requirement
            </h3>
          </div>
          <div className="p-4">
            <p>
              At least three courses must be taught by Bates faculty.
              Internships do not count toward these three courses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
