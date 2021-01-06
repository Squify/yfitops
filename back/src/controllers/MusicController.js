import Music from "../models/Music";


export default class CategoryController {

    static async list(req, res) {
        let status = 200;
        let body = {};

        try {
            let musics = await Music.find().select('-__v').populate("categories");

            body = { musics };
        } catch (e) {
            status = status !== 200 ? status : 500;
            body = {
                error: e.error || 'Musics list',
                message: e.message || 'An error has occured into music listing'
            };
        }

        return res.status(status).json(body);

    }

    static async details(req, res) {
        let status = 200;
        let body = {};

        try {
            let { id } = req.params;
            let music = await Music.findById(id).select('-__v').populate("categories");

            body = { music };
        } catch (e) {
            status = status !== 200 ? status : 500;
            body = {
                error: e.error || 'Musics details',
                message: e.message || 'An error has occured into music detailing'
            };
        }

        return res.status(status).json(body);

    }

    static async store(req, res) {
        let status = 200;
        let body = {};

        try {
            let music = await Music.create(req.body);

            body = { music };

        } catch (e) {
            status = status !== 200 ? status : 500;
            body = {
                error: e.error || 'Musics store',
                message: e.message || 'An error has occured into music creating'
            };
        }
        return res.status(status).json(body);
    }

    static async update(req, res) {
        let status = 200;
        let body = {};

        try {
            let { id } = req.params;
            let music = await Music.findByIdAndUpdate(id, req.body, { new: true }).select('-__v').populate("categories");

            body = { music };

        } catch (e) {
            status = status !== 200 ? status : 500;
            body = {
                error: e.error || 'Musics update',
                message: e.message || 'An error has occured into music updating'
            };
        }
        return res.status(status).json(body);
    }

    static async remove(req, res) {
        let status = 200;
        let body = {};

        try {
            let { id } = req.params;
            let music = await Music.findByIdAndDelete(id);


        } catch (e) {
            status = status !== 200 ? status : 500;
            body = {
                error: e.error || 'Musics update',
                message: e.message || 'An error has occured into music updating'
            };
        }
        return res.status(status).json(body);
    }




}