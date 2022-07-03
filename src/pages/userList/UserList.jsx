import React from 'react'
import './userList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from "../../dummyData";
import { Link } from 'react-router-dom';
import { useState } from "react";


export default function UserList() {
// Since userRows is already in useState(),  rows={userRows} we pass in  rows={data} instead of userRows
const [data, setData] = useState(userRows);

const handleDelete = (id) => {
  setData(data.filter((item) => item.id !== id));
};


// All column headings Here
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'username',
    headerName: 'User',
    width: 200, 
    renderCell: (params)=>{
      return (
        <div className="userListUser">
          <img className="userListImg" src={params.row.avatar}/>
          {params.row.username}
        </div>
      )
    } },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    editable: true,
  },
  {
    field: 'transaction',
    headerName: 'Transaction Volume',
    width: 150,
    editable: true,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 150,
    renderCell: (params) => {
      return (
        <>
          <Link to={"/user/" + params.row.id}>
            <button className="userListEdit">
              Edit
            </button>
          </Link>
          <DeleteOutline className="userListDelete"  onClick={() => handleDelete(params.row.id)}/>
        </>
      );
    },
  },
  //For Full-Name
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.getValue(params.id, 'firstName') || ''} ${
  //       params.getValue(params.id, 'lastName') || ''
  //     }`,
  // },
];


  return (
    <div className="userList">
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  )
}
