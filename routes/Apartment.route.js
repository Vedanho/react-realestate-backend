const { Router } = require("express");
const { apartmentController } = require("../controllers/apartment.controller");

const router = Router();

router.post("/apartment", apartmentController.createApartment);
router.get("/apartment", apartmentController.getApartment);
router.patch("/apartment/:id", apartmentController.updateApartment);
router.delete("/apartment/:id", apartmentController.deleteApartment);

module.exports = router
