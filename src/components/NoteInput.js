import { TextField,makeStyles, Button } from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import React, { useContext, useRef} from "react";
import {NotesContext} from '../App'
import "../style.css";
import SideBar from './SideBar'

const useStyles = makeStyles({
    textField : {
        marginBottom : '10px'
    },
    saveBtnWrapper : {
        width:'100vw',
        height:'50px',
        backgroundColor:"red",
        display : 'flex',
        justifyContent : 'flex-end'
    }
})

const NoteInput = () => {
    const noteTitle = useRef('')
    const noteDescripton = useRef('')
    const {textField} = useStyles()
    const {handleSubmit,errorMsg,setErrorMsg,isSideBar} = useContext(NotesContext)
    
  return (
  <div className="note-container">
    {isSideBar && <SideBar/>}
    <div className={isSideBar ? "notes-input-wrapper":"notes-input-wrrper"}>
      <form noValidate autoComplete="off" onSubmit={(e)=>{handleSubmit(e,noteTitle,noteDescripton)}}>
        <TextField
          className={textField}
          id="outlined-basic"
          label="Enter Your Notes Title"
          variant="outlined"
          autoFocus = {true}
          fullWidth
          error = {errorMsg.errorMsgTitle}
          helperText = {errorMsg.errorMsgTitle && "Title Can't be Empty"}
          inputProps={{
            ref: noteTitle
          }}
          onFocus = {()=>{setErrorMsg({
            errorMsgTitle : false,
            errorMsgNote : false    
          })}}
        />
        <TextField
          className={textField}
          id="outlined-basic"
          label="Enter Your Notes"
          variant="outlined"
          fullWidth
          multiline
          minRows = '35'
          error = {errorMsg.errorMsgNote}
          helperText = {errorMsg.errorMsgNote && "Note Can't be Empty"}
          inputProps={{
            ref:noteDescripton
          }}
          onFocus = {()=>{setErrorMsg({
            errorMsgTitle : false,
            errorMsgNote : false    
          })}}
        />
        <div className="saveBtnWrapper">
        <Button type="submit" size="large" startIcon={<SaveIcon/>} variant="contained" color="primary">Save</Button>
        </div>
      </form>
    </div>
  </div>
    
  );
};

export default NoteInput;
