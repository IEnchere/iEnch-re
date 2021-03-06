import React from "react";
import "./Navbar.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import SignIn from "../SignIn/Signin";
import SignUp from "../SignUp/SignUp";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { UserOutlined } from "@ant-design/icons";
import {logOut} from "../../utils";

function Navmenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
   
  const handleLogOut= ()=> {
    logOut()
};

  return (
    <div>
      <Navbar className="navbar-container" collapseOnSelect>
        <Container className="navConatiner">
          <Link className="navbar-brand" to="/">
            <img id="logonav" src="logoApp.png" alt="IEnchère logo" />
          </Link>
          <Nav className="me-auto">
            <li>
              <NavLink id="menu" className="nav-link" to="Hôtels-et-séjours">
                Hôtels & séjours
              </NavLink>
            </li>
            <li>
              <NavLink
                id="menu"
                className="nav-link"
                to="Restaurants-et-Évènements"
              >
                Restaurants & Évènements
              </NavLink>
            </li>
            <li>
              <NavLink id="menu" className="nav-link" to="Maison-et-shopping">
                Maison & shopping
              </NavLink>
            </li>
          </Nav>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <UserOutlined />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <SignIn to="Connexion" />
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <SignUp to="Inscription" />
            </MenuItem>
            <MenuItem onClick={() =>{handleClose(); handleLogOut();}}>Se déconnecter</MenuItem>
          </Menu>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navmenu;
