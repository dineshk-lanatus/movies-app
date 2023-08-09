import { CancelRounded } from "@mui/icons-material";
import { Box, Drawer } from "@mui/material";
import React, { useState } from "react";

export default function SliderDrawer(props) {
  const [slide, setSlide] = useState(false);
  const [icon, setIcon] = useState(props.icon);

  return (
    <>
      <Box
        variant="text"
        onClick={() => {
          setSlide(true);
          setIcon();
        }}
        sx={{
          position: "absolute",
          display: { md: "none", xs: "flex" },
          top: props.posTop,
          left: 9,
          bgcolor: `${"rgba(18, 18, 18, .3)"}`,
          borderRadius: { xs: "50%" },

          "&:hover": {
            bgcolor: {
              xs: `${"rgba(18, 18, 18, 1)"}`,
            },
            "&:hover svg": {
              color: "#0874e4",
            },
          },
        }}
      >
        {icon}
      </Box>
      <Drawer
        variant="persistent"
        anchor={"left"}
        open={slide}
        PaperProps={{
          sx: {
            position: "fixed",
            top: props.posTop,
            p: 1,
            height: "auto",
            width: "fit-content",
            bgcolor: `${"rgba(18, 18, 18, .3)"}`,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderTopRightRadius: 14,
            borderBottomRightRadius: 14,

            "&:hover": {
              bgcolor: {
                xs: `${"rgba(18, 18, 18, 1)"}`,
              },
            },
          },
        }}
      >
        {props.children}
        <CancelRounded
          onClick={() => {
            setSlide(false);
            setIcon(props.icon);
          }}
          sx={{
            ml: 1.4,
            fontSize: { xs: 28 },
            color: { xs: "white" },
            "&:hover": {
              fill: "red",
            },
          }}
        />
      </Drawer>
    </>
  );
}
