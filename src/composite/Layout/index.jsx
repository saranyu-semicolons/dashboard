import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import ConfigCard from "../../components/ConfigCard";
import Filter from "../../components/Filter";
import Grid from "@material-ui/core/Grid";
import Line from "../../components/Charts/Line";
import Bar from "../../components/Charts/Bar";

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
	const [category, setCardCategory] = React.useState("Virtual Machine");
	const getCategoryType = (type) => {
		setCardCategory(type);
	}
	return (
		<React.Fragment>
			<MenuDrawer getCategoryType={getCategoryType}/>
			<Grid container>
				<Grid item xs={12}>
					<AppBar position='static'>
						<Toolbar>
							<img src='/computantis.png' width='140px'></img>
						</Toolbar>
					</AppBar>
				</Grid>
				<Grid item xs={11}>
					<Filter title={category}/>
				</Grid>
				<Grid item xs={1}></Grid>
				<Grid item xs={12}>
					<Bar />
				</Grid>
				<Grid item xs={12}>
					<Line />
				</Grid>
				<ConfigCard />
			</Grid>
		</React.Fragment>
	);
};

export default Layout;
