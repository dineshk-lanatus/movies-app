import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import MenuRounded from "@mui/icons-material/MenuRounded";
import { NavLink } from "react-router-dom";
import { Home, SaveAsRounded } from "@mui/icons-material";

export default function HamBurgerMenuDrawer() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Box
        variant="text"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
        sx={{
          display: { md: "none", xs: "flex" },
          position: { sm: "static", xs: "absolute" },
          top: 54,
          right: 0,
          bgcolor: `${"rgba(18, 18, 18, .3)"}`,
          borderRadius: { xs: 0, sm: 14 },
          borderBottomLeftRadius: { xs: 14 },

          "&:hover": {
            bgcolor: {
              xs: `${"rgba(18, 18, 18, 1)"}`,
              sm: `${"rgba(0, 0, 0, .3)"}`,
            },
            "&:hover svg": {
              color: "#0874e4",
            },
          },
        }}
      >
        <MenuRounded
          sx={{
            p: 0.7,
            fontSize: { xs: 36, sm: 28 },
            color: { sm: "#0874e4", xs: "white" },

            "&:hover": {
              color: "#0874e4",
            },
          }}
        />
        <Drawer
          variant="persistent"
          anchor={"right"}
          open={showMenu}
          PaperProps={{
            sx: {
              position: "fixed",
              top: 190,
              p: 3,
              bgcolor: `${"rgba(18, 18, 18, .3)"}`,
              height: "auto",
              borderTopLeftRadius: 14,
              borderBottomLeftRadius: 14,

              "&:hover": {
                bgcolor: {
                  xs: `${"rgba(18, 18, 18, 1)"}`,
                },
              },
            },
          }}
        >
          <List disablePadding>
            <ListItem disableGutters>
              <NavLink to="/">
                <ListItemButton
                  sx={{
                    width: 118,
                    "&:hover h6": {
                      color: "#0874e4",
                    },
                    "&:hover svg": {
                      fill: "#0874e4",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Home sx={{ mr: 1, fill: "white" }} /> Home
                  </Typography>
                </ListItemButton>
              </NavLink>
            </ListItem>

            <ListItem disableGutters>
              <NavLink to="edit">
                <ListItemButton
                  sx={{
                    width: 118,
                    "&:hover h6": {
                      color: "#0874e4",
                    },
                    "&:hover svg": {
                      fill: "#0874e4",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <SaveAsRounded sx={{ mr: 1, fill: "white" }} /> Edit
                  </Typography>
                </ListItemButton>
              </NavLink>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </>
  );
}
