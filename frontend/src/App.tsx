import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, Card, Typography } from "@mui/material";

function App() {
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
    <Box sx={{ display: "flex", align: "center", flexDirection: "column" }}>
      <Typography variant="h1">Termine:</Typography>
      {events &&
        events.map((event: any) => (
          <Card key={event.id} sx={{ padding: "8px" }}>
            <Typography variant="body1">{JSON.stringify(event)}</Typography>
          </Card>
        ))}
      {isError && <div>Error fetching data.</div>}
    </Box>
  );
}

export default App;
