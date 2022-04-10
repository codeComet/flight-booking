import "./posts.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { deleteFlight, getFlights } from "../../../actions/flights";
import { CircularProgress } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function ProductList() {
  const dispatch = useDispatch();
  const flights = useSelector((state) => state.flights);
  const location = useLocation();
  const flightsLocal = JSON.parse(localStorage.getItem("flights")) || [];

  useEffect(() => {
    dispatch(getFlights());
  }, [dispatch, location]);

  const columns = [
    { field: "gridId", headerName: "ID", width: 30 },
    {
      field: "from",
      headerName: "From",
      width: 150,
    },
    { field: "to", headerName: "To", width: 150 },
    { field: "flightType", headerName: "Flight", width: 200 },
    {
      field: "airline",
      headerName: "Airline",
      width: 150,
    },
    {
      field: "date",
      headerName: "Date",
      width: 150,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <DeleteOutline
              className="productListDelete"
              onClick={() => deleteHandler(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  const deleteHandler = (id) => {
    dispatch(deleteFlight(id));
    window.location.reload();
  };

  const allFlights = flightsLocal.map((row, index) => ({
    ...row,
    gridId: index + 1,
  }));

  return (
    <div className="productList">
      {flights.loading ? (
        <div style={{ textAlign: "center" }}>
          <CircularProgress />
        </div>
      ) : (
        <DataGrid
          rows={allFlights}
          getRowId={(row) => row.gridId}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
        />
      )}
    </div>
  );
}
