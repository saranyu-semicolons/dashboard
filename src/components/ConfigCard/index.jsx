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



  const getAwsConfig = () => {
    return (
      <>
      <Typography>AWS</Typography>
              <Divider />
              <TextField id="standard-basic" label="Annual Cost" />
              <TextField id="standard-basic" label="Monthly" />
              {/* Instance type dropdown */}
              <InputLabel id="demo-simple-select-label">Instance Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={awsInstanceType}
                onChange={handleAWSInstanceType}
                fullWidth
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
  
              {/* Pricing model */}
              <InputLabel id="demo-simple-select-label">
                Pricing Strategy
              </InputLabel>
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
              <InputLabel id="demo-simple-select-label">
                Reserved standard
              </InputLabel>
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
              <InputLabel id="demo-simple-select-label">
                Reservation Term
              </InputLabel>
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
  
              <TextField id="standard-basic" label="UpFront" />
              </>
    );
  }

  return (
    
        <Card>
          <CardContent>
            {getAwsConfig()}
            <Divider />
            <Typography>GCP</Typography>
          </CardContent>
        </Card>
     
  );
}
