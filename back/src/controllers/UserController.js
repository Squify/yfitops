import User from "../models/User";
import jsonwebtoken from "jsonwebtoken";


export default class UserController {

    static async list(req, res) {
        let status = 200;
        let body = {};

        try {
            let users = await User.find().select('-__v -password').populate("playlists").populate("favorites");

            body = { users };
        } catch (e) {
            status = status !== 200 ? status : 500;
            body = {
                error: e.error || 'Users list',
                message: e.message || 'An error has occured into user listing'
            };
        }

        return res.status(status).json(body);

    }

    static async details(req, res) {
        let status = 200;
        let body = {};

        try {
            let { id } = req.params;
            let user = await User.findById(id).select('-__v -password').populate("playlists").populate("favorites");

            body = { user };
        } catch (e) {
            status = status !== 200 ? status : 500;
            body = {
                error: e.error || 'Users details',
                message: e.message || 'An error has occured into user detailing'
            };
        }

        return res.status(status).json(body);

    }

    static async store(req, res) {
        let status = 200;
        let body = {};

        try {
            let user = await User.create(req.body);

            body = { user };

        } catch (e) {
            status = status !== 200 ? status : 500;
            body = {
                error: e.error || 'Users store',
                message: e.message || 'An error has occured into user creating'
            };
        }
        return res.status(status).json(body);
    }

    static async update(req, res) {
        let status = 200;
        let body = {};

        try {
            let { id } = req.params;
            let user = await User.findByIdAndUpdate(id, req.body, { new: true }).select('-__v -password').populate("playlists").populate("favorites");

            body = { user };

        } catch (e) {
            status = status !== 200 ? status : 500;
            body = {
                error: e.error || 'Users update',
                message: e.message || 'An error has occured into user updating'
            };
        }
        return res.status(status).json(body);
    }

    static async remove(req, res) {
        let status = 200;
        let body = {};

        try {
            let { id } = req.params;
            let user = await User.findByIdAndDelete(id);


        } catch (e) {
            status = status !== 200 ? status : 500;
            body = {
                error: e.error || 'Users update',
                message: e.message || 'An error has occured into user updating'
            };
        }
        return res.status(status).json(body);
    }

    static async auth(req, res) {
        let status = 200;
        let body = {};

        try {

            let { email, password } = req.body;
            let user = await User.findOne({
                email: email
            }).select("-__v").populate("playlists").populate("favorites");

            if (user && password === user.password) {
                let { JWT_SECRET } = process.env;
                let token = jsonwebtoken.sign({
                    sub: user._id
                }, JWT_SECRET);
                body = { user, token };
            } else {
                status = 401;
                new Error('Unauthorized');
            }

        } catch (e) {
            status = status !== 200 ? status : 500;
            body = {
                error: e.error || 'User authentication',
                message: e.message || 'An error is occured into user auth'
            };
        }

        return res.status(status).json(body);
    }


}