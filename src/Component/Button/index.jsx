import styles from './Style.module.scss';

export const Button = (props) => {
  const {varient = 'primary'} = props;
  return (
    <button className={styles.btn}>Click Me!</button>
  )
}