import React from "react";
import "./adminnav.css";
import { Button, Link } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../../../actions/auth";

export default function AdminNav() {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logout());
    window.location.reload();
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link href="/" style={{ textDecoration: "none" }}>
            <span className="logo">King Holidays</span>
          </Link>
        </div>
        <div className="topRight">
          <Button variant="contained" color="error" onClick={handleClick}>
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
