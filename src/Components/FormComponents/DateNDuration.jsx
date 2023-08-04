import { Box, TextField, Typography } from "@mui/material";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import React, { useContext } from "react";
import { MoviesContext } from "../../Context/MoviesContext";

export default function DateNDuration() {
  const { movie, setMovie, setMovies } = useContext(MoviesContext);

  return (
    <Box
      sx={{
        mt: 2.8,
        display: "flex",
        justifyContent: "space-between",
        borderColor: "primary",
      }}
    >
      <Typography color="primary">Release Date:</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["MobileDatePicker"]}>
          <MobileDatePicker
            value={dayjs(movie?.date)}
            format="MM/DD/YYYY"
            onChange={(newDate) => {
              setMovie({ ...movie, date: newDate.format("MM/DD/YYYY") });

              // console.log(newDate, movie.date, movie);
            }}
          />
        </DemoContainer>
      </LocalizationProvider>

      <Typography color="primary">Duration:</Typography>

      <TextField
        type="number"
        label="Hours"
        name="hours"
        defaultValue={movie?.duration?.hr}
        inputProps={{
          inputMode: "numeric",
          min: "0",
          max: "545",
        }}
        required
        onChange={(e) => {
          return setMovies((prev) => {
            return prev.map((m) => {
              if (m.id === movie.id) {
                m.duration.hr = e.target.value;
              }
              return m;
            });
          });
        }}
      />
      <TextField
        type="number"
        label="Minutes"
        name="minutes"
        defaultValue={movie?.duration?.min}
        inputProps={{
          inputMode: "numeric",
          min: "1",
          max: "59",
        }}
        required
        onChange={(e) => {
          return setMovies((prev) => {
            return prev.map((m) => {
              if (m.id === movie.id) {
                m.duration.hr = e.target.value;
              }
              return m;
            });
          });
        }}
      />
    </Box>
  );
}
