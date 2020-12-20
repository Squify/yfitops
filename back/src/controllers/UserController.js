import User from "../models/User";


export default class UserController {

    static async list(req, res){
        let status = 200;
        let body = {};

        try {
            let users = await User.find().select('-__v -password');
            
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




    

}