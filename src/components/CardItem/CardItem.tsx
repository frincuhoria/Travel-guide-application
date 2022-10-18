import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./CardItem.css";
import { ITrip } from "../../types/ITrip";

interface CardItemProps {
  trip: ITrip;
}

export const CardItem = ({ trip }: CardItemProps) => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    // navigate(`${trip.path}/${trip.id}`);
    navigate(`${trip.path}/${trip._uuid}`);
  };

  return (
    <Card id="card-style">
      <Card.Img variant="top" src={trip.src} id="card-image" />
      <Card.Body className="card-body">
        <Card.Title id="card-title">{trip.title}</Card.Title>
        <Button variant="primary" onClick={handleRedirect} id="card-button">
          Check this out!
        </Button>
      </Card.Body>
    </Card>
  );
};
