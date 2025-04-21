import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center'>
       <nav>
        <ul className="flex gap-10 font-bold pt-15">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/about"}>
            <li>About Us</li>
          </Link>
          <Link href={"/blog"}>
            <li>Blogs</li>
          </Link>
          <Link href={"/contact"}>
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
