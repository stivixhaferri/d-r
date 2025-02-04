import React from 'react'
import Link from 'next/link'
import { House , ShieldAlert , Headset   } from 'lucide-react';

const page = () => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center gap-3'>
        <Link href={"/dashboard/content/home"} className='p-[5%] rounded-lg texxt-lg flex items-center gap-2 bg-neutral-100 hover:bg-neutral-200'>
            <House/>
            Home Page
        </Link>

        <Link href={"/dashboard/content/about"} className='p-[5%] rounded-lg texxt-lg flex items-center gap-2 bg-neutral-100 hover:bg-neutral-200'>
            <ShieldAlert />
            About Page
        </Link>


        <Link href={"/dashboard/content/contact"} className='p-[5%] rounded-lg texxt-lg flex items-center gap-2 bg-neutral-100 hover:bg-neutral-200'>
            <Headset/>
            Contact Page Page
        </Link>
    </div>
  )
}

export default page