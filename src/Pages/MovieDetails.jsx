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
        flexDirection: {
          md: "row",
          xs: "column",
        },
        alignItems: "center",
        position: "relative",
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
            boxShadow: "0 0 14px grey",
            transform: `scale(1.09)`,
          },
          position: "absolute",
          left: 10,
          top: 10,
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
          mr: { md: 6, xs: 0 },
          ml: { md: 4, xs: 0 },
          mt: { sm: 0, xs: 4 },
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

        <Button
          onClick={handleOpen}
          sx={{
            mt: 4,
            "&:hover svg": {
              fill: "#FF0000",
            },
          }}
        >
          Watch Trailer
          <SmartDisplay sx={{ ml: 1 }} />
        </Button>

        <CardContent sx={{ zIndex: 3 }}>
          <Box sx={{ position: "absolute" }}>
            <Backdrop sx={{ color: "#fff" }} open={open}>
              {trailerContent}
            </Backdrop>
          </Box>
        </CardContent>
      </Card>

      <Box sx={{ width: { md: "70%", xs: "100%" }, color: "#106cdc" }}>
        <Box
          sx={{
            textShadow: "0 0 14px black",
            overflowWrap: "break-word",
          }}
        >
          <Typography variant="h4" fontWeight="700" sx={{ mt: 1 }}>
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
