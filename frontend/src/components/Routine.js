import React from 'react'
import { connect } from 'react-redux'

import { showRoutine } from './../reducers/routineReducer'

class Routine extends React.Component {
  componentDidMount () {
    console.log('Routine did mount')
  }
  
  // showRoutine = (event) => {
  //   //event.preventDefault()
  //   this.props.showRoutine(event.target.note.value)
  //   event.target.note.value = ''
  // }

  showRoutineById = () => {
    console.log('showRoutineById')
    console.log(this.props.routine.id)
    this.props.showRoutine(this.props.user.user.id, this.props.routine.id)
  }

  render () {

    return (
      <li>
        <div>
          day: {this.props.routine.weekday} name: {this.props.routine.name}
        </div>
        <div>
          <button onClick={this.showRoutineById}>Start</button>
        </div>
      </li>
    )
  }
}

// const Routine = ({ routine }) => {
//   return (

//   )
// }

const mapStateToProps = (state) => {
  return {
    routines: state.routines,
    user: state.user
  }
}

export default connect(
  mapStateToProps,
  { showRoutine }
)(Routine)

//export default Routine