import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import { Event, EventCard } from "./EventCard";

export const EventList = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = () => {
    fetch(`http://localhost:3000/events/getAll`)
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Typography variant="h2" textAlign={"center"}>
        Aktuelle Termine
      </Typography>

      {events && events.map((event: Event) => <EventCard {...event} />)}
      {isError && <div>Error fetching data.</div>}
    </Container>
  );
};
