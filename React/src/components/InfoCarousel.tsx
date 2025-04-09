import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "components/ExampleCarouselImage";

import "./InfoCarousel.css";

function InfoCarousel({ carouselData }) {
  //console.log(carouselData);
  //this is a comment
  return (
    <Carousel>
      {carouselData.map((item, index) => (
        <Carousel.Item key={index} className="d-block w-100">
          <img className="img-fluid" src={item.image} alt={item.label} />
          <Carousel.Caption>
            <h3>{item.label}</h3>
            <p>{item.text}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default InfoCarousel;
