import './App.css';
import Homepage from "./views/homepage";
import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Menu from "./views/menu";
import {Col, Row} from "react-bootstrap";
import Playlist from "./views/playlist";
import Profile from "./views/profile/profile";

export default class App extends Component {

    render() {
        return <BrowserRouter>
            <div className="container-fluid">
                <Row>
                    <Col xs={2} id="sidebar-wrapper">
                        <Menu/>
                    </Col>
                    <Col xs={10} id="page-content-wrapper">
                        <Route exact path="/homepage" component={Homepage}/>
                        <Route exact path="/profile" component={Profile}/>
                        <Route exact path="/playlist1" component={Playlist}/>
                    </Col>
                </Row>
            </div>
        </BrowserRouter>
    }
}
