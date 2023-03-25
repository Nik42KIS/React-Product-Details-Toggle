import React from 'react'
import {Link} from 'react-router-dom'


const Navigation = () => {
  return (
    <nav className='h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white'>
  <span className='font-bold text-xl'>React 2023</span>
  <span className='md:flex hidden'>
    <Link to="/" className='mr-4 hover:text-gray-300 transition-colors'>Products</Link>
    <Link to="/about" className='hover:text-gray-300 transition-colors'>About products</Link>
  </span>
  <button className='md:hidden block text-3xl'>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-current text-gray-300" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M18 14H2v-1h16v1zM18 9H2V8h16v1zM2 4v1h16V4H2z" clipRule="evenodd" />
    </svg>
  </button>
</nav>

  )
}

export default Navigation