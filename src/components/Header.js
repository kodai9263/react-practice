import classes from './Header.module.css';

export default function Header() {
  return (
    <header className={classes.header}>
      <a className={classes.headerLink} href="">Blog</a>
      <a className={classes.headerLink} href="">お問い合わせ</a>
    </header>
  );
}