import React from "react";

import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import { MoreVert } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";

import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar__header}>
        <Avatar src="https://th.bing.com/th/id/OIP.TDCPXOeMZSb0RM0rTaw3AAHaEK?pid=ImgDet&rs=1" />
        <div className={classes.sidebar__headerRight}>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
