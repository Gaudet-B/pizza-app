const { User } = require('../models/user.model')

// register new user
module.exports.newUser = (req, res) => {
    User.create(req.body)
        .then(newUser => res.json(newUser))
        .catch(err => res.status(400).json(err))
}

// get all users
module.exports.findAll = (req, res) => {
    User.find()
        .then(allUsers => res.json(allUsers))
        .catch(err => res.json(err))
}

// get one user
module.exports.oneUser = (req, res) => {
    const {id} = req.params
    User.findOne({ _id: id })
        .then(oneUser => res.json(oneUser))
        .catch(err => res.json(err))
}

// update one user
module.exports.updateUser = (req, res) => {
    const {id} = req.params
    User.findOneAndUpdate({ _id: id }, req.body)
        .then(updatedUser => res.json(updatedUser))
        .catch(err => res.json(err))
}

// delete one user
module.exports.deleteUser = (req, res) => {
    const {id} = req.params
    User.deleteOne({ _id: id })
        .then(confirmation => res.json(confirmation))
        .catch(err => res.status(400).json(err))
}