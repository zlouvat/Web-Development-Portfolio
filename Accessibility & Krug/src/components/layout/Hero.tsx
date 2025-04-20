import React, { useState } from "react";
import { images } from "../../data/images";

export const Hero = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--colorGarnet-dark)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
          style={{ backgroundColor: "transparent" }}
        >
          {/* Add semi-transparent overlay behind text */}
          <div className="absolute inset-0 bg-garnet-dark bg-opacity-80 z-0 rounded-br-3xl"></div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 relative z-10">
            <div className="sm:text-center lg:text-left">
              <h1
                className="text-4xl tracking-tight font-bold sm:text-5xl md:text-6xl"
                style={{
                  fontFamily: "var(--fontSerif)",
                  fontWeight: 600,
                  color: "white",
                  textShadow: "0 0 4px rgba(0, 0, 0, 0.4)",
                }}
              >
                <span className="block">Digital and</span>
                <span className="block" style={{ color: "hsl(0, 0%, 96%)" }}>
                  Computational Studies
                </span>
              </h1>
              <p
                className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                style={{
                  fontFamily: "var(--fontSansSerif)",
                  fontWeight: 300,
                  color: "#f5f5f5",
                }}
              >
                Blending technical skills with critical thinking at Bates
                College. Explore our interdisciplinary approach to digital
                technology, computational methods, and their societal impact.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button
                    onClick={() => {
                      document
                        .getElementById("about")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 text-garnet-dark uppercase tracking-wider transform transition-transform duration-300 hover:scale-105"
                    style={{
                      fontFamily: "var(--fontSerif)",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    About DCS
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button
                    onClick={() => {
                      document
                        .getElementById("projects")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 text-garnet-dark uppercase tracking-wider transform transition-transform duration-300 hover:scale-105"
                    style={{
                      fontFamily: "var(--fontSerif)",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    Student Projects
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center justify-center p-4">
        <div className="relative w-full h-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px] flex items-center justify-center p-2">
          <div className="w-full h-full relative overflow-hidden rounded-lg shadow-lg">
            <img
              key={`hero-image-${refreshKey}`}
              className="w-full h-full absolute inset-0 object-cover transition-transform duration-300 hover:scale-[1.02]"
              src={images.campus.hero}
              alt="Bates College Digital and Computational Studies"
              style={{
                objectPosition: "center",
                borderRadius: "8px",
                opacity: 0.85,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
