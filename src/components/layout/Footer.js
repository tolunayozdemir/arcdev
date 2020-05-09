import React from 'react'
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import footerAdornment from '../../assets/Footer Adornment.svg';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "25rem",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21rem",
    },
    [theme.breakpoints.down("md")]: {
      width: "15rem",
    }
  },
  mainContainer: {
    position: "absolute"
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: ".7rem",
    fontWeight: "bold",
    textDecoration: "none"
  },
  gridItem: {
    margin: "2rem"
  },
  icon: {
    width: "4rem",
    height: "4rem",
    [theme.breakpoints.down("xs")]: {
      height: "2.5rem",
      width: "2.5rem"
    }
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6rem",
    right: "1.5rem",
    [theme.breakpoints.down("xs")]: {
      right: ".6rem"
    }
  }
}))

const Footer = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container spacing={2} justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction="column">
              <Grid item component={Link} onClick={() => setValue(0)} to="/" className={classes.link}>Home</Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction="column">
              <Grid item component={Link} onClick={() => { setValue(1); setSelectedIndex(0) }} to="/services" className={classes.link}>Services</Grid>
              <Grid item component={Link} onClick={() => { setValue(1); setSelectedIndex(1) }} to="/customsoftware" className={classes.link}>Custom Software Development</Grid>
              <Grid item component={Link} onClick={() => { setValue(1); setSelectedIndex(2) }} to="/mobileapps" className={classes.link}>iOS/Android App Development</Grid>
              <Grid item component={Link} onClick={() => { setValue(1); setSelectedIndex(3) }} to="/webapps" className={classes.link}>Website Development</Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction="column">
              <Grid item component={Link} onClick={() => setValue(2)} to="/revolution" className={classes.link}>Vision</Grid>
              <Grid item component={Link} onClick={() => setValue(2)} to="/revolution" className={classes.link}>Technology</Grid>
              <Grid item component={Link} onClick={() => setValue(2)} to="/revolution" className={classes.link}>Process</Grid>
              <Grid item component={Link} onClick={() => setValue(2)} to="/revolution" className={classes.link}>The Revolution</Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction="column">
              <Grid item component={Link} onClick={() => setValue(3)} to="/about" className={classes.link}>History</Grid>
              <Grid item component={Link} onClick={() => setValue(3)} to="/about" className={classes.link}>Team</Grid>
              <Grid item component={Link} onClick={() => setValue(3)} to="/about" className={classes.link}>About Us</Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction="column">
              <Grid item component={Link} to="/contact" className={classes.link}>Contact us</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img src={footerAdornment} alt="Footer" className={classes.adornment} />
      <Grid container className={classes.socialContainer} justify="flex-end" spacing={2}>
        <Grid item component={"a"} href="https://www.tolunayozdemir.com" rel="noopener noreferrer" target="_blank">
          <img alt="facebook" src={facebook} className={classes.icon} />
        </Grid>
        <Grid item component={"a"} href="https://www.tolunayozdemir.com" rel="noopener noreferrer" target="_blank">
          <img alt="twitter" src={twitter} className={classes.icon} />
        </Grid>
        <Grid item component={"a"} href="https://www.tolunayozdemir.com" rel="noopener noreferrer" target="_blank">
          <img alt="instagram" src={instagram} className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer;
