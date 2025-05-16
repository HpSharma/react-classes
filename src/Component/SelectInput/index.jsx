import styles from './Style.module.scss';
import {useEffect, useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";

const items = ["Jaipur", "Hanumangarh", "Bikaner", "Sikar"];

const SelectInput = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const dropdownRef = useRef(null);

  console.log(dropdownRef.current);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && dropdownRef.current.contains(event.target) === false) {
        setOpen(false);
      }
    }

    document.addEventListener("mouseup", handleOutsideClick);
    return () => {
      document.removeEventListener("mouseup", handleOutsideClick);
    }
  }, []);

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
        <ul ref={dropdownRef}>
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