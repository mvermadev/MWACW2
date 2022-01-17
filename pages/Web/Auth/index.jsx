import React from 'react'
import Header from '../../../components/Header'
import Signin from './signin'
import Link from 'next/link'

// Authentication page for the public.
export default function index() {
    return (
        <div style={{textAlign:'center'}}>
            <div>
                <Header name="eSurvey of Shangri-La"/>
            </div>
            <div>
                <Signin/>
            </div>
            <div className='mt-2'>
                <Link href="/Web/Auth/signup">
                    <a>Signup</a>
                </Link>
            </div>
            <div>
                <Link href="/Web/Auth/AdminAuth">
                    <a>Are you admin user?</a>
                </Link>
            </div>
        </div>
    )
}
