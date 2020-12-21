import React, {Component} from 'react';
import MusicService from "../../../services/music.service";
import {Col, Row} from "react-bootstrap";
import PlaylistService from "../../../services/playlist.service";

export default class AddPlaylist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            public: null,
            musicsId: [],
            image_path: null,

            musics: [],
        }
    }

    async componentDidMount() {
        try {
            let response = await MusicService.getMusics();
            this.setState({
                musics: response,
            });
        } catch (e) {
            console.error(e);
        }
    }

    handleChange(e) {
        console.log(e.target.id, e.target.value)
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleChangeSelect(e) {
        let value = Array.from(e.target.selectedOptions, option => option.value);
        this.setState({[e.target.id]: value});
    }

    async submit(e) {
        e.preventDefault();
        let playlist = {
            name: this.state.name,
            musicsId: this.state.musicsId,
            image_path: this.state.image_path,
        };
        playlist.public = this.state.public;

        let formData = new FormData();
        formData.append('name', playlist.name);
        formData.append('musicsId', playlist.musicsId);
        formData.append('image_path', playlist.image_path);
        formData.append('public', playlist.public);

        try {
            await PlaylistService.create(formData, playlist);
            this.props.history.push('/admin/playlists');
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        let {musics} = this.state;
        return <div className="form-content">
            <h2>Formulaire d'ajout de playlist</h2>
            <hr className="hr-form"/>
            <form onSubmit={(e) => this.submit(e)}>
                <div className="form-group">
                    <label>Nom</label>
                    <input type="text" id="name" required className="form-control"
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
                            <input type="checkbox" id="public" className="form-control"
                                   onChange={(e) => this.handleChange(e)}/>
                        </div>
                    </Col>
                </Row>
                <div className="form-group">
                    <label>Sound path</label>
                    <input type="text" id="image_path" required className="form-control"
                           onChange={(e) => this.handleChange(e)}/>
                </div>

                <button type="submit" className="btn btn-primary">Ajouter</button>
            </form>

        </div>
    }
}
