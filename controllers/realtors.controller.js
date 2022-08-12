const Realtor = require("../models/Realtor.model");

module.exports.realtorController = {
  getRealtors: async (req, res) => {
    try {
      const realtors = await Realtor.find().populate({ path: "reviews.user" });
      res.json(realtors);
    } catch (e) {
      res.json({ error: e.message });
    }
  },

  createRealtors: async (req, res) => {
    try {
      const realtors = await Realtor.create({
        name: req.body.name,
        email: req.body.email,
        login: req.body.login,
        password: req.body.password,
        rating: req.body.rating,
        reviews: req.body.reviews,
        image: req.body.image,
        phoneNumber: req.body.phoneNumber,
        description: req.body.description,
        experience: req.body.experience,
        officeHours: req.body.officeHours,
        officeAdress: req.body.officeAdress,
        socialNetworks: req.body.socialNetworks,
      });
      res.json(realtors);
    } catch (e) {
      res.json({ error: e.message });
    }
  },

  updateRealtor: async (req, res) => {
    try {
      const realtors = await Realtor.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        email: req.body.email,
        login: req.body.login,
        password: req.body.password,
        rating: req.body.rating,
        reviews: req.body.reviews,
        image: req.body.image,
        phoneNumber: req.body.phoneNumber,
        description: req.body.description,
        experience: req.body.experience,
        officeHours: req.body.officeHours,
        officeAdress: req.body.officeAdress,
        socialNetworks: req.body.socialNetworks,
      });
      res.json(realtors);
    } catch (e) {
      res.json({ error: e.message });
    }
  },

  deleteRealtor: async (req, res) => {
    try {
      const realtors = await Realtor.findByIdAndRemove(req.params.id);
      res.json(realtors);
    } catch (e) {
      res.json({ error: e.message });
    }
  },
  getRealtorById: async (req, res) => {
    try {
      const realtors = await Realtor.findById(req.params.id).populate({
        path: "rating.user",
      });
      res.json(realtors);
    } catch (error) {
      return res.status(401).json(error.toString());
    }
  },
  setRating: async (req, res) => {
    try {
      const realtor = await Realtor.findByIdAndUpdate(
        req.params.id,
        {
          $push: { rating: { user: req.body.user, rate: req.body.rate } },
        },
        { new: true }
      );

      return res.json(realtor);
    } catch (error) {
      return res.status(401).json(error.toString());
    }
  },
  addComment: async (req, res) => {
    try {
      const comment = await Realtor.findByIdAndUpdate(
        req.params.id,
        {
          $push: {
            reviews: {
              review: req.body.review,
              advantages: req.body.advantages,
              disadvantages: req.body.disadvantages,
              user: req.body.user,
            },
          },
        },
        { new: true }
      );

      return res.json(comment);
    } catch (error) {
      return res.status(401).json(error.toString());
    }
  },
};
