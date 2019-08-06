import React from 'react';

import NoteCard from './NoteCard'

function NoteList(props) {

  const renderNoteList = () => {
    let notesJsx = [];

    if (props.params !== undefined) {
      props.notes.forEach(note => {
        if (props.params.match.params.folderId === note.folderId) {
          notesJsx.push(<NoteCard key={note.id} note={note}/>)
        }
      })
    } else {
      props.notes.forEach(note => {
        notesJsx.push(<NoteCard key={note.id} note={note}/>)
      })
    }
    return notesJsx;
  }

  return (
    <div className='note-list'>
      {renderNoteList()}
    </div>
  )
}

export default NoteList