import React, { Component } from 'react';
import MusicService from "../../../services/music.service";
import { Col, Row } from "react-bootstrap";
import PlaylistService from "../../../services/playlist.service";
// import ReactMultiselectCheckboxes from 'react-multiselect-checkboxes/lib/ReactMultiselectCheckboxes';
import { Multiselect } from "multiselect-react-dropdown";

export default class UpdatePlaylist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            isPublic: false,
            playlistMusics: [],
            image_path: null,

            musics: [],
        }
    }

    async componentDidMount() {
        try {
            let response = await MusicService.getMusics();
            let responsePlaylist = await PlaylistService.getPlaylist(this.props.match.params._id);
            let { name, isPublic, musics, image_path } = responsePlaylist.data.playlist;

            let musicsForSelect = [];

            response.data.musics.map((music, index) => {
                musicsForSelect.push({
                    label: music.name,
                    value: music._id
                });
            });

            this.setState({
                name,
                isPublic,
                playlistMusics: musics,
                image_path,

                // musics: musicsForSelect
                musics: response.data.musics
            });
        } catch (e) {
            console.error(e);
        }
    }

    handleChange(e) {
        if ([e.target.id].toString() === "isPublic") {
            this.setState({
                [e.target.id]: e.target.checked
            });
        } else {
            this.setState({
                [e.target.id]: e.target.value
            });
        }
    }

    handleChangeMusic(e) {
        let newPlaylist = this.state.playlistMusics;

        console.log("--------------------------");
        if (e.target.checked) {
            console.log("passage à true");

            console.log(newPlaylist);
            newPlaylist.push({
                _id: e.target.value
            });
            this.setState({
                playlistMusics: newPlaylist
            });
            console.log(newPlaylist);
        } else {
            console.log("passage à false");
            console.log(newPlaylist);
            newPlaylist = newPlaylist.filter(function (music) {
                return music._id !== e.target.value
            });
            console.log(newPlaylist);
            this.setState({
                playlistMusics: newPlaylist
            });
        }
    }

    async submit(e) {
        e.preventDefault();

        let { name, playlistMusics, isPublic, image_path } = this.state;

        let id = this.props.match.params._id;

        let playlist = [];

        playlistMusics.map((music, i) => {
            playlist.push(music._id);
        });

        console.log(playlist);

        let body = new FormData();
        body.append('name', name);
        body.append('musics', playlist);
        body.append('image_path', image_path);
        body.append('public', Boolean(isPublic));

        try {
            await PlaylistService.update(body, id);
            this.props.history.push('/admin/playlists');
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        let { musics, playlistMusics } = this.state;
        let forSelect = [];
        playlistMusics.map((music, i) => {
            forSelect.push(music._id);
        });
        // console.log(forSelect);
        return <div className="form-content">
            <h2>Formulaire d'édition de playlist</h2>
            <hr className="hr-form" />
            <form onSubmit={(e) => this.submit(e)}>
                <div className="form-group">
                    <label>Nom</label>
                    <input type="text" id="name" required className="form-control"
                        value={this.state.name ? this.state.name : undefined}
                        onChange={(e) => this.handleChange(e)} />
                </div>
                <Row>
                    <Col xs={9}>
                        <div style={{ maxHeight: "150px", overflowY: "scroll" }}>
                            <label>Musiques</label>
                            {/* <select id="playlistMusics" required className="form-control" multiple={true}
                                onChange={(e) => this.handleChangeSelect(e)}> */}
                            {



                                // <ReactMultiselectCheckboxes
                                //     // className="form-control"
                                //     options={musics}
                                // />

                                // <Multiselect 
                                //     options={musics}

                                //     selectedValues={playlistMusics}
                                //     style={{color:"black"}}
                                //     showCheckbox="false"
                                //     displayValue="name"
                                // />

                                musics.map((music, i) => {

                                    if (forSelect.includes(music._id)) {
                                        // console.log(`${music.name} est dedans`);
                                        return <div className="form-group">
                                            <input type="checkbox" value={music._id} name="playlistMusics[]" checked onChange={(e) => this.handleChangeMusic(e)} />
                                            <label>{music.name}</label>
                                        </div>
                                    } else {
                                        // console.log(`${music.name} n'est pas dedans`);
                                        return <div className="form-group">
                                            <input type="checkbox" value={music._id} name="playlistMusics[]" onChange={(e) => this.handleChangeMusic(e)} />
                                            <label>{music.name}</label>
                                        </div>
                                    }

                                })


                                // musics.map((music, index) => {
                                //     // if (playlistMusics.includes(music)) {
                                //         <div className="form-group">
                                //             <label>Public</label>
                                //             <input type="checkbox" id="public" className="form-control" checked={this.state.public}
                                //                 onChange={(e) => this.handleChange(e)} />
                                //         </div>
                                //         // return <option key={index} value={music._id}>{music.name}</option>
                                //         return < key={ index } value = { music._id } > { music.name }</option>
                                //         // } else {

                                //     // }
                                // })
                            }
                            {/* </select> */}
                        </div>
                    </Col>
                </Row>
                {/* <Col xs={3}> */}
                <div className="form-group">
                    <label>Public</label>
                    <input type="checkbox" id="isPublic" className="form-control" checked={this.state.isPublic}
                        onChange={(e) => this.handleChange(e)} />
                </div>
                {/* </Col> */}
                <div className="form-group">
                    <label>Image path</label>
                    <input type="text" id="image_path" required className="form-control"
                        value={this.state.image_path ? this.state.image_path : undefined}
                        onChange={(e) => this.handleChange(e)} />
                </div>

                <button type="submit" className="btn btn-primary">Enregistrer</button>
            </form>

        </div >
    }
}
