import Playlist from "../models/Playlist";


export default class PlaylistController {

    static async list(req, res) {
        let status = 200;
        let body = {};

        try {
            let playlists = await Playlist.find().select('-__v');

            body = { playlists };
        } catch (e) {
            status = status !== 200 ? status : 500;
            body = {
                error: e.error || 'Playlists list',
                message: e.message || 'An error has occured into playlist listing'
            };
        }

        return res.status(status).json(body);

    }

    static async listMine(req, res) {
        let status = 200;
        let body = {};

        try {


            // C'est commenté en attendant de mettre en place le JWT

            // // Récupérer le token jwt qui est passé dans le header de la requête
            // let token = req.headers.authorization.replace(/Bearer /g, '');

            // // Décrypter le token JWT
            // let decryptToken = jsonwebtoken.decode(token, process.env.JWT_SECRET);

            // // Récupérer l'id de l'user qui possède le token
            // let idUser = decryptToken.sub;

            // // Récupérer les infos de l'user
            // // let user = await User.findById(decryptToken.sub);

            // let playlists = await Playlist.find({ userId: idUser }).select('-__v');

            let playlists = await Playlist.find({ userId: "5fdf979153d7cd586c241fa4" }).select('-__v');
            

            body = { playlists };
        } catch (e) {
            status = status !== 200 ? status : 500;
            body = {
                error: e.error || 'Playlists list',
                message: e.message || 'An error has occured into playlist listing'
            };
        }

        return res.status(status).json(body);

    }

    static async listPublic(req, res) {
        let status = 200;
        let body = {};

        try {
            let playlists = await Playlist.find({public: true}).select('-__v');

            body = { playlists };
        } catch (e) {
            status = status !== 200 ? status : 500;
            body = {
                error: e.error || 'Playlists list',
                message: e.message || 'An error has occured into playlist listing'
            };
        }

        return res.status(status).json(body);

    }

    static async details(req, res) {
        let status = 200;
        let body = {};

        try {
            let { id } = req.params;
            let playlist = await Playlist.findById(id).select('-__v');

            // C'est commenté en attendant de mettre en place le JWT

            // // Récupérer le token jwt qui est passé dans le header de la requête
            // let token = req.headers.authorization.replace(/Bearer /g, '');

            // // Décrypter le token JWT
            // let decryptToken = jsonwebtoken.decode(token, process.env.JWT_SECRET);

            // // Récupérer l'id de l'user qui possède le token
            // let idUser = decryptToken.sub;

            // // Récupérer les infos de l'user
            // // let user = await User.findById(decryptToken.sub);

            // //On vérifie si l'auteur de la playlist est bien celui qui est connecté et qui demande à la voir ou si la playlist est publique
            // if (!playlist.public || playlist.userId !== idUser) {
            //     new Error({
            //         error: "Private playlist",
            //         message: "Cette playlist n'est pas la vôtre et n'est pas publique."
            //     });
            // }

            body = { playlist };
        } catch (e) {
            status = status !== 200 ? status : 500;
            body = {
                error: e.error || 'Playlists details',
                message: e.message || 'An error has occured into playlist detailing'
            };
        }

        return res.status(status).json(body);

    }

    static async store(req, res) {
        let status = 200;
        let body = {};

        try {
            // C'est commenté en attendant de mettre en place le JWT

            // // Récupérer le token jwt qui est passé dans le header de la requête
            // let token = req.headers.authorization.replace(/Bearer /g, '');

            // // Décrypter le token JWT
            // let decryptToken = jsonwebtoken.decode(token, process.env.JWT_SECRET);

            // // Récupérer l'id de l'user qui possède le token
            // let idUser = decryptToken.sub;

            // // Récupérer les infos de l'user
            // // let user = await User.findById(decryptToken.sub);

            // On met comme créateur de la playlist le user connecté
            // req.body.userId = idUser;

            // Pour tester oubliez pas de mettre quelque chose dans userId quand même dans votre requête sur Insomnia
            let playlist = await Playlist.create(req.body);

            body = { playlist };

        } catch (e) {
            status = status !== 200 ? status : 500;
            body = {
                error: e.error || 'Playlists store',
                message: e.message || 'An error has occured into playlist creating'
            };
        }
        return res.status(status).json(body);
    }

    static async update(req, res) {
        let status = 200;
        let body = {};

        try {
            let { id } = req.params;
            let playlist = await Playlist.findByIdAndUpdate(id, req.body, { new: true }).select('-__v');

            // C'est commenté en attendant de mettre en place le JWT

            // // Récupérer le token jwt qui est passé dans le header de la requête
            // let token = req.headers.authorization.replace(/Bearer /g, '');

            // // Décrypter le token JWT
            // let decryptToken = jsonwebtoken.decode(token, process.env.JWT_SECRET);

            // // Récupérer l'id de l'user qui possède le token
            // let idUser = decryptToken.sub;

            // // Récupérer les infos de l'user
            // // let user = await User.findById(decryptToken.sub);

            // //On vérifie si l'auteur de la playlist est bien celui qui est connecté et qui demande à la voir ou si la playlist est publique
            // if (playlist.userId !== idUser) {
            //     new Error({
            //         error: "Private playlist",
            //         message: "Cette playlist n'est pas la vôtre et n'est pas publique."
            //     });
            // }

            body = { playlist };

        } catch (e) {
            status = status !== 200 ? status : 500;
            body = {
                error: e.error || 'Playlists update',
                message: e.message || 'An error has occured into playlist updating'
            };
        }
        return res.status(status).json(body);
    }

    static async remove(req, res) {
        let status = 200;
        let body = {};

        try {
            let { id } = req.params;

            // C'est commenté en attendant de mettre en place le JWT

            // // Récupérer le token jwt qui est passé dans le header de la requête
            // let token = req.headers.authorization.replace(/Bearer /g, '');

            // // Décrypter le token JWT
            // let decryptToken = jsonwebtoken.decode(token, process.env.JWT_SECRET);

            // // Récupérer l'id de l'user qui possède le token
            // let idUser = decryptToken.sub;

            // // Récupérer les infos de l'user
            // // let user = await User.findById(decryptToken.sub);

            // //On vérifie si l'auteur de la playlist est bien celui qui est connecté et qui demande à la voir ou si la playlist est publique
            // if (playlist.userId !== idUser) {
            //     new Error({
            //         error: "Private playlist",
            //         message: "Cette playlist n'est pas la vôtre et n'est pas publique."
            //     });
            // }


            let playlist = await Playlist.findByIdAndDelete(id);


        } catch (e) {
            status = status !== 200 ? status : 500;
            body = {
                error: e.error || 'Playlists update',
                message: e.message || 'An error has occured into playlist updating'
            };
        }
        return res.status(status).json(body);
    }




}