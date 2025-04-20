import React, { useState, useEffect } from "react";
import { MajorRequirements } from "./MajorRequirements";
import { MinorRequirements } from "./MinorRequirements";
import { FacultySection } from "./FacultySection";

type TabType = "overview" | "major" | "minor" | "courses" | "faculty";

interface AcademicsPageProps {
  initialTab?: TabType;
}

export const AcademicsPage: React.FC<AcademicsPageProps> = ({
  initialTab = "overview",
}) => {
  const [activeTab, setActiveTab] = useState<TabType>(initialTab);

  // Update active tab if initialTab changes
  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Academics</h1>
        <p className="mt-4 text-xl text-gray-500">
          Digital and Computational Studies academic programs, requirements, and
          courses
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab("overview")}
            className={`
              whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
              ${
                activeTab === "overview"
                  ? "border-red-800 text-red-800"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }
            `}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("major")}
            className={`
              whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
              ${
                activeTab === "major"
                  ? "border-red-800 text-red-800"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }
            `}
          >
            Major Requirements
          </button>
          <button
            onClick={() => setActiveTab("minor")}
            className={`
              whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
              ${
                activeTab === "minor"
                  ? "border-red-800 text-red-800"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }
            `}
          >
            Minor Requirements
          </button>
          <button
            onClick={() => setActiveTab("courses")}
            className={`
              whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
              ${
                activeTab === "courses"
                  ? "border-red-800 text-red-800"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }
            `}
          >
            Course Catalog
          </button>
          <button
            onClick={() => setActiveTab("faculty")}
            className={`
              whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
              ${
                activeTab === "faculty"
                  ? "border-red-800 text-red-800"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }
            `}
          >
            Faculty
          </button>
        </nav>
      </div>

      {/* Tab content */}
      <div>
        {activeTab === "overview" && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              About Our Program
            </h2>
            <p className="text-gray-600 mb-6">
              The Digital and Computational Studies (DCS) program at Bates
              College integrates technical skills with critical thinking to
              prepare students for the digital age.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-red-800 mb-3">
                  Program Highlights
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    Interdisciplinary approach combining computer science, data
                    analysis, and critical digital studies
                  </li>
                  <li>
                    Small class sizes with personalized attention from expert
                    faculty
                  </li>
                  <li>
                    Emphasis on both technical skills and critical analysis of
                    technology's impact
                  </li>
                  <li>
                    Opportunities for research, internships, and community
                    engagement
                  </li>
                </ul>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://www.bates.edu/wordpress/files/2018/08/pettengill-hall-summer-08-002.jpg"
                  alt="Pettengill Hall at Bates College"
                  className="absolute w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-red-800 mb-2">
                  Major
                </h3>
                <p className="text-gray-600 mb-4">
                  Our comprehensive major prepares students with both technical
                  proficiency and critical perspective.
                </p>
                <button
                  onClick={() => setActiveTab("major")}
                  className="mt-2 text-sm font-medium text-red-800 hover:text-red-900 flex items-center"
                >
                  View requirements
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-red-800 mb-2">
                  Minor
                </h3>
                <p className="text-gray-600 mb-4">
                  Complement your primary field of study with digital and
                  computational skills.
                </p>
                <button
                  onClick={() => setActiveTab("minor")}
                  className="mt-2 text-sm font-medium text-red-800 hover:text-red-900 flex items-center"
                >
                  View requirements
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-red-800 mb-2">
                  Courses
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore our diverse course offerings across multiple areas of
                  digital studies.
                </p>
                <button
                  onClick={() => setActiveTab("courses")}
                  className="mt-2 text-sm font-medium text-red-800 hover:text-red-900 flex items-center"
                >
                  Browse courses
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-800 mb-3">
                Meet Our Faculty
              </h3>
              <p className="text-gray-700 mb-4">
                Our distinguished faculty brings expertise from diverse areas
                including computer science, mathematics, data science, digital
                humanities, and more. They are dedicated to providing students
                with a comprehensive education in digital and computational
                studies.
              </p>
              <button
                onClick={() => setActiveTab("faculty")}
                className="px-4 py-2 bg-red-800 text-white rounded hover:bg-red-900 transition-colors inline-flex items-center"
              >
                View Faculty Profiles
                <svg
                  className="w-4 h-4 ml-1"
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
              </button>
            </div>
          </div>
        )}
        {activeTab === "major" && <MajorRequirements />}
        {activeTab === "minor" && <MinorRequirements />}
        {activeTab === "courses" && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Course Catalog
            </h2>
            <p className="text-gray-600 mb-6">
              Browse course offerings across Digital and Computational Studies
              disciplines.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <p className="text-lg text-yellow-800 mb-4">
                For the 2024-25 academic year, the catalog is only available in
                PDF format.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="#"
                  className="text-blue-600 underline hover:text-blue-800 font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://www.bates.edu/catalog/2024-25-bates-college-course-catalog",
                      "_blank"
                    );
                  }}
                >
                  View the 2024-25 Bates College Course Catalog
                </a>

                <button
                  onClick={() => {
                    window.open(
                      "https://www.bates.edu/catalog/2024-25-bates-college-course-catalog",
                      "_blank"
                    );
                  }}
                  className="px-4 py-2 bg-red-800 text-white rounded hover:bg-red-900 transition-colors flex items-center"
                >
                  <span>Download PDF</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                DCS Course Highlights
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                  <h4 className="font-medium text-lg text-red-800">
                    Introductory Courses
                  </h4>
                  <ul className="mt-2 space-y-1 text-gray-700">
                    <li>DCS 109: Introduction to Programming (Python)</li>
                    <li>DCS 105: Data Visualization and Analysis</li>
                    <li>DCS 106: Critical Digital Studies</li>
                  </ul>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                  <h4 className="font-medium text-lg text-red-800">
                    Software Development
                  </h4>
                  <ul className="mt-2 space-y-1 text-gray-700">
                    <li>DCS 211: Data Structures and Algorithms</li>
                    <li>DCS 229: Web Development</li>
                  </ul>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                  <h4 className="font-medium text-lg text-red-800">
                    Special Topics
                  </h4>
                  <ul className="mt-2 space-y-1 text-gray-700">
                    <li>DCS 301C: Digital Community Engagement</li>
                    <li>DCS 304: Human-Centered Design</li>
                    <li>DCS 325: Computational Art and Creativity</li>
                  </ul>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                  <h4 className="font-medium text-lg text-red-800">
                    Upper-Level Electives
                  </h4>
                  <ul className="mt-2 space-y-1 text-gray-700">
                    <li>DCS 307: Advanced Data Analysis</li>
                    <li>DCS 375: Machine Learning</li>
                    <li>DCS 4XX: Senior Design Capstone</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-6 italic">
                Note: Course offerings may vary by semester. Please refer to the
                full catalog for complete information.
              </p>
            </div>
          </div>
        )}
        {activeTab === "faculty" && <FacultySection />}
      </div>
    </div>
  );
};
