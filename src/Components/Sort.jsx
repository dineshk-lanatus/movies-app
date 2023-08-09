import React, { useState } from "react";
import { Button, Fade, Menu, MenuItem } from "@mui/material";
import { SortRounded } from "@mui/icons-material";

export default function Sort(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        variant="outlined"
        sx={{
          ml: { md: 2, xs: 1 },
          color: "white",
          "&:hover": { color: "#0874e4" },
        }}
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <SortRounded sx={{ mr: 1 }} /> Sort
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={props.onAscendClick}>Ascending</MenuItem>
        <MenuItem onClick={props.onDescendClick}>Descending</MenuItem>
      </Menu>
    </div>
  );
}
