import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import MovieCard from "./MovieCard";
import { MoviesContext } from "../Context/MoviesContext";
import Error from "./Error";
import { mood } from "../Data";

export default function MovieList() {
  const { searched } = useContext(MoviesContext);

  return (
    <Box>
      <Box>
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{
            textAlign: "center",
            textShadow: "10px 0px 14px",
          }}
        >
          {searched.length ? (
            "Welcome To The Staion Of Movies..."
          ) : (
            <Error text="No Movies Found." mood={mood.sad} />
          )}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          mt: 2,
        }}
      >
        {searched.map((movie) => (
          <MovieCard
            key={movie.id}
            poster={movie.poster}
            movie={movie}
            title={movie.title}
            date={movie.date}
            rating={movie.rating}
            linkTo={movie.id}
          />
        ))}
      </Box>
    </Box>
  );
}
