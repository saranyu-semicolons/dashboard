import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card ,
  CardContent,
  Typography,
  TextField,
  Divider
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
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
  return (
    <Grid container spacing={6}>
        <Grid item xs={12} lg={4}>
          <Card>
            <CardContent>
              <Typography>AWS</Typography>
              <Divider/>
              <TextField id="standard-basic" label="Annual Cost" />
              <TextField id="standard-basic" label="Monthly" />
              <TextField id="standard-basic" label="UpFront" />

            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
        <Card>
            <CardContent>
              <Typography>GCP</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
        <Card>
            <CardContent>
              <Typography>AZURE</Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* <Grid item xs={12} lg={8}>
          <Table />
        </Grid> */}
      </Grid>

  );
}