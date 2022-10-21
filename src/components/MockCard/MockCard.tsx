
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "../CardItem/CardItem.css";
import { IMockTrip } from "../../types/IMockTrip";

interface MockCardProps {
  trip: IMockTrip;
}

export const MockCard = ({ trip }: MockCardProps) => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate(`${trip.path}/${trip.id}`);
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
