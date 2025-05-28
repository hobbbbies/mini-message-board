const express = require('express');
const router = express.Router();
const { links, messages } = require('../data');

router.get("/", (req, res) => {
  res.render('index', { title: "Hub", links: links, messages: messages });
});

module.exports = router;