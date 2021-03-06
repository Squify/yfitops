import jsonwebtoken from "jsonwebtoken";
import User from "../models/User";

export default class Auth {

    static isAllowed(roles) {

        return async (req, res, next) => {

            try {

                // Récupérer l'utilisateur connecté
                let token = req.headers.authorization.replace(/Bearer /g, '');
                let decryptToken = jsonwebtoken.decode(token, process.env.JWT_SECRET);
                let id = decryptToken.sub;
                let user = await User.findById(decryptToken.sub);

                if (roles.includes(user.role)) {
                    next()
                } else {
                    return res.status(401).json({ message: 'Unauthorized' })
                }

            } catch (e) {

                return res.status(403).json({ message: "Missing token" })

            }

        }

    }




}