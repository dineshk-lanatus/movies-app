import React from "react";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: "1px solid white",
  borderRadius: theme.shape.borderRadius,
  width: "100%",
  [theme.breakpoints.up("xs")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    color: "white",
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      width: "8.2ch",
      "&:focus": {
        width: "14ch",
        backgroundColor: "black",
        borderRadius: 4,
      },
    },
  },
}));

export default function SearchBar(props) {
  return (
    <Search
      sx={{
        p: 0,
        backgroundColor: { md: "black", xs: "transparent" },
        "&:hover": {
          backgroundColor: `gray`,
        },
      }}
      onClick={props.onClick}
    >
      <SearchIconWrapper>
        <SearchIcon sx={{ fill: "#0874e4" }} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={props.onSearch}
      />
    </Search>
  );
}
