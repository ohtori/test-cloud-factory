import React from "react";
import { NavLink } from "react-router-dom";

const TickersTab = React.memo(() => {
  return (
    <ul className="tabs">
      <li className="tabs__item" key="1">
        <NavLink end to="/tickers">Tab A</NavLink>
      </li>
      <li className="tabs__item" key="2">
        <NavLink to="2">Tab B</NavLink>
      </li>
    </ul>
  );
});

export default TickersTab;