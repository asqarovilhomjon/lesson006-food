import React from 'react'
import { navbarItems } from '../static'
import logo from "../../assets/logo.svg"

const Header = () => {
    const navbar = navbarItems?.map((item, inx) => (
        <li key={inx}>
            <a href="#" className='duration-300 hover:text-[#DB780B]'>
                <span>{item}</span>
            </a>
        </li>
    ))
  return (
    <header>
        <div className="container__person">
            <nav className='flex h-24 items-center gap-9'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <ul className='flex gap-10 text-base font-medium text-[#150C01] opacity-70 flex-1'>
                    {navbar}
                </ul>
                <div>
                    <button className='rounded-md py-[13px] px-[30px] bg-[#DC780B] text-white font-normal border duration-500 border-[#DC780B] hover:bg-[#ce8e49] hover:text-white hover:scale-[1.02] active:scale-[.95]'>Booking Now</button>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header