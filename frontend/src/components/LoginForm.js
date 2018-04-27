import React from 'react'
import { connect } from 'react-redux'

import { auth } from './../reducers/userReducer'

import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

class LoginForm extends React.Component {

  // login = (event) => {
  //   event.preventDefault()
  //   //const user = event.target.username.value
  //   //let password = event.target.password.value
  //   this.props.loginUser( {
  //     username: event.target.username.value,
  //     password: event.target.password.value
  //   })

  //   // debug
  //   window.localStorage.setItem('loggedUser', JSON.stringify({ username: event.target.username.value }))

  //   console.log(event.target.username.value)
  //   event.target.username.value = ''
  //   event.target.password.value = ''
  // }

  submitHandler = (event) => {
    event.preventDefault()
    //this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value)
    this.props.onAuth(event.target.username.value, event.target.password.value)
  }

  render() {
    console.log('login form props ', this.props)
    return (
      <div className='login-form'>      
      <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>              
              {' '}Log-in to your account
            </Header>
            <div>
              <Form size='large' onSubmit={this.submitHandler}>
              <Segment stacked>     
                <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                name='username'
                placeholder='E-mail address'
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                name='password'
                type='password'
              />
              <Button color='teal' fluid size='large'>Login</Button>
            </Segment>
              </Form>
            </div>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authData.token !== null
    //loading: state.auth.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password) => dispatch(auth(email, password))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm)