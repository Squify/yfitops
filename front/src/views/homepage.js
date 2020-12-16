import React, {Component} from 'react';
import PlaylistCard from "./components/playlist-card";
import '../style/homepage.css'


export default class Homepage extends Component {

    render() {
        return (
            <div className="global-container">
                <h4>Récemment écoutées</h4>
                <hr className="hr"/>
                <div className="row homepage-playlist-container">
                    <PlaylistCard className="col-4"/>
                    <PlaylistCard className="col-4"/>
                    <PlaylistCard className="col-4"/>
                    <PlaylistCard className="col-4"/>
                    <PlaylistCard className="col-4"/>
                    <PlaylistCard className="col-4"/>
                </div>

                <h4>Playlists populaires</h4>
                <hr className="hr"/>
                <div className="row">
                    <PlaylistCard className="col-4"/>
                    <PlaylistCard className="col-4"/>
                    <PlaylistCard className="col-4"/>
                    <PlaylistCard className="col-4"/>
                </div>
            </div>
        );
    }
}