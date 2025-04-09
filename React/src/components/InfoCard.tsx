import Card from "react-bootstrap/Card";
import "../styles/Card.css";

function InfoCard({ cardData }) {
  return (
    <>
      {cardData.map((item, index) => (
        <Card key={index} className="Card-img">
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title className="d-block w-100">{item.label}</Card.Title>
            <Card.Text>{item.text}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default InfoCard;
