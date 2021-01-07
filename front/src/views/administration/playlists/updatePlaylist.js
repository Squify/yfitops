import React, {Component} from 'react';
import MusicService from "../../../services/music.service";
import {Col, Row} from "react-bootstrap";
import PlaylistService from "../../../services/playlist.service";

export default class UpdatePlaylist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            public: false,
            musicsId: [],
            image_path: null,

            musics: [],
        }
    }

    async componentDidMount() {
        try {
            let response = await MusicService.getMusics();
            let playlist = await PlaylistService.getPlaylist(this.props.match.params._id);
            if (playlist)
                this.setState({
                    name: playlist.name,
                    public: Boolean(playlist.public),
                    musicsId: playlist.musicsId,
                    image_path: playlist.image_path,

                    musics: response
                });
        } catch (e) {
            console.error(e);
        }
    }

    handleChange(e) {
        if ([e.target.id].toString() === "public") {
            this.setState({
                [e.target.id]: e.target.checked
            });
        } else {
            this.setState({
                [e.target.id]: e.target.value
            });
        }
    }

    handleChangeSelect(e) {
        let value = Array.from(e.target.selectedOptions, option => option.value);
        this.setState({[e.target.id]: value});
    }

    async submit(e) {
        e.preventDefault();
        let playlist = {
            _id: parseInt(this.props.match.params._id),
            name: this.state.name,
            musicsId: this.state.musicsId,
            image_path: this.state.image_path,
            public: this.state.public
        };

        let formData = new FormData();
        formData.append('name', playlist.name);
        formData.append('musicsId', playlist.musicsId);
        formData.append('image_path', playlist.image_path);
        formData.append('public', playlist.public);

        try {
            await PlaylistService.update(formData, playlist._id);
            this.props.history.push('/admin/playlists');
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        let {musics} = this.state;
        return <div className="form-content">
            <h2>Formulaire d'édition de playlist</h2>
            <hr className="hr-form"/>
            <form onSubmit={(e) => this.submit(e)}>
                <div className="form-group">
                    <label>Nom</label>
                    <input type="text" id="name" required className="form-control"
                           value={this.state.name ? this.state.name : undefined}
                           onChange={(e) => this.handleChange(e)}/>
                </div>
                <Row>
                    <Col>
                        <div className="form-group">
                            <label>Musiques</label>
                            <select id="musicsId" required className="form-control" multiple={true}
                                    onChange={(e) => this.handleChangeSelect(e)}>
                                {
                                    musics.map((music, index) => {
                                        return <option key={index} value={music._id}>{music.name}</option>
                                    })
                                }
                            </select>
                        </div>
                    </Col>
                    <Col xs={3}>
                        <div className="form-group">
                            <label>Public</label>
                            <input type="checkbox" id="public" className="form-control" checked={this.state.public}
                                   onChange={(e) => this.handleChange(e)}/>
                        </div>
                    </Col>
                </Row>
                <div className="form-group">
                    <label>Image path</label>
                    <input type="text" id="image_path" required className="form-control"
                           value={this.state.image_path ? this.state.image_path : undefined}
                           onChange={(e) => this.handleChange(e)}/>
                </div>

                <button type="submit" className="btn btn-primary">Enregistrer</button>
            </form>

        </div>
    }
}
