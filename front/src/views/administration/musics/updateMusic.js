import React, {Component} from 'react';
import MusicService from "../../../services/music.service";
import CategoryService from "../../../services/category.service";
import {Col, Row} from "react-bootstrap";
import './admin-music.scss'

export default class UpdateMusic extends Component {

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
            let categories = await CategoryService.getCategories();
            let music = await MusicService.getMusic(this.props.match.params._id);
            if (music)
                this.setState({
                    categories: categories,
                    name: music.name,
                    category: music.category,
                    sound_path: music.sound_path,
                    artiste: music.artiste,
                    album: music.album,
                    time: music.time
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

    async submit(e) {
        e.preventDefault();
        let {name, category, sound_path, artiste, album, time} = this.state;
        let music = {name, category, sound_path, artiste, album, time};
        music._id = parseInt(this.props.match.params._id);

        let formData = new FormData();
        formData.append('_id', parseInt(this.props.match.params._id));
        formData.append('name', name);
        formData.append('category', parseInt(category));
        formData.append('sound_path', sound_path);
        formData.append('artiste', artiste);
        formData.append('album', album);
        formData.append('time', time);

        try {
            await MusicService.update(formData, music);
            this.props.history.push('/admin/musics');
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        let {categories} = this.state;
        return <div className="form-content">
            <h2>Formulaire d'édition de musique</h2>
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
                            <input type="number" step="0.01" id="time" required className="form-control"
                                   value={this.state.time ? this.state.time : undefined}
                                   onChange={(e) => this.handleChange(e)}/>
                        </div>
                    </Col>
                </Row>
                <div className="form-group">
                    <label>Sound path</label>
                    <input type="text" id="sound_path" required className="form-control"
                           value={this.state.sound_path ? this.state.sound_path : undefined}
                           onChange={(e) => this.handleChange(e)}/>
                </div>
                <Row>
                    <Col>
                        <div className="form-group">
                            <label>Artiste</label>
                            <input type="text" id="artiste" required className="form-control"
                                   value={this.state.artiste ? this.state.artiste : undefined}
                                   onChange={(e) => this.handleChange(e)}/>
                        </div>
                    </Col>
                    <Col>
                        <div className="form-group">
                            <label>Album</label>
                            <input type="text" id="album" required className="form-control"
                                   value={this.state.album ? this.state.album : undefined}
                                   onChange={(e) => this.handleChange(e)}/>
                        </div>
                    </Col>
                </Row>

                <button type="submit" className="btn btn-primary">Enregistrer</button>
            </form>

        </div>
    }
}
