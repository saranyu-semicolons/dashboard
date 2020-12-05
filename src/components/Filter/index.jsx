import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardContent, Typography, Divider } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import data from "./mockData";

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

//TODO: Need to add duration section

export default function Filter(props) {
  const classes = useStyles();
  const {title} = props;
  const [value,setValue] = React.useState({id:"1"});
  const [inputValue, setInputValue] = React.useState('');
  
  const handleChange = (event,value) => {
    props.getDataByActivity(value);
  }
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography
              color="textSecondary"
              gutterBottom
            >
              {title}
            </Typography>
            <Divider/>
            <Autocomplete
              id="flat-demo"
              options={data}
              getOptionLabel={(option) => option.activity}
              style={{ width: 300 }}
              onChange={handleChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select Activity"
                  variant="outlined"
                />
              )}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
