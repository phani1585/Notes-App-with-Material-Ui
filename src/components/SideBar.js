import React, { useContext } from 'react'
import {NotesContext} from '../App'

const SideBar = () => {
    const {notes} = useContext(NotesContext)

  return (
    <div className='side-bar-wrapper'>
        {notes.map((ele,index)=>(
            <div className='note-div'>{`${index+1}. ${ele.title}`}</div>
        ))}
    </div>
  )
}

export default SideBar
