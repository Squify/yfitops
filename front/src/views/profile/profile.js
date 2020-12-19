import './profile.scss'
import PlaylistCard from '../components/playlist-card/playlist-card';
import EditProfile from '../edit-profile/edit-profile';

import React, {Component} from 'react';
import {Image, Tabs, Tab} from 'react-bootstrap';

export default class Profile extends Component {
    render() {
        return (
            <div className="global-container">
                <div className="row">
                    <div className="col-2">
                        <Image src="images/profile_pic_default.png" className="profile-pic" alt={"User pic"}/>
                    </div>
                    <div className="col-8 playlist-test">
                        <h6>Utilisateur</h6>
                        <h3 className="user-name">Nom Prénom</h3>
                    </div>
                </div>

                <hr className="hr"/>

                <div className="row tab-content">
                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                        <Tab eventKey="home" title="Informations">
                            <div className="informations">
                                <EditProfile/>
                            </div>
                        </Tab>
                        <Tab eventKey="profile" title="Playlists">
                            <div className="row">
                                <PlaylistCard className="col-4"/>
                                <PlaylistCard className="col-4"/>
                                <PlaylistCard className="col-4"/>
                                <PlaylistCard className="col-4"/>
                                <PlaylistCard className="col-4"/>
                                <PlaylistCard className="col-4"/>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        );
    }
}