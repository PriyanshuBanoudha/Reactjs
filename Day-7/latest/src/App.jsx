// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function App() {
//   const url = "https://jsonplaceholder.typicode.com/users";

//   const [users, setUsers] = useState([]);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [editId, setEditId] = useState(null);

//   const getUsers = async () => {
//     const response = await axios.get(url);
//     setUsers(response.data);
//   };

//   useEffect(() => {
//     getUsers();
//   }, []);

//   const addUser = async () => {
//     const response = await axios.post(url, {
//       name: name,
//       email: email,
//     });

//     setUsers([...users, response.data]);
//     setName("");
//     setEmail("");
//   };
// }

import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const url = "https://jsonplaceholder.typicode.com/users";

  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  const getUsers = async () => {
    const response = await axios.get(url);
    setUsers(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const addUser = async () => {
    const response = await axios.post(url, {
      name: name,
      email: email,
    });

    setUsers([...users, response.data]);
    setName("");
    setEmail("");
  };

  const editUser = (user) => {
    setName(user.name);
    setEmail(user.email);
    setEditId(user.id);
  };

  const updateUser = async () => {
    const response = await axios.put(`${url}/${editId}`, {
      name: name,
      email: email,
    });

    const updatedUsers = users.map((user) =>
      user.id === editId ? response.data : user,
    );

    setUsers(updatedUsers);
    setEmail("");
    setName("");
    setEditId(null);
  };

  const deleteUser = async (id) => {
    await axios.delete(`${url}/${id}`);

    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
    console.log(filteredUsers);
  };

  return (
    <div>
      <h1>Axios CRUD</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {editId ? (
        <button onClick={updateUser}>Update User</button>
      ) : (
        <button onClick={addUser}>Add User</button>
      )}

      <hr />

      {users.map((user) => (
        <div key={user.id}>
          <h3>
            {user.id} {user.name}
          </h3>
          <p>{user.email}</p>

          <button onClick={() => editUser(user)}>Edit</button>

          <button onClick={() => deleteUser(user.id)}>Delete</button>

          <hr />
        </div>
      ))}
    </div>
  );
}
