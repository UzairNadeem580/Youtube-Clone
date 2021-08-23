import React from "react";
import "./Sideabr.css";
import Sibebarrow from "./Sibebarrow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import WatchLatertIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpantMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import HistoryIcon from "@material-ui/icons/History";

function Sidebar() {
  return (
    <div className="sidebar">
      <Sibebarrow selected Icon={HomeIcon} title="Home" />
      <Sibebarrow Icon={WhatshotIcon} title="Trending" />
      <Sibebarrow Icon={SubscriptionsIcon} title="Subscribtion" />
      <hr />
      <Sibebarrow Icon={VideoLibraryIcon} title="Library" />
      <Sibebarrow Icon={HistoryIcon} title="History" />
      <Sibebarrow Icon={OndemandVideoIcon} title="Your Videos" />
      <Sibebarrow Icon={WatchLatertIcon} title="Watch Later" />
      <Sibebarrow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos" />
      <Sibebarrow Icon={ExpantMoreOutlinedIcon} title="Show more" />
      <hr />
    </div>
  );
}

export default Sidebar;
