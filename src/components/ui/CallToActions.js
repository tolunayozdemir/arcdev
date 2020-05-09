import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typhography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonArrow from './ButtonArrow';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from 'react-router-dom';

import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';

const useStyles = makeStyles(theme => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: ".9rem",
    marginTop: ".5rem",
    height: 45,
    padding: 5,
    width: 145,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2rem"
    }
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
    backgroundAttachment: "fixed",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit"
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    background: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "5rem",
    marginLeft: "2rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0
    }
  }
}))


const CallToActions = ({ setValue }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return <Grid
    container
    style={{ height: "60rem", }}
    alignItems="center"
    className={classes.background}
    justify={matchesSM ? "center" : "space-between"}
    direction={matchesSM ? "column" : "row"}
  >
    <Grid item style={{ marginLeft: matchesSM ? 0 : "5rem", textAlign: matchesSM ? "center" : "inherit" }}>
      <Grid container direction="column">
        <Grid item>
          <Typhography variant="h2">Simple Software.<br />Revolutionary Results.</Typhography>
          <Typhography variant="subtitle2" style={{ fontSize: "1.5rem" }}>Take advantage of 21st Century.</Typhography>
          <Grid container item justify={matchesSM ? "center" : null}>
            <Button onClick={() => setValue(2)} component={Link} to="/revolution" variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 5 }}>Learn More</span>
              <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Grid item>
      <Button variant="contained" component={Link} to="/estimate" className={classes.estimateButton}>Free Estimate</Button>
    </Grid>
  </Grid>
}

export default CallToActions;