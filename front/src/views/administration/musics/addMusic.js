import React, {Component} from 'react';
import MusicService from "../../../services/music.service";
import CategoryService from "../../../services/category.service";
import {Col, Row} from "react-bootstrap";
import './admin-music.scss'

export default class AddMusic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            category: null,
            sound_path: null,
            artiste: null,
            album: null,
            time: null,

            categories: [],
        }
    }

    async componentDidMount() {
        try {
            let response = await CategoryService.getCategories();
            this.setState({
                categories: response,
                category: response[0]._id
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

    async submit(e) {
        e.preventDefault();
        let {name, category, sound_path, artiste, album, time} = this.state;
        let music = {name, category, sound_path, artiste, album, time};

        let formData = new FormData();
        formData.append('name', name);
        formData.append('category', category);
        formData.append('sound_path', sound_path);
        formData.append('artiste', artiste);
        formData.append('album', album);
        formData.append('time', time);

        try {
            await MusicService.create(formData, music);
            this.props.history.push('/admin/musics');
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        let {categories} = this.state;
        return <div className="form-content">
            <h2>Formulaire d'ajout de musique</h2>
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
                            <input type="number" step="0.01" id="time"
                                   required className="form-control"
                                   onChange={(e) => this.handleChange(e)}/>
                        </div>
                    </Col>
                </Row>
                <div className="form-group">
                    <label>Sound path</label>
                    <input type="text" id="sound_path" required className="form-control"
                           onChange={(e) => this.handleChange(e)}/>
                </div>
                <Row>
                    <Col>
                        <div className="form-group">
                            <label>Artiste</label>
                            <input type="text" id="artiste" required className="form-control"
                                   onChange={(e) => this.handleChange(e)}/>
                        </div>
                    </Col>
                    <Col>
                        <div className="form-group">
                            <label>Album</label>
                            <input type="text" id="album" required className="form-control"
                                   onChange={(e) => this.handleChange(e)}/>
                        </div>
                    </Col>
                </Row>

                <button type="submit" className="btn btn-primary">Ajouter</button>
            </form>

        </div>
    }
}
