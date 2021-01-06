export default class PlaylistService {

    static playlists = [
        {_id: 1, name: 'Loin du monde', userId: null, public: true, musicsId: [1, 2, 3, 4, 7, 9, 10, 11, 15, 18, 20, 21, 25, 26], image_path: 'cover1.png', listening: 45},
        {_id: 2, name: 'McCarteny III', userId: null, public: false, musicsId: [1], image_path: 'cover2.png', listening: 24},
        {_id: 3, name: 'Horizon vertical', userId: null, public: true, musicsId: [], image_path: 'cover3.png', listening: 14},
        {_id: 4, name: 'evermore', userId: null, public: false, musicsId: [1, 2, 3], image_path: 'cover1.png', listening: 98},
        {_id: 5, name: 'Acoustic', userId: null, public: false, musicsId: [1, 2, 3], image_path: 'cover2.png', listening: 54},
        {_id: 6, name: 'We Will Always Love U', userId: null, public: true, musicsId: [1, 2, 3], image_path: null, listening: 38},
        {_id: 7, name: 'Carbozo Vol.1', userId: null, public: true, musicsId: [1, 2, 3], image_path: 'cover1.png', listening: 83},
        {_id: 8, name: 'Jok`Chirac', userId: null, public: false, musicsId: [1, 2, 3], image_path: 'cover2.png', listening: 49},
        {_id: 9, name: 'Covers', userId: null, public: true, musicsId: [1, 2, 3], image_path: null, listening: 12},
        {_id: 10, name: 'Little Bastards', userId: null, public: false, musicsId: [1, 2, 3], image_path: 'cover1.png', listening: 1},
        {_id: 11, name: 'Singles Collection (1981-2001)', userId: null, public: false, musicsId: [1, 2, 3], image_path: null, listening: 65},
        {_id: 12, name: 'doucement', userId: null, public: true, musicsId: [1, 2, 3], image_path: 'cover2.png', listening: 74},
        {_id: 13, name: 'Grand Prix (Edition Deluxe)', userId: null, public: false, musicsId: [1, 2, 3], image_path: 'cover1.png', listening: 35},
        {_id: 14, name: 'No One Sings Like You Anymore', userId: null, public: false, musicsId: [1, 2, 3], image_path: null, listening: 34},
        {_id: 15, name: 'Think of Spring', userId: null, public: false, musicsId: [1, 2, 3], image_path: 'cover3.png', listening: 47},
        {_id: 16, name: 'Storm Orchestra', userId: null, public: false, musicsId: [1, 2, 3], image_path: 'cover2.png', listening: 83},
        {_id: 17, name: 'White Poney', userId: null, public: true, musicsId: [1, 2, 3], image_path: null, listening: 42},
        {_id: 18, name: 'Pense a te', userId: null, public: false, musicsId: [1, 2, 3], image_path: 'cover1.png', listening: 38},
        {_id: 19, name: 'Centre ville', userId: null, public: false, musicsId: [1, 2, 3], image_path: 'cover2.png', listening: 41},
        {_id: 20, name: 'Wonder', userId: null, public: false, musicsId: [1, 2, 3], image_path: 'cover3.png', listening: 100},
        {_id: 21, name: 'Soir de bal', userId: null, public: true, musicsId: [1, 2, 3], image_path: null, listening: 52},
        {_id: 22, name: 'Limbo (Deluxe)', userId: null, public: false, musicsId: [1, 2, 3], image_path: 'cover1.png', listening: 15},
        {_id: 23, name: 'Goosebumps EP', userId: null, public: false, musicsId: [1, 2, 3], image_path: 'cover2.png', listening: 54},
        {_id: 24, name: 'Fleur froide', userId: null, public: false, musicsId: [1, 2, 3], image_path: 'cover1.png', listening: 20},
        {_id: 25, name: 'Frenchy', userId: null, public: true, musicsId: [1, 2, 3], image_path: 'cover3.png', listening: 12},
        {_id: 26, name: 'weird!', userId: null, public: false, musicsId: [1, 2, 3], image_path: 'cover1.png', listening: 11},
    ]

    static nextId = 27;

    static getPlaylists() {
        return this.playlists;
    }

    static getPlaylist(id) {
        return this.playlists.find(playlist => playlist._id === parseInt(id));
    }
    
    static create(formData, playlist) {
        //TODO: Replace with api connection
        playlist._id = this.nextId;
        playlist.listening = 0;
        playlist.public = Boolean(playlist.public)
        this.nextId++;
        this.playlists.push(playlist);
        console.log('created')
    }

    static update(formData, playlistToUpdate) {
        //TODO: Replace with api connection
        playlistToUpdate.public = Boolean(playlistToUpdate.public)
        const playlistToUpdateInArray = this.playlists.find(playlist => playlist._id === playlistToUpdate._id);
        this.playlists[playlistToUpdateInArray._id - 1] = playlistToUpdate;
        console.log('updated')
    }

    static delete(playlistIdToDelete) {
        //TODO: Replace with api connection
        this.playlists.splice(playlistIdToDelete - 1, 1)
        console.log('delete')
    }
}
