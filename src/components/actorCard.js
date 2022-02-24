import {
  Card,
  CardContent,
  Typography,
  Chip,
  CardHeader,
  sizing,
  CardMedia,
  Container,
  Avatar,
  Stack,
  Box,
  Divider,
  Grid,
} from "@mui/material";

const ActorCard = ({ actorData }) => {
  const { name, age, movies } = actorData;

  return (
    <Card sx={{ width: 450, height: 750, p: 1 }}>
      <Box
        sx={{
          bgcolor: "#263238",
        }}
      >
        <CardHeader
          title={
            <>
              {name}
              <Divider orientation="vertical" />
              {age}
            </>
          }
          titleTypographyProps={{
            align: "center",
            fontWeight: "medium",
            fontSize: "h4.fontSize",
            color: "white",
          }}
        />
        <CardContent>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            {movies.map((movie) => {
              return (
                <Chip
                  label={movie.name}
                  color="info"
                  sx={{ fontSize: "h5.fontSize" }}
                />
              );
            })}
          </Stack>
        </CardContent>
      </Box>

      <CardMedia
        component="img"
        sx={{ height: "auto" }}
        image={`/actorPosters/${name.replace(" ", "")}.jpg`}
      />
    </Card>
  );
};

export default ActorCard;
