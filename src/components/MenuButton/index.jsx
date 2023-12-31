import React from 'react'

function MenuButton({children}) {
  return (
    <div className='group overflow-hidden relative cursor-pointer  leading-6 text-sm'>
        <span className='inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]'>{children}</span>
        <span className='absolute left-0 translate-y-[120%] rotate-12 inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-0 group-hover:rotate-0'>{children}</span>
    </div>
  )
}

export default MenuButton