import React, {Component} from 'react';
import Topbar from "./topbar/topbar";
import Musics from "./musics/musics";
import Playlists from "./playlists/playlists";
import Users from "./users/users";

class Administration extends Component {

    render() {
        console.log(this.props.match.params)
        return <div>
            <Topbar/>
            { this.props.match.params.page === 'musics' && <Musics/> }
            { this.props.match.params.page === 'playlists' && <Playlists/> }
            { this.props.match.params.page === 'users' && <Users /> }
            { this.props.match.params.page === 'categories' && <div>Rien à afficher atm</div> }
        </div>
    }
}

export default Administration;