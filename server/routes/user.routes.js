const UserController = require('../controllers/user.controller')

module.exports = app => {
    app.post("/api/user/register", UserController.newUser)
    app.get("/api/users", UserController.findAll)
    // app.get("/api/users/:id", UserController.oneUser)
    // app.put("/api/users/update/:id", UserController.updateUser)
    // app.delete("/api/users/:id", UserController.deleteUser)
    // app.delete("/api/users/delete", UserController.deleteAll)
}