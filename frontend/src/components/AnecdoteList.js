import React from 'react'

class AnecdoteList extends React.Component {
  render() {
    const anecdotes = this.props.store.getState()
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.name}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default AnecdoteList
