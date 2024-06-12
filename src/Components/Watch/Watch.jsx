import React from 'react'
import { useParams } from 'react-router-dom'

const Watch = () => {
    const {id} = useParams()
    console.log('id:', id)
  return (
    <div>Watch {id}</div>
  )
}

export default Watch