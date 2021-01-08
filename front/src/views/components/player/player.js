import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactAudioPlayer from 'react-audio-player';

export default class Player extends Component {

    render() {
        let {sound_path} = this.props
        return (
            <ReactAudioPlayer
            src={`${process.env.REACT_APP_HOST_API}/${sound_path}`}
            autoPlay
            controls
            />
        );
    }
}