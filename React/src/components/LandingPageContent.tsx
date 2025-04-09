import { Container, Row, Col } from "react-bootstrap";
import frontPageImage from "../images/front-page.jpg";
import welcomePageImage from "../images/welcomeImage.jpg";

function LandingPageContent() {
  return (
    <Container fluid className="bg-white">
      <h1 className="mb-4">Welcome to my Webpage!</h1>
      <img
        src={welcomePageImage}
        alt="Web Dev Front Image"
        className="img-fluid w-100 mt-4"
      />
      <p className="lead">
        Here you will learn information about HTML, Cascading Style Sheets,
        JavaScript, and GitHub
      </p>
      <h2>Topics</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Git/GitHub</li>
      </ul>
      <img
        src={frontPageImage}
        alt="Web Dev Front Image"
        className="img-fluid mt-4"
      />
    </Container>
  );
}

export default LandingPageContent;
