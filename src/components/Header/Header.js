import React from "react";
import "./Header.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { TextField, MenuItem } from "@mui/material";
import categories from "../../data/category";

const Header = () => {

    const darkTheme = createTheme({
        palette: {
          primary:{
                main:'#FFFFFF',
            },
          type: 'dark',
        },
      });

  return (
    <div className="Header">
      <span className="title">Word Search</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            id="filled-basic"
            label="Search a Word"
          />
          <TextField
            select
            label="Language"
            className="select"
          >
            <MenuItem>English</MenuItem>
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
