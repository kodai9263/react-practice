import classes from "./Input.module.css"

export default function Input(props) {
  return(
    <div className={classes.formContainer}>
      <label htmlFor={props.id} className={classes.label}>{props.label}</label>
      <div className={classes.inputContainer}>
        <input name={props.id} id={props.id} type={props.type}
          {...props.register(props.id)} disabled={props.disabled} className={classes.input} />
        {props.error && <div className={classes.errorMessage}>{props.error.message}</div>}
      </div>
    </div>
  );
}