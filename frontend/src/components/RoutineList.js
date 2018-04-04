import React from 'react'
import { connect } from 'react-redux'
//import Muscle from './Muscle'
import { listRoutines } from './../reducers/routineReducer'


const RoutineList = (props) => (
  // <ul>
  //   {props.visibleMuscles.map(muscle =>
  //     <Muscle
  //       key={muscle.id}
  //       muscle={muscle}
  //     />
  //   )}
  // </ul>
  <div>
    <h1>Routines</h1>
    <p>{console.log(this.props.listRoutines())}</p>
    <p>{console.log(props.routines)}</p>
  </div>
)

const mapStateToProps = (state) => {
  return {
    routines: state.routines
  }
}

export default connect(
  mapStateToProps,
)(RoutineList)