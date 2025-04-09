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
  return (
    <Navbar
      expand="lg"
      className="alight-items-center bg-white w-200"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="https://www.bates.edu">
          <img
            src="./src/images/bobcat.png"
            width="80"
            height="80"
            className="me-2"
            alt="Bates Bobcat Logo"
          />
        </Navbar.Brand>
        <a
          href="/"
          style={{
            textAlign: "center",
            fontFamily: "Montserrat, sans-serif",
            color: "#000",
            textDecoration: "none",
          }}
        >
          <h3>Information on Web Development</h3>
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              onClick={() => {
                toggleFunction[0]();
              }}
            >
              HTML
            </Nav.Link>
            <Nav.Link
              href="#home"
              onClick={() => {
                toggleFunction[1]();
              }}
            >
              CSS
            </Nav.Link>
            <Nav.Link
              href="#home"
              onClick={() => {
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
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
