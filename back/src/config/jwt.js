import dotenv from "dotenv";
dotenv.config();
import expressJwt from "express-jwt";
import User from "../models/User";

const jwt = () => {
    const secret = process.env.JWT_SECRET;
    // console.log(secret);
    return expressJwt({
        secret: secret,
        // algorithms: ['RS256'],
        algorithms: ['HS256'],
        isRevoked
    })
        .unless({
            //Les routes qui n'ont pas besoin d'un token
            path: [
                // /^\/uploads\/.*/,
                /^\/users\/auth/,
                /^\/users\/register/,
                /^\/api-docs\/.*/
            ]
        });
};

async function isRevoked(req, payload, done) {
    const user = await User.findById(payload.sub);

    if (!user) return done(null, true);

    done();
}

export default jwt;