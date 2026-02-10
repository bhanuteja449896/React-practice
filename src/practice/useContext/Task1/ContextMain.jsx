// App.jsx
import { useState } from 'react';
import UserContext from './UserContext';
import Profile from './Profile';

export default function ContextMain() {
  const [user] = useState({name: 'Bhanu'});

  return (
    <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
  );
}