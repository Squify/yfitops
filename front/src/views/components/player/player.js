import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactAudioPlayer from 'react-audio-player';

export default class Player extends Component {

    render() {
        let {sound_path} = this.props
        return (
            <ReactAudioPlayer
            src={sound_path}
            autoPlay
            controls
            />
        );
    }
}