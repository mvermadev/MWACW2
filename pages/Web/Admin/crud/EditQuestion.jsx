import React, {useState} from 'react'
import clientPromise from "../../../../lib/mongodb";
import {Box, TextField, Paper, Button} from '@mui/material';
import Route from 'next/router'

export default function EditQuestion({questions}) {
  const [Question, setQuestion] = useState("");
  const [option1, setOption] = useState("");
    
    console.log(questions)
    const handleSubmit = (e)=>{
        e.preventDefault();
        alert('Successfully Updated')
        Route.back()
    }
    return (
        <div  style={{textAlign:'center', width: '100vw'}} className="container" >
            <form onSubmit={handleSubmit}>
                <Box
                component="form"
                
                noValidate
                autoComplete="off"
                >
                {questions.map((question) => {
          return (
            question.consulations.questions.map((val, index) => {
              return(
                  <div key={index}>
                     <p>Question No: {val.id}</p>
                <TextField id="standard-basic" type="text" label={val.text} variant="standard" onChange={(e) => setQuestion(e.target.value)} value={Question} style={{width: '80vw'}} />
                  <label> Radio options
                  {val.options.map((val,index)=>{
                    return(
                      <>
                      {/* <Field type="radio" key={index} name="picked" value="One" />
                       {val.text} */}
                       {/* <input type="radio" key={index} name={val.name} value={val.text} /> */}
                        <TextField id="standard-basic" type="text" label={val.text} variant="standard" onChange={(e) => setOption(e.target.value)} value={option1} style={{width: '80vw'}} />
                       </> 
                        )
                      })}
                </label>
                {/* <div>Picked: {values.picked}</div> */}
                </div>
              )
            })
          );
        })}
                
                </Box>
                {/* </Paper> */}
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="btn btn-primary mt-2"
                >
                    Update
                </Button>
                </form>
                
        </div>
    )
}

export async function getServerSideProps() {
    const client = await clientPromise;

    const db = client.db("sl-user-data");

    let questions = await db.collection("questions").find({}).toArray();
    questions = JSON.parse(JSON.stringify(questions));

    return {
        props: { questions },
    };
  }