import { useState } from "react";
import NavBar from "./components/NavBar.tsx";
import InfoCard from "./components/InfoCard.tsx";
import cardData from "./cardData.js";
import LandingPageContent from "./components/LandingPageContent.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import FullWidthContainer from "./components/PageBorder.tsx";

interface DisplayState {
  showHTML: boolean;
  showCSS: boolean;
  showJS: boolean;
  currentElement: string;
  showLandingPage: boolean;
}

function App() {
  const [showElements, setShowElements] = useState<DisplayState>({
    showHTML: false,
    showCSS: false,
    showJS: false,
    currentElement: "",
    showLandingPage: true,
  });

  const toggleHTML = () => {
    setShowElements((prevShowElements) => ({
      ...prevShowElements,
      showHTML: !prevShowElements.showHTML,
      currentElement: "HTML",
      showLandingPage: false,
    }));
  };

  const toggleCSS = () => {
    setShowElements((prevShowElements) => ({
      ...prevShowElements,
      showCSS: !prevShowElements.showCSS,
      currentElement: "CSS",
      showLandingPage: false,
    }));
  };

  const toggleJS = () => {
    setShowElements((prevShowElements) => ({
      ...prevShowElements,
      showJS: !prevShowElements.showJS,
      currentElement: "JavaScript",
      showLandingPage: false,
    }));
  };

  const filteredCardData = cardData.filter(
    (item) => item.label === showElements.currentElement
  );

  return (
    <FullWidthContainer>
      <NavBar toggleFunction={[toggleHTML, toggleCSS, toggleJS]} />
      {showElements.showLandingPage && <LandingPageContent />}
      {showElements.currentElement && <InfoCard cardData={filteredCardData} />}
    </FullWidthContainer>
  );
}

export default App;
