const { Router } = require("express")
const { userController } = require("../controllers/user.controller")
const router = Router()

const { body } = require("express-validator")
const authMiddleware = require("../middlewares/auth.middleware")

router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 32 }),
  userController.userRegistration
)
router.post("/login", userController.userLogin)
router.post("/logout", userController.userLogout)
router.get("/activate/:link", userController.tokenActivate)
router.get("/refresh", userController.tokenRefresh)
router.get("/users", userController.getUsers)
router.get("/user/:id", userController.getUserById)
router.patch("/users/:id/favorite", userController.addFavorite)
router.patch("/users/:id/favorite/remove", userController.remFavorite)

module.exports = router
