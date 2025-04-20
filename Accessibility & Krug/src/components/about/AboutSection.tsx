import React from "react";
import { images } from "../../data/images";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-garnet-dark sm:text-4xl">
              About Digital and Computational Studies
            </h2>
            <p className="mt-4 text-lg text-batesGray">
              The Digital and Computational Studies (DCS) program at Bates
              College integrates technical skills with critical thinking to
              prepare students for the digital age. Our interdisciplinary
              approach combines computer science, data analysis, and critical
              perspectives on technology.
            </p>
            <div className="mt-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-garnet text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 12c0 1.105-2.239 2-5 2s-5-.895-5-2m10 0c0-1.105-2.239-2-5-2s-5 .895-5 2m10 0v3c0 1.105-2.239 2-5 2s-5-.895-5-2v-3"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-garnet-dark">
                    Innovative Curriculum
                  </h3>
                  <p className="mt-2 text-base text-batesGray">
                    Our courses blend theoretical knowledge with hands-on
                    practice, allowing students to create meaningful digital
                    projects while understanding their broader implications.
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-garnet text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 11v8"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 15v2"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 15v2"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-garnet-dark">
                    Interdisciplinary Approach
                  </h3>
                  <p className="mt-2 text-base text-batesGray">
                    DCS encourages connections across disciplines, with
                    opportunities to apply computational methods to subjects
                    ranging from social sciences to humanities and natural
                    sciences.
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-garnet text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6l4 2"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-garnet-dark">
                    Career Preparation
                  </h3>
                  <p className="mt-2 text-base text-batesGray">
                    Our graduates pursue diverse careers in software
                    development, data science, digital media, and research,
                    equipped with both technical skills and critical thinking
                    abilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="aspect-w-5 aspect-h-3 rounded-lg overflow-hidden shadow-lg">
              <img
                className="object-cover"
                src={images.campus.pettengill}
                alt="Pettengill Hall at Bates College - Home of DCS department"
              />
            </div>
            <div className="mt-4 flex flex-col items-center space-y-3">
              <a
                href="https://www.bates.edu/map/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-garnet font-medium hover:text-garnet-bright transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                View Campus Map
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/academics";
                }}
                className="inline-flex items-center text-garnet font-medium hover:text-garnet-bright transition-colors"
              >
                Learn more about our academic programs
                <svg
                  className="ml-1 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
