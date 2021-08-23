import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import "./Header.css";
import pic from "./images/logo2.png";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <img className="header_logo" src={pic} alt="" />
      </div>

      <div className="header_input">
        <input type="text" />
        <SearchIcon className="header_inputbutton" />
      </div>

      <div className="header_right">
        <VideoCallIcon className="header_righticons" />
        <AppsIcon className="header_righticons" />
        <NotificationsIcon className="header_righticons" />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
