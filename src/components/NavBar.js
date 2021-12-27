import React from "react";
import useForm from "../useForm";
import validate from "../validation";
import { AppBar, Tab, Tabs } from "@material-ui/core";
import { useState, useEffect } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Menu from "@material-ui/core/Menu";
import MenuList from "@material-ui/core/MenuList";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import "../App.css";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  paper: {
    "& > *": {
      margin: theme.spacing(1),
    },
    position: "absolute",
    width: "65%",
    //height: '40%',
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #fff",
    borderRadius: "10px",
    boxShadow: theme.shadows[5],

    marginTop: "20px",
    marginLeft: "10%",
    maxHeight: "100vh",
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    background: "#fff",
    left: "0",
    position: "fixed",
    top: "0",
    width: "100%",
    maxHeight: "116px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0 auto",
    maxWidth: "1200px",
    padding: "0 4rem",
    width: "100%",
  },
  tabs: {
    textDecoration: "none",
    display: "flex",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  tab: {
    display: "flex",
    fontSize: "12px",
    color: "#3e3e48",
    listStyle: "none",
    fontWeight: "600",
    alignItems: "center",

    margin: "auto",
  },

  button: {
    display: "flex",
    justifyContent: "right",
    margin: "5px",
  },
  logo: {
    display: "flex",
    justifyContent: "flex-start",
    letterSpacing: "0.2em",
  },
  span: {
    fontWeight: "600",
  },
  img: {
    display: "inline-block",
    height: "32px",
    width: "auto",
  },
  ul: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  href: {
    color: "#3e3e48",
    display: "inline-block",
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: ".16em",
    padding: "18px 14.4px",
    textDecoration: "none",
    textTransform: "uppercase",
  },
  menu: {
    display: "block",
    left: "50%",
    minWidth: "180px",
    padding: "1rem 0 0",
    position: "absolute",
    top: "3rem",
    pointerEvents: "none",
    margin: "70px 0 0 0",
  },
  menulist: {
    backgroundColor: "#fff",
    borderRadius: "0 0 5px 0",
    boxShadow: "0px",
    padding: "0.5rem 0.5rem",
    color: "#3e3e48",
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: ".16em",
    textDecoration: "none",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: "absolute",
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: "2px solid #000",
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

const NavBar = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const { handleChange, values, handleSubmit, errors } = useForm(validate);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };
  const body = (
    <div className={classes.paper}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            width: "50%",
            backgroundColor: "rgba(240,242,242,.45098039215686275)",
          }}
        >
          <h2>Stay ahead in student recruitment</h2>
          <img src="https://unibuddy.com/wp-content/themes/unibuddy/blemish/landing-page/build/images/modal-bg.svg" />
        </div>
        <div
          style={{
            width: "50%",
            //height: '320px',
            background: "#fff",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              margin: "4px, 4px",
              padding: "4px",
              width: "500px",
              height: "500px",
              overflowX: "hidden",
              overflowY: "auto",
              textAlign: "justify",
            }}
          >
            <label>Bussines Mail*</label>
            <input type="text" />
            <br />

            {/* <div>
              <input type="checkbox" />
              <label>Yes, a student ambassador</label> <br />
              <input type="checkbox" />
              <label>Yes, a prospective student</label> <br />
              <input type="checkbox" />
              <label>No</label>
            </div> */}
            <label>First Name*</label>
            <input
              type="text"
              name="name"
              autoComplete="off"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <p>{errors.name}</p>}
            <br />
            <label>Last Name*</label>
            <input
              type="text"
              name=" last-name"
              autoComplete="off"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <p>{errors.name}</p>}
            <br />
            <label>Work Phone*</label>
            <input type="text" autoComplete="off" onChange={handleChange} />
            <br />
            <label>Job title*</label>
            <input type="text" autoComplete="off" onChange={handleChange} />
            <br />
            <label>Country*</label>
            <input type="text" autoComplete="off" onChange={handleChange} />
            <br />
            <input type="checkbox" />
            <label>
              By entering your personal data including your name and email
              address, you agree to receive further communication from us about
              industry news and opportunities (our monthly newsletter) and
              changes to our website (our occasional service update).
            </label>
            <button className="request-button">Request A Demo</button>
            <label>
              We are 100% committed to protecting your privacy in accordance to
              GDPR and you can read more in our privacy policy.
            </label>
          </form>
        </div>
      </div>
    </div>
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClickTab = (e, newValue) => {
    // console.log(newValue);
    setValue(newValue);
  };
  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleOpenMenu2 = (e) => {
    setAnchorE2(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorE2(null);
  };

  const drawer = (
    <div>
      <Divider />
      <List>
        {["PRODUCTS", "WHY UNIBUDDY", "LEARN", "ABOUT US", "PARTNERS"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar color="black" position="static" className={classes.root}>
        {/* <div className={classes.navbox}>   */}
        <div className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          {/* <div className={classes.xyz}> */}
          <div className={classes.logo}>
            <img
              className={classes.img}
              src="https://unibuddy.com/wp-content/themes/unibuddy/blemish/landing-page/build/images/unibuddy-logo.svg"
            />
          </div>

          <div
            className={classes.tabs}
            onChange={handleClickTab}
            indicatorColor="primary"
            value={value}
          >
            <ul className={classes.ul}>
              <Link
                href="#"
                className={classes.tab}
                area-controls="menu1"
                onMouseOver={handleOpenMenu}
                onMouseOut={handleClose}
              >
                <div className={classes.href}>PRODUCTS</div>
              </Link>
              <Link
                href="#"
                className={classes.tab}
                area-controls="menu1"
                onMouseOver={handleOpenMenu}
                onMouseOut={handleClose}
              >
                <div className={classes.href}>WHY UNIBUDDY</div>
              </Link>
              <Link
                href="#"
                className={classes.tab}
                area-controls="menu1"
                onMouseOver={handleOpenMenu}
                onMouseOut={handleClose}
              >
                <div className={classes.href}>LEARN</div>
              </Link>
              <Link
                href="#"
                className={classes.tab}
                area-controls="menu1"
                onMouseOver={handleOpenMenu}
                onMouseOut={handleClose}
              >
                <div className={classes.href}>ABOUT US</div>
              </Link>
              <Link
                href="#"
                className={classes.tab}
                area-controls="menu1"
                onMouseOver={handleOpenMenu}
                onMouseOut={handleClose}
              >
                <div className={classes.href}>CAREERS</div>
              </Link>
              {/* <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                onClick={handleOpen}
              >
                BOOK A DEMO
              </Button> */}
              <button
                color="primary"
                onClick={handleOpen}
                style={{
                  background: "#01d4cf",
                  color: "#51595e",
                  display: "inline-block",
                  fontSize: "12px",
                  fontWeight: "600",
                  padding: "9px 18px",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Book a demo
              </button>

              <div>
                <Modal
                  open={open}
                  onClose={handleCloseModal}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                >
                  {body}
                </Modal>
              </div>
            </ul>
          </div>
        </div>

        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      </AppBar>
      <Menu
        className={classes.menu}
        id="menu1"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuList className={classes.menulist}>UNIBUDDY EVENT</MenuList>
        <MenuList className={classes.menulist}>CHAT TO STAFF</MenuList>
        <MenuList className={classes.menulist}>UNIBUDDY CHAT</MenuList>
        <MenuList className={classes.menulist}>DISCOVER</MenuList>
      </Menu>
    </>
  );
};

export default NavBar;
