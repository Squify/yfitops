import './topbar.css';

import React, {Component} from 'react';
import {Navbar, Nav} from "react-bootstrap";
import {HiUser} from "react-icons/hi/index";
import {NavLink} from "react-router-dom";

class Topbar extends Component {

    render() {
        return (
            <Navbar className={"admin-menu"} variant="dark">
                <Nav className="mr-auto">
                    <NavLink to={'/admin/musics'} className="nav-link"><HiUser/> Musiques</NavLink>
                    <NavLink to={'/admin/playlists'} className="nav-link"><HiUser/> Playlists</NavLink>
                    <NavLink to={'/admin/users'} className="nav-link"><HiUser/> Utilisateurs</NavLink>
                    <NavLink to={'/admin/categories'} className="nav-link"><HiUser/> Autre</NavLink>
                </Nav>
            </Navbar>
        );
    }
}

export default Topbar;