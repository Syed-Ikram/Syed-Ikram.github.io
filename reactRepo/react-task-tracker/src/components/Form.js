import { TextField } from "@mui/material";
import React from "react";

function Form(){
    return(
        <form noValidate>
            <TextField 
              label='Name'
              variant="outlined"
              color="secondary"
              fullWidth
            />
            <TextField 
              label='Details'
              variant="outlined"
              color="secondary"
              multiline
              rows={4}
              fullWidth
            />
        </form>
    );
}
export default Form;