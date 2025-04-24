import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full shadow-lg bg-blue-500 text-sm py-4 dark:bg-neutral-800">
        <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
            <Link className="flex-none font-semibold text-xl text-white focus:outline-hidden focus:opacity-80 dark:text-white" href="/" aria-label="Brand">E-Learning</Link>
            <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
              <a className="font-medium text-white focus:outline-hidden" href="/login" aria-current="page">Login</a>
              <a className="font-medium text-gray-300 hover:text-black focus:outline-hidden focus:text-black dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="/e-learning">Register</a>
            </div>
        </nav>
    </header>
  )
}

export default Navbar

{ /* 
  <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
    <a className="font-medium text-white focus:outline-hidden" href="/" aria-current="page">Home</a>
    <a className="font-medium text-gray-300 hover:text-black focus:outline-hidden focus:text-black dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="/e-learning">Dashboard</a>
    <a className="font-medium text-gray-300 hover:text-black focus:outline-hidden focus:text-black dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="/about">About</a>
    <a className="font-medium text-gray-300 hover:text-black focus:outline-hidden focus:text-black dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500" href="#">Blog</a>
  </div> 
  */
}