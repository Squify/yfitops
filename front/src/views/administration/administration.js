import React, {Component} from 'react';
import Topbar from "./topbar/topbar";
import Musics from "./musics/musics";
import Playlists from "./playlists/playlists";
import Users from "./users/users";
import Categories from "./categories/categories";

class Administration extends Component {

    render() {
        return <div>
            <Topbar/>
            {this.props.match.params.page === 'musics' && <Musics/>}
            {this.props.match.params.page === 'playlists' && <Playlists/>}
            {this.props.match.params.page === 'users' && <Users/>}
            {this.props.match.params.page === 'categories' && <Categories/>}
        </div>
    }
}

export default Administration;