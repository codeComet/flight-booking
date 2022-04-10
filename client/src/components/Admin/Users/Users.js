import React, { useEffect } from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  gridClasses,
} from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../actions/subscription";
import "./user.css";
import { CircularProgress } from "@mui/material";

const columns = [
  { field: "gridId", headerName: "ID", width: 90 },
  { field: "firstName", headerName: "First name", width: 160 },
  { field: "lastName", headerName: "Last name", width: 160 },
  {
    field: "email",
    headerName: "Email",
    type: "email",
    width: 160,
  },
  {
    field: "phone",
    headerName: "Mobile No.",
    sortable: false,
    width: 160,
  },
];

function CustomToolbar() {
  return (
    <GridToolbarContainer className={gridClasses.toolbarContainer}>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.subscription);
  //console.log("users", users.data);

  // Adding Index to each row
  const allUsers = users.data.map((row, index) => ({
    ...row,
    gridId: index + 1,
  }));

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="user">
      {users.loading ? (
        <div style={{ textAlign: "center" }}>
          <CircularProgress />
        </div>
      ) : (
        <DataGrid
          rows={allUsers}
          getRowId={(row) => row.gridId}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          components={{
            Toolbar: CustomToolbar,
          }}
        />
      )}
    </div>
  );
}
