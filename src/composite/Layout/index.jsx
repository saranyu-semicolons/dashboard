import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import React from "react";
import SaveIcon from "@material-ui/icons/Save";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);

const Layout = (props) => {
    const classes = useStyles();
    
	return (
		<AppBar position='static'>
			<Toolbar>
				<img src='/computantis.png' width='140px'></img>
			</Toolbar>
		</AppBar>
	);
};

export default Layout;
