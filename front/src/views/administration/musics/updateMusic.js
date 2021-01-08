import React, { Component } from 'react';
import MusicService from "../../../services/music.service";
import CategoryService from "../../../services/category.service";
import { Col, Row } from "react-bootstrap";
import './admin-music.scss'

export default class UpdateMusic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            category: null,
            sound_path: null,
            prevSound: null,
            image_path: null,
            prevImage: null,
            // forSound: null,
            // forImage: null,
            artist: null,
            duration: null,

            categories: [],
        }
    }

    async componentDidMount() {
        try {
            let responseCategories = await CategoryService.getCategories();
            let categories = responseCategories.data.categories;
            let responseMusic = await MusicService.getMusic(this.props.match.params._id);
            let music = responseMusic.data.music;
            // console.log(categories);
            if (music)
                this.setState({
                    categories,
                    name: music.name,
                    category: music.category,
                    sound_path: music.sound_path,
                    image_path: music.image_path,
                    // forSound: music.sound_path,
                    // forImage: music.image_path,
                    artist: music.artist,
                    duration: music.duration,
                });
            else this.props.history.push('/admin/musics')
        } catch (e) {
            console.error(e);
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleChangeImage(e) {
        this.setState({
            image_path: e.target.files[0]
        });
    }

    handleChangeSound(e) {
        this.setState({
            sound_path: e.target.files[0]
        });
    }

    async submit(e) {
        e.preventDefault();
        let { name, category, sound_path, image_path, artist, duration } = this.state;
        let id = this.props.match.params._id;

        let body = new FormData();
        body.append('name', name);
        // console.log(category);
        body.append('category', category._id);
        if(image_path !== null) {
            body.append('image_path', image_path);
        }
        if(sound_path !== null) {
            body.append('sound_path', sound_path);
        }
        body.append('artist', artist);
        body.append('duration', duration);

        // console.log(body);

        try {
            await MusicService.update(body, id);
            this.props.history.push('/admin/musics');
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        let { categories } = this.state;
        return <div className="form-content">
            <h2>Formulaire d'édition de musique</h2>
            <hr className="hr-form" />
            <form onSubmit={(e) => this.submit(e)}>
                <div className="form-group">
                    <label>Nom</label>
                    <input type="text" id="name" required className="form-control"
                        value={this.state.name ? this.state.name : undefined}
                        onChange={(e) => this.handleChange(e)} />
                </div>
                <Row>
                    <Col>
                        <div className="form-group">
                            <label>Catégorie</label>
                            <select id="category" required className="form-control"
                                onChange={(e) => this.handleChange(e)}>
                                {
                                    categories.map((category, index) => {
                                        if (this.state.category._id === category._id) {
                                            return <option key={index} value={category._id} selected>{category.name}</option>
                                        } else {
                                            return <option key={index} value={category._id}>{category.name}</option>
                                        }

                                    })
                                }
                            </select>
                        </div>
                    </Col>
                    <Col xs={3}>
                        <div className="form-group">
                            <label>Durée</label>
                            <input type="number" step="0.01" id="duration" required className="form-control"
                                value={this.state.duration ? this.state.duration : undefined}
                                onChange={(e) => this.handleChange(e)} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <div className="form-group">
                            <label>Image path</label>
                            <input type="file" id="image_path" className="form-control"
                                onChange={(e) => this.handleChange(e)} />
                        </div>
                        <div>
                            <p style={{ fontSize: "12px" }}>
                                {/* {this.state.forImage ? `Le chemin actuel est ${process.env.REACT_APP_HOST_API}/${this.state.forImage}` : "Il n'y a pas encore d'image"} */}
                                {this.state.image_path ? `Le chemin actuel est ${process.env.REACT_APP_HOST_API}/${this.state.image_path}` : "Il n'y a pas encore d'image"}

                            </p>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div className="form-group">
                            <label>Sound path</label>
                            <input type="file" id="sound_path" className="form-control"
                                onChange={(e) => this.handleChange(e)} />
                        </div>
                        <div>
                            <p style={{ fontSize: "12px" }}>
                                {/* {this.state.forSound ? `Le chemin actuel est ${process.env.REACT_APP_HOST_API}/${this.state.forSound}` : "Il n'y a pas encore de son"} */}
                                {this.state.sound_path ? `Le chemin actuel est ${process.env.REACT_APP_HOST_API}/${this.state.sound_path}` : "Il n'y a pas encore de son"}

                            </p>
                        </div>
                    </Col>
                </Row>
                <div className="form-group">
                    <label>Artiste</label>
                    <input type="text" id="artist" required className="form-control"
                        value={this.state.artist ? this.state.artist : undefined}
                        onChange={(e) => this.handleChange(e)} />
                </div>

                <button type="submit" className="btn btn-primary">Enregistrer</button>
            </form>

        </div>
    }
}
