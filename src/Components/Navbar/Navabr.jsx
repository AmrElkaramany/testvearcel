import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navabr() {
  return<>
  
 <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to={'home'}>StrateFrameWork</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link  " aria-current="page" to={'home'}>Home</NavLink>
        </li>
          <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to={'about'}>About</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to={'parent'}>Parent</NavLink>
        </li>
      
       <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to={'portfolio'}>portfolio</NavLink>
        </li>
      
       
      </ul>

    </div>
  </div>
</nav>

  
  
  </>
}
