import {TextInput, TextAreaInput} from "./Component/Input";
import {useState} from "react";

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  return (
   <div style={{padding: 50}}>
     <TextInput
       required
       label={"Name"}
       value={name}
       hasError={!name}
       helperText={"Please enter your full name"}
       placeholder={"Enter your name"}
       onChange={(value) => setName(value)}/>

     <TextInput
       value={description}
       onChange={(value) => setDescription(value)}/>
   </div>
  )
}

export default App;