import React, { useState } from "react";

interface Internship {
  id: number;
  studentName: string;
  graduationYear: string;
  position: string;
  company: string;
  imageUrl: string;
}

export const InternshipOpportunities = () => {
  // Sample data for student internships
  const internships: Internship[] = [
    {
      id: 1,
      studentName: "Student Name",
      graduationYear: "Class of 2025",
      position: "Software Engineering Intern",
      company: "Google",
      imageUrl: "/images/placeholder-image.svg",
    },
    {
      id: 2,
      studentName: "Student Name",
      graduationYear: "Class of 2022",
      position: "Data Science Intern",
      company: "Amazon",
      imageUrl: "/images/placeholder-image.svg",
    },
    {
      id: 3,
      studentName: "Student Name",
      graduationYear: "Class of 2023",
      position: "UX Design Intern",
      company: "Apple",
      imageUrl: "/images/placeholder-image.svg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === internships.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? internships.length - 1 : prevIndex - 1
    );
  };

  // Calculate which internships to display in the current view
  const visibleInternships = [
    internships[currentIndex],
    internships[(currentIndex + 1) % internships.length],
    internships[(currentIndex + 2) % internships.length],
  ];

  return (
    <div className="bg-white">
      {/* Main header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Internship Opportunities
          </h1>
        </div>
      </div>

      {/* Student Internships section */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Student Internships
          </h2>

          {/* Internship cards carousel */}
          <div className="relative">
            {/* Left arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
              aria-label="Previous slide"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Internship cards */}
            <div className="flex justify-center gap-6 py-4">
              {visibleInternships.map((internship) => (
                <div
                  key={internship.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden w-64"
                >
                  <div className="h-40 bg-gray-200 relative">
                    <img
                      src={internship.imageUrl}
                      alt={`${internship.studentName} at ${internship.company}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 text-center bg-gray-50">
                    <h3 className="font-medium text-gray-900">
                      {internship.studentName}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {internship.graduationYear}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {internship.position}
                    </p>
                    <p className="text-sm text-gray-600">
                      {internship.company}
                    </p>
                    <a
                      href="#"
                      className="inline-block mt-4 text-sm text-blue-600 hover:text-blue-800"
                    >
                      More Info
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Right arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
              aria-label="Next slide"
            >
              <svg
                className="w-6 h-6 text-gray-600"
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
      </div>

      {/* Two-column section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Connection Opportunities */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Connection Opportunities
            </h2>

            {/* LinkedIn Group */}
            <div className="mb-4">
              <a
                href="#"
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                <div className="bg-blue-600 text-white p-2 rounded-md w-8 h-8 flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <span className="ml-2">Bates alumni LinkedIn group</span>
              </a>
            </div>

            {/* Career Fair */}
            <div className="mt-6">
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="/images/placeholder-image.svg"
                  alt="Career fair"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-medium">
                    Register for the upcoming Purposeful Work Career fair!
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Good Resources */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Good resources</h2>

            {/* Resource links */}
            <div className="space-y-4">
              <a href="#" className="flex items-center">
                <div className="bg-green-500 text-white p-2 rounded-md w-8 h-8 flex items-center justify-center">
                  <span className="font-bold">H</span>
                </div>
                <span className="ml-2">Handshake</span>
              </a>

              <a href="#" className="flex items-center">
                <div className="bg-blue-500 text-white p-2 rounded-md w-8 h-8 flex items-center justify-center">
                  <span className="font-bold">in</span>
                </div>
                <span className="ml-2">Indeed</span>
              </a>

              <a href="#" className="flex items-center">
                <div className="bg-red-500 text-white p-2 rounded-md w-8 h-8 flex items-center justify-center">
                  <span className="font-bold">P</span>
                </div>
                <span className="ml-2">Purposeful Work</span>
              </a>
            </div>

            {/* Internship Information button */}
            <div className="mt-8 text-center">
              <a
                href="#"
                className="inline-block px-6 py-3 bg-red-800 text-white rounded-full hover:bg-red-900 transition-colors"
              >
                Internship Information
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
