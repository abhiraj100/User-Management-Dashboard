import React from "react";

function UserDetails({ user }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>User Details</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>
    </div>
  );
}

export default UserDetails;
