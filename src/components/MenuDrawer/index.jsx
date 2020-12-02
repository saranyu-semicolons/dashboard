import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles({
  list: {
    width: 350,
  },
  fullList: {
    width: "auto",
  },
});

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
    <div>
      <React.Fragment key={anchorDirection}>
        <MenuIcon onClick={toggleDrawer(anchorDirection, true)}></MenuIcon>
        <Drawer
          anchor={anchorDirection}
          open={state[anchorDirection]}
          onClose={toggleDrawer(anchorDirection, false)}
        >
          {list(anchorDirection)}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
