import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import './playlist-card.css'

export default class PlaylistCard extends Component {

    render() {
        return (
            <Card style={{width: '18rem', border: 0, margin: 10}}>
                {
                    this.props.image ?
                        <Card.Img className={"cover-image"} variant="top" src={`images/${this.props.image}`}/>
                        :
                        <Card.Img className={"cover-image"} variant="top" src='images/playlist-default.png'/>
                }
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>Nombre d'écoute : {this.props.listening}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}