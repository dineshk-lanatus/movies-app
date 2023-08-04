import React, { useContext, useEffect, useState } from "react";

import {
  Box,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "@mui/material";

import { DeleteForever, EditNote } from "@mui/icons-material";
import { Button } from "@mui/joy";
import { MoviesContext } from "../Context/MoviesContext";
import { Link } from "react-router-dom";

export default function EditMovieData() {
  const { movies, setMovie } = useContext(MoviesContext);
  const [count, setCount] = useState(0);

  useEffect(() => {}, [count, setCount]);

  return (
    <Box sx={{ backgroundColor: "white", borderRadius: "14px", p: 4 }}>
      <Box>
        <Typography color="primary" variant="h4" fontWeight={700}>
          Movie List
        </Typography>
      </Box>

      <TableContainer
        component={Paper}
        sx={{
          mt: 2,
          overflowWrap: "break-word",
          maxHeight: 433,
          overflow: "auto",
        }}
      >
        <Table sx={{ minWidth: 650 }}>
          <TableHead
            sx={{
              textDecoration: "underline",
            }}
          >
            <TableRow>
              <TableCell align="right">Sr. No.</TableCell>
              <TableCell>Movie Title</TableCell>
              <TableCell align="right">Release Date</TableCell>
              <TableCell align="right">Rating</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {movies.map((movie, index) => (
              <TableRow
                key={movie?.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{index + 1}</TableCell>
                <TableCell component="th" scope="row">
                  {movie?.title}
                </TableCell>
                <TableCell align="right">{movie?.date}</TableCell>
                <TableCell align="right">{movie?.rating}</TableCell>

                <TableCell align="center">
                  <Link to={`/${movie.id}/editing`}>
                    <Button
                      variant="outlined"
                      sx={{
                        mr: 1,
                        p: 1,
                      }}
                      onClick={() => {
                        setMovie(movie);
                      }}
                    >
                      <EditNote />
                    </Button>
                  </Link>

                  <Button
                    variant="outlined"
                    onClick={() => {
                      if (
                        window.confirm(
                          `Are You Sure ? You want to delete "${movie.title}" Movie.!`
                        )
                      ) {
                        console.log(movie.title, "is Deleted.");
                        movies.splice(index, 1);
                        setCount(count + 1);
                      }
                    }}
                    color="danger"
                    sx={{ p: 1 }}
                  >
                    <DeleteForever />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
