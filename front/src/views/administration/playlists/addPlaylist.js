import React, { Component } from 'react';
import MusicService from "../../../services/music.service";
import { Col, Row } from "react-bootstrap";
import PlaylistService from "../../../services/playlist.service";

export default class AddPlaylist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            isPublic: null,
            image_path: null
        }
    }

    async componentDidMount() {
        // try {
        //     let response = await MusicService.getMusics();
        //     this.setState({
        //         musicsList: response.data.musics,
        //     });
        // } catch (e) {
        //     console.error(e);
        // }
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
        console.log(this.state[e.target.id]);
    }

    handleChangeCheckbox(e) {
        this.setState({
            isPublic: e.target.checked
        });
    }

    handleChangeImage(e) {
        this.setState({
            image_path: e.target.files[0]
        });
    }

    async submit(e) {
        e.preventDefault();

        let { name, image_path, isPublic } = this.state;

        let body = new FormData();
        body.append('name', name);
        body.append('image_path', image_path);
        body.append('public', isPublic);

        try {
            await PlaylistService.create(body);
            this.props.history.push('/admin/playlists');
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return <div className="form-content">
            <h2>Formulaire d'ajout de playlist</h2>
            <hr className="hr-form" />
            <form onSubmit={(e) => this.submit(e)}>
                <Row>
                    <Col xs={12}>
                        <div className="form-group">
                            <label>Nom</label>
                            <input type="text" id="name" required className="form-control"
                                onChange={(e) => this.handleChange(e)} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div className="form-group">
                            <label>Image path</label>
                            <input type="file" id="image_path" required className="form-control"
                                onChange={(e) => this.handleChangeImage(e)} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    {/* <Col>
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
                    </Col> */}
                    {/* <Col xs={6}> */}
                    <Col xs={12}>
                    <div className="form-check">
                        <input type="checkbox" id="isPublic" className="form-check-input"
                            onChange={(e) => this.handleChangeCheckbox(e)} />
                        <label className="form-check-label">Public</label>
                    </div>
                    </Col>
                </Row>

            <button type="submit" style={{marginTop: "25px"}} className="btn btn-primary">Ajouter</button>
            </form>

        </div >
    }
}
