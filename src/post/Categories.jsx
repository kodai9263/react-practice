import classes from './Categories.module.css';

export default function Categories({ categories }) {

  return (
    <div className={classes.categoryContainer}>
      {categories.map((category, index) => (
      <p key={index} className={classes.categoryTag}>{category}</p>
      ))}
    </div>
  );
}