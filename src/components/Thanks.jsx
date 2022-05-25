import React from 'react'
import { NavLink } from 'react-router-dom'
import './Thanks.css'
function Thanks() {
    return (<><div className='thx'>
        <p style={{ color: 'white' }}>Thank you for submitting the form..</p>

    </div>
        <NavLink to={'/'} className='nav'>Click here to redirect to Home page</NavLink ></>

    )
}

export default Thanks