const Realtor = require("../models/Realtor.model");

module.exports.realtorController = {
  getRealtors: async (req, res) => {
    try {
      const realtors = await Realtor.find().populate({path: "reviews.user"});
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
      const realtors = await Realtor.find(req.params.id).populate({path: "reviews.user"});
      res.json(realtors);
    } catch (error) {
      return res.status(401).json(error.toString());
    }
  },
};
