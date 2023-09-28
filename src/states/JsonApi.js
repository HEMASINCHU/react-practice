import { useState, useEffect } from "react";
const JsonApi = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  });
  return (
    <>
      <h4>found:{users.length}users</h4>
      <div>
        {users.map((user) => (
          <div>
            {user.id}-{user.name}
          </div>
        ))}
      </div>
    </>
  );
};
export default JsonApi;
