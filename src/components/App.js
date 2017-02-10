import React, { Component } from 'react'

import NavBar from './NavBar'
import NoteList from './NoteList'
import NoteCreate from './NoteCreate'
import NoteShow from './NoteShow'

export default class App extends Component {
  render(){
    return(
      <div>
        < NavBar href="/" title="Ima Fix Wolves"/>
        <div className='container'>
          <div className='col-md-4'>
            < NoteList />
            < NoteCreate />
          </div>
          <div className='col-md-8'>
            < NoteShow />
          </div>
        </div>
      </div>)
  }
}
