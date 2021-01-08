import React, { Component } from 'react';
import MusicService from "../../../services/music.service";
import CategoryService from "../../../services/category.service";
import { Col, Row } from "react-bootstrap";
import './admin-music.scss'

export default class AddMusic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            category: null,
            sound_path: null,
            image_path: null,
            artist: null,
            duration: null,

            categories: [],
        }
    }

    async componentDidMount() {
        try {
            let response = await CategoryService.getCategories();
            this.setState({
                categories: response.data.categories,
                category: response.data.categories[0]
            });
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
        let { name, category, sound_path, artist, image_path, duration } = this.state;
        // console.log(category);
        let body = new FormData();
        body.append('name', name);
        body.append('category', category._id);
        body.append('sound_path', sound_path);
        body.append('image_path', image_path);
        body.append('artist', artist);
        body.append('duration', duration);

        try {
            await MusicService.create(body);
            this.props.history.push('/admin/musics');
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        let { categories } = this.state;
        return <div className="form-content">
            <h2>Formulaire d'ajout de musique</h2>
            <hr className="hr-form" />
            <form onSubmit={(e) => this.submit(e)}>
                <div className="form-group">
                    <label>Nom</label>
                    <input type="text" id="name" required className="form-control"
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
                                        return <option key={index} value={category._id}>{category.name}</option>
                                    })
                                }
                            </select>
                        </div>
                    </Col>
                    <Col xs={3}>
                        <div className="form-group">
                            <label>Durée</label>
                            <input type="number" step="0.01" id="duration"
                                required className="form-control"
                                onChange={(e) => this.handleChange(e)} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <div className="form-group">
                            <label>Image path</label>
                            <input type="file" id="image_path" required className="form-control"
                                onChange={(e) => this.handleChangeImage(e)} />
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div className="form-group">
                            <label>Sound path</label>
                            <input type="file" id="sound_path" required className="form-control"
                                onChange={(e) => this.handleChangeSound(e)} />
                        </div>
                    </Col>
                </Row>
                <div className="form-group">
                    <label>Artiste</label>
                    <input type="text" id="artist" required className="form-control"
                        onChange={(e) => this.handleChange(e)} />
                </div>

                <button type="submit" className="btn btn-primary">Ajouter</button>
            </form>

        </div>
    }
}
