import React from 'react'

// Header component to reuse it anywhere.
function index(props) {
    return (
        <div className='Header'>
            <div style={{textAlign:'center', background: 'dodgerblue', color: '#fff'}} className='d-flex justify-content-center'>
                <h3>{props.name}</h3>
            </div>
        </div>
    )
}

export default index
