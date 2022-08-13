const Apartment = require("../models/Apartment.model");

module.exports.apartmentController = {
  createApartment: async (req, res) => {
    try {
      const {
        name,
        price,
        location,
        city,
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
        house,
      } = req.body;

      const apartment = await Apartment.create({
        name,
        price,
        location,
        city,
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
        house,
      });

      return res.json(apartment);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  },
  getApartment: async (req, res) => {
    try {
      const apartments = await Apartment.find()
        .populate("realtor")
        .populate({ path: "reviews.user" });

      return res.json(apartments);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  },
  updateApartment: async (req, res) => {
    try {
      const {
        name,
        price,
        location,
        city,
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
        house,
        geolocation,
      } = req.body;
      const newApartmnet = await Apartment.findByIdAndUpdate(
        req.params.id,
        {
          name,
          price,
          location,
          city,
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
          dateOfDownload,
          geolocation,
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
  getApartmentById: async (req, res) => {
    const apartment = await Apartment.findById(req.params.id)
      .populate("realtor")
      .populate({ path: "reviews.user" });

    return res.json(apartment);
  },
};
