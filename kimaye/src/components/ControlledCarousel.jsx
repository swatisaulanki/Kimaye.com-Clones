import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

export function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{height:"530px"}} variant="dark">
      <Carousel.Item style={{height:"530px"}}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{height:"530px"}}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{height:"530px"}}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/235294/pexels-photo-235294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{height:"530px"}}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1161547/pexels-photo-1161547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

root.render(<ControlledCarousel />);
