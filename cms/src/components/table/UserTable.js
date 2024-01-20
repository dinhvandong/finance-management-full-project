import React, { useEffect, useState } from 'react';
import { useTable } from 'react-table';
import { getUsers } from '../../services/api'


const UserTable = () => {

    const [users, setUsers] = useState([]);

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
  const columns = React.useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'Username', accessor: 'username' },
      { Header: 'Email', accessor: 'email' },
      { Header: 'Phone', accessor: 'phone' },
      { Header: 'Status', accessor: 'status' },
      { Header: 'Date of Birth', accessor: 'dateOfBirth' },
      { Header: 'Gender', accessor: 'gender' },
      { Header: 'Address', accessor: 'address' },
      { Header: 'Avatar', accessor: 'avatar' },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data: users,
  });

  return (
    <table {...getTableProps()} className="user-table">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserTable;