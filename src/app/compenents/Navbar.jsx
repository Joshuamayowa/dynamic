import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <ul className='flex justify-between texl-xl capitalize px-5  h-[50px] bg-sky-800 text-white items-center'>
            <Link href='/'>
            <li>Home</li>
            </Link>
            
            <Link href='/about'>
            <li>About</li>
            </Link>
            
            <Link href='/course'>
            <li>Course</li>
            </Link>
            
            <Link href='/staff'>
            <li>Staff</li>
            </Link>
        </ul>
    </nav>
  )
}
