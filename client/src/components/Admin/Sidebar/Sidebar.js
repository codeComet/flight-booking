import { PermIdentity, DynamicFeed } from "@mui/icons-material";
import FlightIcon from "@mui/icons-material/Flight";
import { Link } from "react-router-dom";
import "./sidebar.css";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/admin/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/admin/posts" className="link">
              <li className="sidebarListItem">
                <DynamicFeed className="sidebarIcon" />
                Posts
              </li>
            </Link>
            <Link to="/admin/addflight" className="link">
              <li className="sidebarListItem">
                <FlightIcon className="sidebarIcon" />
                Add Flight
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
