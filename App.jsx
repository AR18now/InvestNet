import React, { useState } from 'react';
//import './App.css';
import AdminDashboard from './components/ui/AdminDashboard';
import AuthPages from './AuthPages';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      {isAuthenticated ? (
        <AdminDashboard />
      ) : (
        <AuthPages setIsAuthenticated={setIsAuthenticated} />
      )}
      
    </>
  );
}

export default App;
