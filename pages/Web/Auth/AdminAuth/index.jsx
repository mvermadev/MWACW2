import React, {useEffect, useState} from 'react';
import {Box, TextField, Paper, Button} from '@mui/material';
import Route from 'next/router'
import Header from '../../../../components/Header';

// Authentication of the admin user only.
export default function index() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e)=>{
      e.preventDefault();
      var res = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        operation: 'login'
      }),
      }).then(res=>{
        alert('login success.')
        console.log('res: ', res)
        
      }).catch(err=>console.log(err));
      // res = await res.json();
      Route.push('../Admin')
    }

  return (
    //   <Paper>
    <div>
        <Header name="Admin Login" />
        <form onSubmit={handleSubmit} style={{textAlign:'center'}}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" type="email" label="Email" variant="standard"
      onChange={(e)=>setEmail(e.target.value)} value={email}      
      />
      <TextField type="password" id="standard-basic" label="Password" variant="standard" 
      onChange={(e)=>setPassword(e.target.value)} value={password}
      />
    </Box>
    {/* </Paper> */}
    <Button
        type="submit"
        variant="contained"
        color="inherit"
        className="btn btn-primary"
    >
        Login
    </Button>
    </form>
    </div>
  );
}