import {useEffect, useState} from "react";

const DataTable = () => {
  const [todo, setToDo] = useState([]);
  const [user, setUser] = useState({});

  console.log({todo});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setToDo(data))
      .catch(err => console.log(err));
  }, []);

  const handleUserClick = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.log(err));
  }


  if (todo.length === 0) {
    return (
      <h1>Nothing to show! Loading...</h1>
    )
  }

  if (typeof user === "object" && Object.keys(user).length) {
    return (
      <p>
        <span>{user.name}</span><br />
        <span>{user.email}</span>
      </p>
    )
  }

  return (
    <table border='1'>
      <thead>
        <tr>
          <th>Title</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
        todo?.map((row, idx) => {
          return (
            <tr key={idx}>
              <td>{row.title}</td>
              <td>{String(row.completed)}</td>
              <td><button onClick={() => handleUserClick(row.userId)}>User</button></td>
            </tr>
          )
        })
      }
      </tbody>
    </table>
  )
}

export default DataTable;