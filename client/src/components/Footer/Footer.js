import React from "react";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LanguageIcon from "@mui/icons-material/Language";
import RoomIcon from "@mui/icons-material/Room";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_parent">
      <div className="footer_container">
        <div className="about_us">
          <div className="heading">
            <h4>About Us</h4>
          </div>
          <div className="about_us-lists">
            <div className="about_us-list">
              <RoomIcon className="about_us-icon" />
              <h5>Sydney, Australia</h5>
            </div>
            <div className="about_us-list">
              <LocalPhoneIcon className="about_us-icon" />
              <h5>0406 381 001</h5>
            </div>
            <div className="about_us-list">
              <EmailIcon className="about_us-icon" />
              <h5>ticket@kingholidays.com.au</h5>
            </div>
            <div className="about_us-list">
              <LanguageIcon className="about_us-icon" />
              <h5>www.kingholidays.com.au</h5>
            </div>
          </div>
        </div>
        <div className="discover">
          <div className="heading">
            <h4>Discover</h4>
          </div>
          <div className="discover_lists">
            <ul>
              <a href="!#">
                <li>New Flight Deals</li>
              </a>
              <a href="!#">
                <li>Packages</li>
              </a>
              <a href="!#">
                <li>Help & Support</li>
              </a>
              <a href="!#">
                <li>Terms & Conditions</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="about">
          <div className="heading">
            <h4>About</h4>
          </div>
          <div className="about_lists">
            <ul>
              <a href="!#">
                <li>News & Update</li>
              </a>
              <a href="!#">
                <li>Deals</li>
              </a>
              <a href="!#">
                <li>Flights</li>
              </a>
              <a href="!#">
                <li>Get in Touch</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="social">
          <div className="heading">
            <h4>Connect with us</h4>
          </div>
          <div className="social_lists">
            <div className="social_list">
              <a
                href="https://www.facebook.com/kingholidaysPtyLtd"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook className="social-icon" />
              </a>
            </div>
            <div className="social_list">
              <a href="!#">
                <Twitter className="social-icon" />
              </a>
            </div>
            <div className="social_list">
              <a href="!#">
                <Instagram className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
