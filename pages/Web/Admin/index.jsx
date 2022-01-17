import React from 'react'
import Link from 'next/link'

// Admin page options to visit.
export default function index() {
    return (
        <div className='Admin'>
                <Link href="Admin/crud">
                <div className='crud' style={{height: '50vh', background: 'green', cursor: 'pointer'}}>
                    <p style={{fontSize: '18px', textAlign: 'center', paddingTop: '25vh'}}>Modify the QnA</p>
                </div>
                </Link>
                <Link href="Admin/stats">
                <div className='stats' style={{height: '50vh', background: 'orange', cursor: 'pointer'}}>
                    <p style={{fontSize: '18px', textAlign: 'center', paddingTop: '25vh'}}>Statistical Analysis</p>
                </div>
                </Link>
        </div>
    )
}
