import styles from './Style.module.scss';
import {Button} from "../Button/index.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose} from "@fortawesome/free-solid-svg-icons";

const Modal = ({open, onClose, children}) => {
  console.log(open);

  if (!open) return <></>;

  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <FontAwesomeIcon icon={faClose} onClick={onClose} />
        {children}
      </div>
    </div>
  )
}

export default Modal;