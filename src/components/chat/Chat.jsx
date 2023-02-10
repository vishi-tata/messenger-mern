import React from "react";
import classes from "./Chat.module.css";

import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
  Send,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";

const Chat = () => {
  return (
    <div className={classes.chat}>
      <div className={classes.chat__header}>
        <Avatar className={classes["MuiSvgIcon-root"]} />
        <div className={classes.chat__headerInfo}>
          <h3>Room name</h3>
          <p>Last seen</p>
        </div>

        <div className={classes.chat__headerRight}>
          <IconButton>
            <SearchOutlined className={classes["MuiSvgIcon-root"]} />
          </IconButton>
          <IconButton>
            <AttachFile className={classes["MuiSvgIcon-root"]} />
          </IconButton>
          <IconButton>
            <MoreVert className={classes["MuiSvgIcon-root"]} />
          </IconButton>
        </div>
      </div>

      <div className={classes.chat__body}>
        <p className={classes.chat__message}>
          <span className={classes["chat__message-name"]}>Vishnu</span>
          This is a message
          <span className={classes["chat__message-time"]}>
            {new Date().toUTCString()}
          </span>
        </p>
        <p className={classes.chat__message + " " + classes.chat__receiver}>
          <span className={classes["chat__message-name"]}>Vishnu</span>
          This is a message
          <span className={classes["chat__message-time"]}>
            {new Date().toUTCString()}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Chat;
