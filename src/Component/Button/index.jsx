import styles from './Style.module.scss';

export const Button = (props) => {
  const {children, variant = 'primary'} = props;

  const className = ["primary", "secondary", "destructive"].includes(variant) ? variant : "primary";

  return (
    <button className={styles[className]}>{children}</button>
  )
}