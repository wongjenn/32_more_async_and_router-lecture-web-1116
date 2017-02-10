import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './components/App'
import NoteApp from './components/NoteApp'
import About from './components/About'
import NoteShow from './components/NoteShow'

export default (
  <Route path='/' component={App} >
    < IndexRoute component={NoteApp} />
    < Route path='notes' component={NoteApp} >
      < Route path=':id' component={NoteShow} />
    < /Route>
    < Route path='about' component={About} />
  </Route>
)
