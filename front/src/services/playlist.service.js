import axios from 'axios';

export default class PlaylistService {

    static async getPlaylists() {
        return await axios.get(`${process.env.REACT_APP_HOST_API}/playlists`);
    }

    static async getPlaylist(id) {
        return await axios.get(`${process.env.REACT_APP_HOST_API}/playlists/${id}`);
    }

    static async create(formData) {
        return await axios.post(`${process.env.REACT_APP_HOST_API}/playlists`, formData);
    }

    static async update(formData, playlistId) {
        return await axios.put(`${process.env.REACT_APP_HOST_API}/playlists/${playlistId}`, formData);
    }

    static async delete(playlistId) {
        return await axios.delete(`${process.env.REACT_APP_HOST_API}/playlists/${playlistId}`);
    }
}
