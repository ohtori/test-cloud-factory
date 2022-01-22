import Logo from './Logo';
import Menu from './Menu';

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <Logo />
      <Menu />
    </header>
  )
}