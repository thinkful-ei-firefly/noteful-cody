import React from 'react'
import {Link} from 'react-router-dom'

function NoteCard(props) {

  return (
    <div key={props.note.id} className='note-card'>
      <h3><Link to={`/note/${props.note.id}`}>{props.note.name}</Link></h3>
      <h4>Date Modified: {props.note.modified}</h4>
      <button>Delete</button>
    </div>)
}

export default NoteCard