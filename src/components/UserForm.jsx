import React, { useState, useEffect } from "react";

function UserForm({ onAdd, onUpdate, editingUser, cancelEdit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  useEffect(() => {
    if (editingUser) setFormData(editingUser);
    else setFormData({ name: "", email: "", phone: "", website: "" });
  }, [editingUser]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editingUser ? onUpdate(formData) : onAdd(formData);
    setFormData({ name: "", email: "", phone: "", website: "" });
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>{editingUser ? "Edit User" : "Add User"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
        <input
          name="website"
          value={formData.website}
          onChange={handleChange}
          placeholder="Website"
        />
        <button type="submit">{editingUser ? "Update" : "Add"}</button>
        {editingUser && (
          <button type="button" onClick={cancelEdit}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}

export default UserForm;
