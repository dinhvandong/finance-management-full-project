import React, { useState } from 'react'
import iconApp from '../../assets/logo512.png';
import { FaUser, FaUserCircle } from 'react-icons/fa';
import { RiLogoutBoxLine, RiNotification2Line } from 'react-icons/ri';
const HeaderAdmin = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    <div className='flex flex-row w-full h-full justify-end'>
      <div className="flex h-[45px] flex-row w-full justify-center items-center bg-insert">
        <img className='w-6 h- ml-5' src={iconApp} alt='icon-app' />
        <div className="flex  font-bold text-white w-[50%]  ml-5">

          ADMINBSB - QUẢN TRỊ ỨNG DỤNG HELLO MONEY
        </div>
        <div className="flex flex-row justify-end w-[50%]">
          {/* <button>
            <img
              className="w-[20px] h-[20px]"
              src="https://cdn-icons-png.flaticon.com/128/11741/11741045.png"
              alt=""
            />
          </button> */}
          <button>
            <RiNotification2Line className='text-white w-5 h-5' />
            {/* <img
              className="w-[20px] h-[20px] ml-5"
              src="https://cdn-icons-png.flaticon.com/128/148/148920.png"
              alt=""
            /> */}
          </button>
          {/* <button>
            <img
              className="w-[20px] h-[20px] ml-5"
              src="https://cdn-icons-png.flaticon.com/128/11041/11041911.png"
              alt=""
            />
          </button> */}
          <button className='mr-5 ml-5'>
            {/* <img
              className="w-[20px] h-[20px] ml-3 mr-5"
              src="https://cdn-icons-png.flaticon.com/128/225/225287.png"
              alt=""
            /> */}
            <FaUser className='text-white w-5 h-5' onClick={toggleMenu} />
          </button>
        </div>
      </div>
      {isMenuOpen &&
        (<div onMouseLeave={toggleMenu} className='w-[150px] items-center justify-center mt-[45px] z-10 absolute h-auto bg-edit'>

          <nav>
            <ul>
              <li>
                <a href="/profile">
                  <div className='flex text-white text-sm mt-5'>
                    <FaUserCircle className=' w-5 h-5 mr-5 ml-5' />            <span>Tài khoản</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/logout">
                  <div className='flex text-white text-sm mt-5 mb-5'>
                    <RiLogoutBoxLine className=' w-5 h-5 mr-5 ml-5' />
                    <span>Đăng xuất</span>
                  </div>
                </a>
              </li>
            </ul>
          </nav>

        </div>)}


    </div>

  )
}

export default HeaderAdmin