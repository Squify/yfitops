import React, { Component } from 'react';
import UserService from "../../../services/user.service";
import { Col, Row } from "react-bootstrap";
import './admin-user.scss'

export default class UpdateUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: null,
            lastname: null,
            email: null,
            role: null,
        }
    }

    async componentDidMount() {
        try {
            let response = await UserService.details(this.props.match.params._id);
            console.log(response.data.user);
            this.setState({
                firstname: response.data.user.firstname,
                lastname: response.data.user.lastname,
                email: response.data.user.email,
                role: response.data.user.role,
            });
        } catch (e) {
            console.error(e);
        }
    }

    handleChangeRadio(e) {
        this.setState({
            role: e.target.value
        });
    }

    async submit(e) {
        e.preventDefault();
        let { role } = this.state;
        let id = this.props.match.params._id;

        let body = {
            role
        }

        try {
            await UserService.update(body, id);
            this.props.history.push('/admin/users');
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        let name = `${this.state.firstname} ${this.state.lastname}`
        return <div className="form-content">
            <h2>Formulaire d'édition d'utilisateur</h2>
            <hr className="hr-form" />
            <form onSubmit={(e) => this.submit(e)}>
                <Row>
                    <Col xs={6}>
                        <div className="form-group">
                            <label>Nom</label>
                            <input type="text" id="name" readOnly className="form-control"
                                value={name} />
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" id="email" readOnly className="form-control"
                                value={this.state.email} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <div className="form-check">
                            <input type="radio" value="0" id="user" name="role" className="form-check-input" checked={this.state.role == 0 ? true : false } onChange={(e)=>this.handleChangeRadio(e)} />
                            <label className="form-check-label">Utilisateur</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" value="10" id="admin" name="role" className="form-check-input" checked={this.state.role == 10 ? true : false } onChange={(e)=>this.handleChangeRadio(e)} />
                            <label className="form-check-label">Administrateur</label>
                        </div>
                    </Col>
                </Row>
                <button type="submit" className="btn btn-primary">Enregistrer</button>
            </form>

        </div>
    }
}
