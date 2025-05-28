function getMessageByUser(user) {
  return messages.find((message) => message.user === user);
}

const links = [
    { href: "/", text: "Hub" },
    { href: "/new", text: "New Messages" }
]

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

module.exports = { getMessageByUser, links, messages };