import React, { useState } from "react";
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
  function gotoHelperClasses() {
    navigate("/admin/helperclasses");
  }
  function gotoWidgets() {
    navigate("/admin/widgets");
  }
  function gotoUI() {
    navigate("/admin/ui");
  }
  function gotoForm() {
    navigate("/admin/form");
  }
  function gotoTables() {
    navigate("/admin/tables");
  }
  function gotoMedias() {
    navigate("/admin/medias");
  }
  function gotoCharts() {
    navigate("/admin/charts");
  }
  function gotoExamplePages() {
    navigate("/admin/examplepages");
  }
  function gotoMaps() {
    navigate("/admin/maps");
  }
  function gotoMLM() {
    navigate("/admin/mlm");
  }

  const tab = props.menu;
  const styleMenu1 = tab === "tab1" ? "bg-[#E9E9E9]" : "bg-[#FFFFFF]";
  const styleMenu2 = tab === "tab2" ? "bg-[#E9E9E9]" : "bg-[#FFFFFF]";
  const styleMenu3 = tab === "tab3" ? "bg-[#E9E9E9]" : "bg-[#FFFFFF]";
  const styleMenu4 = tab === "tab4" ? "bg-[#E9E9E9]" : "bg-[#FFFFFF]";
  return (
    <div className="flex flex-row w-full h-screen border-2 mr-5 ">
        <div className="flex flex-col w-full">

          <div className="font-bold bg-blue-500">
            <p className="m-2">Danh mục</p>
          </div>
          <div className="flex flex-col">
            <button
              onClick={() => gotoAdmin()}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`flex flex-row justify-start items-center ${styleMenu1} hover:text-red-600`}
            >
          
              <FaLayerGroup className="m-3 w-5 h-5 text-blue-600" />
              <div className="text-sm">Người dùng</div>
            </button>
            <button
              onClick={() => gotoCategory()}
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
              className={`flex flex-row justify-start items-center ${styleMenu2} hover:text-red-600`}
            >
             
              <FaLayerGroup className="m-3 w-5 h-5 text-blue-600" />

              <div className="text-sm">Danh mục</div>
            </button>
            <button
              onClick={() => gotoCategoryGroup()}
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
              className={`flex flex-row justify-start items-center ${styleMenu3} hover:text-red-600`}
            >
            

              <FaLayerGroup className="m-3 w-5 h-5 text-blue-600" />
              <div className="text-sm">Nhóm danh mục</div>
            </button>
            <button
              onClick={() => gotoWidgets()}
              onMouseEnter={handleMouseEnter4}
              onMouseLeave={handleMouseLeave4}
              className={`flex flex-row justify-start items-center ${styleMenu4} hover:text-red-600`}
            >
             

              <FaLayerGroup className="m-3 w-5 h-5 text-blue-600" />
              <div className=" text-sm">Giao dịch</div>
            </button>
           

          </div>

        </div>
      </div>
  );
};

export default Sidebar;
