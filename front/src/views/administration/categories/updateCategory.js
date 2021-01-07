import React, {Component} from 'react';
import MusicService from "../../../services/music.service";
import CategoryService from "../../../services/category.service";
import './admin-category.scss'

export default class UpdateCategory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
        }
    }

    async componentDidMount() {
        try {
            let category = await CategoryService.getCategory(this.props.match.params._id);
            if (category)
                this.setState({
                    name: category.name,
                });
            else this.props.history.push('/admin/categories')
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
        let {name} = this.state;
        let category = {name};
        category._id = parseInt(this.props.match.params._id);

        let formData = new FormData();
        formData.append('_id', parseInt(this.props.match.params._id));
        formData.append('name', name);

        try {
            await MusicService.update(formData, category._id);
            this.props.history.push('/admin/categories');
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return <div className="form-content">
            <h2>Formulaire d'édition de catégorie</h2>
            <hr className="hr-form"/>
            <form onSubmit={(e) => this.submit(e)}>
                <div className="form-group">
                    <label>Nom</label>
                    <input type="text" id="name" required className="form-control"
                           value={this.state.name ? this.state.name : undefined}
                           onChange={(e) => this.handleChange(e)}/>
                </div>
                <button type="submit" className="btn btn-primary">Enregistrer</button>
            </form>

        </div>
    }
}
