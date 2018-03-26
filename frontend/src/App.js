import React from 'react'
import { connect } from 'react-redux'

import MuscleList from './components/MuscleList.js'

import { initializeMuscles } from './reducers/muscleReducer'

import { Container, Grid } from 'semantic-ui-react'

class App extends React.Component {
  componentWillMount() {
    this.props.initializeMuscles()
  }

  render() {
    return (
      <Container>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column>
              <div>
                <h1>Muscles</h1>
                <MuscleList />
              </div>
            </Grid.Column>
            <Grid.Column>
              <div>
                <h1>Muscles</h1>
                <MuscleList />
              </div>
            </Grid.Column>
            <Grid.Column>
              <div>
                <h1>Muscles</h1>
                <MuscleList />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default connect(
  null,
  { initializeMuscles }
)(App)