import axios from "axios";

export default class CategoryService {

    static async getCategories() {
        return await axios.get(`${process.env.REACT_APP_HOST_API}/categories`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
    }

    static async getCategory(id) {
        return await axios.get(`${process.env.REACT_APP_HOST_API}/categories/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
    }

    static async create(body) {
        return await axios.post(`${process.env.REACT_APP_HOST_API}/categories`, body, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
    }

    static async update(body, categoryId) {
        return await axios.put(`${process.env.REACT_APP_HOST_API}/categories/${categoryId}`, body, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
    }

    static async delete(categoryId) {
        return await axios.delete(`${process.env.REACT_APP_HOST_API}/categories/${categoryId}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
    }
}