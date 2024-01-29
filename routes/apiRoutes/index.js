const express = require('express');
const router = express.Router();

//candidates
router.use(require('./candidateRoutes'));

//parties
router.use(require('./partyRoutes'));

//voters
router.use(require('./voterRoutes'));


module.exports = router;