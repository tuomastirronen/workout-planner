import React from 'react'
import { connect } from 'react-redux'
import { showRoutine } from './../reducers/routineReducer'
import { Message } from 'semantic-ui-react'

class Routine extends React.Component {
  componentDidMount () {
    console.log('Routine did mount')
  }

  showRoutineById = () => {
    console.log('showRoutineById')
    console.log(this.props.routine.id)
    this.props.showRoutine(this.props.user.user.id, this.props.routine.id)
  }

  render () {

    return (
      <Message
        onClick={this.showRoutineById}
        attached
        header={this.props.routine.weekday}
        content={this.props.routine.name}
        icon='content'
        info
      />
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