import { Box, Card, Typography } from "@mui/material";

export interface Event {
  title: string;
  date: string;
  maxParticipants: number;
  id: number;
}

export const EventCard = ({ title, date, maxParticipants, id }: Event) => {
  return (
    <Box>
      <Card key={id}>
        <Typography variant="h4">{`${id}: ${title}`}</Typography>
        <Typography variant="body1">{`Am ${new Date(
          date
        )} für bis zu ${maxParticipants} Teilis`}</Typography>
      </Card>
    </Box>
  );
};
