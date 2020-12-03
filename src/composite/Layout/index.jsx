import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import ConfigCard from "../../components/ConfigCard";
import Filter from "../../components/Filter";
import Grid from "@material-ui/core/Grid";
import Line from "../../components/Charts/Line";
import MenuDrawer from "../../components/MenuDrawer";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) =>
	createStyles({
		button: {
			margin: theme.spacing(1),
		},
	}),
);

const Layout = (props) => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<MenuDrawer />
			<Grid container>
				<Grid item xs={12}>
					<AppBar position='static'>
						<Toolbar>
							<img src='/computantis.png' width='140px'></img>
						</Toolbar>
					</AppBar>
				</Grid>
				<Grid item xs={11}>
					<Filter />
				</Grid>
				<Grid item xs={1}></Grid>
				<Grid item xs={12}>
					<Line />
				</Grid>
				<ConfigCard />
			</Grid>
		</React.Fragment>
	);
};

export default Layout;
