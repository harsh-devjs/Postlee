import React from 'react'

const Comment = () => {
  return (
    <div className='bg-slate-50 rounded-xl p-4'>
      <div className="flex items-center gap-4">
        <img src="userImg.jpeg" className='w-10 h-10 object-cover rounded-full' />
        <span className='font-medium'>John</span>
        <span className='text-sm text-gray-500'>2 days ago</span>
      </div>

      <div className="mt-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis earum dolor ut beatae quisquam distinctio aspernatur laudantium veritatis consectetur.</p>
      </div>
    </div>
  )
}

export default Comment
