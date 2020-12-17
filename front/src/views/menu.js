import React, {Component} from 'react';
import {Navbar, Nav, Image} from 'react-bootstrap';
import { HiHome, HiUser } from "react-icons/hi";
import {NavLink} from "react-router-dom";
import '../style/menu.css';

class Menu extends Component {

    render() {
        return (
            <Navbar className="navbar-left col-md-12 sidebar" variant="dark">
                <Navbar.Brand>
                    <Image src="images/logo.png" className="navbar-logo"/>
                </Navbar.Brand>
                <Nav className="mr-auto test">
                    <NavLink to={'/homepage'} className="nav-link"><HiHome/> Accueil</NavLink>
                    <NavLink to={'/profile'} className="nav-link"><HiUser/> Profil</NavLink>
                    <Nav.Item href="#10">Playlists publiques</Nav.Item>
                    <NavLink to={'/playlist1'} className="nav-link">Playlist 1</NavLink>
                    <NavLink to={'/playlist2'} className="nav-link">Playlist 2</NavLink>
                    <NavLink to={'/playlist3'} className="nav-link">Playlist 3</NavLink>
                    <NavLink to={'/playlist4'} className="nav-link">Playlist 4</NavLink>
                    <Nav.Item href="#9">Playlists privées</Nav.Item>
                    <NavLink to={'/playlist5'} className="nav-link">Playlist 1</NavLink>
                    <NavLink to={'/playlist6'} className="nav-link">Playlist 2</NavLink>
                    <NavLink to={'/playlist7'} className="nav-link">Playlist 3</NavLink>
                    <NavLink to={'/playlist8'} className="nav-link">Playlist 4</NavLink>
                </Nav>
            </Navbar>
        );
    }
}

export default Menu;