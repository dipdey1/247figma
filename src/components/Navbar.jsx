import React from 'react'
import './Navbar.scss'

const Navbar = () => {

    const urlLinks = ['Pedagogy', 'Instasolve', 'Library', 'pricing','Contact']

  return (
    <div className='Navbar-Parent'>
        <div className="child">
            <div className='logo-container'><img src="../../public/images/logo.png" alt="logo" className='logo'/></div>
            <div className="urlcontainer">
                {urlLinks.map((link) => {
                return <div className="links" key={link}>
                    <span>{link}</span>
                </div>
                })}  
            </div>
            <div className='btn-login' onClick={() => window.location.href='https://www.google.com'}>
               <div className='btn'><span>Login/Register</span></div>
            </div>
           
        </div>        
    </div>
  )
}

export default Navbar