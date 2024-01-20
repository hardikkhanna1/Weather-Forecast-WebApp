import React from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import LoginPage from './Pages/Login';
import Home from './Pages/Home';
import { AuthProvider } from './Auth';
import { UserInfoProvider } from './UserInfo';

const App = () => {
  return (
    <AuthProvider>
      <UserInfoProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
    </UserInfoProvider>
    </AuthProvider>
    
  );
};

export default App;