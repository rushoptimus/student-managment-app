import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Sidebar.css'
function SideBar() {
  return (
    <>
    
    <ul className='Sidebar'>
    <p>Dash</p>
    <li>
        <Link to='/Dashboard'>Dashboard</Link>
    </li>

    <p>APPERANCE</p>
    <li>
        
    <Link to='/New'>Add New Student</Link>
    </li>
    <li>
        
    <Link to='/Subjects'>Subjects</Link>
    </li>
    <li>
        
        <Link to='/Students'>Students</Link>
        </li>
    <li>
        
    <Link to='/Result'>Result</Link>
    </li>
    <li>
        
    <Link to='/ChangeAdminCredentials'>Admin Change Password</Link>
    </li>
    </ul>

    
    <Outlet />
    </>
  )
}

export default SideBar
