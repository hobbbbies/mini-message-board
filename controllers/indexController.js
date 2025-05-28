const { getMessageByUser, links, messages } = require('../data');

function createMessage(req, res) {
    messages.push( {text: req.body.msg, user: req.body.name, added: new Date()});
    res.redirect("/");
}

function getMessage(req, res) {
    const { user } = req.params;
    const message = getMessageByUser(user);
    res.render('message', { title: "Message", links: links, message: message });
}

module.exports = { createMessage, getMessage };