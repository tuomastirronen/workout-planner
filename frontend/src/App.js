import React from 'react'
import { connect } from 'react-redux'

import MuscleList from './components/MuscleList.js'
import LoginForm from './components/LoginForm.js'

import { initializeMuscles } from './reducers/muscleReducer'
import { initializeRoutines } from './reducers/routineReducer'
import { loginUser, logoutUser } from './reducers/userReducer'

import { Container, Grid } from 'semantic-ui-react'
import RoutineList from './components/RoutineList.js'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    //this.props.initializeMuscles()
    //console.log('mount: ', this.props.user)
    //this.props.initializeRoutines(1)

    // const loggedUserJSON = window.localStorage.getItem('loggedUser')
    // console.log('user: ', window.localStorage.getItem('loggedUser'))
    // if (loggedUserJSON) {
    //   const user = JSON.parse(loggedUserJSON)
    //   console.log('json user: ', user)
    //   this.props.loginUser({ user })
      //noteService.setToken(user.token)
    //}
  }

  componentDidMount() {
    console.log("did mount")
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      console.log(user)      
    }
  }

  logout = (event) => {
    event.preventDefault()
    console.log(this.props.user)
    this.props.logoutUser()
  }

  render() {
    

    const logoutButton = () => (
      <div>
        KÄYTTÄJÄTUNNUS.EMAIL is logged in
        <button onClick={this.logout}>Logout</button>
      </div>
    )

    const muscleList = () => (
      <Grid.Column>
        {logoutButton()}
        <h1>Muslces</h1>
        <MuscleList />
      </Grid.Column>
    )

    return (
      <Container style={{ paddingTop: '5em' }}>
        { this.props.user === null ?
          <LoginForm /> :
          <div>
            { logoutButton() }
            <RoutineList />
          </div>
        }
      </Container>
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
  { loginUser, logoutUser }
)(App)