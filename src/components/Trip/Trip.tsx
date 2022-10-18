import { Loader, Text } from "@mantine/core";
import { useParams } from "react-router-dom";
import { useTrip } from "../../hooks/useTrip";
import { TripDetails } from "./TripDetails";

export const Trip = () => {
  const { uuid } = useParams();
  const { trip, isError, isLoading } = useTrip(uuid || "");

  if (isLoading || !trip) {
    return <Loader color="violet" size="xl" variant="bars" />;
  }

  if (isError) {
    return (
      <div>
        <Text color="red">An error has occured</Text>
      </div>
    );
  }
  return (
    <div>
      <TripDetails trip={trip} />
      <div style={{ display: "flex", justifyContent: "center", marginTop: "10px",  }}>
        <button type="button" className="btn btn-danger" style={{marginRight: "10px"}}>
          Delete
        </button>
        <button type="button" className="btn btn-warning">
          Update
        </button>
      </div>
    </div>
  );
};
