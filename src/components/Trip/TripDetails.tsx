import { Card } from "react-bootstrap";
import { ITrip } from "../../types/ITrip";

interface CardDetailsProps {
    trip: ITrip;
  }

export const TripDetails = ({ trip }: CardDetailsProps) => {
  return (
    <div style={{display:"flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <h1 style={{marginTop: "20px", marginBottom: "20px"}}>Here are all the details</h1>
      <Card id="card-style">
        <Card.Img variant="top" src={trip.src} id="card-image" />
        <Card.Body className="card-body">
          <Card.Title id="card-title">{trip.title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};
