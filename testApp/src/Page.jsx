import React from 'react'
import { useParams } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from './components/SideBar';
import Students from './components/Students';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Result from './components/Result';
import New from './components/New';


import Edit from './components/Edit'
import './Page.css'; 
import Subjects from './components/Subjects';
import ChangeAdminCredentials from './ChangeAdminCredentials';

function Page() {
  return (
    <BrowserRouter>
      <div className="page-container">
        <SideBar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Dashboard />} /> {/* Default route */}
            <Route path='/Students' element={<Students />} />
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Result' element={<Result />} />
            <Route path='/Subjects' element={<Subjects />} />
            <Route path='/New' element={<New />}></Route>
            <Route path="/Edit/:id" element={<Edit />} />
            <Route path='/ChangeAdminCredentials' element={<ChangeAdminCredentials />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Page;