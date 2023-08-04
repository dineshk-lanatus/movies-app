import React from "react";
import { Box } from "@mui/material";
import MovieList from "../Components/MovieList";

export default function Home() {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <MovieList />
    </Box>
  );
}
