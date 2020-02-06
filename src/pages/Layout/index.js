import React from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import KeyIcon from "@material-ui/icons/VpnKey";
import ExitIcon from "@material-ui/icons/ExitToApp";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import LeftMenu from "./LeftMenu";
import LeftMenuCadastros from "./LeftMenuCadastros";
import { getData, logout } from "mio-library-autenticacao";
import logoTopo from "../../assets/images/logoTopo.svg";

const drawerWidth = 120;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    paddingTop: 56,
    height: "100%",
    [theme.breakpoints.up("sm")]: {
      paddingTop: 64
    }
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    marginRight: 22
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    overflow: "hidden",
    flexShrink: 0,
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    // [theme.breakpoints.up('sm')]: {
    //   width: 100,
    // },
    backgroundColor: theme.palette.primary.main
  },
  content: {
    height: "100%"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    height: "100%",
    backgroundColor: theme.palette.background
  },
  paper: {
    backgroundColor: theme.palette.background.paper
  },
  slide: {
    width: drawerWidth
    // flexShrink: 0,
    // position: "relative",
    // whiteSpace: "nowrap"
  },
  fixedHeight: {
    height: 240
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main
  },
  box: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  box1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  list: {
    paddingTop: 0,
    margin: 0
  },
  divider: {
    heigth: 20,
    backgroundColor: "black"
  }
}));

const Layout = ({ children, title, history, secundaryLeftMenu }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);
  const { name, surname } = getData();

  const initials = `${name.charAt(0).toUpperCase()}${surname
    .charAt(0)
    .toUpperCase()}`;

  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true
  });

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleLogout() {
    logout();
    window.location.href = "/";
  }

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}
    >
      <AppBar position="fixed" className={clsx(classes.appBar)}>
        <Toolbar className={classes.toolbar}>
          <Box className={classes.box}>
            <img src={logoTopo} alt="MIO" />
            <Box className={classes.box1}>
              <Typography
                // component="h1"
                variant="subtitle1"
                color="inherit"
                noWrap
                className={classes.title}
              >
                {name}
              </Typography>
              <IconButton
                aria-label="more"
                aria-controls="settings-menu"
                aria-haspopup="true"
                color="inherit"
                onClick={handleClick}
              >
                {/* <SettingsIcon /> */}
                <Avatar className={classes.avatar}>
                  <Typography variant="h6" color="primary">
                    {initials}
                  </Typography>
                </Avatar>
              </IconButton>
              <Menu
                id="settings-menu"
                anchorEl={anchorEl}
                keepMounted
                open={menuOpen}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    width: 200
                  }
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Grid container justify="space-between" alignItems="center">
                    Alterar Senha
                    <KeyIcon />
                  </Grid>
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <Grid container justify="space-between" alignItems="center">
                    Sair
                    <ExitIcon />
                  </Grid>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <List>
          <LeftMenu />
        </List>
      </Drawer>
      <Slide
        direction="right"
        in={secundaryLeftMenu}
        mountOnEnter
        unmountOnExit
        className={classes.slide}
      >
        <Paper square elevation={2} className={classes.paper}>
          <List className={classes.list}>
            <LeftMenuCadastros />
          </List>
        </Paper>
      </Slide>
      <main className={classes.content}>
        <Container maxWidth="xl" className={classes.container}>
          {children}
        </Container>
      </main>
    </div>
  );
};

const mapStateToProps = state => ({
  secundaryLeftMenu: state.app.secundaryLeftMenu
});

export default connect(mapStateToProps)(Layout);
