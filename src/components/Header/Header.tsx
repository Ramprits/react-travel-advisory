import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete } from "@react-google-maps/api";
import {
  NavLink,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./Header.style";

function Header() {
  return (
    <React.Fragment>
      <AppBar
        position='static'
        color='primary'
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant='h6' color='inherit' noWrap sx={{ flexGrow: 1 }}>
            Travel Advisory
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search…'
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Button
            href='#'
            variant='contained'
            color='secondary'
            sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
