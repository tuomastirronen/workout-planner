import React from 'react'
import { connect } from 'react-redux'
import { showRoutine } from './../reducers/routineReducer'
import { Container, Header, Segment, Menu, Message, Table } from 'semantic-ui-react'

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
      <Container>
        <Header as='h2' color='teal' textAlign='center'>
          {' '}Routine
        </Header>
        <Message
          attached
          header='Routine'
          content='Message'
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
          <Table.Row>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      </Container>
    )
  }
}

// const Routine = ({ routine }) => {
//   return (

//   )
// }

const mapStateToProps = (state) => {
  return {
    routine: state.routine,
    routines: state.routines,
    user: state.user
  }
}

export default connect(
  mapStateToProps,
  { showRoutine }
)(Routine)

//export default Routine