/*
// ------------------- Class based Component -------------------

import {Component} from "react";

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Hello State",
    }
    this.getValue.bind(this);
  }

  getValue() {
    return this.state.value;
  }

  render() {
    console.log(this.state);
    this.state.value = "HELLO";
    return (
      <>
        <h1>Hi TextInput {this.state.value} In {this.props.name}</h1>
        <h3>{this.getValue()}</h3>
      </>
    )
  }

}
*/


import {useState} from "react";

function Input() {
  let [value, setValue] = useState("");

  console.log({value});

  // const handleValueChange = (event) => {
  //   console.log(event.target.value);
  //   setValue(event.target.value);
  // }

  // const handleValueChange = (value) => {
  //   setValue(value);
  // }

  return (
    <>
      <input
        type={"text"}
        placeholder={"Enter your name..."}
        value={value}
        // onChange={(event) => handleValueChange(event)}
        // onChange={handleValueChange}
        // onChange={(event) => handleValueChange(event.target.value)}
        onChange={(event) => setValue(event.target.value)}
      />

      <h4>You have entered</h4>
      <span>{value}</span>
    </>
  )
}


export default Input;