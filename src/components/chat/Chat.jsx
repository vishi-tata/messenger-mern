import { useRef } from "react";
import axios from "../../axios";

import classes from "./Chat.module.css";

import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";

const Chat = ({ messages }) => {
  const messageInputRef = useRef();

  const sendMessageHandler = async (event) => {
    event.preventDefault();

    await axios.post("/messages/new", {
      name: "vishnu",
      message: messageInputRef.current.value,
      timeStamp: new Date().toUTCString(),
      received: false,
    });

    messageInputRef.current.value = "";
  };

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
        {messages.map((message) => (
          <p
            className={`${classes.chat__message} ${
              !message.received && classes.chat__receiver
            }`}
            key={message._id}
          >
            <span className={classes["chat__message-name"]}>
              {message.name}
            </span>
            {message.message}
            <span className={classes["chat__message-time"]}>
              {message.timeStamp}
            </span>
          </p>
        ))}
      </div>

      <div className={classes.chat__footer}>
        <IconButton>
          <InsertEmoticon className={classes["MuiSvgIcon-root"]} />
        </IconButton>
        <form onSubmit={sendMessageHandler}>
          <input
            type="text"
            placeholder="Type a message"
            ref={messageInputRef}
          />
          <button>Send a message</button>
        </form>
        <IconButton>
          <Mic className={classes["MuiSvgIcon-root"]} />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
