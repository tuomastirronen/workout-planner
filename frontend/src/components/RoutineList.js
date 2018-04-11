import React from 'react'
import { connect } from 'react-redux'
import Routine from './Routine'
import { listRoutines } from './../reducers/routineReducer'


class RoutineList extends React.Component {
  

  render(props) {
    const routines = props.listRoutines(1)
    return (
      <div>
        <h1>Routines</h1>
        <ul>
          {routines.map(routine =>
            <Routine
              key={routine.id}
              routine={routine}
            />
          )}
        </ul>
      </div>
    )
  }
}

// const RoutineList = (props) => (
//   <div>
//     <h1>Routines</h1>
//     <ul>
//       {props.listRoutines(1).map(routine =>
//         <Routine
//           key={routine.id}
//           routine={routine}
//         />
//       )}
//     </ul>
//   </div>
// )

const mapStateToProps = (state) => {
  return {
    routines: state.routines,
    user: state.user
  }
}

const mapDispatchToProps  = {
  listRoutines
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RoutineList)