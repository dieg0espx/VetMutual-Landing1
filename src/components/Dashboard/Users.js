import React, { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabaseClient';




const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.auth.admin.listUsers();

      if (error) {
        setError(error.message);
      } else {
        setUsers(data.users);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email}</li> // Displaying user email
        ))}
      </ul>
    </div>
  );
};

export default UserList;