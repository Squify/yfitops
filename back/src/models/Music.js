import {Schema, model} from "mongoose";

const MusicSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    sound_path: {
        type: String
        // required: true
    },
    image_path: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    created_at: {
        type: Date,
        default: Date.now()
    }

});

export default model('Music', MusicSchema);