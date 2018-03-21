import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'

import Navbar from './components/Navbar'
import Content from './components/Content'





class App extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <Content />
      </Container>
    )
  }
}

export default App
