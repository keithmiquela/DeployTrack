import React from 'react'
import { Navigate } from 'react-router'

const ProtectedRoute = ({ isChecked, reRoute, children}) => {
    
  if(!isChecked) {
    return <Navigate to={reRoute} replace />
  }

  return children
}

export default ProtectedRoute