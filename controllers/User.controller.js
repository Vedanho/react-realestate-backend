const userService = require("../service/user.service")

const { validationResult } = require("express-validator")
const ApiError = require("../exceptions/api.error")
const User = require("../models/User.model")

module.exports.userController = {
  userRegistration: async (req, res, next) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest("Ошибка при валидации", errors.array()))
      }
      const { login, email, password, role } = req.body
      const userData = await userService.registration(login, email, password,role)

      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      })
      return res.json(userData)
    } catch (e) {
      next(e)
    }
  },

  userLogin: async (req, res, next) => {
    try {
      const { login, password } = req.body
      const userData = await userService.login(login, password)
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      })

      return res.json(userData)
    } catch (e) {
      next(e)
    }
  },

  userLogout: async (req, res, next) => {
    try {
      const { refreshToken } = req.cookies
      const token = await userService.logout(refreshToken)
      res.clearCookie("refreshToken")
      return res.json(token)
    } catch (e) {
      next(e)
    }
  },

  tokenActivate: async (req, res, next) => {
    try {
      const activationLink = req.params.link
      await userService.activate(activationLink)

      return res.redirect(process.env.CLIENT_URL)
    } catch (e) {
      next(e)
    }
  },

  tokenRefresh: async (req, res, next) => {
    try {
      const { refreshToken } = req.cookies

      const userData = await userService.refresh(refreshToken)
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      })
      return res.json(userData)
    } catch (e) {
      next(e)
    }
  },

  getUsers: async (req, res, next) => {
    try {
      const users = await userService.getAllUsers()
      return res.json(users)
    } catch (e) {
      next(e)
    }
  },

  getUserById: async (req, res, next) => {
    try {
      const user = await userService.getUserById()
      return res.json(user)
    } catch (e) {
      next(e)
    }
  },

  addFavorite: async (req, res) => {
    try {
      const users = await User.findByIdAndUpdate(
        req.params.id,
        {
          $push: {
            favorite: req.body.favorite,
          },
        },
        { new: true }
      )
      res.json(users)
    } catch (e) {
      return res.status(401).json({ error: "Ошибка при запросе на изменение" })
    }
  },

  remFavorite: async (req, res) => {
    try {
      const users = await User.findByIdAndUpdate(
        req.params.id,
        {
          $pull: {
            favorite: req.body.favorite,
          },
        },
        { new: true }
      )
      res.json(users)
    } catch (e) {
      return res.status(401).json({ error: "Ошибка при запросе на изменение" })
    }
  },

  changeFirstName: async (req, res) => {
    try {
      const users = await User.findByIdAndUpdate(
        req.params.id,
        {
          firstname: rea.body.firstname,
        },
        { new: true }
      )
      res.json(users)
    } catch (e) {
      return res.status(401).json({ error: "Ошибка при запросе на изменение" })
    }
  },
}
