import { Container } from "react-bootstrap";

function FullWidthContainer({ children }) {
  return (
    <Container fluid>
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          backgroundColor: "white",
        }}
      >
        {children}
      </div>
    </Container>
  );
}

export default FullWidthContainer;
