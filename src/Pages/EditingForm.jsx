import React, { useContext } from "react";
import { Button } from "@mui/joy";
import { CancelRounded } from "@mui/icons-material";
import { Box, Card, CardContent, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Category from "../Components/FormComponents/Category";
import DateNDuration from "../Components/FormComponents/DateNDuration";
import { MoviesContext } from "../Context/MoviesContext";

export default function EditingForm() {
  const { movie, setMovies } = useContext(MoviesContext);

  const navigate = useNavigate();

  function cancelHandler() {
    navigate("/edit");
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          backgroundColor: "white",
          borderRadius: "14px",
          p: 2,
          width: "64%",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              mb: 5.5,
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Typography color="primary" variant="h4" fontWeight={500}>
              Edit Movie Data
            </Typography>

            <CancelRounded
              color="primary"
              onClick={cancelHandler}
              sx={{
                fontSize: 28,
                "&:hover": {
                  fill: "red",
                },
              }}
            />
          </Box>

          <Box sx={{ width: "100%" }}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              defaultValue={movie?.title}
              required
              placeholder="Fast X"
              onChange={(e) => {
                return setMovies((prev) => {
                  return prev.map((m) => {
                    if (m.id === movie.id) {
                      m.title = e.target.value;
                    }
                    return m;
                  });
                });
              }}
            />

            <TextField
              fullWidth
              label="Image URL"
              type="url"
              variant="outlined"
              name="poster"
              defaultValue={movie?.poster}
              sx={{
                mt: 2.8,
                display: "flex",
                justifyContent: "space-between",
              }}
              required
              onChange={(e) => {
                return setMovies((prev) => {
                  return prev.map((m) => {
                    if (m.id === movie.id) {
                      m.poster = e.target.value;
                    }
                    return m;
                  });
                });
              }}
            />

            <TextField
              fullWidth
              type="number"
              label="Rating"
              name="rating"
              defaultValue={movie?.rating}
              sx={{ mt: 2.8 }}
              inputProps={{
                inputMode: "numeric",
                step: "0.1",
                min: "0.0",
                max: "5.0",
              }}
              required
              onChange={(e) => {
                return setMovies((prev) => {
                  return prev.map((m) => {
                    if (m.id === movie.id) {
                      m.rating = e.target.value;
                    }
                    return m;
                  });
                });
              }}
            />

            <Category categories={movie?.category} />

            <DateNDuration />

            <TextField
              required
              fullWidth
              label="Trailer ID"
              name="trailer"
              sx={{ mt: 2.8 }}
              placeholder="YouTube Link ID: For Example -> jprhe-cWKGs"
              defaultValue={movie?.trailer}
              onChange={(e) => {
                return setMovies((prev) => {
                  return prev.map((m) => {
                    if (m.id === movie.id) {
                      m.trailer = e.target.value;
                    }
                    return m;
                  });
                });
              }}
            />

            <TextField
              required
              fullWidth
              id="outlined-multiline-static"
              label="Description"
              name="description"
              multiline
              rows={5}
              sx={{ mt: 2.8 }}
              defaultValue={movie?.description}
              onChange={(e) => {
                return setMovies((prev) => {
                  return prev.map((m) => {
                    if (m.id === movie.id) {
                      m.description = e.target.value;
                    }
                    return m;
                  });
                });
              }}
            />

            <TextField
              required
              fullWidth
              name="cast"
              label="Cast"
              placeholder="Vin Diesel, Gal Gadot, Etc."
              sx={{ mt: 2.8 }}
              defaultValue={movie?.cast?.join(", ")}
              onChange={(e) => {
                return setMovies((prev) => {
                  return prev.map((m) => {
                    if (m.id === movie.id) {
                      m.cast = e.target.value;
                    }
                    return m;
                  });
                });
              }}
            />
          </Box>

          <Box
            sx={{
              mt: 5.5,
              width: "100%",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button
              type="submit"
              onClick={() => {
                if (
                  window.confirm(
                    `Are You Sure ? You want to Save the Changes made in "${movie.title}" Movie Data.!`
                  )
                ) {
                  setMovies((prev) => {
                    return prev.map((m) => {
                      if (m.id === movie.id) {
                        m = movie;
                      }
                      return m;
                    });
                  });
                  navigate("/edit");
                  console.log("Updated Movie Data.", { movie });
                }
              }}
            >
              Save Changes
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
