import React, { useEffect, useState } from "react";
import "../App.css";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Navbar = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const time = new Date();
    const hour = time.getHours();
    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  return (
    <div className="navbar">
      <h2>{greeting}</h2>
      <ul>
        <li>
          <NotificationsIcon />
        </li>
        <li>
          <SettingsIcon />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
