import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage/HomePage'
import Layout from "../Pages/Layout"

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />

        </Route>
      </Routes>
    </div>
  )
}

export default AppRouter
