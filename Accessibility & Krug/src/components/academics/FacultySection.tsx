import React from "react";
import { facultyMembers } from "../../data/faculty";

export const FacultySection: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-garnet-dark mb-4">Faculty</h2>
      <p className="text-batesGray mb-8">
        Meet our diverse faculty specialized in various aspects of digital and
        computational studies. Our professors bring expertise from academia and
        industry to provide students with a comprehensive education.
      </p>

      <div className="space-y-16">
        {facultyMembers.map((faculty, index) => (
          <div
            key={faculty.id}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-8 items-center`}
          >
            {/* Image */}
            <div className="w-full md:w-1/3">
              <div className="aspect-square overflow-hidden rounded-lg shadow-md relative group">
                <img
                  src={faculty.imageUrl}
                  alt={faculty.name}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                />
                {faculty.website && (
                  <a
                    href={faculty.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-garnet/0 group-hover:bg-garnet/20 flex items-center justify-center transition-all duration-300"
                    aria-label={`View ${faculty.name}'s profile`}
                  >
                    <span className="opacity-0 group-hover:opacity-100 bg-garnet text-white px-4 py-2 rounded-full transition-opacity duration-300 text-sm font-medium">
                      View Profile
                    </span>
                  </a>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-2/3">
              <h3 className="text-xl font-bold text-garnet-dark">
                {faculty.name}
              </h3>
              <p className="text-garnet-bright font-medium mt-1">
                {faculty.title}
              </p>

              <div className="mt-2 space-y-1">
                {faculty.email && (
                  <p className="text-batesGray">
                    <span className="font-medium">Email:</span>
                    <a
                      href={`mailto:${faculty.email}`}
                      className="ml-1 text-batesBlue hover:text-batesBlue-bright transition-colors"
                    >
                      {faculty.email}
                    </a>
                  </p>
                )}

                {faculty.website && (
                  <p className="text-batesGray">
                    <span className="font-medium">Website:</span>{" "}
                    <a
                      href={faculty.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-batesBlue hover:text-batesBlue-bright transition-colors"
                    >
                      Faculty Profile
                    </a>
                  </p>
                )}
              </div>

              <p className="text-batesGray mt-4">{faculty.background}</p>

              {faculty.research && faculty.research.length > 0 && (
                <div className="mt-4">
                  <p className="font-medium text-garnet-dark">
                    Research Interests:
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {faculty.research.map((area, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-garnet-bright/10 text-garnet-dark rounded-full text-sm"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
