import { Button, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { deleteUser, getUsers } from '../../services/api';
import defaultImage from '../../assets/avata.png'

const CategoryGroupTable = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
  
    const handleEdit = (id) => {
      console.log('Edit clicked for ID:', id);
      navigate(`/admin/users/update/${id}`)
    };
  
    const handleDelete = async (id) => {
      console.log('Delete clicked for ID:', id);
      const response = await deleteUser(id);
      refreshData();
      console.log("delete:", response);
    };
  
    const refreshData = async()=>{
      try {
        const userList = await getUsers();
        console.log("userList", userList);
        setUsers(userList);
      } catch (error) {
        // Handle error
        console.error('Error:', error);
      }
    }
  
    const getRowClassName = (record, index) => {
      return index % 2 === 0 ? 'row-even' : 'row-odd';
    };
  
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const userList = await getUsers();
          console.log("userList", userList);
          setUsers(userList);
        } catch (error) {
          // Handle error
          console.error('Error:', error);
        }
      };
      fetchUsers();
    }, []);
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
       // width: '10%'
      },
      {
        title: 'Group Name',
        dataIndex: 'username',
        key: 'username',
       // width: '20%'
  
      },
      {
        title: 'Group Code',
        dataIndex: 'email',
        key: 'email',
       // width: '20%'
  
      },
      {
        title: 'Icon',
        dataIndex: 'image',
        key: 'image',
        render: (text) => <img
          src={text || defaultImage}
          alt="Icon"
          className="h-10 w-10"
        />,
      },
      {
        title: 'Created Date',
        dataIndex: 'phone',
        key: 'phone',
       // width: '20%'
  
      },
      // {
      //   title: 'Status',
      //   dataIndex: 'status',
      //   key: 'status',
      //   //width: '20%',
      //   render: (status) => (status === 1 ? 'Active' : 'Inactive'),
  
  
      // },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (status) => {
          const statusStyle = {
            color: status === 0 ? 'red' : 'inherit',
          };
    
          return <span style={statusStyle}>{(status === 1 ? 'Active' : 'Inactive')}</span>;
        },
      },
      {
        title: 'Actions',
        key: 'actions',
        render: (text, record) => (
          <Space size="middle">
            <Button className="bg-edit text-white" type="primary" onClick={() => handleEdit(record.id)}>Edit</Button>
            <Button className="bg-delete mr-5 text-white" type="danger" onClick={() => handleDelete(record.id)}>Delete</Button>
          </Space>
        ),
      },
      // Add more columns as needed
    ];
    return (
      <div className="w-[100%]  flex justify-center items-center">
        <Table  style={{width:'100%', fontFamily:'Courier New '}}  rowClassName={getRowClassName} dataSource={users} columns={columns}  />
      </div>
    );
}

export default CategoryGroupTable