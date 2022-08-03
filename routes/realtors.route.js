const { Router } = require("express");

const { realtorController } = require("../controllers/realtors.controller");

const router = Router();

router.get("/realtors", realtorController.getRealtors);
router.post("/realtors", realtorController.createRealtors);
router.patch("/realtors/:id", realtorController.updateRealtor);
router.delete("/realtors/:id", realtorController.deleteRealtor);
router.get("/realtors/:id", realtorController.getRealtorById);

module.exports = router;
