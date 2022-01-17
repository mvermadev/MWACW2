import React from 'react'
import { Formik, Field, Form } from 'formik';
import clientPromise from "../../../lib/mongodb";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import Header from '../../../components/Header'

// Db record will be diplayed.
export default function index({questions}) {
    return (
<div>
      <div className='MV'>
        <div className='User' style={{width: '100vw'}}>
          <Header name="Feedback" />
    <Formik
      initialValues={{
        picked: '',
        picked1: '',
        picked2: '',
        picked3: '',
      }}
      onSubmit={ (values) => {
        alert('Data submitted');
      }}
    >
      {({ values }) => (
        <Form>
             {questions.map((question) => {
          return (
            question.consulations.questions.map((val, index) => {
              return(
                 <div className='pl-2' style={{marginLeft: '10px', marginTop: '5px'}} key={index}>
                  <p>{val.text}</p>
                  <label style={{marginLeft: '15px'}} >
                  {val.options.map((val,index)=>{
                    return(
                      <>
                      {/* <Field type="radio" key={index} name="picked" value="One" />
                       {val.text} */}
                       <input type="radio" key={index} name={val.name} value={val.text} />
                       {val.text} <br/>
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

          <div style={{textAlign: 'center'}} className="mt-2">
            <button className='btn btn-primary' type="submit">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
    </div>
      </div>
  </div>
    )
}


export async function getServerSideProps(context) {
  const client = await clientPromise;

  const db = client.db("sl-user-data");

  let questions = await db.collection("questions").find({}).toArray();
  questions = JSON.parse(JSON.stringify(questions));

  return {
    props: { questions },
  };
}
