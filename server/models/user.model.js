const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, ""]
    },
    lastName: {
        type: String,
        required: [true, ""]
    },
    email: {
        type: String,
        required: [true, ""]
    },
    password: {
        type: String,
        required: [true, ""]
    },
    address: {
        street: {
            type: String,
            required: [false]
        },
        city: {
            type: String,
            required: [false]
        },
        state: {
            type: String,
            required: [false],
            min: [2, ""],
            max: [2, ""]
        },
        zip: {
            type: Number,
            required: [false],
            min: [5, ""],
            max: [5, ""]
        }
    }
}, { timestamps: true })

module.exports.User = mongoose.model("User", UserSchema)