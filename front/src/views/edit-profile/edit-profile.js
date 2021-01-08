import './edit-profile.css'

import {updateUser} from '../../actions/users.actions'
import { connect } from 'react-redux';
import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";
import {HiOutlineCheckCircle, HiPhotograph} from "react-icons/hi";
import UserService from '../../services/user.service';

class EditProfile extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            lastname: this.props.user.lastname,
            firstname: this.props.user.firstname,
            email: this.props.user.email,
        })
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    async submit(e) {
        e.preventDefault();
        let {lastname, firstname, email} = this.state;

        let body = {
            lastname, firstname, email
        };

        try {
            let response = await UserService.update(body, this.props.user._id);
            this.props.updateUser(response.data.user);
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.submit(e)}>
                    <Row>
                        <Col className="form-group">
                            <label>Nom</label>
                            <input onChange={(e) => this.handleChange(e)} id="lastname" type="text" id="lastname" required className="form-control"
                            value={this.state.lastname}/>
                        </Col>
                        <Col className="form-group">
                            <label>Prénom</label>
                            <input onChange={(e) => this.handleChange(e)} id="firstname" type="text" id="firstname" required className="form-control"
                            value={this.state.firstname}/>
                        </Col>
                    </Row>
                    <div className="form-group">
                        <label>Adresse e-mail</label>
                        <input onChange={(e) => this.handleChange(e)} id="email" type="email" id="email" required className="form-control"
                        value={this.state.email}/>
                    </div>
                    <div className="button">
                        <button type="submit" className="btn btn-primary"><HiOutlineCheckCircle/> Valider</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { user: state.user };
}

const mapDispatchToProps = dispatch => {
    return {
        updateUser: user => dispatch(updateUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)