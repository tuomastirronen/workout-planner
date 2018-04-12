import React from 'react'

const Routine = ({ routine }) => {
  return (
    <li>
      <div>
        day: {routine.weekday} name: {routine.name}
      </div>
      <div>
        start
      </div>
    </li>
  )
}

export default Routine