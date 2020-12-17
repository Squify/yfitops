import React, {Component} from 'react';
import '../../style/edit-profile.css'
import {Col, Row} from "react-bootstrap";
import { HiPhotograph, HiOutlineCheckCircle } from "react-icons/hi";

export default class EditProfile extends Component {
    render() {
        return (
            <div>
                <form>
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
                        <label htmlFor="thumbnail" className="custom-input"><HiPhotograph/> Photo de profil</label>
                        <input type="file" id="thumbnail" accept="image/jpeg, image/png"
                               required className="form-control"/>
                    </div>

                    <div className="button">
                        <button type="submit" className="btn btn-primary"><HiOutlineCheckCircle/></button>
                    </div>
                </form>
            </div>
        );
    }
}