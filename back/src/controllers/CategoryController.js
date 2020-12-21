import Category from "../models/Category";


export default class CategoryController {
    
    static async list(req, res) {
        let status = 200;
        let body = {};

        try {
            let categories = await Category.find().select('-__v');

            body = { categories };
        } catch (e) {
            status = status !== 200 ? status : 500;
            body = {
                error: e.error || 'Categories list',
                message: e.message || 'An error has occured into category listing'
            };
        }

        return res.status(status).json(body);

    }

    static async details(req, res) {
        let status = 200;
        let body = {};

        try {
            let { id } = req.params;
            let category = await Category.findById(id).select('-__v');

            body = { category };
        } catch (e) {
            status = status !== 200 ? status : 500;
            body = {
                error: e.error || 'Categories details',
                message: e.message || 'An error has occured into category detailing'
            };
        }

        return res.status(status).json(body);

    }

    static async store(req, res) {
        let status = 200;
        let body = {};

        try {
            let category = await Category.create(req.body);

            body = { category };

        } catch (e) {
            status = status !== 200 ? status : 500;
            body = {
                error: e.error || 'Categories store',
                message: e.message || 'An error has occured into category creating'
            };
        }
        return res.status(status).json(body);
    }

    static async update(req, res) {
        let status = 200;
        let body = {};

        try {
            let { id } = req.params;
            let category = await Category.findByIdAndUpdate(id, req.body, { new: true }).select('-__v');

            body = { category };

        } catch (e) {
            status = status !== 200 ? status : 500;
            body = {
                error: e.error || 'Categories update',
                message: e.message || 'An error has occured into category updating'
            };
        }
        return res.status(status).json(body);
    }

    static async remove(req, res) {
        let status = 200;
        let body = {};

        try {
            let { id } = req.params;
            let category = await Category.findByIdAndDelete(id);


        } catch (e) {
            status = status !== 200 ? status : 500;
            body = {
                error: e.error || 'Categories update',
                message: e.message || 'An error has occured into category updating'
            };
        }
        return res.status(status).json(body);
    }




}