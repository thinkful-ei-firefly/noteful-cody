import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import store from './store'

import Header from './components/Header'
import FolderBar from './components/FolderBar'
import NoteList from './components/NoteList'
import NoteDetail from './components/NoteDetail'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      ...store
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Header />
        <main>
          <Route exact path='/' render={() =>
            <FolderBar
              folders={this.state.folders}
            />} />
          <Route exact path='/' render={() =>
            <NoteList notes={this.state.notes} />} />

          <Route exact path='/folder/:folderId' render={() =>
            <FolderBar
              folders={this.state.folders}
            />} />
          <Route exact path='/folder/:folderId' component={(params) =>
            <NoteList
              notes={this.state.notes}
              params={params}
            />} />

          <Route exact path='/note/:noteId' component={(params) =>
            <NoteDetail
              params={params}
              note={this.state.notes.find(note => note.id === params.match.params.noteId)}
              folder={this.state.notes.find(note => { // this seems bad
                if (note.id === params.match.params.noteId) {
                  return this.state.folders.find(folder => note.folderId === folder.id)
                }
              })}
            />
          }
          />
        </main>
      </div>
    );
  }
}

export default App;
