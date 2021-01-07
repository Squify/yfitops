import React, {Component} from 'react';
import './register.scss'
import {Button, Card, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import UserService from "../../services/user.service";

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lastname: null,
            firstname: null,
            email: null,
            password: null
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    async submit(e) {
        e.preventDefault();
        let {lastname, firstname, email, password} = this.state;

        let formData = new FormData();
        formData.append('lastname', lastname);
        formData.append('firstname', firstname);
        formData.append('email', email);
        formData.append('password', password);

        try {
            await UserService.create(formData);
            this.props.history.push('/login');
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <div className="register-container">
                <Card className="text-center">
                    <div className="image-container">
                        <Card.Img src="images/logo.png"/>
                    </div>
                    <Card.Header>Inscrivez-vous gratuitement pour vous lancer dans l'aventure Yfitops.</Card.Header>
                    <Card.Body>
                        <Card.Title>Inscrivez-vous avec votre adresse e-mail</Card.Title>
                        <Card.Text>
                            <Row>
                                <Col className="form-group">
                                    <label>Nom</label>
                                    <input type="text" id="lastname" required className="form-control"/>
                                </Col>
                                <Col className="form-group">
                                    <label>Prénom</label>
                                    <input type="text" id="firstname" required className="form-control"/>
                                </Col>
                            </Row>
                            <div className="form-group">
                                <label>Adresse e-mail</label>
                                <input type="mail" id="email" required className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Mot de passe</label>
                                <input type="password" id="password" required className="form-control"/>
                            </div>
                        </Card.Text>
                        <Button className="btn btn-dark">Créer mon compte</Button>
                    </Card.Body>
                    <hr className="hr"/>
                    <Card.Footer className="text-muted">
                        Vous avez déjà un compte ? <Link to={`/login`}>Connectez vous</Link>
                    </Card.Footer>
                </Card>
            </div>
        );
    }
}