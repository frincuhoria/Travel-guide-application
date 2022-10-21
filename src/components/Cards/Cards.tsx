import { useState } from "react";
import { Grid, Button, Modal } from "@mantine/core";

import { CreateTrip } from "../CreateTrip/CreateTrip";
import { CardItem } from "../CardItem/CardItem";
import { useCards } from "../../hooks/useCards";
import mockTrips from "../../MOCK_DATA.json";
import "./Cards.css";
import { MockCard } from "../MockCard/MockCard";

export const Cards = () => {
  const [opened, setOpened] = useState(false);
  const { cards, isError, isLoading } = useCards();

  if (isError) {
    return (
      <div className="cards">
        <h1>Check out the epic Destinations!</h1>
        <Grid grow gutter="xl" className="grid-items">
          {mockTrips.map((trip) => (
            <Grid.Col span={4} key={trip.id} className="grid-col">
              <MockCard trip={trip} />
            </Grid.Col>
          ))}
        </Grid>
      </div>
    );
  }
  if (isLoading) {
    return <i className="fas fa-sync fa-spin" id="loader-icon"></i>;
  }

  return (
    <>
      <div className="create-trip">
        <Button
          mt={30}
          onClick={() => setOpened(true)}
          style={{ width: "200px", height: "45px", fontSize: "larger" }}
        >
          Create Trip
        </Button>
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="Create new Trip"
          transition="fade"
          transitionDuration={600}
          transitionTimingFunction="ease"
          overlayOpacity={0.5}
          overlayBlur={4}
          centered
        >
          <CreateTrip />
        </Modal>
      </div>
      <div className="cards">
        <h1>Check out the epic Destinations!</h1>
        <Grid grow gutter="xl" className="grid-items">
          {cards.map((trip) => (
            <Grid.Col span={4} key={trip._uuid} className="grid-col">
              <CardItem trip={trip} />
            </Grid.Col>
          ))}
        </Grid>
      </div>
    </>
  );
};
