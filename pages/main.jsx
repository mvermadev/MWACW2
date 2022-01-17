import React,{useEffect} from 'react'
import Router from 'next/router';

// Combine all the created pages here (we can use complex logic here.)
function Main() {

  useEffect(()=>{
    // if (localStorage.getItem('token')) {
    //   Router.push('/webPages/dashboard')
    // }
    // else {
      Router.push('/Web/Auth')
    // }
  })

  return (
    <> </>
  )
}

export default Main