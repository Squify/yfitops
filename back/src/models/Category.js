import {Schema, model} from "mongoose";

const CategorySchema = new Schema({

    name: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    }

});

export default model('Category', CategorySchema);