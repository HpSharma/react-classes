import {useState} from "react";
import {faUser} from "@fortawesome/free-solid-svg-icons";

import TextInput from "./Component/TextInput";
import {Button} from "./Component/Button/index.jsx";
import SelectInput from "./Component/SelectInput/index.jsx";
import Modal from "./Component/Modal/index.jsx";

function App() {
  const [name, setName] = useState("");
  const [openModal, setOpenModal] = useState(false);

  return (
    <div style={{padding: 50, display: 'flex', flexDirection: 'column', gap: '25px'}}>
      <TextInput
        required
        label={"Name"}
        value={name}
        helperText={"Please enter your full name"}
        placeholder={"Enter your name"}
        icon={faUser}
        onChange={(v) => setName(v)}/>

      <Button variant={"destructive"} onClick={() => setOpenModal(true)}>
        Open Modal
      </Button>

      <SelectInput />

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <TextInput
          required
          label={"Name"}
          value={name}
          helperText={"Please enter your full name"}
          placeholder={"Enter your name"}
          icon={faUser}
          onChange={(v) => setName(v)}/>

      </Modal>

    </div>
  )
}

export default App;