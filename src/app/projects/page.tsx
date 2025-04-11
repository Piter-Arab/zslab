import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      projects
      <Link href="/projects/upload">upload new</Link>
    </div>
  )
}
