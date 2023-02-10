import React from "react";

import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import { MoreVert, SearchOutlined } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";

import classes from "./Sidebar.module.css";
import SidebarChat from "./SidebarChat";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar__header}>
        <Avatar src="https://th.bing.com/th/id/OIP.TDCPXOeMZSb0RM0rTaw3AAHaEK?pid=ImgDet&rs=1" />
        <div className={classes.sidebar__headerRight}>
          <IconButton>
            <DonutLargeIcon className={classes["MuiSvgIcon-root"]} />
          </IconButton>
          <IconButton>
            <ChatIcon className={classes["MuiSvgIcon-root"]} />
          </IconButton>
          <IconButton>
            <MoreVert className={classes["MuiSvgIcon-root"]} />
          </IconButton>
        </div>
      </div>

      <div className={classes.sidebar__search}>
        <div className={classes.sidebar__searchContainer}>
          <SearchOutlined className={classes["MuiSvgIcon-root"]} />
          <input type="text" placeholder="Search or start a new chat" />
        </div>
      </div>

      <div className={classes.sidebar__chats}>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};

export default Sidebar;
