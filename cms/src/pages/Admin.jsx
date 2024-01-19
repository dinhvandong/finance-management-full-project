import React from "react";
import HomeAdmin from './../components/admin/HomeAdmin';
import Sidebar from './../components/admin/SideBar';
import HeaderAdmin from './../components/admin/HeaderAdmin';


const Admin = () => {
  return (
    <div>
      <HeaderAdmin />
      <div className="flex flex-row w-full">
        <div>
          <Sidebar menu="tab1" />
        </div>
        <div>
          <HomeAdmin />
        </div>
      </div>
    </div>
  );
};

export default Admin;
