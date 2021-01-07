import axios from "axios";

export default class CategoryService {

    static async getCategories() {
        return await axios.get(`${process.env.REACT_APP_HOST_API}/categories`);
    }

    static async getCategory(id) {
        return await axios.get(`${process.env.REACT_APP_HOST_API}/categories/${id}`);
    }

    static async create(formData) {
        return await axios.post(`${process.env.REACT_APP_HOST_API}/categories`, formData);
    }

    static async update(formData, categoryId) {
        return await axios.put(`${process.env.REACT_APP_HOST_API}/categories/${categoryId}`, formData);
    }

    static async delete(categoryId) {
        return await axios.delete(`${process.env.REACT_APP_HOST_API}/categories/${categoryId}`);
    }
}