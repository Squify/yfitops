export default class PlaylistService {

    static playlists = [
        {id: 1, name: 'playlist1', userId: null, public: true, musicsId: [1, 2, 3]},
        {id: 2, name: 'playlist2', userId: null, public: true, musicsId: [1]},
        {id: 3, name: 'playlist3', userId: null, public: true, musicsId: []},
        {id: 4, name: 'private', userId: null, public: false, musicsId: [1, 2, 3]},
    ]

    constructor(props) {
        this.state = {

        }

    }

    static getPlaylist() {
        return this.playlists;
    }

}
