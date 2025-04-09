import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

/* META AI Prompt
To achieve this, you'll need to make the following changes:
Step 1: Modify the NavBar component
First, modify the NavBar component to accept an array of toggle functions, one for each element.
*/
type NavBarProps = {
  toggleFunction: ((which) => void)[];
};

function NavBar({ toggleFunction }: NavBarProps) {
  const [clickCount, setClickCount] = useState(0); // init clickCount is 0

  const handleClick = () => {
    setClickCount(clickCount + 1);
    console.log(`Clicked ${clickCount} times!`);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand href="https://www.bates.edu">
          <img
            src="./src/images/bobcat.png"
            width="80"
            height="80"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              onClick={() => {
                handleClick();
                toggleFunction[0]();
              }}
            >
              HTML
            </Nav.Link>
            <Nav.Link
              href="#home"
              onClick={() => {
                handleClick();
                toggleFunction[1]();
              }}
            >
              CSS
            </Nav.Link>
            <Nav.Link
              href="#home"
              onClick={() => {
                handleClick();
                toggleFunction[2]();
              }}
            >
              JavaScript
            </Nav.Link>
            <NavDropdown title="External Links" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://en.wikipedia.org/wiki/HTML">
                HTML Wikipedia
              </NavDropdown.Item>
              <NavDropdown.Item href="https://en.wikipedia.org/wiki/CSS">
                CSS Wikipedia
              </NavDropdown.Item>
              <NavDropdown.Item href="https://en.wikipedia.org/wiki/JavaScript">
                JavaScript Wikipedia
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
