export default class MusicService {

    static musics = [
        {_id: 1, name: 'music1', category: 5, sound_path: "blbodkfpmsldfksjdfjsdjhflk", artiste: 'Madonna', album: 'Boupboupbipboup', time: 1.15},
        {_id: 2, name: 'music2', category: 5, sound_path: "blbodkfpmsldfksjdfjsdjhflk", artiste: 'Madonna', album: 'Boupboupbipboup', time: 1.45},
        {_id: 3, name: 'music3', category: 5, sound_path: "blbodkfpmsldfksjdfjsdjhflk", artiste: 'Madonna', album: 'Boupboupbipboup', time: 1.36},
        {_id: 4, name: 'music4', category: 5, sound_path: "blbodkfpmsldfksjdfjsdjhflk", artiste: 'Madonna', album: 'Boupboupbipboup', time: 1.53},
        {_id: 5, name: 'music5', category: 5, sound_path: "blbodkfpmsldfksjdfjsdjhflk", artiste: 'Madonna', album: 'Boupboupbipboup', time: 1.635},
        {_id: 6, name: 'music6', category: 5, sound_path: "blbodkfpmsldfksjdfjsdjhflk", artiste: 'Madonna', album: 'Boupboupbipboup', time: 1.74},
        {_id: 7, name: 'music7', category: 5, sound_path: "blbodkfpmsldfksjdfjsdjhflk", artiste: 'Madonna', album: 'Boupboupbipboup', time: 1.845},
        {_id: 8, name: 'music8', category: 5, sound_path: "blbodkfpmsldfksjdfjsdjhflk", artiste: 'Madonna', album: 'Boupboupbipboup', time: 1.95},
        {_id: 9, name: 'music9', category: 5, sound_path: "blbodkfpmsldfksjdfjsdjhflk", artiste: 'Madonna', album: 'Boupboupbipboup', time: 2.055},
        {_id: 10, name: 'music10', category: 5, sound_path: "blbodkfpmsldfksjdfjsdjhflk", artiste: 'Madonna', album: 'Boupboupbipboup', time: 2.16},
        {_id: 11, name: 'music11', category: 5, sound_path: "blbodkfpmsldfksjdfjsdjhflk", artiste: 'Madonna', album: 'Boupboupbipboup', time: 2.265},
        {_id: 12, name: 'music12', category: 5, sound_path: "blbodkfpmsldfksjdfjsdjhflk", artiste: 'Madonna', album: 'Boupboupbipboup', time: 2.37},
        {_id: 13, name: 'music13', category: 5, sound_path: "blbodkfpmsldfksjdfjsdjhflk", artiste: 'Madonna', album: 'Boupboupbipboup', time: 2.475},
        {_id: 14, name: 'music14', category: 5, sound_path: "blbodkfpmsldfksjdfjsdjhflk", artiste: 'Madonna', album: 'Boupboupbipboup', time: 2.58},
        {_id: 15, name: 'music15', category: 5, sound_path: "blbodkfpmsldfksjdfjsdjhflk", artiste: 'Madonna', album: 'Boupboupbipboup', time: 2.685},
        {_id: 16, name: 'music16', category: 5, sound_path: "blbodkfpmsldfksjdfjsdjhflk", artiste: 'Madonna', album: 'Boupboupbipboup', time: 2.79},
        {_id: 17, name: 'music17', category: 5, sound_path: "blbodkfpmsldfksjdfjsdjhflk", artiste: 'Madonna', album: 'Boupboupbipboup', time: 2.895},
        {_id: 18, name: 'music18', category: 5, sound_path: "blbodkfpmsldfksjdfjsdjhflk", artiste: 'Madonna', album: 'Boupboupbipboup', time: 3},
        {_id: 19, name: 'music19', category: 5, sound_path: "blbodkfpmsldfksjdfjsdjhflk", artiste: 'Madonna', album: 'Boupboupbipboup', time: 3.105},
        {_id: 20, name: 'music20', category: 5, sound_path: "blbodkfpmsldfksjdfjsdjhflk", artiste: 'Madonna', album: 'Boupboupbipboup', time: 3.21},
        {_id: 21, name: 'music21', category: 5, sound_path: "blbodkfpmsldfksjdfjsdjhflk", artiste: 'Madonna', album: 'Boupboupbipboup', time: 3.315},
        {_id: 22, name: 'music22', category: 5, sound_path: "blbodkfpmsldfksjdfjsdjhflk", artiste: 'Madonna', album: 'Boupboupbipboup', time: 3.42},
        {_id: 23, name: 'music23', category: 5, sound_path: "blbodkfpmsldfksjdfjsdjhflk", artiste: 'Madonna', album: 'Boupboupbipboup', time: 3.525},
        {_id: 24, name: 'music24', category: 5, sound_path: "blbodkfpmsldfksjdfjsdjhflk", artiste: 'Madonna', album: 'Boupboupbipboup', time: 3.63},
        {_id: 25, name: 'music25', category: 5, sound_path: "blbodkfpmsldfksjdfjsdjhflk", artiste: 'Madonna', album: 'Boupboupbipboup', time: 3.735},
        {_id: 26, name: 'music26', category: 5, sound_path: "blbodkfpmsldfksjdfjsdjhflk", artiste: 'Madonna', album: 'Boupboupbipboup', time: 3.84},
    ]

    static nextId = 27;

    static getMusics() {
        return this.musics;
    }

    static getMusic(id) {
        return this.musics.find(music => music._id === parseInt(id));
    }

    static create(formData, music) {
        //TODO: Replace with api connection
        music._id = this.nextId;
        this.nextId++;
        this.musics.push(music);
        console.log('created')
    }

    static update(formData, musicToUpdate) {
        //TODO: Replace with api connection
        const musicToUpdateInArray = this.musics.find(music => music._id === musicToUpdate._id);
        this.musics[musicToUpdateInArray._id - 1] = musicToUpdate;
        console.log('updated')
    }

    static delete(musicIdToDelete) {
        //TODO: Replace with api connection
        this.musics.splice(musicIdToDelete - 1, 1)
        console.log('delete')
    }
}
