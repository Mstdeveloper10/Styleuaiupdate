import React from 'react'
import "../css/Login.css"

function Login({top}) {
  return (
    <a  href='https://calendly.com/hello-styleuai/30min' style={{textDecoration:"none"}}>
      <div className='Login' style={{top:{top}}}>
      <span className='Get_start_span' >
                    <img className='Get_start_span'  src="\images\images\fi_17653338.png" alt="h_list_1" />
                </span>
                Get Started</div>
      </a>
    
  )
}

export default Login