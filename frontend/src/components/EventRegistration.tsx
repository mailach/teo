import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Event, EventCard } from "./EventCard";

interface FormData {
  name: string;
  food: string;
  allergies: string;
}

export const EventRegistration = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch(`http://localhost:3000/events/${id}/register`, requestOptions);
    navigate("/");
  });

  const [event, setEvent] = useState(undefined);
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

  return (
    <Box>
      {event && <EventCard {...(event as Event)} />}
      <form onSubmit={onSubmit}>
        <label>Name</label>
        <input {...register("name")} />
        <label>Food</label>
        <input {...register("food")} />
        <label>Allergies</label>
        <input {...register("allergies")} />
        <input type="submit" />
      </form>
    </Box>
  );
};
