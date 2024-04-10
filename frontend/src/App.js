import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main/Main';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import AdminDashboard from './Admin/AdminDashboard';
import UserDashboard from './User/UserDashboard';

const App = () => {

  return (
    <Router>
      <Routes>

        {/* Main routes go here */}
        <Route path={`${process.env.PUBLIC_URL}/*`} element={<Main />} />
        {/* <Route path={`${process.env.PUBLIC_URL}/partners`} element={<Partners />} /> */}
        {/* <Route path={`${process.env.PUBLIC_URL}/terms-and-conditions`} element={<TermsAndConditions />} /> */}


        {/* Auth routes go here */}
        <Route path={`${process.env.PUBLIC_URL}/login`} element={<Login />} />
        <Route path={`${process.env.PUBLIC_URL}/signup`} element={<Signup />} />

        {/* Admin routes go here */}
        <Route path={`${process.env.PUBLIC_URL}/admin/dashboard`} element={<AdminDashboard />} />
        {/* <Route path={`${process.env.PUBLIC_URL}/admin/add-currency`} element={<AddCurrency />} /> */}

        {/* User routes go here */}
        <Route path={`${process.env.PUBLIC_URL}/user/dashboard`} element={<UserDashboard />} />

      </Routes>
    </Router>
  );
};

export default App;
