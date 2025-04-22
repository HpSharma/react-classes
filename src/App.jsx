import {useState} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(50);

  const handleButtonClick = () => {
    console.log({count});
    setCount(count + 1);
  }

  return (
    <>
      <div className="card">
        <button onClick={handleButtonClick} className="button">
          count is {count}
        </button>
      </div>
      <Helper countValue={count} name={"Harpal"} />
    </>
  )
}

const Helper = (props) => {
  return (
    <p>Helper - {props.countValue} - {props.name}</p>
  )
}

export default App
