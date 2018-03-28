import React from 'react'
import { connect } from 'react-redux'

import { loginUser } from './../reducers/userReducer'

import { Grid } from 'semantic-ui-react'

class LoginForm extends React.Component {

  login = (event) => {
    event.preventDefault()
    //const user = event.target.username.value
    //let password = event.target.password.value
    this.props.loginUser( { username: event.target.username.value })
    console.log(event.target.username.value)
    event.target.username.value = ''
  }

  render() {
    return (
      <div>
        <Grid.Column>
          <div>
            <h2>Kirjaudu</h2>

            <form onSubmit={this.login}>
              <div>
                Email
                <input
                  name="username"
                  type="text"
                />
              </div>
              <div>
                Salasana
                <input
                  name="password"
                  type="password"
                />
              </div>
              <button type="submit">kirjaudu</button>
            </form>
          </div>
        </Grid.Column>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(
  mapStateToProps,
  { loginUser }
)(LoginForm)