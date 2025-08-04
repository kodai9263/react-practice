import classes from "./Textarea.module.css";

export default function Textarea(props) {
  return(
    <div className={classes.formContainer}>
      <label htmlFor={props.id} className={classes.label}>本文</label>
      <div className={classes.inputContainer}>
        <textarea id={props.id} rows={props.rows}
          {...props.register(props.id)} disabled={props.disabled} className={classes.textarea}></textarea>
        {props.error && <div className={classes.errorMessage}>{props.error.message}</div>}
      </div>
    </div>
  );
}