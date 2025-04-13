import React, { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import UserForm from "./components/UserForm";
import "./index.css";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  console.log(users);

  const addUser = (user) => {
    const newUser = { ...user, id: Date.now() };
    setUsers([...users, newUser]);
  };

  const updateUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setEditingUser(null);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    setSelectedUser(null);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App w-full" style={{ padding: "20px" }}>
      <h1
        style={{
          fontWeight: "bold",
          textDecoration: "underline",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        Simple User Management Dashboard
      </h1>

      <input
        type="text"
        placeholder="Search users..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <UserList
        users={filteredUsers}
        onSelect={setSelectedUser}
        onDelete={deleteUser}
        onEdit={setEditingUser}
      />

      {selectedUser && <UserDetails user={selectedUser} />}

      <UserForm
        onAdd={addUser}
        onUpdate={updateUser}
        editingUser={editingUser}
        cancelEdit={() => setEditingUser(null)}
      />
    </div>
  );
}

export default App;
