import multer from "multer";
import path from 'path';
import fs from 'fs';
import Utils from "./Utils";

export default class Multer {

    static upload(uploadPath, identifier = null) {
        return (req, res, next) => {
            // console.log(identifier);
            // let subDir = identifier.split("_")[0];

            const storage = multer.diskStorage({
                destination: (req, file, cb) => {
                    if (!fs.existsSync(`./uploads`))
                        fs.mkdirSync(`./uploads/`);
                    if (!fs.existsSync(`./uploads/${uploadPath}`))
                        fs.mkdirSync(`./uploads/${uploadPath}`);
                    if (/^image\/.*/.test(file.mimetype)) {
                        // if (subDir === "image") {
                        if (!fs.existsSync(`./uploads/${uploadPath}/images`))
                            fs.mkdirSync(`./uploads/${uploadPath}/images`);
                        cb(null, `./uploads/${uploadPath}/images`)
                    } else if (/^audio\/.*/.test(file.mimetype)) {
                        // } else if (subDir === "sound") {
                        if (!fs.existsSync(`./uploads/${uploadPath}/sounds`))
                            fs.mkdirSync(`./uploads/${uploadPath}/sounds`);
                        cb(null, `./uploads/${uploadPath}/sounds`)
                    } else {
                        console.log(file.mimetype);
                        cb(null, `./uploads/${uploadPath}`)
                    }
                    // cb(null, `./uploads/${uploadPath}/${subDir}`)
                },
                filename: (req, file, cb) => {
                    // console.log(req.files);
                    let name = Utils.generateStringRandom() + path.extname(file.originalname);

                    if (/^image\/.*/.test(file.mimetype)) {
                        // if (subDir === "image") {
                        req.body["image_path"] = `uploads/${uploadPath}/images/${name}`;

                    } else if (/^audio\/.*/.test(file.mimetype)) {
                        // } else if (subDir === "sound") {
                        req.body["sound_path"] = `uploads/${uploadPath}/sounds/${name}`;

                    } else {
                        console.log(file.mimetype);
                        req.body[identifier] = `uploads/${uploadPath}/${name}`;
                    }

                    cb(null, name)
                }
            });

            let upl = multer({ storage }).any();

            upl(req, res, next, () => next());

        }
    }

}