import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Card from "../Card";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import React from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import serviceListingData from "./serviceListingData";

const useStyles = makeStyles({
  list: {
    width: 350,
  },
  fullList: {
    width: "auto",
  },
});

const ListContainer = styled(Paper)`
  width: calc(50vw);
  padding: 0px;
  margin: 0px;
`;

const CardHolder = styled(Box)`
  min-height: calc(100vh - 95px);
  background-color: #424242;
`;

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
        <CardHolder p={3}>{children}</CardHolder>
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
const getCards = (value) => {
  const cards = [];
  serviceListingData[value].forEach((card,index) =>
    cards.push(
      <Grid item xs={12} lg={4} xl={4} key={index}>
        <Card title={card.title} img={card.img} desc={card.desc}/>
      </Grid>
    )
  );
  return cards;
};
export default function ServiceListings() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ListContainer>
      <AppBar position="static" color="secondary">
        <Tabs
          value={value}
          indicatorColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
          variant="fullWidth"
        >
          <Tab
            label="IAAS"
            icon={<img src="/img/IAAS.png" width="64px"></img>}
          />
          <Tab
            label="PAAS"
            icon={<img src="/img/PAAS.png" width="64px"></img>}
          />
          <Tab
            label="SAAS"
            icon={<img src="/img/SAAS.png" width="64px"></img>}
          />
          <Tab
            label="Industry"
            icon={<img src="/img/industry.png" width="64px"></img>}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid container spacing={2}>
          {getCards(value)}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Three
      </TabPanel>
    </ListContainer>
  );
}
