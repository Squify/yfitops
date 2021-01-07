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
import Login from "./views/login/login";
import { connect } from 'react-redux';

class App extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         connected: !!localStorage.getItem('token')
    //     }
    // }

    componentDidMount() {
        console.log(this.props.user);
    }

    render() {
        return <BrowserRouter>
            <div className="container-fluid">
                { !this.props.user ? 
                    <Row>
                        <Col xs={2}/>
                        <Col xs={8}>
                            <Route exact path="/login" component={Login}/>
                        </Col>
                        <Col xs={2}/>
                    </Row>
                    :
                    <Row>
                        <Col xs={2} id="sidebar-wrapper">
                            <Menu/>
                        </Col>
                        <Col xs={10} id="page-content-wrapper">
                            <Route exact path="/" component={Homepage}/>

                            <Route exact path="/admin/:page" component={Administration}/>
                            <Route exact path="/admin/musics/add" component={AddMusic}/>
                            <Route exact path="/admin/musics/update/:_id" component={UpdateMusic}/>
                            <Route exact path="/admin/playlists/add" component={AddPlaylist}/>
                            <Route exact path="/admin/playlists/update/:_id" component={UpdatePlaylist}/>
                            <Route exact path="/admin/categories/add" component={AddCategory}/>
                            <Route exact path="/admin/categories/update/:_id" component={UpdateCategory}/>

                            <Route exact path="/profile" component={Profile}/>
                            <Route exact path="/playlist/:name" component={Playlist}/>
                        </Col>
                    </Row>
                }
                </div>
        </BrowserRouter>
    }
}
const mapStateToProps = state => {
    return { user: state.user };
}

export default connect(mapStateToProps, null)(App)