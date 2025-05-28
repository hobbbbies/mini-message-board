const express = require('express');
const router = express.Router();
const { getMessage } = require('../controllers/indexController');

router.get("/:user", getMessage);

module.exports = router;