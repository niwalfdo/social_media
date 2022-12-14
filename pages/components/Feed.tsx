import { ArrowPathIcon, CogIcon } from '@heroicons/react/24/outline'
import React from 'react'

function Feed() {
  return (
    <div className='col-span-5'>
        <div className='flex items-center justify-between'>
            <h1 className='p-5 pb-0 text-xl font-bold'>Home</h1>
            <ArrowPathIcon className='h-8 w-8 cursor-pointer text-sm_blue transition-all duration-500 ease-out hover:rotate-180 active:scale-125'/>
        </div>
    </div>
  )
}

export default Feed