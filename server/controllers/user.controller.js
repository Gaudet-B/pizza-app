const { User } = require('../models/user.model')

module.exports.newUser = (req, res) => {
    console.log(req.body.formState)
    User.create(req.body.formState)
        .then(newUser => res.json(newUser))
        .catch(err => res.status(400).json(err))
}

module.exports.findAll = (req, res) => {
    User.find()
        .then(allUsers => res.json(allUsers))
        .catch(err => res.json(err))
}

module.exports.deleteAll = (req, res) => {
    User.deleteMany(req.body)
        .then(confirmation => res.json(confirmation))
        .catch(err => res.status(400).json(err))
}