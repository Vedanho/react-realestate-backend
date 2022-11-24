const { Router } = require("express");
const { apartmentController } = require("../controllers/apartment.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.post("/apartment", apartmentController.createApartment);
router.get("/apartment", apartmentController.getApartment);
router.patch("/apartment/:id", apartmentController.updateApartment);
router.delete("/apartment/:id", apartmentController.deleteApartment);
router.get("/apartment/:id", apartmentController.getApartmentById);
router.patch("/apartment/review/:id",authMiddleware , apartmentController.addComment);

module.exports = router;


//Изменил название файла
