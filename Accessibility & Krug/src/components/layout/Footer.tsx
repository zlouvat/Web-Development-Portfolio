import React, { useState } from "react";
import { images } from "../../data/images";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [imageError, setImageError] = useState(false);

  // Fallback SVG component for Bates Bobcat mascot silhouette
  const BobcatFallbackIcon = () => (
    <svg width="50" height="50" viewBox="0 0 100 100" style={{ fill: "white" }}>
      <path d="M50 5C29.4 5 12.8 21.6 12.8 42.2c0 8.1 2.6 15.7 7.1 21.8-1.4 1.8-2.5 3.9-3.2 6.2-1 3.3-1.2 7-0.3 10.9 1.1 4.7 3.7 9.1 7.6 12.2 3 2.4 6.4 3.6 10 3.6 2.4 0 4.9-0.5 7.5-1.4 2.8-1 5.6-2.5 8.5-4.5 2.9 2 5.7 3.4 8.5 4.5 2.6 0.9 5.1 1.4 7.5 1.4 3.6 0 7-1.2 10-3.6 3.9-3.1 6.5-7.5 7.6-12.2 0.9-3.9 0.7-7.5-0.3-10.9-0.7-2.3-1.8-4.4-3.2-6.2 4.4-6.1 7.1-13.6 7.1-21.8C87.2 21.6 70.6 5 50 5z" />
    </svg>
  );

  return (
    <footer className="relative z-20 w-full">
      {/* Pre-footer area */}
      <aside
        className="pre-footer w-full"
        style={{
          clear: "both",
          margin: 0,
          padding: "2.5em 4% 2em",
          background: "hsl(0, 0%, 93%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <section className="department-info grid md:grid-cols-2 gap-8">
            <div>
              <h3
                style={{
                  fontFamily: "var(--fontSansSerif)",
                  fontSize: "1.5rem",
                  fontWeight: 300,
                  color: "#981328",
                  marginBottom: "0.5em",
                }}
              >
                Contact Information
              </h3>
              <p style={{ marginBottom: "0.3em" }}>
                Digital and Computational Studies
              </p>
              <p style={{ marginBottom: "0.3em", fontWeight: 300 }}>
                Bates College, Lewiston, Maine 04240
              </p>
              <a
                href="mailto:dcs@bates.edu"
                style={{
                  color: "var(--colorGarnet-dark)",
                  textDecoration: "underline",
                }}
              >
                dcs@bates.edu
              </a>
            </div>
            <div>
              <h3
                style={{
                  fontFamily: "var(--fontSansSerif)",
                  fontSize: "1.5rem",
                  fontWeight: 300,
                  color: "#981328",
                  marginBottom: "0.5em",
                }}
              >
                Quick Links
              </h3>
              <div className="grid grid-cols-2 gap-x-4">
                <ul style={{ lineHeight: "1.6rem" }}>
                  <li>
                    <a
                      href="https://www.bates.edu/"
                      style={{ color: "var(--colorGarnet-dark)" }}
                    >
                      Bates College
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => (window.location.href = "/")}
                      style={{ color: "var(--colorGarnet-dark)" }}
                    >
                      Academics
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.bates.edu/mathematics/"
                      style={{ color: "var(--colorGarnet-dark)" }}
                    >
                      Mathematics
                    </a>
                  </li>
                </ul>
                <ul style={{ lineHeight: "1.6rem" }}>
                  <li>
                    <a
                      href="https://www.bates.edu/digital-computational-studies/"
                      style={{ color: "var(--colorGarnet-dark)" }}
                    >
                      Digital and Computational Studies
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.bates.edu/student-affairs/student-resources/"
                      style={{ color: "var(--colorGarnet-dark)" }}
                    >
                      Student Resources
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.bates.edu/campus-map/"
                      style={{ color: "var(--colorGarnet-dark)" }}
                    >
                      Campus Map
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </aside>

      {/* Main footer */}
      <div
        className="w-full"
        style={{
          backgroundColor: "var(--colorGarnet)",
          color: "white",
          padding: "20px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 1rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1rem",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            {/* Bates Logo and Address */}
            <div>
              {/* Logo Row */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div style={{ position: "relative" }}>
                  {imageError ? (
                    <BobcatFallbackIcon />
                  ) : (
                    <img
                      src={images.logos.bobcat}
                      alt="Bates Bobcat Mascot"
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "contain",
                        display: "block",
                      }}
                      onLoad={() => {
                        console.log("Bobcat mascot image loaded successfully");
                      }}
                      onError={(e) => {
                        console.error("Image failed to load:", e);
                        setImageError(true);
                      }}
                    />
                  )}
                </div>
                <h2
                  style={{
                    fontSize: "2rem",
                    fontWeight: 300,
                    margin: 0,
                    fontFamily: "var(--fontSerif), serif",
                  }}
                >
                  Bates
                </h2>
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 300,
                  marginTop: "4px",
                }}
              >
                <p style={{ margin: "2px 0" }}>
                  2 Andrews Road, Lewiston, ME 04240
                </p>
              </div>
            </div>

            {/* Department Information */}
            <div style={{ textAlign: "right" }}>
              <h2
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 300,
                  marginBottom: "0.25rem",
                }}
              >
                Digital and Computational Studies
              </h2>
              <p style={{ marginBottom: "0.25rem", fontSize: "1rem" }}>
                Barry G. Lawson, Department Chair
              </p>
              <a
                href="mailto:blawson@bates.edu"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.textDecoration = "underline")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.textDecoration = "none")
                }
              >
                blawson@bates.edu
              </a>
            </div>
          </div>

          {/* Social Links - Horizontal but in their own row */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "0.75rem",
              borderTop: "1px solid rgba(255, 255, 255, 0.2)",
              paddingTop: "0.75rem",
              display: "flex",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <a href="#" style={{ color: "white", textDecoration: "none" }}>
              <span className="sr-only">Facebook</span>
              <svg
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>
              <span className="sr-only">Instagram</span>
              <svg
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
            </a>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>
              <span className="sr-only">Twitter</span>
              <svg
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>
              <span className="sr-only">YouTube</span>
              <svg
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255, 255, 255, 0.2)",
              paddingTop: "0.75rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "0.7rem",
                color: "rgba(255, 255, 255, 0.9)",
              }}
            >
              © {currentYear} Bates College. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
