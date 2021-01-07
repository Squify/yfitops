import React, {Component} from 'react';
import {Button, Col, Row, Table} from "react-bootstrap";
import MusicService from "../../../services/music.service";
import {HiPencil, HiPlusCircle, HiTrash} from "react-icons/hi";
import {Link} from "react-router-dom";

class Musics extends Component {

    constructor(props) {
        super(props);
        this.state = ({musics: MusicService.getMusics()});
    }

    async deleteMusic(id) {
        try {
            await MusicService.delete(id);
            this.setState({playlists: MusicService.getMusics()});
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs={10}>
                        <h1>Musiques</h1>
                    </Col>
                    <Col>
                        <Link to={`/admin/musics/add`}>
                            <Button variant="dark"><HiPlusCircle/></Button>
                        </Link>
                    </Col>
                </Row>
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
                                    return <tr className="music-tr" key={i}>
                                        <td>{music._id}</td>
                                        <td>{music.name}</td>
                                        <td>{music.artiste}</td>
                                        <td>{music.album}</td>
                                        <td>{music.time}</td>
                                        <td>{music.sound_path ? music.sound_path : '━'}</td>
                                        <td>
                                            <Link to={`/admin/musics/update/${music._id}`}>
                                                <Button style={{marginRight: 10}}
                                                        variant="dark"><HiPencil/></Button>
                                            </Link>
                                            <Button variant="dark" onClick={() => this.deleteMusic(music._id)}>
                                                <HiTrash/>
                                            </Button>
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