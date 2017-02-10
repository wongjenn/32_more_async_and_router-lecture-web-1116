import axios from 'axios'

export function addNote(noteTitle){
  const note = axios.post('http://localhost:3000/api/v1/notes', {title: noteTitle, body: ''} )
    .then( response => response.data )

  return {
    type: 'ADD_NOTE',
    payload: note
  }
}

export function fetchNotes(){
  const notes = axios.get('http://localhost:3000/api/v1/notes').then(response => response.data)
  return {
    type: 'FETCH_NOTES',
    payload: notes
  }
}

export function updateCurrentNote(noteId){
  return {
    type: 'UPDATE_CURRENT_NOTE',
    payload: noteId
  }
}
