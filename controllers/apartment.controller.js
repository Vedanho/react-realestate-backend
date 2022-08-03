const Apartment = require("../models/Apartment.model");

module.exports.apartmentController = {
  createApartment: async (req, res) => {
    try {
      const {
        price,
        location,
        description,
        image,
        yearOfBuilt,
        size,
        dateOfDownload,
        garage,
        bathroom,
        bedroom,
        reviews,
        realtor,
        status,
        house
      } = req.body;

      const apartment = await Apartment.create({
        price,
        location,
        description,
        image,
        yearOfBuilt,
        size,
        dateOfDownload,
        garage,
        bathroom,
        bedroom,
        reviews,
        realtor,
        status,
        house
      });

      return res.json(apartment);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  },
  getApartment: async (req, res) => {
    try {
      const apartments = await Apartment.find().populate("user");

      return res.json(apartments)
    } catch (error) {
      return res.status(401).json(error.message);
    }
  },
  updateApartment: async (req, res) => {
    try {
      const {
        price,
        location,
        description,
        image,
        yearOfBuilt,
        size,
        date,
        garage,
        dateOfDownload,
        bathroom,
        bedroom,
        reviews,
        realtor,
        status,
        house
      } = req.body;
      const newApartmnet = await Apartment.findByIdAndUpdate(
        req.params.id,
        {
          price,
          location,
          description,
          image,
          yearOfBuilt,
          size,
          date,
          sale,
          rent,
          garage,
          bathroom,
          bedroom,
          reviews,
          realtor,
          status,
          house,
          dateOfDownload
        },
        { new: true }
      );

      return res.json(newApartmnet);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  },
  deleteApartment: async (req, res) => {
   await Apartment.findByIdAndRemove(req.params.id);

    return res.json("Квартира удалена");
  },
};
