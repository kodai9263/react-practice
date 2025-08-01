import { Link } from 'react-router-dom';
import classes from './Header.module.css';

export default function Header() {
  return (
    <header className={classes.header}>
      <Link to="/" className={classes.headerLink}>Blog</Link>
      <Link  className={classes.headerLink}>お問い合わせ</Link>
    </header>
  );
}