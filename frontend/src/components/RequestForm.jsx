import React from 'react'

const RequestForm = () => {
  return (
    <>
        <form className="w-[95vw] h-107 bg-gray-800 rounded-xl py-9 px-8">
            <label for="service" className="text-sm text-white mb-1">Deployment Name</label>
            <input id="service" type="text" placeholder="Frontend Update v1.2"
                className="bg-gray-700 w-full h-10 rounded-md px-3 text-sm text-gray-100 mb-2 focus:outline-2 focus:outline-blue-400"
            >
            </input>
            <div className="h-[1rem]"></div>
            <label for="environment" className="text-sm text-white mb-1">Environment</label>
            <select 
                id="environment" className="bg-gray-700 w-full h-10 rounded-md px-3 text-sm text-gray-100 mb-2 focus:outline-2 focus:outline-blue-400"
            >
                <option value="development">Development</option>
                <option value="staging">Staging</option>
                <option value="production">Production</option>
            </select>
            <div className="h-[1rem] mb-2"></div>

            <label for="message" className="text-sm text-white mb-1">Description</label>
            <textarea id="message" type="text" placeholder="Frontend Update v1.2"
                className="bg-gray-700 w-full rounded-md px-3 pt-3 text-sm text-gray-100 mb-2 focus:outline-2 focus:outline-blue-400 min-h-22"
            >
            </textarea>
            <div className="h-[1rem]"></div>
            <div className='flex justify-end w-full gap-3'>
                <button className="bg-gray-600 text-white text-sm w-20 h-10 rounded-md hover:bg-gray-500 active:bg-gray-700 cursor-pointer mb-2">Cancel</button>
                <button className="bg-blue-600 text-white text-sm w-45 h-10 rounded-md hover:bg-blue-500 active:bg-blue-700 cursor-pointer mb-2">Submit Deployment</button>
            </div>
        </form>
    </>
  )
}

export default RequestForm