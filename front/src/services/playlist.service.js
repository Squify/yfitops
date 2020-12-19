export default class PlaylistService {

    static playlists = [
        {id: 1, name: 'Loin du monde', userId: null, public: true, musicsId: [1, 2, 3, 4, 7, 9, 10, 11, 15, 18, 20, 21, 25, 26], image_path: 'cover1.png', listening: 45},
        {id: 2, name: 'McCarteny III', userId: null, public: true, musicsId: [1], image_path: 'cover2.png', listening: 24},
        {id: 3, name: 'Horizon vertical', userId: null, public: true, musicsId: [], image_path: 'cover3.png', listening: 14},
        {id: 4, name: 'evermore', userId: null, public: false, musicsId: [1, 2, 3], image_path: 'cover1.png', listening: 98},
        {id: 4, name: 'Acoustic', userId: null, public: false, musicsId: [1, 2, 3], image_path: 'cover2.png', listening: 54},
        {id: 4, name: 'We Will Always Love U', userId: null, public: false, musicsId: [1, 2, 3], image_path: null, listening: 38},
        {id: 4, name: 'Carbozo Vol.1', userId: null, public: false, musicsId: [1, 2, 3], image_path: 'cover1.png', listening: 83},
        {id: 4, name: 'Jok`Chirac', userId: null, public: false, musicsId: [1, 2, 3], image_path: 'cover2.png', listening: 49},
        {id: 4, name: 'Covers', userId: null, public: false, musicsId: [1, 2, 3], image_path: null, listening: 12},
        {id: 4, name: 'Little Bastards', userId: null, public: false, musicsId: [1, 2, 3], image_path: 'cover1.png', listening: 1},
        {id: 4, name: 'Singles Collection (1981-2001)', userId: null, public: false, musicsId: [1, 2, 3], image_path: null, listening: 65},
        {id: 4, name: 'doucement', userId: null, public: false, musicsId: [1, 2, 3], image_path: 'cover2.png', listening: 74},
        {id: 4, name: 'Grand Prix (Edition Deluxe)', userId: null, public: false, musicsId: [1, 2, 3], image_path: 'cover1.png', listening: 35},
        {id: 4, name: 'No One Sings Like You Anymore', userId: null, public: false, musicsId: [1, 2, 3], image_path: null, listening: 34},
        {id: 4, name: 'Think of Spring', userId: null, public: false, musicsId: [1, 2, 3], image_path: 'cover3.png', listening: 47},
        {id: 4, name: 'Storm Orchestra', userId: null, public: false, musicsId: [1, 2, 3], image_path: 'cover2.png', listening: 83},
        {id: 4, name: 'White Poney', userId: null, public: false, musicsId: [1, 2, 3], image_path: null, listening: 42},
        {id: 4, name: 'Pense a te', userId: null, public: false, musicsId: [1, 2, 3], image_path: 'cover1.png', listening: 38},
        {id: 4, name: 'Centre ville', userId: null, public: false, musicsId: [1, 2, 3], image_path: 'cover2.png', listening: 41},
        {id: 4, name: 'Wonder', userId: null, public: false, musicsId: [1, 2, 3], image_path: 'cover3.png', listening: 100},
        {id: 4, name: 'Soir de bal', userId: null, public: false, musicsId: [1, 2, 3], image_path: null, listening: 52},
        {id: 4, name: 'Limbo (Deluxe)', userId: null, public: false, musicsId: [1, 2, 3], image_path: 'cover1.png', listening: 15},
        {id: 4, name: 'Goosebumps EP', userId: null, public: false, musicsId: [1, 2, 3], image_path: 'cover2.png', listening: 54},
        {id: 4, name: 'Fleur froide', userId: null, public: false, musicsId: [1, 2, 3], image_path: 'cover1.png', listening: 20},
        {id: 4, name: 'Frenchy', userId: null, public: false, musicsId: [1, 2, 3], image_path: 'cover3.png', listening: 12},
        {id: 4, name: 'weird!', userId: null, public: false, musicsId: [1, 2, 3], image_path: 'cover1.png', listening: 11},
    ]

    static getPlaylist() {
        return this.playlists;
    }
}
