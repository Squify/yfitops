import React, {Component} from 'react';
import {Image} from "react-bootstrap";
import '../style/playlist.css'

export default class Playlist extends Component {
    render() {
        return (
            <div className="global-container">
                <div className="row">
                    <div className="col-4">
                        <Image src="images/playlist-default.png" className="playlist-default"/>
                    </div>
                    <div className="col-6 playlist-test">
                        <h5>Concocté par Machin machin</h5>
                        <h3>Nom de la Playlist</h3>
                        <small>Playlist privée</small>
                    </div>
                </div>

                <div className="row">
                    <div className="playlist-container">
                        Liste des musiques
                    </div>
                </div>
            </div>
        );
    }
}