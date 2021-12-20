import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@mui/icons-material/AccessAlarm";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import HelpOutlineSharpIcon from "@mui/icons-material/HelpOutlineSharp";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        {/* Avatar for logged in user */}
        <Avatar className="header__avatar" alt="Bharat Goyal" src="" />

        <AccessTimeIcon />

        {/* Time icon */}
      </div>

      <div className="header__search">
        {/* Search Icon */}
        <SearchSharpIcon />
        {/*Input */}
        <input placeholder="Search mechbg" />
      </div>

      <div className="header__right">
        <HelpOutlineSharpIcon />
      </div>
    </div>
  );
}

export default Header;
