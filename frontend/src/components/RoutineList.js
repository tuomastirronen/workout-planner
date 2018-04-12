import React from 'react'
import { connect } from 'react-redux'
import Routine from './Routine'
import { listRoutines, showRoutine } from './../reducers/routineReducer'
import { Container, Header} from 'semantic-ui-react'

class RoutineList extends React.Component {
  componentDidMount () {
    //console.log('routineList user: ', this.props.user)
    this.props.listRoutines(this.props.user.user.id)
  }

  render () {
    
    // return (
    //   <div>
    //     <h1>My Routines</h1>
    //     <ul>
    //       {this.props.routines.map(routine =>
    //         <Routine
    //           key={routine.id}
    //           routine={routine}
    //         />
    //       )}
    //     </ul>
    //   </div>
    // )

    return (
      <Container>
        <Header as='h2' color='teal' textAlign='center'>              
          {' '}My Routines
        </Header>
        {this.props.routines.map(routine =>
            <Routine
              key={routine.id}
              routine={routine}
            />
        )}
      </Container>
    )
  }
}

// const RoutineList = (props) => (
//   <div>
//     <h1>My Routines</h1>
//     <ul>
//       {props.routines.map(routine =>
//         <Routine
//           key={routine.id}
//           routine={routine}
//         />
//       )}
//     </ul>
//   </div>
// )

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

export default connect(
  mapStateToProps,
  { listRoutines }
)(RoutineList)