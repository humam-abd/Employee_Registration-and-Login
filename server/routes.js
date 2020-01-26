const router = require("express").Router();
router.use('/route', require('../server/routes/emproute'))
module.exports = router;
