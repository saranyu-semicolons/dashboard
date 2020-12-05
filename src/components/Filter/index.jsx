import {
	Box,
	Card,
	CardContent,
	Divider,
	Grid,
	Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { desaturate, lighten } from "polished";

import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import data from "./mockData";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: {
		minWidth: 275,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: lighten(0.5, "#424242"),
		margin: 8,
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
  leftBorder : {
    borderLeftWidth: 1,
		borderLeftStyle: "solid",
    borderLeftColor: lighten(0.5, "#424242"),
    paddingLeft: "16px"
  }
});

//TODO: Need to add duration section

export default function Filter(props) {
	const classes = useStyles();
	const { title } = props;
	const [value, setValue] = React.useState({ id: "1" });
	const [inputValue, setInputValue] = React.useState("");

	const handleChange = (event, value) => {
		props.getDataByActivity(value);
	};
	return (
		<Grid container spacing={6}>
			<Grid item xs={12}>
				<Card variant='outlined' raised={false} className={classes.root}>
					<CardContent>
						<Grid container>
							<Grid item xs={2}>
								<Grid container justify='center' spacing={2}>
									<Typography color='textSecondary' gutterBottom variant='h2'>
										{title}
									</Typography>
								</Grid>
							</Grid>
							<Grid item xs={8} className={classes.leftBorder}>
								<Autocomplete
									id='flat-demo'
									options={data}
									getOptionLabel={(option) => option.activity}
									// style={{ width: 300 }}
									onChange={handleChange}
									renderInput={(params) => (
										<TextField
											{...params}
											label='Select Activity'
											fullWidth
											// variant="normal"
										/>
									)}
								/>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
}
