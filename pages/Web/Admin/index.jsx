import React from 'react'
import Link from 'next/link'

// Admin page options to visit.
export default function index() {
    return (
        <div className='Admin'>
                <Link href="Admin/crud">
                <div className='crud' style={{height: '50vh', background: 'green', cursor: 'pointer'}}>
                    <a style={{fontSize: '18px', textAlign: 'center', paddingTop: '25vh'}}>Modify the QnA</a>
                </div>
                </Link>
                <Link href="Admin/stats">
                <div className='stats' style={{height: '50vh', background: 'orange', cursor: 'pointer'}}>
                    <a style={{fontSize: '18px', textAlign: 'center', paddingTop: '25vh'}}>Statistical Analysis</a>
                </div>
                </Link>
        </div>
    )
}
