import React from "react";

function UserList({ users, onSelect, onDelete, onEdit }) {
  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <div key={user.id} style={{ marginBottom: "10px" }} className="">
          <strong>{user.name}</strong> — {user.email}
          <div className="flex ">
            <button onClick={() => onSelect(user)}>View</button>
            <button onClick={() => onEdit(user)}>Edit</button>
            <button onClick={() => onDelete(user.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserList;
