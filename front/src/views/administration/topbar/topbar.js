import './topbar.css';

import React, {Component} from 'react';
import {Navbar, Nav} from "react-bootstrap";
import {HiFolder, HiDocument, HiUsers, HiViewGrid} from "react-icons/hi/index";
import {NavLink} from "react-router-dom";

class Topbar extends Component {

    render() {
        return (
            <Navbar className={"admin-menu"} variant="dark">
                <Nav className="mr-auto">
                    <NavLink to={'/admin/musics'} className="nav-link"><HiDocument/> Musiques</NavLink>
                    <NavLink to={'/admin/playlists'} className="nav-link"><HiFolder/> Playlists</NavLink>
                    <NavLink to={'/admin/users'} className="nav-link"><HiUsers/> Utilisateurs</NavLink>
                    <NavLink to={'/admin/categories'} className="nav-link"><HiViewGrid/> Catégories</NavLink>
                </Nav>
            </Navbar>
        );
    }
}

export default Topbar;