import {useState} from "react";
import {faUser, faSpinner} from "@fortawesome/free-solid-svg-icons";

import TextInput from "./Component/TextInput";
import {Button} from "./Component/Button/index.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SelectInput from "./Component/SelectInput/index.jsx";
import Modal from "./Component/Modal/index.jsx";

function App() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleNameChange = (value) => {

  }

  return (
    <div style={{padding: 50, display: 'flex', flexDirection: 'column', gap: '25px'}}>
      <TextInput
        required
        label={"Name"}
        value={name}
        hasError={nameError}
        helperText={"Please enter your full name"}
        placeholder={"Enter your name"}
        icon={faUser}
        onChange={handleNameChange}/>

      <Button variant={"destructive"} onClick={() => setOpenModal(true)}>
        Open Modal
      </Button>

      <SelectInput />

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <TextInput
          required
          label={"Name"}
          value={name}
          hasError={nameError}
          helperText={"Please enter your full name"}
          placeholder={"Enter your name"}
          icon={faUser}
          onChange={handleNameChange}/>

      </Modal>

    </div>
  )
}

export default App;