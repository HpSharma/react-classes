import styles from './Style.module.scss';

export const TextInput = (props) => {
  const {
    hasError = false,
    helperText,
    label,
    required,
    value,
    placeholder = "Enter text",
    type = "text",
    onChange} = props;
  return (
    <div className={styles.inputContainer}>
      <label>{label} <span>{required && "*"}</span></label>
      <input
        className={`${styles.textInput} ${hasError && styles.borderRed}`}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}/>
      <span className={`${hasError && styles.colorRed}`}>{helperText}</span>
    </div>
  )
}

export const TextAreaInput = () => {
  return (
    <h1>Text Area Input</h1>
  )
}