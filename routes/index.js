const { Router } = require("express");

const router = Router();

router.use(require("./Apartment.route"));

router.use(require("./realtors.route"));
 

module.exports = router;
