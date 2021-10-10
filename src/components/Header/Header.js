import React from "react";
import "./Header.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { TextField, MenuItem } from "@mui/material";
import categories from "../../data/category";

const Header = ({category, setCategory, word, setWord}) => {

    const darkTheme = createTheme({
        palette: {
          primary:{
                main:'#FFFFFF',
            },
          type: 'dark',
        },
      });

      const handleChange = (language) => {
          setCategory(language);
          setWord("");
        };

  return (
    <div className="Header">
      <span className="title">{word ? word : "Word Search"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            id="filled-basic"
            value={word}
            onChange={handleChange}
            label="Search a Word"
          />
          <TextField
            select
            label="Language"
            value={category}
            onChange={handleChange}
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
