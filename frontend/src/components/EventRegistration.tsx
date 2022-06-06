import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const EventRegistration = () => {
  const { id } = useParams();

  const [event, setEvent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = () => {
    fetch(`http://localhost:3000/events/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setEvent(data);
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

  return <Box>Test</Box>;
};
