import React from "react";

export const IndustryPreparation = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Industry Preparation
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Preparing DCS students for successful careers in technology and
            digital industries
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Career Pathways */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Career Pathways
                </h3>
                <div className="mt-2 text-sm text-gray-500">
                  <p>
                    Explore various career paths available to DCS graduates,
                    including software development, data science, UX/UI design,
                    digital humanities, and more.
                  </p>
                </div>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-red-800 hover:text-red-900 font-medium"
                  >
                    Learn more about career pathways →
                  </a>
                </div>
              </div>
            </div>

            {/* Internship Opportunities */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Internship Opportunities
                </h3>
                <div className="mt-2 text-sm text-gray-500">
                  <p>
                    Connect with local and national organizations offering
                    internships for DCS students. Gain real-world experience
                    while building your professional network.
                  </p>
                </div>
                <div className="mt-4">
                  <a
                    href="#internships"
                    onClick={(e) => {
                      e.preventDefault();
                      if (typeof window !== "undefined") {
                        window.dispatchEvent(
                          new CustomEvent("navigate-to-internships")
                        );
                      }
                    }}
                    className="text-red-800 hover:text-red-900 font-medium"
                  >
                    Browse internship opportunities →
                  </a>
                </div>
              </div>
            </div>

            {/* Professional Development */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  Professional Development
                </h3>
                <div className="mt-2 text-sm text-gray-500">
                  <p>
                    Access workshops, seminars, and resources to develop
                    essential skills for the workplace, from technical
                    proficiencies to soft skills like communication and
                    teamwork.
                  </p>
                </div>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-red-800 hover:text-red-900 font-medium"
                  >
                    Explore professional development resources →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alumni Success Stories */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Alumni Success Stories
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-red-800 font-bold">JD</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      Jane Doe
                    </h4>
                    <p className="text-sm text-gray-500">
                      Software Engineer at Google
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  <p>
                    "The DCS program gave me the technical foundation and
                    critical thinking skills that prepared me for a successful
                    career in software engineering. The interdisciplinary
                    approach helped me stand out in the job market."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-red-800 font-bold">JS</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      John Smith
                    </h4>
                    <p className="text-sm text-gray-500">
                      Data Scientist at Amazon
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  <p>
                    "My DCS education provided me with a unique perspective on
                    data analysis that combines technical skills with ethical
                    considerations. This holistic approach has been invaluable
                    in my career."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Partners */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Industry Partners
          </h3>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow flex items-center justify-center">
              <span className="text-gray-500 font-medium">Partner 1</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex items-center justify-center">
              <span className="text-gray-500 font-medium">Partner 2</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex items-center justify-center">
              <span className="text-gray-500 font-medium">Partner 3</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex items-center justify-center">
              <span className="text-gray-500 font-medium">Partner 4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
