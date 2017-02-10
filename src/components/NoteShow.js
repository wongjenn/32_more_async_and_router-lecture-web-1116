import React from 'react'
import { connect } from 'react-redux'

function NoteShow( props ){
  return (
    <div>
      <h2>{ props.note.title }</h2>
    </div>)
}

function mapStateToProps(state){
  const note = state.notes.find( note => note.id === state.currentNote ) || {}

  return {
    note: note
  }
}

export default connect( mapStateToProps )( NoteShow )
