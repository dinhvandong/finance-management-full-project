import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { BiChevronDown } from "react-icons/bi";
import { FaLayerGroup } from "react-icons/fa";
import home1 from "../../assets/home2.png";
import home2 from "../../assets/home2red.png";
import text1 from "../../assets/text1.png";
import text2 from "../../assets/text2.png";
import classes1 from "../../assets/classes.png";
import classes2 from "../../assets/classes2.png";
import widget1 from "../../assets/widgets.png";
import widget2 from "../../assets/widgets2.png";
import ui1 from "../../assets/ui.png";
import ui2 from "../../assets/ui2.png";
import form1 from "../../assets/form.png";
import form2 from "../../assets/form2.png";
import table1 from "../../assets/table.png";
import table2 from "../../assets/table2.png";
import media1 from "../../assets/media.png";
import media2 from "../../assets/media2.png";
import chart1 from "../../assets/chart.png";
import chart2 from "../../assets/chart2.png";
import page1 from "../../assets/page.png";
import page2 from "../../assets/page2.png";
import map1 from "../../assets/map.png";
import map2 from "../../assets/map2.png";
import arrow1 from "../../assets/arrow.png";
import arrow2 from "../../assets/arrow2.png";
// import HeaderAdmin from "./HeaderAdmin";
import { BiSolidCategory } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { AiOutlineTransaction } from "react-icons/ai";
import { FiMenu } from 'react-icons/fi';
const Sidebar = (props) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);
  const [isHovered8, setIsHovered8] = useState(false);
  const [isHovered9, setIsHovered9] = useState(false);
  const [isHovered10, setIsHovered10] = useState(false);
  const [isHovered11, setIsHovered11] = useState(false);
  const [isHovered12, setIsHovered12] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };
  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };
  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };

  const handleMouseEnter4 = () => {
    setIsHovered4(true);
  };
  const handleMouseLeave4 = () => {
    setIsHovered4(false);
  };

  const handleMouseEnter5 = () => {
    setIsHovered5(true);
  };
  const handleMouseLeave5 = () => {
    setIsHovered5(false);
  };

  const handleMouseEnter6 = () => {
    setIsHovered6(true);
  };
  const handleMouseLeave6 = () => {
    setIsHovered6(false);
  };

  const handleMouseEnter7 = () => {
    setIsHovered7(true);
  };
  const handleMouseLeave7 = () => {
    setIsHovered7(false);
  };

  const handleMouseEnter8 = () => {
    setIsHovered8(true);
  };
  const handleMouseLeave8 = () => {
    setIsHovered8(false);
  };

  const handleMouseEnter9 = () => {
    setIsHovered9(true);
  };
  const handleMouseLeave9 = () => {
    setIsHovered9(false);
  };

  const handleMouseEnter10 = () => {
    setIsHovered10(true);
  };
  const handleMouseLeave10 = () => {
    setIsHovered10(false);
  };

  const handleMouseEnter11 = () => {
    setIsHovered11(true);
  };
  const handleMouseLeave11 = () => {
    setIsHovered11(false);
  };

  const handleMouseEnter12 = () => {
    setIsHovered12(true);
  };
  const handleMouseLeave12 = () => {
    setIsHovered12(false);
  };

  function gotoTypography() {
    navigate("/admin/typography");
  }
  function gotoAdmin() {
    navigate("/admin");
  }
  function gotoCategory() {
    navigate("/admin/categories");

  }
  function gotoCategoryGroup() {
    navigate("/admin/categoryGroup");

  }

  function gotoTransaction() {
    navigate("/admin/transaction");
  }

  function gotoNotification() {
    navigate("/admin/notifications");
  }

  const tab = props.menu;
  const styleMenu1 = tab === "tab1" ? "bg-[#E9E9E9]" : "bg-[#FFFFFF]";
  const styleMenu2 = tab === "tab2" ? "bg-[#E9E9E9]" : "bg-[#FFFFFF]";
  const styleMenu3 = tab === "tab3" ? "bg-[#E9E9E9]" : "bg-[#FFFFFF]";
  const styleMenu4 = tab === "tab4" ? "bg-[#E9E9E9]" : "bg-[#FFFFFF]";
  const styleMenu5 = tab === "tab5" ? "bg-[#E9E9E9]" : "bg-[#FFFFFF]";

  const [width, setWidth] = useState('w-[200px]');
  const [active, setActive] = useState(true);
  const onChangeSideBar = () => {
    setActive(!active)
    if (!active) {
      setWidth('w-[200px]')
    } else {
      setWidth('w-[100px]')
    }
  }

  return (
    <div className={`flex flex-row ${width} h-screen border-r-2 mr-5`}>
      <div className="flex flex-col w-full">

        <div className="flex flex-row justify-between items-center font-bold bg-edit">
          <p className="m-4 text-sm text-white font-bold">DANH MỤC</p>

          <FiMenu className="mr-3 text-white hover:cursor-pointer" onClick={onChangeSideBar} />

        </div>
        <div className="flex flex-col">
          <button
            onClick={() => gotoAdmin()}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`flex flex-row justify-start items-center ${styleMenu1} hover:text-red-600`}
          >

            <FaLayerGroup className="m-3 w-5 h-5 text-edit" />
            {
              (active == true) ? <div className="text-sm">Người dùng</div>:<div></div>

            }
          </button>
          <button
            onClick={() => gotoCategory()}
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
            className={`flex flex-row justify-start items-center ${styleMenu2} hover:text-red-600`}
          >

            <FaLayerGroup className="m-3 w-5 h-5 text-edit" />
            {
              active == true ? <div className="text-sm">Danh mục</div>:<div></div>
            }
          </button>
          <button
            onClick={() => gotoCategoryGroup()}
            onMouseEnter={handleMouseEnter3}
            onMouseLeave={handleMouseLeave3}
            className={`flex flex-row justify-start items-center ${styleMenu3} hover:text-red-600`}
          >
            <FaLayerGroup className="m-3 w-5 h-5 text-edit" />
            {
              active == true ? <div className="text-sm">Nhóm danh mục</div>:<div></div>

            }
          </button>
          <button
            onClick={() => gotoTransaction()}
            onMouseEnter={handleMouseEnter4}
            onMouseLeave={handleMouseLeave4}
            className={`flex flex-row justify-start items-center ${styleMenu4} hover:text-red-600`}
          >
            <FaLayerGroup className="m-3 w-5 h-5 text-edit" />
            {
              active == true ? <div className=" text-sm">Giao dịch</div>:<div></div>
            }
          </button>
          <button
            onClick={() => gotoNotification()}
            onMouseEnter={handleMouseEnter5}
            onMouseLeave={handleMouseLeave5}
            className={`flex flex-row justify-start items-center ${styleMenu5} hover:text-red-600`}
          >
            <FaLayerGroup className="m-3 w-5 h-5 text-edit" />
            {
              active == true ? <div className=" text-sm">Thông báo</div>:<div></div>

            }
          </button>
          <button
            onClick={() => gotoNotification()}
            onMouseEnter={handleMouseEnter5}
            onMouseLeave={handleMouseLeave5}
            className={`flex flex-row justify-start items-center ${styleMenu5} hover:text-red-600`}
          >
            <FaLayerGroup className="m-3 w-5 h-5 text-edit" />
            {
              active == true ? <div className=" text-sm">Cấu hình</div>:<div></div>

            }
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
