import './profile.scss'
import PlaylistCard from '../components/playlist-card/playlist-card';
import EditProfile from '../edit-profile/edit-profile';
import { connect } from 'react-redux';

import React, {Component} from 'react';
import {Image, Tab, Tabs} from 'react-bootstrap';

class Profile extends Component {

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
                                <EditProfile 
                                id={this.props.user._id}
                                email={this.props.user.email}
                                firstname={this.props.user.firstname}
                                lastname={this.props.user.lastname}/>
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

const mapStateToProps = state => {
    return { user: state.user };
}

export default connect(mapStateToProps, null)(Profile)