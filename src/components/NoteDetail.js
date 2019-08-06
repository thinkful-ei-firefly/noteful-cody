import React from 'react';

import NoteCard from './NoteCard'

import '../style/NoteDetail.css'

function NoteDetail(props) {
  console.log(props.params)
  return (
    <div className='note-detail'>
      <aside>
        <button onClick={props.params.history.goBack}>Go Back!</button>
        <h3>Folder</h3>
        <h4>{props.folder.name}</h4>
      </aside>
      <section>
        <NoteCard note={props.note} />
      </section>
    </div>
  )
}

export default NoteDetail