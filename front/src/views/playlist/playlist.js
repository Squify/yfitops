import './playlist.scss';
import PlaylistService from '../../services/playlist.service';

import React, { Component } from 'react';
import { Button, Image, Table } from 'react-bootstrap';
import { HiHeart } from 'react-icons/hi';
import MusicService from "../../services/music.service";

export default class Playlist extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            image_path: null,
            name: null,
            musics: [],
            isPublic: null,
            userId: null
        });
    }

    async componentDidMount() {
        window.scrollTo(0, 0);

        // let responseMusics = await 
        let response = await PlaylistService.getPlaylist(this.props.match.params._id);
        let playlist = response.data.playlist;
        console.log(playlist);
        let { name, musics, image_path, isPublic, userId } = playlist;
        if (playlist) {
            this.setState({
                name,
                isPublic,
                image_path,
                musics,
                userId
            });
        } else
            this.props.history.push('/');

    }

    componentDidUpdate(prevProps) {
        window.scrollTo(0, 0);
        if (this.props.match.params.name !== prevProps.match.params.name) {
            this.getPlaylist();
        }
    }

    render() {
        let { name, isPublic, musics, image_path, userId } = this.state;
        console.log(userId);
        return (
            <div className="global-container">
                <div className="row">
                    <div className="col-3">
                        {
                            image_path ?
                                <Image src={`${process.env.REACT_APP_HOST_API}/${image_path}`}
                                    className="playlist-default playlist-cover"
                                    alt="Playlist image" />
                                :
                                <Image src='images/playlist-default.png' className="playlist-default playlist-cover"
                                    alt="Playlist image" />
                        }
                    </div>
                    <div className="col-7 playlist-test">
                        {/* <h5>Concocté par {userId.firstname} {userId.lastname}</h5> */}
                        <h3>{name}</h3>
                        <small>Playlist {isPublic ? 'publique' : 'privée'}, {musics.length} titres
                            {/* ━ 4H30 */}
                        </small>

                        {/* <div className="header-buttons">
                            {musics.length > 0 && <Button>Lire</Button>}
                            <Button>Enregistrer</Button>
                        </div> */}
                    </div>
                </div>

                <div className="row">
                    <div className="playlist-container">
                        <Table className="music-table" hover>
                            <thead>
                                <tr>
                                    <th className="table-header" />
                                    <th className="table-header">Titre</th>
                                    <th className="table-header">Artiste</th>
                                    <th className="table-header">Durée</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    musics.length > 0 ?
                                        musics.map((music, i) => {
                                            return <tr key={i} className="music-tr">
                                                <td><HiHeart /></td>
                                                <td>{music.name}</td>
                                                <td>{music.artist}</td>
                                                <td>{music.duration}min</td>
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
            </div>
        );
    }
}