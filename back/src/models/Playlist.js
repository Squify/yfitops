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
        required: true,
        default: false
    },
    musics: [{
        type: Schema.Types.ObjectId,
        ref: 'Music'
    }],
    created_at: {
        type: Date,
        default: Date.now()
    }

});

export default model('Playlist', PlaylistSchema);