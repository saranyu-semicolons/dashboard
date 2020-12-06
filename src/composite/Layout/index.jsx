import React, { useEffect, useRef, useState } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import { Button } from "@material-ui/core";
import Chart from "../../components/Charts";
import ConfigCard from "../../components/ConfigCard";
import Filter from "../../components/Filter";
import Grid from "@material-ui/core/Grid";
import CircularProgress from '@material-ui/core/CircularProgress';
import MenuDrawer from "../../components/MenuDrawer";
import Toolbar from "@material-ui/core/Toolbar";
import axios from 'axios';

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
  const [data, setData] = React.useState({ data: {} });

  const [activityId, setActivityId] = React.useState(null);
  const [loader, setLoader] = React.useState(false);
	const getCategoryType = (type) => {
		setCardCategory(type);
	};

  const getDataByActivity = (value) => {
    setLoader(true)
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ activityId: value.activityId }),
    };
    // fetch("http://localhost:3060/servicePriceJson", requestOptions)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setData(data);
    //   });
    axios.request({
        url:"https://saranyu-computantis.ue.r.appspot.com/servicePriceJson",
        method: "post",https://saranyu-computantis.ue.r.appspot.com
        data: {activityId: value.activityId}
    }).then((data) => {
      console.log("data values", data)
        setData(data.data);
    });
    setActivityId(value.activityId);
  };

  const getDataByConfig = (configValueObj) => {
    /*const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ activityId:activityId,  aws: configValueObj.aws, gcp: configValueObj.gcp })}
      fetch('http://localhost:3060/servicePriceJson', requestOptions).then((res) => res.json())     
      .then((data) => {
       
        setData(data);
      });;*/

      axios.request({
          url:"https://saranyu-computantis.ue.r.appspot.com/servicePriceJson",
          method: "post",
          data: { activityId:activityId,  aws: configValueObj.aws, gcp: configValueObj.gcp }
      }).then((data) => {
        setData(data);
      });
  };
  /*
  useEffect(() => {
    fetch("http://localhost:3060/chart")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      });
  }, []); */

  return (
    <React.Fragment>
      <MenuDrawer getCategoryType={getCategoryType} />
      <Grid container>
        <Grid item xs={12}>
          <AppBar position="static">
            <Toolbar>
              <img src="/computantis.png" width="140px"></img>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={12}>

					<Grid conainer justify='center'>
						{category === "" ? (
							<Button variant='contained' color='primary'>
								Get Started
							</Button>
						) : (
							<Filter title={category} getDataByActivity={getDataByActivity} />
						)}
					</Grid>
				</Grid>
        {data.totalPriceArray == undefined && loader && (
          <CircularProgress color="secondary" size={400} style={{marginTop: '2%', marginLeft: '40%'}} />
        )}
        
        {data &&  data.totalPriceArray && (
        <>
          <Grid item xs={6}>
            {category !== "" && <Chart totalPriceArray={data.totalPriceArray} />}
          </Grid>
          <Grid item xs={6}>
            {category !== "" && <ConfigCard getDataByConfig={getDataByConfig} awsData={data.awsData} gcpData={data.gcpData}/>}
          </Grid>
          <Button variant='contained' disabled style={{marginTop: '2%', marginLeft: '45%'}}>
								Procure
					</Button>
        </>
        )}
      </Grid>
    </React.Fragment>
  );
};

export default Layout;
