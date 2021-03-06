import React, {Component} from 'react';
import PlaylistCard from "../components/playlist-card/playlist-card";
import './homepage.css'
import PlaylistService from "../../services/playlist.service";
import {Link} from "react-router-dom";

export default class Homepage extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            recentPlaylists: [],
            popularPlaylists: []
        });
    }

    async componentDidMount(){
        let response = await PlaylistService.getPlaylists();
        
        this.setState({
            recentPlaylists: response.data.playlists.slice(0, 8),
            popularPlaylists: response.data.playlists.sort((a, b) => b.listening - a.listening).slice(0, 5)
        })
    }


    render() {
        return (
            <div className="global-container">
                <h4>Récemment écoutées</h4>
                <hr className="hr"/>
                <div className="row homepage-playlist-container">
                    {
                        this.state.recentPlaylists ?
                            this.state.recentPlaylists.map(function (playlist, i) {
                                return <Link className={"playlist-card"} to={`/playlist/${playlist._id}`}
                                             key={`recent-playlist-${playlist.id}`}>
                                    <PlaylistCard name={playlist.name} listening={playlist.listening}
                                                  image={playlist.image_path} className="col-4"
                                    />
                                </Link>
                            })
                            :
                            null
                    }
                </div>

                <h4>Playlists populaires</h4>
                <hr className="hr"/>
                <div className="row">
                    {
                        this.state.popularPlaylists ?
                            this.state.popularPlaylists.map(function (playlist, i) {
                                return <Link className={"playlist-card"} to={`/playlist/${playlist._id}`}
                                             key={`popular-playlist-${playlist._id}`}>
                                    <PlaylistCard name={playlist.name} listening={playlist.listening}
                                                  image={playlist.image_path} className="col-4"
                                    />
                                </Link>
                            })
                            :
                            null
                    }
                </div>
            </div>
        );
    }
}