import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import "../Styles/search.css";
import { searchBook } from "../api/index";

const Searchbar = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",

    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(0),
      width: "300px",
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
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  // SEARCH BOOKS

  //Store data into state variable.
  const [searchInput, setSearchInput] = useState("");
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    searchBook(searchInput).then((data) => {
      console.log(data);
      setSearchData(data);
    });
  }, [searchInput]);

  return (
    <div className="search_container">
      {/* <input type="text"></input> */}
      <Search className="search_style">
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>

        <StyledInputBase
          placeholder="Search…"
          // inputProps={{ "aria-label": "search" }}
          value={searchInput}
          onKeyUp={(e) => setSearchInput(e.target.value)}
        />
      </Search>
    </div>
  );
};

export default Searchbar;
