import React, {Component} from 'react';
import {Image, Nav, Navbar} from 'react-bootstrap';
import {HiCog, HiHome, HiUser} from "react-icons/hi";
import {NavLink} from "react-router-dom";
import './menu.scss';
import PlaylistService from "../../../services/playlist.service";

class Menu extends Component {

    constructor(props) {
        super(props);
        const playlists = PlaylistService.getPlaylist();
        this.state = ({
            publicPlaylists: playlists.filter(playlist => playlist.public === true),
            privatePlaylists: playlists.filter(playlist => playlist.public === false),
        });
    }

    render() {
        return (
            <Navbar className="navbar-left col-md-12 sidebar" variant="dark">
                <Navbar.Brand>
                    <Image src="images/logo.png" className="navbar-logo" alt={"Logo"}/>
                </Navbar.Brand>
                <Nav className="mr-auto test">
                    <NavLink exact to={'/'} className="nav-link"><HiHome/> Accueil</NavLink>
                    <NavLink to={'/profile'} className="nav-link"><HiUser/> Profil</NavLink>
                    <NavLink to={'/admin/musics'} className="nav-link"><HiCog/> Administration</NavLink>
                    <hr/>
                    <div className={"playlists-container"}>
                        <Nav.Item href="#10">Playlists publiques</Nav.Item>
                        {
                            this.state.publicPlaylists.map(function (playlist, i) {
                                return <NavLink key={i} to={`/playlist/${playlist.name}`}
                                                className="nav-link">{playlist.name}</NavLink>
                            })
                        }
                        <hr/>
                        <Nav.Item href="#9">Playlists privées</Nav.Item>
                        {
                            this.state.privatePlaylists.map(function (playlist, i) {
                                return <NavLink key={i} to={`/playlist/${playlist.name}`}
                                                className="nav-link">{playlist.name}</NavLink>
                            })
                        }
                    </div>
                </Nav>
            </Navbar>
        );
    }
}

export default Menu;