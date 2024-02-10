import React from 'react'
import iconApp from '../../assets/logo512.png';

const HeaderAdmin = () => {
  return (

    <div className='flex flex-row w-full h-full'>
      <div className="flex flex-row w-full justify-center items-center bg-insert">
      <img className='w-6 h- ml-5' src={iconApp} alt='icon-app'/>
        <div className="flex  font-bold text-white w-[50%] mt-1 mb-5 ml-5">
          
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
            <img
              className="w-[20px] h-[20px] ml-5"
              src="https://cdn-icons-png.flaticon.com/128/148/148920.png"
              alt=""
            />
          </button>
          {/* <button>
            <img
              className="w-[20px] h-[20px] ml-5"
              src="https://cdn-icons-png.flaticon.com/128/11041/11041911.png"
              alt=""
            />
          </button> */}
          <button>
            <img
              className="w-[20px] h-[20px] ml-3 mr-5"
              src="https://cdn-icons-png.flaticon.com/128/225/225287.png"
              alt=""
            />
          </button>
        </div>
      </div>

      <div className='w-full z-10 absolute h-[400px] bg-yellow-500'>

      </div>

      
    </div>
   
  )
}

export default HeaderAdmin