import React, {Component} from 'react';
import {Button, Image, Table} from "react-bootstrap";
import PlaylistService from "../../../services/playlist.service";
import {HiPencil, HiTrash} from "react-icons/hi/index";

class Playlists extends Component {

    constructor(props) {
        super(props);
        this.state = ({playlists: PlaylistService.getPlaylist()});
    }

    render() {
        return (
            <div>
                <h1>Playlists</h1>
                <div className="playlist-container">
                    <Table className="music-table" hover>
                        <thead>
                        <tr>
                            <th className="table-header">Id</th>
                            <th className="table-header">Titre</th>
                            <th className="table-header">Utilisateur</th>
                            <th className="table-header">Public</th>
                            <th className="table-header">Id musiques</th>
                            <th className="table-header">Image</th>
                            <th className="table-header">Nombre d'écoute</th>
                            <th className="table-header">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.playlists.length > 0 ?
                                this.state.playlists.map(function (playlist, i) {
                                    return <tr className="music-tr">
                                        <td>{playlist._id}</td>
                                        <td>{playlist.name}</td>
                                        <td>{playlist.userId ? playlist.userId : '━'}</td>
                                        <td style={{ textAlign: "center" }}>{playlist.public ?
                                            <Image src={`images/public.png`} style={{ width: 25, height: 25}}
                                                   alt="Playlist image"/>
                                            :
                                            <Image src={`images/private.png`} style={{ width: 25, height: 25}}
                                                   alt="Playlist image"/>
                                        }</td>
                                        <td>{playlist.musicsId.length > 0 ? playlist.musicsId : '━'}</td>
                                        <td>{playlist.image_path ? playlist.image_path : '━'}</td>
                                        <td>{playlist.listening}</td>
                                        <td>
                                            <Button style={{ marginRight:10 }} variant="outline-light"><HiPencil/></Button>
                                            <Button variant="outline-light"><HiTrash/></Button>
                                        </td>
                                    </tr>
                                })
                                :
                                <tr className="music-tr">
                                    <td colSpan="5">Aucune playlist à afficher pour le moment</td>
                                </tr>
                        }
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default Playlists;