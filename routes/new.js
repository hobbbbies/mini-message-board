const express = require('express');
const router = express.Router();
const { links } = require('../data');
const { createMessage } = require('../controllers/indexController');

router.get("/", (req, res) => {
  res.render('newMsg', { links: links, title: "Create New Message" });
});

router.post("/", createMessage); 

module.exports = router;