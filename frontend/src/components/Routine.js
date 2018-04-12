import React from 'react'
import { connect } from 'react-redux'
import { showRoutine } from './../reducers/routineReducer'
import { Container, Header, Message, Table } from 'semantic-ui-react'

class Routine extends React.Component {  
  componentDidMount () {    
    this.props.showRoutine(this.props.user.user.id, this.props.routineId)    
  }

  render () {    
    console.log(this.props)
    return (
      <Container>
        <Header as='h2' color='teal' textAlign='center'>
          {' '}Routine
        </Header>
        <Message
          attached
          header={this.props.routine.weekday}
          content={this.props.routine.name}
          icon='child'
          info
        />
        <Table attached='bottom'>
        <Table.Header>
          <Table.HeaderCell>Exercise</Table.HeaderCell>
          <Table.HeaderCell>Sets</Table.HeaderCell>
          <Table.HeaderCell>Repetitions</Table.HeaderCell>
          <Table.HeaderCell>Weight</Table.HeaderCell>
        </Table.Header>
        <Table.Body>
        {/* {this.props.routine.exercises.map(exercise => */}
          <Table.Row>
            <Table.Cell>Barbell Full Squat</Table.Cell>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>6</Table.Cell>
            <Table.Cell>90 kg</Table.Cell>
          </Table.Row>
        {/* )} */}
        </Table.Body>
      </Table>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    routines: state.routines,
    routine: state.routine,    
    user: state.user
  }
}

export default connect(
  mapStateToProps,
  { showRoutine }
)(Routine)