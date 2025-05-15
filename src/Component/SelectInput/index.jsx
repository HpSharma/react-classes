import styles from './Style.module.scss';
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";

const SelectInput = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const items = ["Jaipur", "Hanumangarh", "Bikaner", "Sikar"];

  const handleItemSelect = (item) => {
    setSelectedItem(item);
    setOpen(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.select} onClick={() => setOpen(!open)}>
        <span>{selectedItem}</span>
        <FontAwesomeIcon icon={open ? faCaretUp : faCaretDown}/>
      </div>
      {
        open &&
        <ul>
          {
            items.map((item, index) => {
              return <li key={index} onClick={() => handleItemSelect(item)}>{item}</li>;
            })
          }
        </ul>
      }
    </div>
  )
}

export default SelectInput;