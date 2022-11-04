import React, { useContext } from "react";
import { Button, Typography } from "@material-ui/core";
import "../style.css";
import {NotesContext} from '../App'

const EmptyBody = () => {
  const {setIsNOtes} = useContext(NotesContext)

  return (
    <div className="add-btn-wrapper">
      <div className="add-btn">
        <Typography variant="h3">Click Here to Add a New Note</Typography>
        <Button color="primary" size="large" variant="contained" onClick={()=>{setIsNOtes(true)}}>
          Add a Note
        </Button>
      </div>
    </div>
  );
};

export default EmptyBody;
