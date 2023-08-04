import React, { useContext } from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import { Container, Paper } from "@mui/material";
import { MoviesContext } from "../Context/MoviesContext";

export default function Layout() {
  const { movies, setMovies, searched, setSearched } =
    useContext(MoviesContext);

  const handleSearch = (event) => {
    const searchedString = event.target.value;

    let filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchedString.toLowerCase())
    );

    const results = searchedString ? filteredMovies : movies;
    setSearched(results);
  };

  const sortAsAscending = () => {
    setMovies([
      ...searched.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        return 0;
      }),
    ]);
  };

  const sortAsDescending = () => {
    setMovies([
      ...searched.sort((a, b) => {
        if (a.title > b.title) {
          return -1;
        }
        return 0;
      }),
    ]);
  };

  return (
    <>
      <Paper
        sx={{
          backgroundImage: `url(${"/Img/endless-constellation.svg"})`,
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}
      >
        <Header
          searchHandler={handleSearch}
          onAscend={sortAsAscending}
          onDescend={sortAsDescending}
        />

        <Container
          sx={{
            pt: 10,
            pb: 2.5,
          }}
        >
          <Outlet />
        </Container>
      </Paper>
    </>
  );
}
