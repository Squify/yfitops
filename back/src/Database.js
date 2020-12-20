import { connect } from "mongoose";

export default class Database {

    static init(url, options = {}) {
        options = Object.assign({}, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, options);

        return connect(url, options);

    }

}