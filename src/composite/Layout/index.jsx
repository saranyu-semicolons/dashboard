import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import ConfigCard from "../../components/ConfigCard";
import Filter from "../../components/Filter";
import Grid from "@material-ui/core/Grid";
import Chart from "../../components/Charts";
import CircularProgress from '@material-ui/core/CircularProgress';
import MenuDrawer from "../../components/MenuDrawer";
import Toolbar from "@material-ui/core/Toolbar";
import React, { useEffect, useRef, useState } from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  })
);

const Layout = (props) => {
  const classes = useStyles();
  const [category, setCardCategory] = React.useState("Get Started");
  const [data, setData] = React.useState({ data: {} });
  const [loader, setLoader] = React.useState(false);

  const getCategoryType = (type) => {
    setCardCategory(type);
  }

  const getDataByActivity = (value) => {
    setLoader(true)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ activityId:value.activityId })}
      fetch('http://localhost:3060/servicePriceJson', requestOptions).then((res) => res.json())
      .then((data) => {
        setData(data);
      });;
  };
  /*
  useEffect(() => {
    fetch("http://localhost:3002/chart")
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
          <Filter title={category} getDataByActivity={getDataByActivity}/>
        </Grid>
        {data.totalPriceArray == undefined && loader && (
          <CircularProgress color="secondary" size={400} style={{marginTop: '2%', marginLeft: '40%'}} />
        )}
        
        {data &&  data.totalPriceArray && (
        <>
          <Grid item xs={6}>          
            <Chart totalPriceArray={data.totalPriceArray} />
          </Grid>
          <Grid item  xs={6}>            
            <ConfigCard />
          </Grid>
        </>
        )}
      </Grid>
    </React.Fragment>
  );
};

export default Layout;
