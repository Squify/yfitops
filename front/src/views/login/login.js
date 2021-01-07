import React, {Component} from 'react';
import UserService from '../../services/user.service';
import {updateUser} from '../../actions/users.actions'
import {connect} from 'react-redux';
import './login.scss'
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            isError: false,
        }
    }

    handleChange(e){
        this.setState({
            [e.target.id]: e.target.value 
        })
    }

    async submit(e){
        e.preventDefault();
        this.setState({isError: false});
        let {email, password} = this.state;
        let body = {email, password};

        try {
            let response = await UserService.auth(body);
            let {token} = response.data;
            localStorage.setItem('token', token);
            this.props.updateUser(response.data.user);
            this.props.history.push('/');
        } catch (e) {
            console.error(e);
            this.setState({isError: true})
        }
    }

    render() {
        let {isError} = this.state;
        return (
            <div className="login-container">
                <Card className="text-center">
                    <div className="image-container">
                        <Card.Img src="images/logo.png"/>
                    </div>
                    <Card.Header>Vous devez être connecté pour accéder au contenu de l'application</Card.Header>
                    <Card.Body>
                        <form onSubmit={(e) => this.submit(e)}>
                            <Card.Title>Connexion à Yfitops</Card.Title>
                            <Card.Text>
                                    <div className="form-group">
                                        <label>Adresse e-mail</label>
                                        <input onChange={(e) => this.handleChange(e)} type="mail" id="email" required className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Mot de passe</label>
                                        <input onChange={(e) => this.handleChange(e)} type="password" id="password" required className="form-control"/>
                                    </div>
                            </Card.Text>
                            <Button className="btn btn-dark" type="submit">Connexion</Button>
                            { isError && <p>Erreur d'emaill et / ou de mot de passe</p>}
                        </form>
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

const mapStateToProps = state => {
    return {user: state.user};
};

const mapDispatchToProps = dispatch => {
    return {
        updateUser: user => dispatch(updateUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);