import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import AppBar from "@material-ui/core/AppBar";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import ConfigCard from "../../components/ConfigCard";
import Line from "../../components/Charts/Line";



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
		<>
			<AppBar position='static'>
				<Toolbar>
					<img src='/computantis.png' width='140px'></img>
				</Toolbar>
			</AppBar>
			<Line/>
			<ConfigCard/>
		</>
	);
};

export default Layout;
