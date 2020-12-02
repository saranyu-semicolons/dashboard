import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 64,
	},
	font14: {
		fontSize: 16,
	},
	headerRoot: {
		display: "flex",
		padding: 4,
		alignItems: "center",
		borderBottom: "solid 1px #fcc438",
	},
	mediaRoot: {
		display: "block",
		backgroundSize: "64px",
		backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderBottom: "solid 1px #fcc438",
        marginBottom: 8
	},
	contentRoot: {
		margin: "0px",
		padding: 0,
	},
	ButtonRoot: {
		margin: 0,
		marginBottom: 4,
		marginTop: 4,
		padding: 8,
        fontSize: "1rem",
        borderRadius: 4,
	},
});

export default function MediaCard() {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardHeader
				title='Virtual Machine'
				disableTypography={true}
				classes={{ content: classes.font14, root: classes.headerRoot }}
			/>
			<CardMedia
				className={classes.media}
				image='/img/vm.png'
				title={() => <Typography variant='h2'>Compute</Typography>}
				disableTypography={true}
				classes={{ root: classes.mediaRoot }}
			/>
			<CardContent classes={{ root: classes.contentRoot }}>
				<Typography variant='body2' color='textSecondary'>
					Web service that provides secure, resizable compute capacity in the
					cloud.Designed to make web-scale cloud computing easier for
					developers.
				</Typography>
			</CardContent>

			<CardActions>
				<Button
					size='small'
					color='primary'
					variant='contained'
					fullWidth
					classes={{ root: classes.ButtonRoot }}
				>
					Add
				</Button>
			</CardActions>
		</Card>
	);
}
