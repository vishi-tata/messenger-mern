import React from "react";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar__header}>
        <div className={classes.sidebar__headerRight}></div>
      </div>
    </div>
  );
};

export default Sidebar;
