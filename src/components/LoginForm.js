import React from 'react'
import { VERIFY_USER } from '../Events'
class LoginForm extends React.Component {

  state = {
    nickname: '',
    error:''
  }

  handleChange = (event) => {
    this.setState({
      nickname: event.target.value
    })
  }

  setError = (error) => {
    this.setState({
      error: error
    })
  }

  setUser = ({user, isUser}) => {
    if(isUser){
      this.setError('Username is taken')
    }else{
      this.props.setUser(user)
      this.setError('')
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.socket.emit(VERIFY_USER, this.state.nickname, this.setUser)
  }

  render () {
    return(
      <div className='login'>
        <form onSubmit={this.handleSubmit} className='login-form'>
          <label htmlFor="nickname">
            <h2>Enter Username</h2>
          </label>
          <input
            ref={(input) => {this.textInput = input}}
            type='text'
            id="nickname"
            value={this.state.nickname}
            onChange={this.handleChange}
            placeholder='Username' />
          <div className='error'>{this.state.error ? this.state.error : null}</div>
        </form>
      </div>
    )
  }
}

export default LoginForm;
