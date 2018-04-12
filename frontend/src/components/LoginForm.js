import React from 'react'
import { connect } from 'react-redux'

import { loginUser } from './../reducers/userReducer'

import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class LoginForm extends React.Component {

  login = (event) => {
    event.preventDefault()
    //const user = event.target.username.value
    //let password = event.target.password.value
    this.props.loginUser( {
      username: event.target.username.value,
      password: event.target.password.value
    })

    // debug
    window.localStorage.setItem('loggedUser', JSON.stringify({ username: event.target.username.value }))

    console.log(event.target.username.value)
    event.target.username.value = ''
    event.target.password.value = ''
  }

  render() {
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
              <Form size='large' onSubmit={this.login}>
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
    user: state.user
  }
}

export default connect(
  mapStateToProps,
  { loginUser }
)(LoginForm)