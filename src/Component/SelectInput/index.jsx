import styles from './Style.module.scss';
import {useEffect, useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faCaretUp, faClose} from "@fortawesome/free-solid-svg-icons";
import TextInput from "../TextInput/index.jsx";

const defaultItems = ["Jaipur", "Hanumangarh", "Bikaner", "Sikar", "Nohar", "Bhadra", "Hissar", "Sirsa", "Churu", "kota", "Jodhpur"];

const SelectInput = () => {
  const [open, setOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [items, setItems] = useState(defaultItems);

  const dropdownRef = useRef(null);

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
    setOpen(false);
    let items = selectedItems;
    if (items.includes(item)) return;

    items.push(item);
    setSelectedItems(items);
  }

  const handleItemClose = (event, item) => {
    event.stopPropagation();
    setSelectedItems((prevState) => prevState.filter((i) => i !== item));
  }

  const handleSearchItems = (value) => {
    if (value && value.trim().length === 0) {
      setItems(defaultItems);
      return;
    }

    setSearchInput(value);
    setItems(defaultItems.filter((item) => item.toLowerCase().includes(value.toLowerCase())));
  }

  return (
    <div className={styles.container}>
      <div className={styles.select} onClick={() => setOpen(!open)}>
        <div className={styles.itemContainer}>
          {selectedItems.map(((item, index) => {
            return (
              <span key={index} onClick={(event) => handleItemClose(event, item)}>{item} <FontAwesomeIcon icon={faClose}/></span>
            )
          }))}
        </div>
        <FontAwesomeIcon icon={open ? faCaretUp : faCaretDown}/>
      </div>
      {
        open &&
        <ul ref={dropdownRef}>
          <li>
            <TextInput value={searchInput} onChange={handleSearchItems}/>
          </li>
          {
            items?.map((item, index) => {
              return <li key={index} onClick={() => handleItemSelect(item)}>{item}</li>;
            })
          }
        </ul>
      }
    </div>
  )
}

export default SelectInput;