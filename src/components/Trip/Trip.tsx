import { Text } from "@mantine/core";
import { useParams } from "react-router-dom";
import { useTrip } from "../../hooks/useTrip";
import { TripDetails } from "./TripDetails";

export const Trip = () => {
  const { uuid } = useParams();
  const { trip, isError, isLoading } = useTrip(uuid || "");

  if (isLoading || !trip) {
    return (
      <div style={{ height: "330px" }}>
        <i className="fas fa-sync fa-spin" id="loader-icon"></i>
      </div>
    );
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
      <div
        style={{
          display: "flex",
          margin: "20px 520px 20px 520px",
        }}
      >
        <button
          type="button"
          className="btn btn-danger"
          style={{ marginRight: "10px", width: "50%" }}
        >
          Delete
        </button>
        <button
          type="button"
          className="btn btn-warning"
          style={{ width: "50%" }}
        >
          Update
        </button>
      </div>
    </div>
  );
};
