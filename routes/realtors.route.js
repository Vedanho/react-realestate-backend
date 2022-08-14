const { Router } = require("express");

const { realtorController } = require("../controllers/realtors.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.get("/realtors", realtorController.getRealtors);
router.post("/realtors", realtorController.createRealtors);
router.patch("/realtors/:id", realtorController.updateRealtor);
router.delete("/realtors/:id", realtorController.deleteRealtor);
router.get("/realtors/:id", realtorController.getRealtorById);
router.patch("/realtors/rating/:id", authMiddleware, realtorController.setRating);
router.patch("/realtors/review/:id", authMiddleware, realtorController.addComment);

module.exports = router;
