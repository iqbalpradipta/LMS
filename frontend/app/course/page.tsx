import React from 'react'

function Course() {
  return (
    <div className='container mx-auto'>
        <div className='grid grid-rows-3 grid-flow-col'>
            <div className='row-span-3 bg-red-200'>
                Menu
            </div>
            <div className='col-span-4 bg-blue-200'>
                Video
            </div>
        </div>
    </div>
  )
}

export default Course