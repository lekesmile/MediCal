import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const login_user = () => {

   console.log("clicked")
}

const change = ()=>{

}

const  userInput = ()=>{

}

const Login = () => {
    return (
        <div className="lform">
            <div className="idtf">
            <TextField 
              variant="outlined"
              label="username"
              focused={true}
              name ="username"
              onChange={change}
              value={userInput}
              
            />
            </div>
            <div  className="idtf">
            <TextField 
             
              required={true}
              variant="outlined"
              label="password"
              focused={true}
              name="password"
              onChange={change}
              value={userInput}
            />
            </div>
             <div>
            <Button
             className="bidtf"
             variant="contained" 
             color="primary"
             onClick={login_user}
            >
             login
           </Button>
           </div>
        </div>
    )
}

export default Login