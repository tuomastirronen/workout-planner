import React from 'react'
import { connect } from 'react-redux'

import MuscleList from './components/MuscleList.js'

import { initializeMuscles } from './reducers/muscleReducer'

import loginService from './services/login'

import { Container, Grid } from 'semantic-ui-react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      newNote: '',
      showAll: true,
      error: null,
      username: '',
      password: '',
      user: null
    }
  }

  componentWillMount() {
    this.props.initializeMuscles()
  }

  login = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username: this.state.username,
        password: this.state.password
      })

      this.setState({ username: '', password: '', user })
    } catch (exception) {
      this.setState({
        error: 'käyttäjätunnus tai salasana virheellinen',
      })
      setTimeout(() => {
        this.setState({ error: null })
      }, 5000)
    }
  }

  logout = (event) => {
    event.preventDefault()
    this.setState({ user: null })
  }


  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value })
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value })
  }

  render() {
    const loginForm = () => (
      <Grid.Column>
        <div>
          <h2>Kirjaudu</h2>

          <form onSubmit={this.login}>
            <div>
              käyttäjätunnus
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleUsernameChange}
              />
            </div>
            <div>
              salasana
              <input
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </div>
            <button type="submit">kirjaudu</button>
          </form>
        </div>
      </Grid.Column>
    )
    const logoutButton = () => (
      <button onClick={this.logout}>Logout</button>
    )

    const muscleList = () => (
      <Grid.Column>
        {logoutButton()}
        <h1>Muslces</h1>
        <MuscleList />
      </Grid.Column>
    )

    return (
      <Container>
        <Grid columns={1}>
          <Grid.Row>
            {this.state.user === null ?
              loginForm() :
              muscleList()
            }
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default connect(
  null,
  { initializeMuscles }
)(App)