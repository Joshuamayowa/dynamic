import Link from 'next/link'
import React from 'react'



export const metadata = {
    title: 'Course Information',
    description: 'About the cousrses we offer',
  }
  
export default function layout({children}) {
  return (
    <div className='grid grid-cols[300px,800px] gap-2'>
        <nav>
            <ul>
                <Link href='/course/Backend'>
                <li>Backend</li>
                </Link>
                <Link href='/course/Frontend'>
                <li>Frontend</li>
                </Link>
            </ul>
        </nav>
        {children}
    </div>
  )
}
