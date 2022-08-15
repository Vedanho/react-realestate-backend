const Apartment = require("../models/Apartment.model")

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
      } = req.body

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
      })

      return res.json(apartment)
    } catch (error) {
      return res.status(401).json(error.message)
    }
  },
  getApartment: async (req, res) => {
    try {
      const apartments = await Apartment.find()
        .populate("realtor")
        .populate({ path: "reviews.user" })

      return res.json(apartments)
    } catch (error) {
      return res.status(401).json(error.message)
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
      } = req.body
      const newApartment = await Apartment.findByIdAndUpdate(
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
      )

      return res.json(newApartment)
    } catch (error) {
      return res.status(401).json(error.message)
    }
  },
  deleteApartment: async (req, res) => {
    await Apartment.findByIdAndRemove(req.params.id)

    return res.json("Квартира удалена")
  },
  getApartmentById: async (req, res) => {
    const apartment = await Apartment.findById(req.params.id)
      .populate("realtor")
      .populate({ path: "reviews.user" })

    return res.json(apartment)
  },
  addComment: async (req, res) => {
    try {
      const apartment = await Apartment.findByIdAndUpdate(
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
      )

      // const apartments = await Apartment.find().populate({
      //   path: "reviews.user",
      // });

      return res.json(apartment)
    } catch (error) {
      return res.status(401).json(error.toString())
    }
  },
}
