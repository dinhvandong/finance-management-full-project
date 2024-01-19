import React from 'react'

const HeaderAdmin = () => {
  return (
    <div className="flex flex-row w-full bg-[#F04135]">
        <div className="flex justify-start font-bold text-white mt-5 mb-5 ml-4 w-[50%]">
          ADMINBSB - MATERIAL DESIGN
        </div>
        <div className="flex flex-row justify-end w-[50%]">
          <button>
            <img
              className="w-[20px] h-[20px]"
              src="https://cdn-icons-png.flaticon.com/128/11741/11741045.png"
              alt=""
            />
          </button>
          <button>
            <img
              className="w-[20px] h-[20px] ml-5"
              src="https://cdn-icons-png.flaticon.com/128/148/148920.png"
              alt=""
            />
          </button>
          <button>
            <img
              className="w-[20px] h-[20px] ml-5"
              src="https://cdn-icons-png.flaticon.com/128/11041/11041911.png"
              alt=""
            />
          </button>
          <button>
            <img
              className="w-[20px] h-[20px] ml-3 mr-5"
              src="https://cdn-icons-png.flaticon.com/128/225/225287.png"
              alt=""
            />
          </button>
        </div>
      </div>
  )
}

export default HeaderAdmin