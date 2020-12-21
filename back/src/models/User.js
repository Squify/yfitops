import { Schema, model } from "mongoose";

const UserSchema = new Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: 0
    },
    playlists: [{
        type: Schema.Types.ObjectId,
        ref: 'Playlist'
    }],
    favorites: [{
        type: Schema.Types.ObjectId,
        ref: 'Music'
    }],
    created_at: {
        type: Date,
        default: Date.now()
    }

});

export default model('User', UserSchema);