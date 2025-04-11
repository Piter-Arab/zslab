import React from 'react'
import Logo from './Logo'

export default function Navbar() {
  return (
    <div className='h-16 w-full flex justify-between px-10 items-center backdrop-blur-md border-b border-secondary/20'>
      <div className="text-2xl font-bold">
        <Logo link />
      </div>
    </div>
  )
}
