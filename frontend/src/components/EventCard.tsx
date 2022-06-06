import { Box, Button, Card, Typography } from "@mui/material";

import { Link } from "react-router-dom";

export interface Event {
  title: string;
  date: string;
  maxParticipants: number;
  id: number;
}

export const EventCard = ({ title, date, maxParticipants, id }: Event) => {
  return (
    <Card
      key={id}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography variant="h4">{`${id}: ${title}`}</Typography>
        <Typography variant="body1">{`Am ${new Date(
          date
        )} für bis zu ${maxParticipants} Teilis`}</Typography>
      </Box>
      <Box>
        <Link to={`/events/${id}/register`}>
          <Button variant="contained">Register</Button>
        </Link>
      </Box>
    </Card>
  );
};
