import React from 'react'
import io from 'socket.io-client'
import { USER_CONNECTED, LOG_OUT } from '../Events'
import LoginForm from './LoginForm'
const socketUrl = 'http://192.168.0.20:3231'

class Layout extends React.Component {

  state = {
    socket: null,
    user: null
  }

  componentWillMount(){
    this.initSocket()
  }

  //////////////////////// CONNECTS TO AND INITIALIZES SOCKET
  initSocket = () => {
    const socket = io(socketUrl)
    socket.on('connect', ()=>{
      console.log('Connected');
    })
    this.setState({
      socket: socket
    })
  }

  setUser = (user) => {
    this.state.socket.emit(USER_CONNECTED, user)
    this.setState({
      user: user
    })
  }

  logout = () => {
    this.state.socket.emit(LOG_OUT)
    this.setState({
      user:null
    })
  }

  render(){
    return (
      <div className='container'>
        <LoginForm socket={this.state.socket} setUser={this.setUser}/>
      </div>
    )
  }
}

export default Layout
