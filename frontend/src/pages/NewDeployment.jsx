import React from 'react'
import RequestForm from '../components/RequestForm.jsx'

const NewDeployment = () => {
  return (
    <div className='max-w-300 mx-auto'>
      <div className="flex flex-row justify-between items-center mt-6 mx-6 ">
        <h1 className="text-white text-2xl font-semibold">New Deployment Request</h1>
      </div>
        <div className='flex justify-center my-5'>
            <RequestForm />
        </div>
    </div>
  )
}

export default NewDeployment