import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Edit from './Edit'
import Students from './Students'
import New from './New'
function StudentsData() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Students />}></Route>
        <Route path='/New' element={<New />} ></Route>
        <Route path='/Edit' element={<Edit />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default StudentsData
