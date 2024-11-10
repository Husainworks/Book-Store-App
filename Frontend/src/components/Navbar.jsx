import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingCart, HiOutlineUser, HiOutlineHeart } from "react-icons/hi";
import avatarImg from "../assets/avatar.png";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
]

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const currentUser = false;

  return (
    <header className='max-w-screen-2xl mx-auto px-4 py-6'>
      <nav className='flex justify-between items-center'>
        <div className='flex items-center md:gap-16 gap-4'>
          <Link to="/">
            <HiBars3CenterLeft className='size-6' />
          </Link>
          <div className='relative sm:w-72 w-40 space-x-2'>

            <IoSearchOutline className='absolute inline-block left-3 inset-y-2 hover:cursor-pointer' />

            <input type='text' placeholder='Search Here'
              className='bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none'
            />
          </div>
        </div>

        <div className='relative flex items-center md:space-x-3 space-x-2'>
          <div>
            {
              currentUser ? <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img src={avatarImg} alt='Avatar' className="ring-2 rounded-full ring-blue-500" />
                </button>
                {
                  isDropdownOpen && (
                    <div className='absolute right- mt-2 w-48 bg-white shadow-lg rounded-md z-40'>
                      <ul className='py-2'>
                        {
                          navigation.map((item) => (
                            <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                              <Link to={item.href} className='block px-4 py-2 text-sm hover:bg-gray-100'>
                                {item.name}
                              </Link>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  )
                }
              </> : <Link to="/login"><HiOutlineUser className='size-6' /></Link>
            }
          </div>

          <button className='hidden sm:block'>
            <HiOutlineHeart className='size-6' />
          </button>

          <Link to="/cart" className='bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm'>
            <HiOutlineShoppingCart />
            <span className='text-sm font-semibold sm:ml-1'>0</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar