const { Router } = require("express");

const router = Router();

router.use(require("./realtors.route"));

module.exports = router;
