import React from 'react'
import Logo from './Logo'
import NavButton from './NavButton'

export default function Navbar() {
  return (
    <div className='h-16 w-full flex justify-between px-10 items-center backdrop-blur-md border-b border-secondary/20'>
      <div className="text-2xl font-bold">
        <Logo link />
      </div >
      <div className="flex flex-row justify-end items-center gap-3">
        <NavButton href='uno'>Link uno</NavButton>
        <NavButton href='dos'>Link dos</NavButton>
        <NavButton href='tres'>Link tres</NavButton>
      </div>
    </div >
  )
}
