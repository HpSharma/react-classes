import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

import styles from './Style.module.scss';

const TextInput = (props) => {
  const {
    hasError = false,
    helperText,
    label,
    icon,
    required,
    value,
    placeholder = "Enter text",
    type = "text",
    onChange
  } = props;
  return (
    <div className={styles.inputContainer}>
      <label>{label} <span>{required && "*"}</span></label>
      <input
        className={`${styles.textInput} ${hasError && styles.borderRed} ${icon && styles.pr25}`}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}/>
      {icon && <FontAwesomeIcon icon={icon}/>}
      <span className={`${hasError && styles.colorRed}`}>{helperText}</span>
    </div>
  )
}

TextInput.propTypes = {
  hasError: PropTypes.bool,
  helperText: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.node,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string.isRequired | PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default TextInput;