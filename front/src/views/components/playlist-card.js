import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import '../../style/playlist-card.css'

export default class PlaylistCard extends Component {
    render() {
        return (
            <Card style={{ width: '18rem', border: 0, margin: 10 }}>
                <Card.Img variant="top" src="images/playlist-default.png" />
                <Card.Body>
                    <Card.Title>Playlist trop stylax</Card.Title>
                    <Card.Text>Artiste éventuellement</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}