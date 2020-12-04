import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import ConfigCard from "../../components/ConfigCard";
import Filter from "../../components/Filter";
import Grid from "@material-ui/core/Grid";
import Chart from "../../components/Charts";

import MenuDrawer from "../../components/MenuDrawer";
import Toolbar from "@material-ui/core/Toolbar";
import React, { useEffect, useRef, useState } from "react";


const useStyles = makeStyles((theme) =>
	createStyles({
		button: {
			margin: theme.spacing(1),
		},
	}),
);

const Layout = (props) => {
	const classes = useStyles();
	const [category, setCardCategory] = React.useState("Get Started");
	const [data, setData] = React.useState({data:{}});
	
	const getCategoryType = (type) => {
		setCardCategory(type);
	}
	useEffect(()=>{
		fetch('http://localhost:3002/chart')
        .then(res => res.json())
        .then((data) => {
          setData(data);
        })
	},[]);
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
					<Chart/>
				</Grid>
				<ConfigCard />
			</Grid>
		</React.Fragment>
	);
};

export default Layout;
