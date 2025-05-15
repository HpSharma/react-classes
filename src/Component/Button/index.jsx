import styles from './Style.module.scss';
import {useId} from "react";

export const Button = (props) => {
  const {children, variant = 'primary'} = props;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const id = props.id ? props.id : useId();

  const className = ["primary", "secondary", "destructive"].includes(variant) ? variant : "primary";

  return (
    <button
      id={id}
      className={styles[className]}>{children}</button>
  )
}