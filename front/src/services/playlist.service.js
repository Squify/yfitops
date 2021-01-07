import axios from 'axios';

export default class PlaylistService {

    static async getPlaylists() {
        return await axios.get(`${process.env.REACT_APP_HOST_API}/playlists`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
    }

    static async getPrivatePlaylists() {
        return await axios.get(`${process.env.REACT_APP_HOST_API}/playlists/private`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
    }

    static async getPublicPlaylists() {
        return await axios.get(`${process.env.REACT_APP_HOST_API}/playlists/public`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
    }

    static async getPlaylist(id) {
        return await axios.get(`${process.env.REACT_APP_HOST_API}/playlists/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
    }

    static async create(body) {
        return await axios.post(`${process.env.REACT_APP_HOST_API}/playlists`, body, {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
    }

    static async update(body, playlistId) {
        return await axios.put(`${process.env.REACT_APP_HOST_API}/playlists/${playlistId}`, body, {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
    }

    static async delete(playlistId) {
        return await axios.delete(`${process.env.REACT_APP_HOST_API}/playlists/${playlistId}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
    }
}