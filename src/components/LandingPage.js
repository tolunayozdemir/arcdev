import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonArrow from './ui/ButtonArrow';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from 'react-router-dom';

import animationData from '../animations/landinganimation/data';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websiteIcon from '../assets/websiteIcon.svg';
import revolutionBackground from '../assets/repeatingBackground.svg'
import infoBackground from '../assets/infoBackground.svg';

import CallToActions from './ui/CallToActions';

const useStyles = makeStyles(theme => ({
    mainContainer: {
        marginTop: "5rem",
        [theme.breakpoints.down("md")]: {
            marginTop: "3rem"
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: "2rem"
        },
    },
    animation: {
        maxWidth: "50rem",
        minWidth: "21rem",
        marginTop: "2rem",
        marginLeft: "10%",
        [theme.breakpoints.down("xs")]: {
            maxWidth: "30rem"
        }
    },
    buttonContainer: {
        marginTop: "1rem"
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: ".9rem",
        height: 45,
        width: 145,
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
    heroTextContainer: {
        minWidth: "21.5rem",
        marginLeft: "1rem",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
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
        marginTop: "12rem",
        [theme.breakpoints.down("xs")]: {
            padding: 25
        }
    },
    revolutionCard: {
        position: "absolute",
        boxShadow: theme.shadows[10],
        padding: "10rem",
        borderRadius: 15,
        [theme.breakpoints.down("sm")]: {
            padding: "8rem 0",
            borderRadius: 0,
            width: "100%"
        }

    },
    revolutionBackground: {
        backgroundImage: `url(${revolutionBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    },
    infoBackground: {
        backgroundImage: `url(${infoBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    }
}))

const LandingPage = ({ setSelectedIndex, setValue }) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchXS = useMediaQuery(theme.breakpoints.down("xs"))

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Grid container direction="column" className={classes.mainContainer}>
            <Grid item>
                {/* HERO SECTION */}
                <Grid container justify="flex-end" alignItems="center" direction="row">
                    <Grid sm item className={classes.heroTextContainer}>
                        <Typography variant="h2" align="center">Bringing West Coast Technology <br />to the Midwest</Typography>
                        <Grid container justify="center" className={classes.buttonContainer}>
                            <Grid item>
                                <Button onClick={() => setValue(5)} component={Link} to="/estimate" variant="contained" className={classes.estimateButton}>Free estimate</Button>
                            </Grid>
                            <Grid item>
                                <Button onClick={() => setValue(2)} component={Link} to="/revolution" variant="outlined" className={classes.learnButtonHero}>
                                    <span style={{ marginRight: 10 }}>Learn More</span>
                                    <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item className={classes.animation}>
                        <Lottie className={classes.animation} options={defaultOptions} height={"100%"} width={"100%"} />
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
                {/* iOS/Android SECTION */}
                <Grid container direction="row" justify={matchSM ? "center" : "flex-end"} className={classes.serviceContainer}>
                    <Grid item style={{ textAlign: matchSM ? "center" : null }}>
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
                        <img alt="mobile phone" src={mobileAppsIcon} className={classes.icon} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                {/* SERVICES SECTION */}
                <Grid container direction="row" justify={matchSM ? "center" : null} className={classes.serviceContainer}>
                    <Grid item style={{ marginLeft: matchSM ? 0 : "5rem", textAlign: matchSM ? "center" : null }}>
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
                    <Grid item>
                        <img alt="custtom software" src={websiteIcon} className={classes.icon} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                {/* Revo Section */}
                <Grid container alignItems="center" justify="center" style={{ height: "80rem", marginTop: "12rem" }}>
                    <Card className={classes.revolutionCard}>
                        <CardContent>
                            <Grid container direction="column" style={{ textAlign: "center" }} >
                                <Grid item>
                                    <Typography variant="h3" gutterBottom>The Revelolution</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1">Visioary insights coupled with cutting-edge technology is a recipe for revolution.</Typography>
                                    <Button onClick={() => setValue(2)} component={Link} to="/revolution" variant="outlined" className={classes.learnButton}>
                                        <span style={{ marginRight: 10 }}>Learn More</span>
                                        <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <div className={classes.revolutionBackground} />
                </Grid>
            </Grid>
            <Grid item>
                {/* info Section */}
                <Grid container direction="row" alignItems="center" style={{ height: "80rem" }}>
                    <Grid item container style={{ position: "absolute", textAlign: matchXS ? "center" : "inherit" }} direction={matchXS ? "column" : "row"} >
                        <Grid sm item style={{ marginLeft: matchXS ? 0 : matchSM ? "2rem" : "5rem" }}>
                            <Grid container direction="column" style={{ marginBottom: matchXS ? "10rem": 0}}>
                                <Typography variant="h2" style={{ color: "white" }}>About Us</Typography>
                                <Typography variant="subtitle2">Let's get personal</Typography>
                                <Grid item>
                                    <Button onClick={() => setValue(3)} component={Link} to="/about" variant="outlined" className={classes.learnButton} style={{ color: "white", borderColor: "white" }}>
                                        <span style={{ marginRight: 10 }}>Learn More</span>
                                        <ButtonArrow width={15} height={15} fill="white" />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm style={{ marginRight: matchXS ? 0 : matchSM ? "2rem" : "5rem", textAlign: matchXS ? "center" : "right" }}>
                            <Grid container direction="column">
                                <Typography variant="h2" style={{ color: "white" }}>Contact Us</Typography>
                                <Typography variant="subtitle2">Say hello!</Typography>
                                <Grid item>
                                    <Button onClick={() => setValue(4)} component={Link} to="/contact" variant="outlined" className={classes.learnButton} style={{ color: "white", borderColor: "white" }}>
                                        <span style={{ marginRight: 10 }}>Learn More</span>
                                        <ButtonArrow width={15} height={15} fill="white" />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <div className={classes.infoBackground} />
                </Grid>
            </Grid>
            <Grid item>
                {/* Call To Actions section */}
                <CallToActions setValue={setValue} />
            </Grid>
        </Grid >
    )
}

export default LandingPage;