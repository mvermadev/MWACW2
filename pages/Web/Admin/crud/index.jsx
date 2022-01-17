import React from 'react'
import { Formik, Field, Form } from 'formik';
import clientPromise from "../../../../lib/mongodb";
import Link from 'next/link';
import Header from '../../../../components/Header'

// View the update data from the db.
export default function index({questions}) {
    return (
    <div  style={{textAlign:'center'}} >
      <Header name="Modify the details" />
        {questions.map((question) => {
          return (
            question.consulations.questions.map((val, index) => {
              return(
                 <div className='crudQuestion' key={index}>
                  <p>{val.text}</p>
                  
                {/* <div>Picked: {values.picked}</div> */}
                </div>
              )
            })
          );
        })}
        <Link href="crud/EditQuestion">
                    <p className='btn btn-primary'>Click to Edit Above Details</p>
        </Link>
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
