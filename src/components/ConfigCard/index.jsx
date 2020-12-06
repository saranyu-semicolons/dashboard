import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Divider,
} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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

export default function ConfigCard(props) {
  const classes = useStyles();
  const {getDataByConfig, awsData, gcpData, ...other} = props;
  const [awsInstanceType, setAWSInstanceType] = React.useState(awsData.instanceType);
  const [awsPricingStrategy, setAWSPricingStrategy] = React.useState(awsData.pricingStrategy);
  const [awsReservedStandard, setAWSReservedStandard] = React.useState(awsData.awsReservedStandard);
  const [awsReserveTerm, setAWSReserveTerm] = React.useState(awsData.reservationTerm);
  const [awsPaymentType, setAWSPayementType] = React.useState(awsData.paymentType);

  const [gcpInstanceType, setGCPInstanceType] = React.useState(gcpData.cpuPricingStrategy);
  const [gcpMachine, setGCPMachine] = React.useState(gcpData.machine);
  const [gcpCPUPricingStrategy, setCPUPricingStrategy] = React.useState(30);
  const [gcpRAMPricingStrategy, setRAMPricingStrategy] = React.useState(gcpData.ramPricingStrategy);

  //aws
  const awsInstanceTypesDropDown = awsData.metadata.instanceTypes;
  const awsOperatingSystemsDropDown = awsData.metadata.operatingSystems;
  const awsRegionsDropDown = awsData.metadata.regions;
  const awsPricingModelsDropDown = awsData.metadata.pricingModels;
  const awsReservationTermsDropDown = awsData.metadata.reservationTerms;
  const awsPaymentOptionsDropDown = awsData.metadata.paymentOptions;

  //gcp
  const gcpCpuUsageTypesDropDown = gcpData.metadata.cpuUsageTypes;
  const gcpRamUsageTypesDropDown = gcpData.metadata.ramUsageTypes;
  const gcpMachineAvailableSeriesDropDown = gcpData.metadata.machineAvailableSeries;
  const gcpServiceRegionsDropDown = gcpData.metadata.serviceRegions;
  const gcpAvailableStorageDropDown = gcpData.metadata.availableStorage;

  
  // aws change events
  const handleAWSInstanceType = (event) => {
    //console.log("valProperty====", value);
    console.log("vevent====", event);
    setAWSInstanceType(event.target.value);
    getDataByConfig({
      "aws": {
        [event.target.name] : event.target.value
      } 
    })
  };

  const handleAWSPricingStrategy = (event) => {
    setAWSPricingStrategy(event.target.value);
    getDataByConfig({
      "aws": {
        [event.target.name] : event.target.value
      } 
    })
  };

  const handleAWSreservedStandard = (event) => {
    setAWSReservedStandard(event.target.value);
    getDataByConfig({
      "aws": {
        [event.target.name] : event.target.value
      } 
    })
  };
  const handleAWSReserveTerm = (event) => {
    setAWSReserveTerm(event.target.value);
    getDataByConfig({
      "aws": {
        [event.target.name] : event.target.value
      } 
    })
  };

  const handleAWSPayementType = (event) => {
    setAWSPayementType(event.target.value);
    getDataByConfig({
      "aws": {
        [event.target.name] : event.target.value
      } 
    })
  };

  //end of aws change events

  // GCP change events
  const handleGCPInstanceType = (event) => {
    setGCPInstanceType(event.target.value);
    getDataByConfig({
      "gcp": {
        [event.target.name] : event.target.value
      } 
    })
  };

  const handleGCPMachine = (event) => {
    setGCPMachine(event.target.value);
    getDataByConfig({
      "gcp": {
        [event.target.name] : event.target.value
      } 
    })
  };

  const handleCPUPricingStrategy = (event) => {
    setCPUPricingStrategy(event.target.value);
    getDataByConfig({
      "gcp": {
        [event.target.name] : event.target.value
      } 
    })
  };
  const handlerRAMPricingStrategy = (event) => {
    setRAMPricingStrategy(event.target.value);
    getDataByConfig({
      "gcp": {
        [event.target.name] : event.target.value
      } 
    })
  };


  //end of GCP change events

  const getAwsConfig = () => {
    return (
      <div style={{height: '500px'}}>
        <Typography>AWS</Typography>
        <Divider />
        <Typography>Annual Cost : {awsData.annualCost}</Typography>
        <Typography>Monthly : {awsData.monthly}</Typography>
        {/* Instance type dropdown */}

        <InputLabel id="demo-simple-select-label">Instance Type</InputLabel>
        <Select
          color="primary"
          value={awsInstanceType}
          defaultValue={awsInstanceType}
          onChange={handleAWSInstanceType}
          label= "Instance Type"
          fullWidth
          name="awsInstanceType"
        >
          {awsInstanceTypesDropDown.map((optionData,index) => (
          <option
            key={optionData}
            onClick={handleAWSInstanceType}
            value={optionData}
          >
              {optionData}
          </option>
        ))}

          
        </Select>

        {/* Pricing model */}
        <InputLabel id="demo-simple-select-label">Pricing Strategy</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={awsPricingStrategy.toLowerCase()}
          defaultValue={awsPricingStrategy.toLowerCase()}
          onChange={handleAWSPricingStrategy}
          fullWidth
        >
          {awsPricingModelsDropDown.map((optionData,index) => (
          <option
            key={optionData.toLowerCase()}
            onClick={handleAWSInstanceType}
            value={optionData.toLowerCase()}
          >
              {optionData.toLowerCase()}
          </option>
        ))}
        </Select>

        {/* Reserved standard */}
        {/* <InputLabel id="demo-simple-select-label">Reserved standard</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={awsReservedStandard}
          onChange={handleAWSreservedStandard}
          fullWidth
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>  */}

        {/* Reserved Term */}
        <InputLabel id="demo-simple-select-label">Reservation Term</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={awsReserveTerm.split(" ").join("")}
          defaultValue={awsReserveTerm.split(" ").join("")}
          onChange={handleAWSReserveTerm}
          fullWidth
        >
          {awsReservationTermsDropDown.map((optionData,index) => (
          <option
            key={optionData.split(" ").join("")}
            onClick={handleAWSInstanceType}
            value={optionData.split(" ").join("")}
          >
              {optionData.split(" ").join("")}
          </option>
          ))}
        </Select>

        {/* Payment Type */}
        <InputLabel id="demo-simple-select-label">Payment Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={awsPaymentType.split(" ").join("").toLowerCase()}
          defaultValue={awsPaymentType.split(" ").join("").toLowerCase()}
          onChange={handleAWSPayementType}
          fullWidth
        >
          {awsPaymentOptionsDropDown.map((optionData,index) => (
          <option
            key={optionData.split(" ").join("").toLowerCase()}
            onClick={handleAWSInstanceType}
            value={optionData.split(" ").join("").toLowerCase()}
          >
              {optionData.split(" ").join("").toLowerCase()}
          </option>
          ))}
        </Select>

        <Button variant='contained' color="primary" style={{marginTop: '10%', marginLeft: '40%'}}>
					Procure
				</Button>

        {/* <TextField id="standard-basic" label="UpFront" fullWidth /> */}
      </div>
    );
  };

  const getGCPConfig = () => {
    return (
      <div style={{height: '500px'}}>
        <Typography>GCP</Typography>
        <Divider />

        {/* Instance type dropdown */}

        <Typography>Instance Type : {gcpData.instanceType}</Typography>
        <Typography>Machine : {gcpData.machine}</Typography>
        <Typography>CPU : {gcpData.CPU}</Typography>
        <Typography>RAM : {gcpData.RAM}</Typography>

        <Select
          color="primary"
          value={gcpInstanceType}
          onChange={handleGCPInstanceType}
          defaultValue={gcpInstanceType}
          fullWidth
        >
          {gcpCpuUsageTypesDropDown.map((optionData,index) => (
            <option
            key={optionData}
            onClick={handleAWSInstanceType}
            value={optionData}
          >
              {optionData}
          </option>
          ))}
        </Select>

        {/* machine model */}
        <InputLabel id="demo-simple-select-label">Machine</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gcpMachine}
          onChange={handleGCPMachine}
          defaultValue={gcpMachine}
          fullWidth
        >
          {gcpMachineAvailableSeriesDropDown.map((optionData,index) => (
            <option
            key={optionData}
            onClick={handleAWSInstanceType}
            value={optionData}
          >
              {optionData}
          </option>
          ))}
        </Select>


        <InputLabel id="demo-simple-select-label">RAM Usage Types</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gcpRAMPricingStrategy}
          onChange={handleGCPMachine}
          defaultValue={gcpRAMPricingStrategy}
          fullWidth
        >
          {gcpRamUsageTypesDropDown.map((optionData,index) => (
            <option
            key={optionData}
            onClick={handleAWSInstanceType}
            value={optionData}
          >
              {optionData}
          </option>
          ))}
        </Select>
        <Button variant='contained' color="primary" style={{marginTop: '23%', marginLeft: '40%'}}>
					Procure
				</Button>
      </div>
    );
  };
  return (
    <Grid container spacing={6}>
      <Grid item xs={6}>
        <Card>
          <CardContent>
            {getAwsConfig()}
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardContent>
            {getGCPConfig()}
          </CardContent>
        </Card>
      </Grid>
    </Grid>

  );
}
