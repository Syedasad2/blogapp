import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center'>
      <nav>
        <ul className="flex flex-wrap md:flex-nowrap gap-5 md:gap-10 font-bold pt-5 md:pt-15 justify-center">
          <Link href={"/"}>
            <li className="cursor-pointer">Home</li>
          </Link>
          <Link href={"/about"}>
            <li className="cursor-pointer">About Us</li>
          </Link>
          <Link href={"/blog"}>
            <li className="cursor-pointer">Blogs</li>
          </Link>
          <Link href={"/contact"}>
            <li className="cursor-pointer">Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
