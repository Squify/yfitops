import React, {Component} from 'react';
import {Table, Button} from "react-bootstrap";
import MusicService from "../../../services/music.service";
import {HiPencil, HiTrash} from "react-icons/hi";
import {Link} from "react-router-dom";

class Musics extends Component {

    constructor(props) {
        super(props);
        this.state = ({musics: MusicService.getMusics()});
    }

    render() {
        return (
            <div>
                <h1>Musiques</h1>
                <Link to={`/admin/musics/add`}>
                    Ajouter
                </Link>
                <div className="playlist-container">
                    <Table className="music-table" hover>
                        <thead>
                        <tr>
                            <th className="table-header">Id</th>
                            <th className="table-header">Titre</th>
                            <th className="table-header">Artiste</th>
                            <th className="table-header">Album</th>
                            <th className="table-header">Durée</th>
                            <th className="table-header">Path</th>
                            <th className="table-header">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.musics.length > 0 ?
                                this.state.musics.map(function (music, i) {
                                    return <tr className="music-tr">
                                        <td>{music._id}</td>
                                        <td>{music.name}</td>
                                        <td>{music.artiste}</td>
                                        <td>{music.album}</td>
                                        <td>{music.time}</td>
                                        <td>{music.sound_path ? music.sound_path : '━'}</td>
                                        <td>
                                            <Button style={{ marginRight:10 }} variant="outline-light"><HiPencil/></Button>
                                            <Button variant="outline-light"><HiTrash/></Button>
                                        </td>
                                    </tr>
                                })
                                :
                                <tr className="music-tr">
                                    <td colSpan="5">Aucune musique à afficher pour le moment</td>
                                </tr>
                        }
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default Musics;