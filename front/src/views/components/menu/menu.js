import React, {Component} from 'react';
import {Image, Nav, Navbar} from 'react-bootstrap';
import {HiCog, HiHome, HiUser, HiLogout} from "react-icons/hi";
import {FiLogIn} from "react-icons/fi"
import {NavLink, Link, withRouter} from "react-router-dom";
import './menu.scss';
import PlaylistService from "../../../services/playlist.service";
import {connect} from 'react-redux';
import {updateUser} from '../../../actions/users.actions'


class Menu extends Component {

    constructor(props) {
        super(props);
        
        this.state = ({
            publicPlaylists: [],
            privatePlaylists: []
        });
    }

    async componentDidMount(){

        let responsePrivate = await PlaylistService.getPrivatePlaylists();
        let responsePublic = await PlaylistService.getPublicPlaylists();

        this.setState({
            publicPlaylists: responsePublic.data.playlists,
            privatePlaylists: responsePrivate.data.playlists,
        })
    }

    logout(){
        const { history } = this.props;
        localStorage.removeItem('token');
        this.props.updateUser(null);
        history.push('/login');
    }

    render() {
        return (
            <Navbar className="navbar-left col-md-12 sidebar" variant="dark">
                <Navbar.Brand>
                    <Image src="images/logo.png" className="navbar-logo" alt={"Logo"}/>
                </Navbar.Brand>
                {
                    this.props.user !== null ? (
                        <Nav className="mr-auto test">
                            <NavLink exact to={'/'} className="nav-link"><HiHome/> Accueil</NavLink>
                            <NavLink exact to={'/profile'} className="nav-link"><HiUser/> Profil</NavLink>
                            <NavLink to={'/logout'} className="nav-link" onClick={() => this.logout()}><HiLogout/> Logout</NavLink>
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
                    ) : (
                        <Nav className="mr-auto test">
                            <NavLink exact to={'/login'} className="nav-link"><FiLogIn/> Login</NavLink>
                        </Nav>
                    )
                }  
            </Navbar>
        );
    }
}

const mapStateToProps = state => {
    return {user: state.user};
}

const mapDispatchToProps = dispatch => {
    return {
        updateUser: user => dispatch(updateUser(user))
    }
}

const MenuWithRouter = withRouter(Menu);

export default connect(mapStateToProps, mapDispatchToProps)(MenuWithRouter);