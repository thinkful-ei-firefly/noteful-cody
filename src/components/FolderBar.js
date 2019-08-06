import React from 'react'

import { NavLink } from 'react-router-dom'

import '../style/FolderBar.css'

class FolderBar extends React.Component {
  render() {
    return (
      <aside className='folder-bar'>
        <nav>
          <h2>Folders</h2>
          <ul>
            {this.props.folders.map(folder => {
              return (
                <li key={folder.id}>
                  <NavLink to={`/folder/${folder.id}`}>
                    {folder.name}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>
      </aside>
    )
  }
}

export default FolderBar 