const express = require('express');
const router = express.Router();
const { links } = require('../data');
const { messages } = require('../data')
const createMessage = require('../controllers/indexController');

router.get("/", (req, res) => {
  res.render('index', { title: "Hub", links: links, messages: messages });
});

router.get("/new", (req, res) => {
    res.render('newMsg', { links: links, title: "New Messages" })
});

router.post("/new", createMessage); 

module.exports = router;