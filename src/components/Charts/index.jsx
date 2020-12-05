import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
} from "@material-ui/core";
import Line from "../Charts/Line";
import Bar from "../Charts/Bar";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    minWidth: 575,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        // <PerfectScrollbar>
        <Box p={3}>{children}</Box>
        // </PerfectScrollbar>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
//TODO: Need to add duration section

export default function Chart(props) {
  const classes = useStyles();
  const { title, totalPriceArray } = props;
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log("charts...",totalPriceArray);
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <AppBar position="static" color="secondary">
          <Tabs
            value={value}
            indicatorColor="primary"
            onChange={handleChange}
            aria-label="chart"
            variant="fullWidth"
          >
            <Tab label="Line Chart" />
            <Tab label="Bar Chart" />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Line totalPriceArray={totalPriceArray} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Bar totalPriceArray={totalPriceArray} />
        </TabPanel>
      </Grid>
    </Grid>
  );
}
