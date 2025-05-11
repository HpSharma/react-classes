import {useState} from "react";
import {faUser} from "@fortawesome/free-solid-svg-icons";

import TextInput from "./Component/TextInput";
import {Button} from "./Component/Button/index.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function App() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);

  const handleNameChange = (value) => {
    setName(value)
    setNameError(false);
    if (value.length != 0 && (value.length < 5 || value.length > 10)) {
      setNameError(true);
    }
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

      <Button variant={"destructive"} onClick={handleNameChange}>
        <FontAwesomeIcon icon={faUser} />
        Login
      </Button>
    </div>
  )
}

export default App;