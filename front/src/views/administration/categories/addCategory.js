import React, {Component} from 'react';
import CategoryService from "../../../services/category.service";
import './admin-category.scss'

export default class AddCategory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
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

        let formData = new FormData();
        formData.append('name', name);
        try {
            await CategoryService.create(formData, category);
            this.props.history.push('/admin/categories');
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return <div className="form-content">
            <h2>Formulaire d'ajout de catégorie</h2>
            <hr className="hr-form"/>
            <form onSubmit={(e) => this.submit(e)}>
                <div className="form-group">
                    <label>Nom</label>
                    <input type="text" id="name" required className="form-control"
                           onChange={(e) => this.handleChange(e)}/>
                </div>
                <button type="submit" className="btn btn-primary">Ajouter</button>
            </form>

        </div>
    }
}
