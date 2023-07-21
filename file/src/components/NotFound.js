import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
        The page ur are looking is NOT FOUND . 
        <Link to='/' > Go Home </Link>
    </div>
  )
}

export default NotFound  