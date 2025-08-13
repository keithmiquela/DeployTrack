import React from 'react'
import { useParams } from 'react-router';

const LogsTable = () => {

  const { id } = useParams();
  
  // Just show some fake but realistic logs
  const fakeLogs = [
    "2025-01-15 10:30:01 | 🚀 Starting deployment...",
    "2025-01-15 10:30:02 | 📦 Cloning repository...",
    "2025-01-15 10:30:05 | 📚 Installing dependencies...",
    "2025-01-15 10:30:12 | ✅ npm install completed",
    "2025-01-15 10:30:13 | 🏗️  Building project...",
    "2025-01-15 10:30:18 | ✅ Build successful",
    "2025-01-15 10:30:19 | 🚀 Starting server on port 3001",
    "2025-01-15 10:30:20 | ✅ Deployment successful!"
  ];

  return (
    <div className='w-full flex justify-center h-140 mt-7'>
        <div className='w-[95%] border border-solid border-gray-600 rounded-xl'>
            <div className='w-full h-10 border-b border-solid border-gray-600 py-2 px-4 text-white font-normal'>
                Deployment Logs
            </div>
            <div className='w-full h-full p-4 text-white text-sm font-extralight'>
                {fakeLogs.map((log, index) => (
                    <div key={index} className="mb-1">{log}</div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default LogsTable