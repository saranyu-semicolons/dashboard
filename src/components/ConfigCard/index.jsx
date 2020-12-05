import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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

export default function ConfigCard() {
  const classes = useStyles();
  const [awsInstanceType, setAWSInstanceType] = React.useState(10);
  const [awsPricingStrategy, setAWSPricingStrategy] = React.useState(20);
  const [awsReservedStandard, setAWSReservedStandard] = React.useState(30);
  const [awsReserveTerm, setAWSReserveTerm] = React.useState(10);
  const [awsPaymentType, setAWSPayementType] = React.useState(20);

  const [gcpInstanceType, setGCPInstanceType] = React.useState(10);
  const [gcpMachine, setGCPMachine] = React.useState(20);
  const [gcpCPUPricingStrategy, setCPUPricingStrategy] = React.useState(30);
  const [gcpRAMPricingStrategy, setRAMPricingStrategy] = React.useState(10);

  // aws change events
  const handleAWSInstanceType = (event) => {
    setAWSInstanceType(event.target.value);
  };

  const handleAWSPricingStrategy = (event) => {
    setAWSPricingStrategy(event.target.value);
  };

  const handleAWSreservedStandard = (event) => {
    setAWSReservedStandard(event.target.value);
  };
  const handleAWSReserveTerm = (event) => {
    setAWSReserveTerm(event.target.value);
  };

  const handleAWSPayementType = (event) => {
    setAWSPayementType(event.target.value);
  };

  //end of aws change events

  // GCP change events
  const handleGCPInstanceType = (event) => {
    setGCPInstanceType(event.target.value);
  };

  const handleGCPMachine = (event) => {
    setGCPMachine(event.target.value);
  };

  const handleCPUPricingStrategy = (event) => {
    setCPUPricingStrategy(event.target.value);
  };
  const handlerRAMPricingStrategy = (event) => {
    setRAMPricingStrategy(event.target.value);
  };


  //end of GCP change events

  const getAwsConfig = () => {
    return (
      <>
        <Typography>AWS</Typography>
        <Divider />
        <TextField id="standard-basic" label="Annual Cost" fullWidth />
        <TextField id="standard-basic" label="Monthly" fullWidth/>
        {/* Instance type dropdown */}

        <InputLabel id="demo-simple-select-label">Instance Type</InputLabel>
        <Select
          color="primary"
          value={awsInstanceType}
          onChange={handleAWSInstanceType}
          fullWidth
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>

        {/* Pricing model */}
        <InputLabel id="demo-simple-select-label">Pricing Strategy</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={awsPricingStrategy}
          onChange={handleAWSPricingStrategy}
          fullWidth
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>

        {/* Reserved standard */}
        <InputLabel id="demo-simple-select-label">Reserved standard</InputLabel>
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
        </Select>

        {/* Reserved Term */}
        <InputLabel id="demo-simple-select-label">Reservation Term</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={awsReserveTerm}
          onChange={handleAWSReserveTerm}
          fullWidth
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>

        {/* Payment Type */}
        <InputLabel id="demo-simple-select-label">Payment Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={awsPaymentType}
          onChange={handleAWSPayementType}
          fullWidth
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>

        <TextField id="standard-basic" label="UpFront" fullWidth />
      </>
    );
  };

  const getGCPConfig = () => {
    return (
      <>
        <Typography>GCP</Typography>
        <Divider />

        {/* Instance type dropdown */}

        <InputLabel id="demo-simple-select-label">Instance Type</InputLabel>
        <Select
          color="primary"
          value={gcpInstanceType}
          onChange={handleGCPInstanceType}
          fullWidth
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>

        {/* machine model */}
        <InputLabel id="demo-simple-select-label">Machine</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gcpMachine}
          onChange={handleGCPMachine}
          fullWidth
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>

        {/* CPU Field */}

        <TextField id="standard-basic" label="CPU" fullWidth />

        {/* RAM Field */}

        <TextField id="standard-basic" label="RAM" fullWidth/>

        {/* cpu Pricing Strategy */}
        <InputLabel id="demo-simple-select-label">
          CPU Pricing Strategy
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gcpCPUPricingStrategy}
          onChange={handleCPUPricingStrategy}
          fullWidth
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>

        {/* RAM Pricing Strategy */}
        <InputLabel id="demo-simple-select-label">
          RAM Pricing Strategy
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gcpRAMPricingStrategy}
          onChange={handlerRAMPricingStrategy}
          fullWidth
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </>
    );
  };
  return (
    <Card>
      <CardContent>
        {getAwsConfig()}
        <Divider />
        {getGCPConfig()}
      </CardContent>
    </Card>

  );
}
