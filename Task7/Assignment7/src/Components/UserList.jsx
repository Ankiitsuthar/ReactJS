import React from "react";

function UserList() {
    const users = [
        { id: 1, name: "Mann", age: 25 },
        { id: 2, name: "Dhyan", age: 30 },
        { id: 3, name: "Meet", age: 22 },
      ];

  return (
    <div>
      <h2>User List</h2>
      <ol>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - Age: {user.age}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default UserList;