import axios from 'axios';

export default class UserService {

    static async list() {
        return await axios.get(`${process.env.REACT_APP_HOST_API}/users`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
    }

    static async details(id) {
        return await axios.get(`${process.env.REACT_APP_HOST_API}/users/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
    }

    static async update(body, id) {
        return await axios.put(`${process.env.REACT_APP_HOST_API}/users/${id}`, body, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
    }

    static async remove(id) {
        return await axios.delete(`${process.env.REACT_APP_HOST_API}/users/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
    }

    static async auth(body) {
        return await axios.post(`${process.env.REACT_APP_HOST_API}/users/auth`, body)
    }

    static async register(body) {
        return await axios.post(`${process.env.REACT_APP_HOST_API}/users/register`, body)
    }
}