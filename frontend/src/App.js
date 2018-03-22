import React from 'react'
import { connect } from 'react-redux'

import Notification from './components/Notification'

import { initializeMuscles } from './reducers/muscleReducer'

//import AnecdoteList from './components/AnecdoteList'


class App extends React.Component {
  componentDidMount () {
    this.props.initializeMuscles()
  }

  render() {
    //const anecdotes = this.props.store
    console.log(this.props.initializeMuscles())
    //console.log(this.props.initializeMuscles())
    //console.log(initializeMuscles)
    //console.log(this.props.initializeMuscles)
    return (
      <div>
        <h1>Programming anecdotes</h1>
        <Notification />
        
      </div>
    )
  }
}

export default connect(null, { initializeMuscles } )(App)
