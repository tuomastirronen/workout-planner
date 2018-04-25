import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// import Navigation from './components/Navigation.js'

import MuscleList from './components/MuscleList.js'
import LoginForm from './components/LoginForm.js'

import { loginUser, logoutUser } from './reducers/userReducer'

import { Container, Grid, Menu, Dropdown, Image } from 'semantic-ui-react'
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
      console.log(this.props.user)
    }
  }

  logout = (event) => {
    event.preventDefault()    
    this.props.logoutUser()
  }

  render() {
    
    // TODO siirrä eristettyyn komponenttiin
    const navigation = () => (
      <div>      
        <Menu fixed='top' inverted>
            <Container>
            <Menu.Item as='a' header>
                <Image
                size='mini'
                src='/logo.png'
                style={{ marginRight: '1.5em' }}
                />
                Workout Planner
            </Menu.Item>            
            <Menu.Item as='a' onClick={this.logout}>Logout</Menu.Item>         
            </Container>
            </Menu>
      </div>
    )

    return (
      <Container style={{ paddingTop: '5em' }}>      
        { this.props.user === null ?
          <LoginForm /> : (<div>      
            { navigation() }
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