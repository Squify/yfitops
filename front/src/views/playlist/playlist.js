import './playlist.scss';
import PlaylistService from '../../services/playlist.service';

import React, {Component} from 'react';
import {Button, Image, Table} from 'react-bootstrap';
import {HiHeart} from 'react-icons/hi';
import MusicService from "../../services/music.service";

export default class Playlist extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            playlist: {
                id: null,
                name: null,
                userId: null,
                public: null,
                musicsId: [],
                image_path: null,
            },
            musics: []
        });
    }

    async componentDidMount() {
        window.scrollTo(0, 0);
        this.getPlaylist();
    }

    componentDidUpdate(prevProps) {
        window.scrollTo(0, 0);
        if (this.props.match.params.name !== prevProps.match.params.name) {
            this.getPlaylist();
        }
    }

    getPlaylist() {
        let playlists = PlaylistService.getPlaylists();
        this.state = ({uri: this.props.match.params.name})
        let playlist = playlists.find(item => item.name === this.state.uri);
        if (playlist) {
            this.setState({
                playlist: {
                    id: playlist.id,
                    name: playlist.name,
                    userId: playlist.userId,
                    public: playlist.public,
                    musicsId: playlist.musicsId,
                    image_path: playlist.image_path,
                }
            });
            this.getMusics(playlist);
        } else
            this.props.history.push('/');
    }

    getMusics(playlist) {
        let musics = [];
        playlist.musicsId.forEach(id => {
            musics.push(MusicService.getMusics().find(music => music._id === id));
        });
        this.setState({musics: musics});
    }

    render() {
        return (
            <div className="global-container">
                <div className="row">
                    <div className="col-3">
                        {
                            this.state.playlist.image_path ?
                                <Image src={`images/${this.state.playlist.image_path}`} className="playlist-default playlist-cover"
                                       alt="Playlist image"/>
                                :
                                <Image src='images/playlist-default.png' className="playlist-default playlist-cover"
                                       alt="Playlist image"/>
                        }
                    </div>
                    <div className="col-7 playlist-test">
                        <h5>Concocté par l'utilisateur #{this.state.playlist.userId}</h5>
                        <h3>{this.state.playlist.name}</h3>
                        <small>Playlist {this.state.playlist.public ? 'publique' : 'privée'}, {this.state.playlist.musicsId.length} titres
                            ━ 4H30</small>

                        <div className="header-buttons">
                            { this.state.playlist.musicsId.length > 0 && <Button>Lire</Button> }
                            <Button>Enregistrer</Button>
                        </div>
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
                            {
                                this.state.musics.length > 0 ?
                                    this.state.musics.map(function (music, i) {
                                        return <tr className="music-tr">
                                            <td><HiHeart/></td>
                                            <td>{music.name}</td>
                                            <td>{music.artiste}</td>
                                            <td>{music.album}</td>
                                            <td>{music.time}min</td>
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