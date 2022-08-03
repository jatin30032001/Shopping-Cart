import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

const Navbar = () => {
  return (
<div  
style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}}
>
    <span className="logo">Redux Store</span>
      
      <div>

        <Link className="navlink" to = "/"> Home</Link>
        <Link className="navlink" to = "/Cart"> Cart</Link>

        <span className="CartCount"> Cart Item : 0</span>
      </div>


    </div>
  )
}

export default Navbar
