const { messages } = require('../data');

function createMessage(req, res) {
    messages.push( {text: req.body.msg, user: req.body.name, added: new Date()});
    res.redirect("/");
}

module.exports = createMessage