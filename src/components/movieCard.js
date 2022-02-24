import {
  Card,
  CardContent,
  Chip,
  CardHeader,
  CardMedia,
  Avatar,
  Stack,
  Box,
} from "@mui/material";

const MovieCard = ({ movieData }) => {
  const { name, genre, actor } = movieData;

  return (
    <Card sx={{ width: 450, height: 750, p: 1 }}>
      <Box
        sx={{
          bgcolor: "#263238",
        }}
      >
        <CardHeader
          title={name}
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
            <Chip label={genre} color="info" sx={{ fontSize: "h5.fontSize" }} />
            <Chip
              label={actor.name}
              avatar={
                <Avatar src={`/avatar/${actor.name.replace(/\s+/g, "")}.png`} />
              }
              color="primary"
              sx={{ fontSize: "h5.fontSize" }}
            />
          </Stack>
        </CardContent>
      </Box>

      <CardMedia
        component="img"
        sx={{ height: "auto" }}
        image={`/moviePosters/${name.replace(/\s+/g, "")}.jpg`}
      />
    </Card>
  );
};

export default MovieCard;
