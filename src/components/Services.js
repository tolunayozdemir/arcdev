import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ButtonArrow from './ui/ButtonArrow';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websiteIcon from '../assets/websiteIcon.svg';

const useStyles = makeStyles(theme => ({
  serviceLayout: {
    paddingBottom: "7rem",
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "4rem"
    }
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange
  },
  subtitle: {
    marginBottom: "1rem"
  },
  icon: {
    marginLeft: "2rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  },
  serviceContainer: {
    marginTop: "8rem",
    [theme.breakpoints.down("xs")]: {
      padding: 25,
      marginTop: "3rem"
    }
  },
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
}))

const Services = ({ setSelectedIndex, setValue }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container direction="column" className={classes.serviceLayout}>
      <Grid item>
        <Typography align={matchSM ? "center" : undefined} gutterBottom variant="h2" style={{ marginLeft: !matchSM ? "2rem" : 0, marginTop: matchSM ? "1rem" : "2rem" }}>Services</Typography>
      </Grid>
      <Grid item>
        {/* iOS/Android SECTION */}
        <Grid container direction="row" justify={matchSM ? "center" : "flex-end"} className={classes.serviceContainer} style={{ marginTop: matchSM ? "2rem" : "6rem" }}>
          <Grid item style={{ textAlign: matchSM ? "center" : null, width: matchSM ? undefined : "35rem" }}>
            <Typography variant="h4">
              iOS/Android App Development
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app{matchSM ? null : <br />} with either mobile platform.
            </Typography>
            <Button onClick={() => { setValue(1); setSelectedIndex(2) }} component={Link} to="/mobileapps" variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchSM ? 0 : "5rem" }}>
            <img alt="mobile phone" src={mobileAppsIcon} className={classes.icon} width="250rem" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* SERVICES SECTION */}
        <Grid container direction="row" justify={matchSM ? "center" : null} className={classes.serviceContainer}>
          <Grid item style={{ marginLeft: matchSM ? 0 : "5rem", textAlign: matchSM ? "center" : null }}>
            <Typography variant="h4">
              Custom Software Development
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}<span className={classes.specialText}>celebration</span>.
            </Typography>
            <Button onClick={() => { setValue(1); setSelectedIndex(1) }} component={Link} to="/customsoftware" variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
            </Button>
          </Grid>
          <Grid item>
            <img alt="custtom software" src={customSoftwareIcon} className={classes.icon} />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {/* SERVICES SECTION */}
        <Grid container direction="row" justify={matchSM ? "center" : "flex-end"} className={classes.serviceContainer}>
          <Grid item style={{ textAlign: matchSM ? "center" : null, width: matchSM ? undefined : "35rem" }}>
            <Typography variant="h4">
              Website Development
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines , built for speed.
            </Typography>
            <Button onClick={() => { setValue(1); setSelectedIndex(3) }} component={Link} to="/websites" variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchSM ? 0 : "5rem" }}>
            <img alt="custtom software" src={websiteIcon} className={classes.icon} width="250rem" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>


  )
}

export default Services;
