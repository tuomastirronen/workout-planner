import React from 'react'
import { Message } from 'semantic-ui-react'

const Routine = ({ routine }) => {
  return (    
    <Message
      attached
      header={routine.weekday}
      content={routine.name}
      icon='help circle'
      info
    />
  )
}

export default Routine