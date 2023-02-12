import { Avatar } from "@mui/material";

import classes from "./SidebarChat.module.css";

const SidebarChat = () => {
  return (
    <div className={classes.sidebarChat}>
      <Avatar className={classes["MuiSvgIcon-root"]} />
      <div className={classes.sidebarChat__info}>
        <h2>Room name</h2>
        <p>Last message</p>
      </div>
    </div>
  );
};

export default SidebarChat;
