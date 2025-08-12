import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'> 
        <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
            <div className='logo font-bold text-2xl'>
              <span className="text-green-700">&lt;</span>
              Pass
              <span className="text-green-700">Op/&gt;</span>
            </div>
            <ul className='flex gap-4'>
                <li><a href="#" className='hover:font-bold'>Home</a></li>
                <li><a href="#" className='hover:font-bold'>About</a></li>
                <li><a href="#" className='hover:font-bold'>Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar