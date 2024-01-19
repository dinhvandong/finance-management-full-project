import React from 'react'
import HeaderAdmin from './../components/admin/HeaderAdmin';
import Sidebar from './../components/admin/SideBar';
import UserInterfaceAdmin from './../components/admin/UserInterfaceAdmin';


const UserInterface = () => {
  return (
    <div>
      <HeaderAdmin/>
      <div className="flex flex-row w-full">
        <div>
          <Sidebar menu="tab5" />
        </div>
        <div>
          <UserInterfaceAdmin />
        </div>
      </div>
    </div>
  )
}

export default UserInterface