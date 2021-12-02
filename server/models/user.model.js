const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const UserSchema = mongoose.Schema({

    firstName: {
        type: String,
        required: [true, "First Name is required"]
    },

    lastName: {
        type: String,
        required: [true, "Last Name is required"]
    },

    email: {
        type: String,
        required: [true, "email Address is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },

    password: {
        type: String,
        required: [true, "password is required"],
        minLength: [8, "password must be at least 8 characters"]
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
            minLength: [2, "please enter a valid, two-digit state abbreviation"],
            maxLength: [2, "please enter a valid, two-digit state abbreviation"]
        },
        zip: {
            type: String,
            required: [false],
            minLength: [5, "please enter a valid, five-digit zip code"],
            maxLength: [5, "please enter a valid, five-digit zip code"]
        }
    }

}, { timestamps: true })

// virtual schema attribute for password confirmation when registering
UserSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value)

// before validation, check that passwords match
UserSchema.pre("validate", function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate("confirmPassword", "passwords must match")
    }
    next()
})

// before saving a new password, hash it 
UserSchema.pre("save", function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash
            next()
        })
})

module.exports.User = mongoose.model("User", UserSchema)