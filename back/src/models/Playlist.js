import { Schema, model } from "mongoose";

const PlaylistSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    public: {
        type: Boolean,
        default: false
    },
    musics: [{
        type: Schema.Types.ObjectId,
        ref: 'Music'
    }],
    image_path: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    }

});

export default model('Playlist', PlaylistSchema);