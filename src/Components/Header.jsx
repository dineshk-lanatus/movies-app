import React from "react";
import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";

import SearchBar from "./SearchBar";
import Sort from "./Sort";
import { NavLink } from "react-router-dom";

export default function Header({ searchHandler, onAscend, onDescend }) {
  return (
    <Box sx={{ position: "fixed", width: "100%", zIndex: 2 }}>
      <AppBar position="static" sx={{ backgroundColor: "#121212" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <NavLink to="/">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Avatar
                alt="Logo"
                src="/logo512.png"
                sx={{ height: 56, width: 56, mr: 2 }}
              />

              <Typography
                variant="h4"
                noWrap
                component="div"
                fontWeight={700}
                sx={{ color: "skyblue" }}
              >
                Movies Station
              </Typography>
            </Box>
          </NavLink>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <NavLink to="/">
              <Typography
                variant="h6"
                mr={2}
                sx={{
                  "&:hover": {
                    opacity: 0.5,
                  },
                }}
              >
                Home
              </Typography>
            </NavLink>

            <NavLink to="edit">
              <Typography
                variant="h6"
                ml={2}
                sx={{
                  "&:hover": {
                    opacity: 0.5,
                  },
                }}
              >
                Edit
              </Typography>
            </NavLink>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: 325,
              justifyContent: "end",
            }}
          >
            <SearchBar onSearch={searchHandler} />

            <Sort onAscendClick={onAscend} onDescendClick={onDescend} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
