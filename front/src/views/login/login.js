import React, {Component} from 'react';
import './login.scss'
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class Login extends Component {

    render() {
        return (
            <div className="login-container">
                <Card className="text-center">
                    <div className="image-container">
                        <Card.Img src="images/logo.png"/>
                    </div>
                    <Card.Header>Vous devez être connecté pour accéder au contenu de l'application</Card.Header>
                    <Card.Body>
                        <Card.Title>Connexion à Yfitops</Card.Title>
                        <Card.Text>
                            <div className="form-group">
                                <label>Adresse e-mail</label>
                                <input type="mail" id="email" required className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Mot de passe</label>
                                <input type="password" id="password" required className="form-control"/>
                            </div>
                        </Card.Text>
                        <Button className="btn btn-dark">Connexion</Button>
                    </Card.Body>
                    <hr className="hr"/>
                    <Card.Footer className="text-muted">Pas encore de compte ?</Card.Footer>
                    <Link to={`/register`}>
                        <Button className="btn btn-dark">Créer un compte</Button>
                    </Link>
                </Card>
            </div>
        );
    }
}