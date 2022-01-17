import React, {useEffect, useState} from 'react';
import {Box, TextField, Paper, Button} from '@mui/material';
import dynamic from "next/dynamic";
const QrReader = dynamic(() => import("react-qr-reader"), { ssr: false });
// import QrReader from 'react-qr-reader';
import {
  BrowserView,
  MobileView,
} from "react-device-detect";
import Router from 'next/router'
import Header from '../../../components/Header';

export default function Signup() {

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [sni, setSni] = useState("");

// Sending data to the db by the posts handler
  const handleSubmit = async (e) => {
    // setLoading(true);
    e.preventDefault();
    let res = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        fullname: fullName,
        dob: dob,
        address: address,
        password: password,
        sni: sni,
        operation: 'regis'
      }),
    });
    Router.push('../User/')
    res = await res.json();
    // alert('Successfully registered.')
    console.log('res: ', res)
    // setTitle("");
    // setContent("");
    // setLoading(false);
  };

    const [result, setResult] = useState('No Result')

    const handleScan = (data) =>{
        if(data){
            setResult(data)
        }
    }

    const handleError = (err) =>{
        console.log(err)
    }

  return (
    //   <Paper>
   <div>
     <Header name="Registration" />
     <div style={{textAlign:'center'}}>
        <form onSubmit={handleSubmit}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" type="email" label="Email" variant="standard" 
        onChange={(e) => setEmail(e.target.value)} value={email}
      />
      <TextField id="standard-basic" type="text" label="Full Name" variant="standard"
        onChange={(e) => setFullName(e.target.value)} value={fullName}
      />
      <TextField id="standard-basic" type="date" label="Date of Birth" variant="standard" 
        onChange={(e) => setDob(e.target.value)} value={dob}
      />
      <TextField id="standard-basic" type="text" label="Home Address" variant="standard" 
        onChange={(e) => setAddress(e.target.value)} value={address}
      />
      <TextField type="password" id="standard-basic" label="Password" variant="standard" 
        onChange={(e) => setPassword(e.target.value)} value={password}
      />
      <TextField id="standard-basic" type="number" label="SNI Number" 
      variant="standard" value={sni}
      onChange={(e) => setSni(e.target.value)}
      onInput = {(e) =>{
        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,16)
        console.log(Math.max(0, parseInt(e.target.value) ).toString().slice(0,16))
      }}
      />
    </Box>
    {/* </Paper> */}
    <Button
        type="submit"
        variant="contained"
        color="inherit"
        className='btn btn-primary'
    >
        Signup
    </Button>
    </form>
    <div>
    <p>{result}</p>
    <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ minWidth: '300px', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto'}}
        />
    </div>
    </div>
   </div>
  );
}

// export async function getServerSideProps(context) {
//   let res = await fetch("http://localhost:3000/api/posts", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   let posts = await res.json();

//   return {
//     props: { posts },
//   };
// }