import axios from "axios";

export default class MusicService {

    static async getMusics() {
        return await axios.get(`${process.env.REACT_APP_HOST_API}/musics`);
    }

    static async getMusic(id) {
        return await axios.get(`${process.env.REACT_APP_HOST_API}/musics/${id}`);
    }

    static async create(formData) {
        return await axios.post(`${process.env.REACT_APP_HOST_API}/musics`, formData);
    }

    static async update(formData, musicId) {
        return await axios.put(`${process.env.REACT_APP_HOST_API}/musics/${musicId}`, formData);
    }

    static async delete(musicId) {
        return await axios.delete(`${process.env.REACT_APP_HOST_API}/musics/${musicId}`);
    }
}
