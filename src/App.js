import React, { createContext, useEffect, useState } from 'react';
import EmptyBody from './components/EmptyBody';
import MainBody from './components/MainBody';


// context for notes
export const NotesContext = createContext()

const App = () => {
  const [notes,setNotes] = useState([])
  const [isNotes,setIsNOtes] = useState(false)
  const [errorMsg,setErrorMsg] = useState({
    errorMsgTitle : false,
    errorMsgNote : false    
  })
  const [isSideBar,setIsSideBar] = useState(true)

  useEffect(()=>{
    if(notes.length>0){
      setIsNOtes(true)
    }else{
      setIsNOtes(false)
    }
  },[notes.length])

  const handleMenu = () => {
    setIsSideBar((prev)=>!prev)
  };


  const handleSubmit = (e,noteTitle,noteDescripton) => {
    e.preventDefault();

    let title = false
    let note = false

    if(noteTitle.current.value === ''){
      title = true
    }

    if(noteDescripton.current.value === ''){
      note = true
    }

    if(!title && !note){
      setNotes((prev)=>([...prev,{title:noteTitle.current.value,note:noteDescripton.current.value,id:Date.now()}]))
      alert('Notes Saved')
      noteTitle.current.value = ''
      noteDescripton.current.value = ''
    }

    setErrorMsg({
      errorMsgTitle : title,
        errorMsgNote : note
    })
}

  return (
    <NotesContext.Provider value={{notes,handleSubmit,errorMsg,setErrorMsg,setIsNOtes,isSideBar,setIsSideBar,handleMenu}}>
    {isNotes ? <MainBody/> : <EmptyBody/>}
    </NotesContext.Provider>
  )
}

export default App

