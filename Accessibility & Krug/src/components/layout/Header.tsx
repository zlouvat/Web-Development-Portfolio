import React, { useState, useRef, useEffect } from "react";

interface HeaderProps {
  onNavigate?: (page: "home" | "academics" | "industry") => void;
  onAcademicsTabChange?: (
    tab: "overview" | "major" | "minor" | "courses" | "faculty"
  ) => void;
  onIndustryTabChange?: (
    tab:
      | "overview"
      | "internships"
      | "career-pathways"
      | "professional-development"
  ) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigate,
  onAcademicsTabChange,
  onIndustryTabChange,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAcademicsDropdownVisible, setIsAcademicsDropdownVisible] =
    useState(false);
  const [isIndustryDropdownVisible, setIsIndustryDropdownVisible] =
    useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const academicsDropdownRef = useRef<HTMLDivElement>(null);
  const industryDropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchFormRef = useRef<HTMLFormElement>(null);

  // CSS for animations
  const animations = `
    @keyframes slideIn {
      from { opacity: 0; transform: translateX(20px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `;

  useEffect(() => {
    // Add animations to document head
    const styleElement = document.createElement("style");
    styleElement.innerHTML = animations;
    document.head.appendChild(styleElement);

    // Clean up
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 300); // Wait for animation to complete
    }
  }, [isSearchOpen]);

  const handleNavClick = (page: "home" | "academics" | "industry") => {
    if (onNavigate) {
      onNavigate(page);
    }
    setIsMenuOpen(false);
  };

  const handleAcademicsClick = () => {
    handleNavClick("academics");
    if (onAcademicsTabChange) {
      onAcademicsTabChange("overview");
    }
  };

  const handleAcademicsTabClick = (
    tab: "overview" | "major" | "minor" | "courses" | "faculty"
  ) => {
    if (onAcademicsTabChange) {
      onAcademicsTabChange(tab);
    }
    handleNavClick("academics");
    setIsAcademicsDropdownVisible(false);
  };

  const handleIndustryClick = () => {
    handleNavClick("industry");
    if (onIndustryTabChange) {
      onIndustryTabChange("overview");
    }
  };

  const handleIndustryTabClick = (
    tab:
      | "overview"
      | "internships"
      | "career-pathways"
      | "professional-development"
  ) => {
    if (onIndustryTabChange) {
      onIndustryTabChange(tab);
    }
    handleNavClick("industry");
    setIsIndustryDropdownVisible(false);
  };

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real implementation, this would navigate to search results
      alert(`Searching for: ${searchQuery}`);
      // window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="w-full relative z-30">
      {/* Bates Global Navigation */}
      <div
        className="w-full"
        style={{
          background: "var(--colorGarnet)",
          height: "40px",
        }}
      >
        <div className="flex justify-between items-center h-full px-4">
          {/* Menu Button */}
          <div className="flex items-center">
            <button
              style={{
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                color: "white",
                textTransform: "uppercase",
                fontWeight: 400,
                border: "none",
                background: "transparent",
                padding: "0",
                cursor: "pointer",
                height: "100%",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span style={{ marginLeft: "8px" }}>MENU</span>
            </button>
          </div>

          {/* Bates Logo */}
          <div
            style={{
              textAlign: "center",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <a
              href="https://www.bates.edu/"
              style={{
                display: "block",
                textDecoration: "none",
                color: "white",
                fontSize: "30px",
                fontFamily: "var(--fontSerif), serif",
                fontWeight: 500,
                letterSpacing: "0.5px",
              }}
            >
              Bates
            </a>
          </div>

          {/* Search Button */}
          <div className="flex items-center">
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                height: "100%",
              }}
            >
              {/* Conditional rendering - show either search form or button */}
              {isSearchOpen ? (
                <form
                  ref={searchFormRef}
                  onSubmit={handleSearchSubmit}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    transition: "all 0.3s ease",
                    animation: "slideIn 0.3s forwards",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "white",
                      borderRadius: "20px",
                      padding: "2px",
                      width: "200px",
                    }}
                  >
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search..."
                      style={{
                        padding: "4px 12px",
                        fontSize: "14px",
                        border: "none",
                        outline: "none",
                        borderRadius: "20px",
                        width: "100%",
                        height: "28px",
                        backgroundColor: "transparent",
                      }}
                    />
                    <button
                      type="submit"
                      style={{
                        background: "var(--colorGarnet)",
                        border: "none",
                        color: "white",
                        width: "26px",
                        height: "26px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        marginRight: "2px",
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={handleSearchToggle}
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "#666",
                        width: "26px",
                        height: "26px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        marginRight: "2px",
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M6 18L18 6M6 6l12 12"
                          stroke="#666"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              ) : (
                <button
                  onClick={handleSearchToggle}
                  style={{
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                    textTransform: "uppercase",
                    fontWeight: 400,
                    border: "none",
                    background: "transparent",
                    padding: "0",
                    cursor: "pointer",
                    animation: "fadeIn 0.3s forwards",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span style={{ marginLeft: "8px" }}>SEARCH</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Department Title */}
      <div className="bg-white p-3 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <h1
            className="text-2xl font-bold"
            style={{
              fontFamily: "var(--fontSansSerif)",
              color: "var(--colorGarnet)",
            }}
          >
            Digital and Computational Studies
          </h1>
        </div>
      </div>

      {/* Navigation tabs - Bates style */}
      <nav
        style={{
          background: "hsl(0, 0%, 13%)",
          borderBottom: 0,
          borderTop: "1px solid hsla(0, 0%, 100%, 0.1)",
          borderLeft: "1px solid hsla(0, 0%, 100%, 0.1)",
          borderRight: "1px solid hsla(0, 0%, 100%, 0.1)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="hidden md:flex">
            <button
              onClick={() => handleNavClick("home")}
              style={{
                padding: "0.5rem 1.25rem",
                color: "hsl(0, 0%, 94%)",
                fontWeight: "normal",
                border: "none",
                background: "transparent",
                fontSize: "0.95rem",
              }}
              className="hover:bg-gray-700"
            >
              Home
            </button>
            <div
              className="relative"
              ref={academicsDropdownRef}
              onMouseEnter={() => setIsAcademicsDropdownVisible(true)}
              onMouseLeave={() => setIsAcademicsDropdownVisible(false)}
            >
              <button
                onClick={() => handleAcademicsClick()}
                style={{
                  padding: "0.5rem 1.25rem",
                  color: "hsl(0, 0%, 94%)",
                  fontWeight: "normal",
                  border: "none",
                  background: "transparent",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "0.95rem",
                }}
                className="hover:bg-gray-700"
              >
                Academics
                <svg
                  className="w-3.5 h-3.5 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Academics dropdown with onMouseEnter/onMouseLeave events */}
              {isAcademicsDropdownVisible && (
                <div className="absolute z-50 mt-0 w-48 shadow-lg bg-black bg-opacity-80 ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <button
                      onClick={() => handleAcademicsTabClick("major")}
                      className="block w-full text-left px-4 py-1.5 text-xs text-gray-100 hover:bg-gray-700"
                      role="menuitem"
                    >
                      Major Requirements
                    </button>
                    <button
                      onClick={() => handleAcademicsTabClick("minor")}
                      className="block w-full text-left px-4 py-1.5 text-xs text-gray-100 hover:bg-gray-700"
                      role="menuitem"
                    >
                      Minor Requirements
                    </button>
                    <button
                      onClick={() => handleAcademicsTabClick("courses")}
                      className="block w-full text-left px-4 py-1.5 text-xs text-gray-100 hover:bg-gray-700"
                      role="menuitem"
                    >
                      Course Catalog
                    </button>
                    <button
                      onClick={() => handleAcademicsTabClick("faculty")}
                      className="block w-full text-left px-4 py-1.5 text-xs text-gray-100 hover:bg-gray-700"
                      role="menuitem"
                    >
                      Faculty
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div
              className="relative"
              ref={industryDropdownRef}
              onMouseEnter={() => setIsIndustryDropdownVisible(true)}
              onMouseLeave={() => setIsIndustryDropdownVisible(false)}
            >
              <button
                onClick={() => handleIndustryClick()}
                style={{
                  padding: "0.5rem 1.25rem",
                  color: "hsl(0, 0%, 94%)",
                  fontWeight: "normal",
                  border: "none",
                  background: "transparent",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "0.95rem",
                }}
                className="hover:bg-gray-700"
              >
                Industry Preparation
                <svg
                  className="w-3.5 h-3.5 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Industry dropdown with onMouseEnter/onMouseLeave events */}
              {isIndustryDropdownVisible && (
                <div className="absolute z-50 mt-0 w-48 shadow-lg bg-black bg-opacity-80 ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <button
                      onClick={() => handleIndustryTabClick("overview")}
                      className="block w-full text-left px-4 py-1.5 text-xs text-gray-100 hover:bg-gray-700"
                      role="menuitem"
                    >
                      Overview
                    </button>
                    <button
                      onClick={() => handleIndustryTabClick("internships")}
                      className="block w-full text-left px-4 py-1.5 text-xs text-gray-100 hover:bg-gray-700"
                      role="menuitem"
                    >
                      Internship Opportunities
                    </button>
                    <button
                      onClick={() => handleIndustryTabClick("career-pathways")}
                      className="block w-full text-left px-4 py-1.5 text-xs text-gray-100 hover:bg-gray-700"
                      role="menuitem"
                    >
                      Career Pathways
                    </button>
                    <button
                      onClick={() =>
                        handleIndustryTabClick("professional-development")
                      }
                      className="block w-full text-left px-4 py-1.5 text-xs text-gray-100 hover:bg-gray-700"
                      role="menuitem"
                    >
                      Professional Development
                    </button>
                  </div>
                </div>
              )}
            </div>
            <button
              style={{
                padding: "0.5rem 1.25rem",
                color: "hsl(0, 0%, 94%)",
                fontWeight: "normal",
                border: "none",
                background: "transparent",
                fontSize: "0.95rem",
              }}
              className="hover:bg-gray-700"
            >
              Faculty
            </button>
            <button
              style={{
                padding: "0.5rem 1.25rem",
                color: "hsl(0, 0%, 94%)",
                fontWeight: "normal",
                border: "none",
                background: "transparent",
                fontSize: "0.95rem",
              }}
              className="hover:bg-gray-700"
            >
              Courses
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu button */}
      <div
        className="md:hidden px-4 py-1.5 flex justify-end relative"
        style={{ background: "hsl(0, 0%, 13%)" }}
      >
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center justify-center p-1.5 rounded-md text-gray-200 hover:text-white hover:bg-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`${isMenuOpen ? "hidden" : "block"} h-5 w-5`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            className={`${isMenuOpen ? "block" : "hidden"} h-5 w-5`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => handleNavClick("home")}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Home
            </button>
            <div>
              <button
                onClick={() => handleAcademicsClick()}
                className="w-full text-left flex justify-between items-center px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              >
                <span>Academics</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="ml-4 border-l-2 border-gray-600 pl-2">
                <button
                  onClick={() => handleAcademicsTabClick("major")}
                  className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                >
                  Major Requirements
                </button>
                <button
                  onClick={() => handleAcademicsTabClick("minor")}
                  className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                >
                  Minor Requirements
                </button>
                <button
                  onClick={() => handleAcademicsTabClick("courses")}
                  className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                >
                  Course Catalog
                </button>
                <button
                  onClick={() => handleAcademicsTabClick("faculty")}
                  className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                >
                  Faculty
                </button>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleIndustryClick()}
                className="w-full text-left flex justify-between items-center px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              >
                <span>Industry Preparation</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="ml-4 border-l-2 border-gray-600 pl-2">
                <button
                  onClick={() => handleIndustryTabClick("overview")}
                  className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                >
                  Overview
                </button>
                <button
                  onClick={() => handleIndustryTabClick("internships")}
                  className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                >
                  Internship Opportunities
                </button>
                <button
                  onClick={() => handleIndustryTabClick("career-pathways")}
                  className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                >
                  Career Pathways
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
