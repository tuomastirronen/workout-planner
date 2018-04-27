import React from 'react'
import { connect } from 'react-redux'
import { listRoutines } from './../reducers/routineReducer'
import { Container, Header, Message} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class RoutineList extends React.Component {
  componentDidMount () {    
    //this.props.listRoutines(this.props.user.user.id)
  }

  render () {
    return (
      <Container>
        <Header as='h2' color='teal' textAlign='center'>
          {' '}My Routines
        </Header>
        {this.props.routines.map(routine =>
          <Link to={`/routines/${routine.id}`}>
            <Message              
              attached
              header={routine.weekday}
              content={routine.name}
              icon='child'
              info
            />
          </Link>
        )}
      </Container>
    )
  }
}

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