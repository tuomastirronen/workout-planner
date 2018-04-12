import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import MuscleList from './components/MuscleList.js'
import LoginForm from './components/LoginForm.js'

import { loginUser, logoutUser } from './reducers/userReducer'

import { Container, Grid } from 'semantic-ui-react'
import RoutineList from './components/RoutineList.js'
import Routine from './components/Routine.js'

class App extends React.Component {
  constructor(props) {
    super(props)
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

    return (
      <Container style={{ paddingTop: '5em' }}>      
        { this.props.user === null ?
          <LoginForm /> : (<div>      
            { logoutButton() }
            <Router>
              <div>           
                <Route exact path="/" render={() => <RoutineList />} />     
                <Route exact path="/routines/:id" render={({match}) =>
                  <Routine routineId={match.params.id} />}
                />    
              </div>
            </Router>
          </div>)
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