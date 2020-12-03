import { makeStyles, withStyles } from "@material-ui/core/styles";

import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import MuiDrawer from "@material-ui/core/Drawer";
import React from "react";
import ServiceListings from "../ServiceListings";
import clsx from "clsx";
import styled from "styled-components";

const useStyles = makeStyles({
  list: {
    width: "auto",
  },
  fullList: {
    width: "auto",
  },
  paperProps : {
      margin: 0,
      padding: 0,
  }
});

const FixedMenuLauncher = styled.div`
  position: fixed;
  background-color: #424242;
  border-radius: 50% 0 0 50%;
  padding: 8px;
  padding-right: 16px;
  margin-top: 4px;
  right: 0px;
  top: 90px;
  cursor: pointer;
`


 const Drawer = withStyles({
  root: {
    margin: 0,
    padding: 0,
  },
  paper: {
    margin: 0,
    padding: 0,
  },
})(MuiDrawer);

export default function Menu() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });
  const anchorDirection = "right";
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  //TODO: Add tiles to drawer
  const list = (anchor) => (
    <div className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <FixedMenuLauncher>
      <React.Fragment key={anchorDirection}>
        <MenuIcon onClick={toggleDrawer(anchorDirection, true)}></MenuIcon>
        <Drawer
          anchor={anchorDirection}
          open={state[anchorDirection]}
          onClose={toggleDrawer(anchorDirection, false)}
          paperprops={{classes: {root: classes.paperProps}}}
        >
          <ServiceListings/>
        </Drawer>
      </React.Fragment>
    </FixedMenuLauncher>
  );
}
