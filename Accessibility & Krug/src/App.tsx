import React from "react";
import { Header } from "./components/layout/Header";
import { Hero } from "./components/layout/Hero";
import { Footer } from "./components/layout/Footer";
import { ProjectsSection } from "./components/projects/ProjectsSection";
import { AboutSection } from "./components/about/AboutSection";
import { AcademicsPage } from "./components/academics/AcademicsPage";
import {
  IndustryPreparation,
  InternshipOpportunities,
  CareerPathways,
  ProfessionalDevelopment,
} from "./components/industry";
import { useState, useEffect } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState<
    "home" | "academics" | "industry"
  >("home");
  const [academicsTab, setAcademicsTab] = useState<
    "overview" | "major" | "minor" | "courses" | "faculty"
  >("overview");
  const [industryTab, setIndustryTab] = useState<
    "overview" | "internships" | "career-pathways" | "professional-development"
  >("overview");

  const handleAcademicsTabChange = (
    tab: "overview" | "major" | "minor" | "courses" | "faculty"
  ) => {
    setAcademicsTab(tab);
  };

  const handleIndustryTabChange = (
    tab:
      | "overview"
      | "internships"
      | "career-pathways"
      | "professional-development"
  ) => {
    setIndustryTab(tab);
  };

  // Handle navigation to internships tab
  useEffect(() => {
    const handleNavigateToInternships = () => {
      setCurrentPage("industry");
      setIndustryTab("internships");
    };

    window.addEventListener(
      "navigate-to-internships",
      handleNavigateToInternships
    );

    return () => {
      window.removeEventListener(
        "navigate-to-internships",
        handleNavigateToInternships
      );
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative">
      <Header
        onNavigate={setCurrentPage}
        onAcademicsTabChange={handleAcademicsTabChange}
        onIndustryTabChange={handleIndustryTabChange}
      />
      <div className="flex-grow relative z-10">
        {currentPage === "home" ? (
          <main>
            <Hero />
            <AboutSection />
            <ProjectsSection />

            <div className="text-center py-12 space-y-4">
              <button
                onClick={() => setCurrentPage("academics")}
                className="bates-button inline-flex items-center px-6 py-3 text-base font-medium rounded-md mr-4"
              >
                View Academics
              </button>
              <button
                onClick={() => {
                  setCurrentPage("industry");
                  setIndustryTab("overview");
                }}
                className="bates-button inline-flex items-center px-6 py-3 text-base font-medium rounded-md"
              >
                Industry Preparation
              </button>
            </div>
          </main>
        ) : currentPage === "academics" ? (
          <main>
            <AcademicsPage initialTab={academicsTab} />
            <div className="text-center py-12">
              <button
                onClick={() => setCurrentPage("home")}
                className="bates-button inline-flex items-center px-6 py-3 text-base font-medium rounded-md"
              >
                Back to Home
              </button>
            </div>
          </main>
        ) : (
          <main>
            {/* Industry tabs - conditionally render based on industryTab state */}
            {industryTab === "overview" ? (
              <IndustryPreparation />
            ) : industryTab === "internships" ? (
              <InternshipOpportunities />
            ) : industryTab === "career-pathways" ? (
              <CareerPathways />
            ) : (
              <ProfessionalDevelopment />
            )}

            <div className="text-center py-12">
              <div className="space-x-4 mb-6">
                {industryTab !== "overview" && (
                  <button
                    onClick={() => setIndustryTab("overview")}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-garnet-dark bg-white hover:bg-batesGray-light transition-colors border-garnet"
                  >
                    Back to Industry Overview
                  </button>
                )}
              </div>
              <button
                onClick={() => setCurrentPage("home")}
                className="bates-button inline-flex items-center px-6 py-3 text-base font-medium rounded-md"
              >
                Back to Home
              </button>
            </div>
          </main>
        )}
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default App;
