import React from 'react'
import { connect } from 'react-redux'
import Muscle from './Muscle'

const MuscleList = (props) => (
  <ul>
    {props.visibleMuscles.map(muscle =>
      <Muscle
        key={muscle.id}
        muscle={muscle}
      />
    )}
  </ul>
)

const musclesToShow = (notes, filter) => {
  if (filter === 'ALL') {
    return notes
  }
  return filter === 'IMPORTANT'
    ? notes.filter(note => note.important)
    : notes.filter(note => !note.important)
}

const mapStateToProps = (state) => {
  return {
    visibleMuscles: musclesToShow(state.muscles, state.filter)
  }
}

export default connect(
  mapStateToProps,
)(MuscleList)