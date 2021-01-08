import React, { Component } from 'react';
import { Button, Col, Image, Row, Table } from "react-bootstrap";
import PlaylistService from "../../../services/playlist.service";
import { HiPencil, HiPlusCircle, HiTrash } from "react-icons/hi/index";
import { Link } from "react-router-dom";

class Playlists extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            playlists: false
        });
    }

    async componentDidMount() {
        try {
            let response = await PlaylistService.getPlaylists();

            this.setState({
                playlists: response.data.playlists
            });

        } catch (e) {
            console.error(e);
        }
    }

    async deletePlaylist(id) {
        try {
            await PlaylistService.delete(id);

            let response = await PlaylistService.getPlaylists();
            this.setState({
                playlists: response.data.playlists
            });
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        let { playlists } = this.state;
        return (
            <div>
                <Row>
                    <Col xs={10}>
                        <h1>Playlists</h1>
                    </Col>
                    <Col>
                        <Link to={`/admin/playlists/add`}>
                            <Button variant="dark"><HiPlusCircle /></Button>
                        </Link>
                    </Col>
                </Row>
                <div className="playlist-container">
                    <Table className="music-table" hover>
                        <thead>
                            <tr>
                                <th className="table-header">Id</th>
                                <th className="table-header">Titre</th>
                                <th className="table-header">Créateur</th>
                                <th className="table-header">Public</th>
                                <th className="table-header">musiques</th>
                                {/* <th className="table-header">Image</th> */}
                                {/* <th className="table-header">Nombre d'écoute</th> */}
                                <th className="table-header">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                playlists ?
                                    // <p>test</p>
                                    playlists.map((playlist, i) => {
                                        return <tr className="music-tr" key={i}>
                                            <td>{playlist._id}</td>
                                            <td>{playlist.name}</td>
                                            <td>{playlist.userId ? `${playlist.userId.firstname} ${playlist.userId.lastname}` : '━'}</td>
                                            <td style={{ textAlign: "center" }}>{playlist.public ?
                                                <Image src={`images/public.png`} style={{ width: 25, height: 25 }}
                                                    alt="Playlist image" />
                                                :
                                                <Image src={`images/private.png`} style={{ width: 25, height: 25 }}
                                                    alt="Playlist image" />
                                            }</td>
                                            {/* <td>{(playlist.musicsId.length > 0) ? playlist.musicsId : '━'}</td> */}
                                            <td>
                                                {/* <ul> */}
                                                {
                                                    (playlist.musics.length > 0) ?
                                                        playlist.musics.map((music, i) => {
                                                            // <p>{i}</p>
                                                            <li key={i}>{music.name}</li>
                                                            // <li key={i}>salut</li>
                                                        })
                                                        : '━'
                                                }
                                                {/* </ul> */}
                                            </td>

                                            {/* <td>{playlist.image_path ? playlist.image_path : '━'}</td> */}
                                            <td>
                                                <Link to={`/admin/playlists/update/${playlist._id}`}>
                                                    <Button style={{ marginRight: 10 }}
                                                        variant="dark"><HiPencil /></Button>
                                                </Link>
                                                <Button variant="dark" onClick={() => this.deletePlaylist(playlist._id)}>
                                                    <HiTrash />
                                                </Button>
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