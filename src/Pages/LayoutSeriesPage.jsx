import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutSeriesPage = () => {
  return (
    <div>
      <div className="moviesPage maxWidth">
        <h1> Series Watch Online</h1>
      </div>
      <Outlet />
    </div>
  )
}

export default LayoutSeriesPage