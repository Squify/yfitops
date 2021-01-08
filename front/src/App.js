import './App.css';
import Homepage from "./views/homepage/homepage";
import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Menu from "./views/components/menu/menu";
import {Col, Row} from "react-bootstrap";
import Playlist from "./views/playlist/playlist";
import Profile from "./views/profile/profile";
import Administration from "./views/administration/administration";
import AddMusic from "./views/administration/musics/addMusic";
import UpdateMusic from "./views/administration/musics/updateMusic";
import UpdatePlaylist from "./views/administration/playlists/updatePlaylist";
import AddPlaylist from "./views/administration/playlists/addPlaylist";
import AddCategory from "./views/administration/categories/addCategory";
import UpdateCategory from "./views/administration/categories/updateCategory";
import UpdateUser from "./views/administration/users/updateUser";
import Login from "./views/login/login";
import Register from "./views/register/register";
import { connect } from 'react-redux';

class App extends Component {

    componentDidMount() {
        // console.log(this.props.user);
    }

    render() {
        return (<BrowserRouter>
            <div className="container-fluid">
                <Row>
                    <Col xs={2} id="sidebar-wrapper">
                        <Menu/>
                    </Col>
                    
                    { !this.props.user ? 
                        <Col>
                            <Route exact path="/login" component={Login}/> 
                            <Route exact path="/register" component={Register}/>
                        </Col>
                        : 
                        <Col>
                            <Route exact path="/" component={Homepage}/>
                            <Route exact path="/admin/:page" component={Administration}/>
                            <Route exact path="/admin/musics/add" component={AddMusic}/>
                            <Route exact path="/admin/musics/update/:_id" component={UpdateMusic}/>
                            <Route exact path="/admin/playlists/add" component={AddPlaylist}/>
                            <Route exact path="/admin/playlists/update/:_id" component={UpdatePlaylist}/>
                            <Route exact path="/admin/categories/add" component={AddCategory}/>
                            <Route exact path="/admin/categories/update/:_id" component={UpdateCategory}/>
                            <Route exact path="/admin/users/update/:_id" component={UpdateUser}/>
                            <Route exact path="/profile" component={Profile}/>
                            <Route exact path="/playlist/:_id" component={Playlist}/>
                        </Col>
                    }                    
                    
                </Row>
                </div>
        </BrowserRouter>)
    }
}
const mapStateToProps = state => {
    return { user: state.user };
}

export default connect(mapStateToProps, null)(App)