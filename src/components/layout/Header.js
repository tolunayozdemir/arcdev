import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


import logo from '../../assets/logo.svg';
import IconButton from '@material-ui/core/IconButton';


function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "4rem",
    [theme.breakpoints.down("md")]: {
      marginBottom: "3rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1.2rem",
    }
  },
  logo: {
    height: "8rem",
    [theme.breakpoints.down("md")]: {
      height: "7rem"
    },
    [theme.breakpoints.down("sm")]: {
      height: "5rem"
    }
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  tabContainer: {
    marginLeft: "auto"
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: 25
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: 50,
    marginLeft: 25,
    marginRight: 20,
    height: 45,
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "#fff",
    borderRadius: 0
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: ".7",
    "&:hover": {
      opacity: 1
    }
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  drawerIcon: {
    width: 50,
    height: 50
  },
  drawer: {
    backgroundColor: theme.palette.common.blue
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "#fff",
    opacity: .7
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    }
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1
  }
}))

const Header = props => {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { value, selectedIndex, setValue, setSelectedIndex } = props;

  const [openDrawer, setOpenDrawer] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 1, ariaOwns: anchorEl ? "simple-menu" : undefined, ariaPopup: anchorEl ? true : null, mouseOver: e => handleClick(e) },
    { name: "The Revolution", link: "/revolution", activeIndex: 2 },
    { name: "About Us", link: "/about", activeIndex: 3 },
    { name: "Contact Us", link: "/contact", activeIndex: 4 }
  ]

  const menuOptions = [
    { name: "Services", path: "/services", activeIndex: 1, selectedIndex: 0 },
    { name: "Custom Software Development", path: "/customsoftware", activeIndex: 1 },
    { name: "Mobile App Development", path: "/mobileapps", activeIndex: 1, selectedIndex: 2 },
    { name: "Website Development", path: "/webapps", activeIndex: 1, selectedIndex: 3 },
  ]

  useEffect(() => {
    [...menuOptions, ...routes].forEach(route => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex)
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex)
            }
          }
          break;
        default: break;
      }
    })
  }, [value, menuOptions, selectedIndex, routes, props, setValue, setSelectedIndex])

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  }

  const handleClose = e => {
    setAnchorEl(null);
    setOpenMenu(false);
  }

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  }

  const tabs = (
    <>
      <Tabs value={value} onChange={handleChange} className={classes.tabContainer}>
        {routes.map((route, index) => (
          <Tab key={index} disableRipple className={classes.tab} component={Link} to={route.link} label={route.name} aria-owns={route.ariaOwns} aria-haspopup={route.ariaPopup} onMouseOver={route.mouseOver} />
        ))}
      </Tabs>
      <Button variant="contained" color="secondary" className={classes.button}>
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
        keepMounted
        style={{ zIndex: 1302 }}
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={i}
            onClick={(e) => {
              setValue(1);
              handleClose();
              handleMenuItemClick(e, i);
            }}
            selected={i === selectedIndex && value === 1}
            component={Link}
            to={option.path}
            classes={{ root: classes.menuItem }}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  )

  const drawer = (
    <>
      <SwipeableDrawer
        anchor="right"
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route, index) => (
            <ListItem key={index} divider button component={Link} classes={{ selected: classes.drawerItemSelected }} to={route.link} selected={value === route.activeIndex} onClick={() => { setOpenDrawer(false); setValue(route.activeIndex) }}>
              <ListItemText disableTypography className={classes.drawerItem}>{route.name}</ListItemText>
            </ListItem>
          )
          )}
          <ListItem
            divider
            button
            component={Link}
            to="/estimate"
            selected={value === 5}
            classes={{ root: classes.drawerItemEstimate, selected: classes.drawerItemSelected }}
            className={classes.drawerItemEstimate}
            onClick={() => { setOpenDrawer(false); setValue(5); }}
          >
            <ListItemText disableTypography className={classes.drawerItem}>Free Estimate</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        disableRipple
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  )

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters>
            <Button
              disableRipple
              component={Link} to="/"
              className={classes.logoContainer}
              onClick={() => setValue(0)}
            >
              <img src={logo} alt="Company Logo" className={classes.logo} />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}

export default Header;
