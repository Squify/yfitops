import './playlist.css';

import React, {Component} from 'react';
import {Button, Image, Table} from 'react-bootstrap';
import {HiHeart} from 'react-icons/hi';
import PlaylistService from '../../services/playlist.service';

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
            }
        });
    }

    async componentDidMount() {
        this.displayPlaylist();
    }

    componentDidUpdate(prevProps) {
        if(this.props.match.params.name !== prevProps.match.params.name)
        {
            this.displayPlaylist();
        }
    }

    displayPlaylist() {
        let playlists = PlaylistService.getPlaylist();
        this.state = ({uri : this.props.match.params.name})
        let playlist = playlists.find(item => item.name === this.state.uri);
        if (playlist) {
            this.setState({
                playlist: {
                    id: playlist.id,
                    name: playlist.name,
                    userId: playlist.userId,
                    public: playlist.public,
                    musicsId: playlist.musicsId,
                }
            });
        } else
            this.props.history.push('/');
    }

    render() {
        return (
            <div className="global-container">
                <div className="row">
                    <div className="col-4">
                        <Image src="images/playlist-default.png" className="playlist-default"/>
                    </div>
                    <div className="col-6 playlist-test">
                        <h5>Concocté par l'utilisateur #{this.state.playlist.userId}</h5>
                        <h3>{this.state.playlist.name}</h3>
                        <small>Playlist {this.state.playlist.public ? 'publique' : 'privée'}, {this.state.playlist.musicsId.length} titres
                            ━ 4H30</small>

                        <div className="header-buttons">
                            <Button className={"header-button"}>Lire</Button>
                            <Button className={"header-button"}>Enregistrer</Button>
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