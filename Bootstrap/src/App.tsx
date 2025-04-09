import { useState } from "react";
import NavBar from "./NavBar";
import InfoCarousel from "./InfoCarousel";
import { carouselData } from "./carouselData.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

interface DisplayState {
  showHTML: boolean;
  showCSS: boolean;
  showJS: boolean;
}

function App() {
  const [showElements, setShowElements] = useState<DisplayState>({
    showHTML: false,
    showCSS: false,
    showJS: false,
  });

  const toggleHTML = () => {
    setShowElements((prevShowElements) => ({
      ...prevShowElements,
      showHTML: !prevShowElements.showHTML,
      currentElement: "HTML",
    }));
  };

  const toggleCSS = () => {
    setShowElements((prevShowElements) => ({
      ...prevShowElements,
      showCSS: !prevShowElements.showCSS,
      currentElement: "CSS",
    }));
  };

  const toggleJS = () => {
    setShowElements((prevShowElements) => ({
      ...prevShowElements,
      showJS: !prevShowElements.showJS,
      currentElement: "JavaScript",
    }));
  };
  /* Meta AI Prompt: -  
    To display the correct carousel data for each element (HTML, CSS, JS), 
    you'll need to filter the carouselData array based on the currently selected element.
    Question: Using this ItemCarousel, how do I make it create individualized
    item carousels?

  */
  const filteredCarouselData = carouselData.filter(
    (item) => item.label === showElements.currentElement
  );

  /* Meta AI Prompt 
  Step 2: Modify the App component
  Next, modify the App component to pass an array of toggle functions to the NavBar component.
  */
  return (
    <>
      <NavBar toggleFunction={[toggleHTML, toggleCSS, toggleJS]} />
      {
        // useContext so that HTMLCarousel appears and
        // disappears on each click
      }

      {
        // Here Meta AI said to pass the filtered data so that it knows
        // how to format the InfoCarousels
        (showElements.showHTML ||
          showElements.showCSS ||
          showElements.showJS) && (
          <InfoCarousel carouselData={filteredCarouselData} />
        )
      }
    </>
  );
}

export default App;
