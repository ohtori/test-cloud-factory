import { NavLink } from "react-router-dom";

export default function Menu(): JSX.Element {
  return (
    <nav className="navigation">
      <NavLink end className="navigation__item" to="/">О приложении</NavLink>
      <NavLink className="navigation__item" to="tickers">Котировки</NavLink>
    </nav>
  );
}