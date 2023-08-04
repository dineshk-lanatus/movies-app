import React, { useContext, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { CATEGORIES } from "../../Data";
import { MoviesContext } from "../../Context/MoviesContext";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, categoryName, theme) {
  return {
    fontWeight:
      categoryName?.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Category(props) {
  const { movie } = useContext(MoviesContext);
  const theme = useTheme();
  const selectedCategories = props.categories;
  const [category, setCategories] = useState(
    selectedCategories ? selectedCategories : []
  );

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCategories(
      typeof value === "string"
        ? (movie.category = value.split(","))
        : (movie.category = value)
    );
  };

  return (
    <div>
      <FormControl sx={{ mt: 2.8, width: "100%" }}>
        <InputLabel
          required
          id="demo-multiple-chip-label"
          sx={{ zIndex: 1, backgroundColor: "white", p: 0, px: 1 }}
        >
          Category
        </InputLabel>
        <Select
          required
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={category}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {CATEGORIES.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, category, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
