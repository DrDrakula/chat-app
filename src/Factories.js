const uuidv4 = require('uuid/v4')

const createUser = ({name = ''} = {}) => ({
  id:uuidv4(),
  name: name
})

const createMessage = ({message = '', sender = ''} = {}) => ({
  id: uuidv4(),
  time: getTime(new Date(Date.now())),
  message: message,
  sender: sender
})


const getTime = (date) => {
  return `${date.getHours()}:${('0' + date.getMinutes()).slice(-2)}`
}

const createChat = ({messages = [], name = 'Community', users = []} = {}) => ({
  id: uuidv4(),
  name: name,
  messages: messages,
  users: users,
  typingUsers: []
})

module.exports = {
  createMessage,
  createChat,
  createUser
}
