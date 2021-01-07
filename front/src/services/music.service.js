import axios from "axios";

export default class MusicService {

    static async getMusics() {
        return await axios.get(`${process.env.REACT_APP_HOST_API}/musics`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
    }

    static async getMusic(id) {
        return await axios.get(`${process.env.REACT_APP_HOST_API}/musics/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
    }

    static async create(body) {
        return await axios.post(`${process.env.REACT_APP_HOST_API}/musics`, body, {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
    }

    static async update(body, musicId) {
        return await axios.put(`${process.env.REACT_APP_HOST_API}/musics/${musicId}`, body, {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
    }

    static async delete(musicId) {
        return await axios.delete(`${process.env.REACT_APP_HOST_API}/musics/${musicId}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
    }
}
