const { Router } = require("express");

const router = Router();

router.use(require("./apartment.route"));

router.use(require("./realtors.route"));

router.use(require("./bookings.route"));
 

module.exports = router;
