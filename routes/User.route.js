const { Router } = require("express")
const { userController } = require("../controllers/user.controller")
const router = Router()

router.post("/registration", userController.userRegistration)
router.post("/login", userController.userLogin)
router.post("/logout", userController.userLogout)
router.get("/activate/:link", userController.tokenActivate)
router.get("/refresh", userController.tokenRefresh)
router.get("/users", userController.getUsers)

module.exports = router
