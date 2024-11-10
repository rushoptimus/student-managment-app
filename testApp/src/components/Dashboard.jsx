import React from 'react'
import { Link } from 'react-router-dom';
import './Dash.css'
function Dashboard() {
  return (
    <>
      <div className='Dash'>
        <div className="items">
          <div className="head">Regd users</div>
          <div className="value">8</div>
        </div>
        <div className="items">
        <div className="head">Subject Listed</div>
        <div className="value">8</div>
        </div>
        <div className="items">
        <div className="head">Total Class Listed</div>
        <div className="value">8</div>
        </div>
        <div className="items">
        <div className="head">Result Declared</div>
        <div className="value">8</div>
        </div>
      </div>
      <Link to="/New" className="new">ADD NEW Student</Link>
    </>
  )
}

export default Dashboard
