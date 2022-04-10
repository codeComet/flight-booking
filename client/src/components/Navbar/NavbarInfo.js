import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Link } from "@mui/material";
import { LocalPhone } from "@mui/icons-material";
import logo from "../../Assets/logo.png";
import logo2 from "../../Assets/logo2.png";
import logoRounded from "../../Assets/logo-round.png";
import EmailIcon from "@mui/icons-material/Email";

export default function NavbarInfo() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className="first_nav">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link href="/">
            <img src={logo2} alt="logo" className="logo2" />
          </Link>

          <Box>
            <Link href="/">
              <img src={logo} alt="logo" className="logo1" />
            </Link>
            <Link href="/">
              <img src={logoRounded} alt="logo" className="logoRounded" />
            </Link>
          </Box>
          <Box sx={{ display: { xs: "block", sm: "block", md: "block" } }}>
            <Typography
              style={{
                color: "red",
                display: "flex",
                alignItems: "center",
                fontWeight: "bold",
                fontFamily: "Titillium Web",
              }}
              className="phone"
            >
              <LocalPhone style={{ marginRight: "5px" }} className="nav_icon" />
              0406 381 001
            </Typography>
            <Typography
              style={{
                color: "red",
                display: "flex",
                alignItems: "center",
                fontWeight: "bold",
                fontFamily: "Titillium Web",
              }}
              className="email"
            >
              <EmailIcon style={{ marginRight: "5px" }} className="nav_icon" />
              ticket@kingholidays.com.au
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// ticket@kingholidays.com.au
// #6d4532ad
