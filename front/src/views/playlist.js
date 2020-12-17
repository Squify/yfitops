import React, {Component} from 'react';
import {Image, Table} from "react-bootstrap";
import { HiHeart } from "react-icons/hi";
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
                        <Table className="music-table" hover>
                            <thead>
                            <tr>
                                <th className="table-header"/>
                                <th className="table-header">Titre</th>
                                <th className="table-header">Artiste</th>
                                <th className="table-header">Album</th>
                                <th className="table-header">Durée</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="music-tr">
                                <td><HiHeart/></td>
                                <td>Musique 1</td>
                                <td>Artiste</td>
                                <td>Album</td>
                                <td>1min15</td>
                            </tr>
                            <tr className="music-tr">
                                <td><HiHeart/></td>
                                <td>Musique 2</td>
                                <td>Artiste</td>
                                <td>Album</td>
                                <td>1min53</td>
                            </tr>
                            <tr className="music-tr">
                                <td><HiHeart/></td>
                                <td>Musique 3</td>
                                <td>Artiste</td>
                                <td>Album</td>
                                <td>2min42</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}