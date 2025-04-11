import Link from 'next/link'
import React, { ReactNode } from 'react'

export default function NavButton({ href, children }: { href: string, children: ReactNode }) {
  return (
    <Link
      href={href}
      className='p-3 rounded-lg bg-white/0 hover:bg-white/20'
    >
      {children}
    </Link>
  )
}
