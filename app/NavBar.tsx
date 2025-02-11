'use client';

import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import { FaBug } from "react-icons/fa6";
import { link } from 'fs';
import classNames from 'classnames';

const NavBar = () => {
    const currentPath = usePathname();
    console.log(currentPath);

const links =[
    { label:'Dashboard' , href:'/' },
    { label:'Issues' , href:'/issues' },
    
]

  return (
    <nav className='flex space-x-6 border-b-2 mb-5 px-5 h-14 items-center'>
        <Link href="/"><FaBug /></Link>

        <ul className='flex space-x-6' >

            {links.map(link =>
             <Link
                key={link.href}
                className={classNames({
                    'text-zinc-900' : link.href === currentPath,
                    'text-gray-500' : link.href !== currentPath,
                    'hover:text-zinc-800' : true
                })}
                href={link.href}>{link.label}</Link>
                )}

            
        </ul>
        
        
        
    </nav>
  )
}

export default NavBar
