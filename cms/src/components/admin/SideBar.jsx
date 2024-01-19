import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { BiChevronDown } from "react-icons/bi";

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
  const styleMenu5 = tab === "tab5" ? "bg-[#E9E9E9]" : "bg-[#FFFFFF]";
  const styleMenu6 = tab === "tab6" ? "bg-[#E9E9E9]" : "bg-[#FFFFFF]";
  const styleMenu7 = tab === "tab7" ? "bg-[#E9E9E9]" : "bg-[#FFFFFF]";
  const styleMenu8 = tab === "tab8" ? "bg-[#E9E9E9]" : "bg-[#FFFFFF]";
  const styleMenu9 = tab === "tab9" ? "bg-[#E9E9E9]" : "bg-[#FFFFFF]";
  const styleMenu10 = tab === "tab10" ? "bg-[#E9E9E9]" : "bg-[#FFFFFF]";
  const styleMenu11 = tab === "tab11" ? "bg-[#E9E9E9]" : "bg-[#FFFFFF]";
  const styleMenu12 = tab === "tab12" ? "bg-[#E9E9E9]" : "bg-[#FFFFFF]s";

  return (
    <div>
      <div className="flex flex-row w-full">
        <div className="flex flex-col justify-center w-full">
          <div className="flex flex-col justify-center bg-[#F06B02]">
            <div className="flex justify-start">
              <img
                className="w-[50px] h-[50px] mt-3 ml-3"
                src="https://cdn-icons-png.flaticon.com/128/236/236832.png"
                alt=""
              />
            </div>
            <div className="text-white mt-3 ml-3 mb-3">
              <p>John Doe</p>
              <div className="flex flex-row">
                <p className="flex justify-start items-start w-[50%]">
                  john.doe@example.com
                </p>
                {/* <button className="flex justify-end items-end w-[50%] mr-5">
                  <BiChevronDown />
                </button> */}
              </div>
            </div>
          </div>
          <div className="font-bold bg-[#EDEDED]">
            <p className="m-2">MAIN NAVIGATION</p>
          </div>
          <div className="flex flex-col justify-center">
            <button
              onClick={() => gotoAdmin()}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`flex flex-row justify-start items-center ${styleMenu1} hover:text-red-600`}
            >
              <img
                className="w-[30px] h-[30px] m-3"
                src={isHovered ? home2 : home1}
                alt="Image"
              />
              <div className="font-bold">Home</div>
            </button>
            <button
              onClick={() => gotoTypography()}
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
              className={`flex flex-row justify-start items-center ${styleMenu2} hover:text-red-600`}
            >
              <img
                className="w-[30px] h-[30px] m-3"
                src={isHovered2 ? text2 : text1}
                alt=""
              />
              <div className="font-bold">Typography</div>
            </button>
            <button
              onClick={()=>gotoHelperClasses()}
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
              className={`flex flex-row justify-start items-center ${styleMenu3} hover:text-red-600`}
            >
              <img
                className="w-[30px] h-[30px] m-3"
                src={isHovered3 ? classes2 : classes1}
                alt=""
              />
              <div className="font-bold">Helper Classes</div>
            </button>
            <button
              onClick={() => gotoWidgets()}
              onMouseEnter={handleMouseEnter4}
              onMouseLeave={handleMouseLeave4}
              className={`flex flex-row justify-start items-center ${styleMenu4} hover:text-red-600`}
            >
              <img
                className="w-[30px] h-[30px] m-3"
                src={isHovered4 ? widget2 : widget1}
                alt=""
              />
              <div className="font-bold">Widgets</div>
            </button>
            <button
              onClick={() => gotoUI()}
              onMouseEnter={handleMouseEnter5}
              onMouseLeave={handleMouseLeave5}
              className={`flex flex-row justify-start items-center ${styleMenu5} hover:text-red-600`}
            >
              <img
                className="w-[30px] h-[30px] m-3"
                src={isHovered5 ? ui2 : ui1}
                alt=""
              />
              <div className="font-bold">User Interface UI</div>
            </button>
            <button
              onClick={() => gotoForm()}
              onMouseEnter={handleMouseEnter6}
              onMouseLeave={handleMouseLeave6}
              className={`flex flex-row justify-start items-center ${styleMenu6} hover:text-red-600`}
            >
              <img
                className="w-[30px] h-[30px] m-3"
                src={isHovered6 ? form2 : form1}
                alt=""
              />
              <div className="font-bold">Form</div>
            </button>
            <button
              onClick={() => gotoTables()}
              onMouseEnter={handleMouseEnter7}
              onMouseLeave={handleMouseLeave7}
              className={`flex flex-row justify-start items-center ${styleMenu7} hover:text-red-600`}
            >
              <img
                className="w-[30px] h-[30px] m-3"
                src={isHovered7 ? table2 : table1}
                alt=""
              />
              <div className="font-bold">Tables</div>
            </button>
            <button
              onClick={() => gotoMedias()}
              onMouseEnter={handleMouseEnter8}
              onMouseLeave={handleMouseLeave8}
              className={`flex flex-row justify-start items-center ${styleMenu8} hover:text-red-600`}
            >
              <img
                className="w-[30px] h-[30px] m-3"
                src={isHovered8 ? media2 : media1}
                alt=""
              />
              <div className="font-bold">Medias</div>
            </button>
            <button
              onClick={() => gotoCharts()}
              onMouseEnter={handleMouseEnter9}
              onMouseLeave={handleMouseLeave9}
              className={`flex flex-row justify-start items-center ${styleMenu9} hover:text-red-600`}
            >
              <img
                className="w-[30px] h-[30px] m-3"
                src={isHovered9 ? chart2 : chart1}
                alt=""
              />
              <div className="font-bold">Charts</div>
            </button>
            <button
              onClick={() => gotoExamplePages()}
              onMouseEnter={handleMouseEnter10}
              onMouseLeave={handleMouseLeave10}
              className={`flex flex-row justify-start items-center ${styleMenu10} hover:text-red-600`}
            >
              <img
                className="w-[30px] h-[30px] m-3"
                src={isHovered10 ? page2 : page1}
                alt=""
              />
              <div className="font-bold">Example Pages</div>
            </button>
            <button
              onClick={() => gotoMaps()}
              onMouseEnter={handleMouseEnter11}
              onMouseLeave={handleMouseLeave11}
              className={`flex flex-row justify-start items-center ${styleMenu11} hover:text-red-600`}
            >
              <img
                className="w-[30px] h-[30px] m-3"
                src={isHovered11 ? map2 : map1}
                alt=""
              />
              <div className="font-bold">Maps</div>
            </button>
            <button
              onClick={() => gotoMLM()}
              onMouseEnter={handleMouseEnter12}
              onMouseLeave={handleMouseLeave12}
              className={`flex flex-row justify-start items-center ${styleMenu12} hover:text-red-600`}
            >
              <img
                className="w-[30px] h-[30px] m-3"
                src={isHovered12 ? arrow2 : arrow1}
                alt=""
              />
              <div className="font-bold">Multi Level Menu</div>
            </button>
          </div>
          <div className="border-t-2">
            <p className="mt-3 ml-3">
              <span>&copy; 2016</span>
              <span className="font-bold text-red-600">
                {" "}
                AdminBSB - Material Design.
              </span>
            </p>
            <p className="mb-3 ml-3">
              <span className="font-bold">Version:</span>
              <span className=""> 1.0.0</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
