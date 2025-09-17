import { useEffect, useState } from "react";

type User = { id: number; name: string };

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("http://localhost/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>ユーザー一覧</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.id}: {u.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
