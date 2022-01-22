import { Link } from "react-router-dom";
import logo from '../images/logo.png';

export default function Logo(): JSX.Element {
  return (
    <Link to="./">
      <img src={logo} height="38" width="227" />
    </Link>
  );
}