import React, { useContext, useState } from "react";
import { SmartDisplay } from "@mui/icons-material";
import { Button, Card, CardContent } from "@mui/joy";
import BackArrow from "@mui/icons-material/ArrowBackIosRounded";
import TrailerCard from "../Components/TrailerCard";
import Loading from "../Components/Loading";

import {
  Backdrop,
  Box,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MoviesContext } from "../Context/MoviesContext";

export default function MovieDetails() {
  const { movie } = useContext(MoviesContext);
  console.log({ movie });

  const [open, setOpen] = useState(false);
  const [trailer, setTrailer] = useState(<Loading />);
  const navigate = useNavigate();

  let trailerContent = trailer;

  const handleClose = () => {
    setOpen(false);
    setTrailer(null);
  };

  const handleOpen = () => {
    setOpen(true);
    setTrailer(
      <TrailerCard onClose={handleClose} trailerID={movie?.trailer} />
    );
  };

  return (
    <Box
      sx={{
        p: 3,
        display: "flex",
        backgroundColor: "#181414",
        borderRadius: "1.4rem",
      }}
    >
      <BackArrow
        sx={{
          bgcolor: "white",
          borderRadius: "50%",
          fill: "#1565C0",
          p: "6px 5px",
          textAlign: "center",

          "&:hover": {
            boxShadow: "10px 0 14px grey",
            transform: `scale(1.09)`,
          },
        }}
        onClick={() => {
          navigate("/");
        }}
      />

      <Card
        sx={{
          maxWidth: 266,
          width: 266,
          maxHeight: 473,
          height: 470,
          boxShadow: "none",
          background: "transparent",
          mr: 6,
          ml: 4,
        }}
      >
        <CardMedia
          component="img"
          image={movie.poster}
          alt="Poster"
          height="82%"
          sx={{
            objectFit: "contain",
            borderRadius: "14px",

            "&:hover": {
              boxShadow: "0 0 95px",
              transform: `scale(${1.054})`,
              backgroundImage: `url(${movie.poster})`,
            },
          }}
        />

        <CardContent sx={{ mt: 4 }}>
          <Button
            onClick={handleOpen}
            sx={{
              "&:hover svg": {
                fill: "#FF0000",
              },
            }}
          >
            Watch Trailer
            <SmartDisplay sx={{ ml: 1 }} />
          </Button>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
          >
            {trailerContent}
          </Backdrop>
        </CardContent>
      </Card>

      <Box sx={{ width: "70%", color: "#106cdc" }}>
        <Box
          sx={{
            textShadow: "0 0 14px black",
            overflowWrap: "break-word",
          }}
        >
          <Typography variant="h3" fontWeight="700" sx={{ mt: 1 }}>
            {movie?.title}
          </Typography>

          <Typography variant="h6" fontWeight="500" sx={{ mt: 0.1 }}>
            {movie?.category?.join(", ")}
          </Typography>
        </Box>

        <Box
          sx={{
            overflowWrap: "break-word",
            maxHeight: 340,
            overflow: "auto",
            p: 1,
          }}
        >
          <Typography variant="h5" fontWeight="500" sx={{ mt: 4 }}>
            Release Date: {movie?.date}
          </Typography>

          <Typography variant="h6" fontWeight="500" sx={{ mt: 1 }}>
            Rating: {movie?.rating} / 5
          </Typography>

          <Typography variant="h6" fontWeight="500" sx={{ mt: 1 }}>
            Dutation:{" "}
            {null || `${movie.duration?.hr} Hour ${movie.duration?.min} Min.`}
          </Typography>

          <Typography variant="h5" fontWeight="500" sx={{ mt: 4 }}>
            Overview:
            <Typography sx={{ ml: 1.4 }}>{movie?.description}</Typography>
          </Typography>

          <Typography variant="h5" fontWeight="500" sx={{ mt: 4 }}>
            Cast:
            <List>
              <ListItem>
                <ListItemText primary={movie.cast?.join(", ")} />
              </ListItem>
            </List>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
