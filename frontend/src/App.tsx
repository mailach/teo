import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, Typography } from "@mui/material";

function App() {
  const [events, setEvents] = useState(undefined);
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
      {events && (
        <Typography variant="body1">{JSON.stringify(events)}</Typography>
      )}
      {isError && <div>Error fetching data.</div>}
    </Box>
  );
}

export default App;
