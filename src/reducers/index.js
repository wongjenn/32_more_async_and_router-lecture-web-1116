import {combineReducers} from 'redux'

import notesReducer from './notesReducer'
import currentNoteReducer from './currentNoteReducer'

const rootReducer = combineReducers({
  notes: notesReducer,
  currentNote: currentNoteReducer
})

// state {
// note: [], // all the notes,
// currentNote: // id of the selected note
// }

export default rootReducer
