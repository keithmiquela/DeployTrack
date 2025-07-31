import React from 'react'

const Status = (props) => {
    
    const isSuccess = props.status == "success"
    const isFailed = props.status == "failed"
    const isInProgress = props.status == "in-progress"

    return (
        <>
            {isSuccess && <span className='bg-green-700 p-2 rounded-3xl w-auto text-white'>{props.status}</span>}
            {isFailed && <span className='bg-red-700 p-2 rounded-3xl w-auto text-white'>{props.status}</span>}
            {isInProgress && <span className='bg-yellow-700 p-2 rounded-3xl w-auto text-white'>{props.status}</span>}
            {!isSuccess && !isFailed && !isInProgress && <span className='bg-gray-700 p-2 rounded-3xl w-auto text-white'>{props.status}</span>}
        </>
    )
}

export default Status