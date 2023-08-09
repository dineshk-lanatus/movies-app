import React from "react";
import { AppBar, Avatar, Box, Toolbar, Typography, Grid } from "@mui/material";

import SearchBar from "./SearchBar";
import Sort from "./Sort";
import { NavLink } from "react-router-dom";
import HamBurgerMenu from "./HamBurgerMenuDrawer";
import { Home, SaveAsRounded, Search, SortRounded } from "@mui/icons-material";
import SearchSlider from "./SliderDrawer";
import SortSlider from "./SliderDrawer";

export default function Header({ searchHandler, onAscend, onDescend }) {
  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        zIndex: 2,
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: "#121212" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: { sm: "space-between", xs: "center" },
            flexDirection: { sm: "row", xs: "column" },
            alignItems: "center",
          }}
        >
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

          <Grid
            container
            sx={{
              ml: 7,
              justifyContent: { md: "space-between", sm: "end" },
              display: { md: "flex", xs: "none" },
            }}
          >
            <Grid
              item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <NavLink to="/">
                <Typography
                  variant="h6"
                  color="primary"
                  mr={1}
                  sx={{
                    display: "flex",
                    alignItems: "center",

                    "&:hover": {
                      textDecoration: "underline",
                      textDecorationThickness: 4,
                      textUnderlineOffset: 10,
                    },
                  }}
                >
                  <Home sx={{ mr: 1 }} /> Home
                </Typography>
              </NavLink>

              <NavLink to="edit">
                <Typography
                  variant="h6"
                  color="primary"
                  ml={1}
                  sx={{
                    display: "flex",
                    alignItems: "center",

                    "&:hover": {
                      textDecoration: "underline",
                      textDecorationThickness: 4,
                      textUnderlineOffset: 10,
                    },
                  }}
                >
                  <SaveAsRounded sx={{ mr: 1 }} /> Edit
                </Typography>
              </NavLink>
            </Grid>

            <Grid
              item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <SearchBar onSearch={searchHandler} />

              <Sort onAscendClick={onAscend} onDescendClick={onDescend} />
            </Grid>
          </Grid>

          <HamBurgerMenu />
        </Toolbar>
      </AppBar>

      <SearchSlider
        icon={
          <Search
            sx={{
              p: 1,
              fontSize: { xs: 28 },
              color: { xs: "white" },

              "&:hover": {
                color: "#0874e4",
              },
            }}
          />
        }
        posTop={77}
      >
        <SearchBar onSearch={searchHandler} />
      </SearchSlider>

      <SortSlider
        icon={
          <SortRounded
            sx={{
              p: 1,
              fontSize: { xs: 28 },
              color: { xs: "white" },

              "&:hover": {
                color: "#0874e4",
              },
            }}
          />
        }
        posTop={140}
      >
        <Sort onAscendClick={onAscend} onDescendClick={onDescend} />
      </SortSlider>
    </Box>
  );
}
