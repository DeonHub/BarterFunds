import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main/Main';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import ForgotPassword from './Auth/ForgotPassword';
// import Success from './Auth/Success';
import ResetPassword from './Auth/ResetPassword';
import TwoFactor from './Auth/TwoFactor';
import AccountActivation from './Auth/AccountActivation';

import AdminDashboard from './Admin/AdminDashboard';
import UserDashboard from './User/UserDashboard';
import Welcome from './User/Welcome';
import Users from './Admin/Users';
<<<<<<< HEAD
import MainHeader from './Main/MainHeader';
import Trustpilot from './Admin/Trustpilot';


=======
import { useParams } from 'react-router-dom';
>>>>>>> d74efa95768d18c14ca09211bf0a09d4d8a70271

const App = () => {

  const navigateTo = (path) => {
    window.location.href = path;
  };



  return (
    <Router>
      <Routes>

        {/* Main routes go here */}
        <Route path={`${process.env.PUBLIC_URL}/*`} element={<Main />} />
 
        {/* Auth routes go here */}
        <Route path={`${process.env.PUBLIC_URL}/login`} element={<Login navigate={navigateTo} />}/>
        <Route path={`${process.env.PUBLIC_URL}/signup`} element={<Signup navigate={navigateTo} />} />
        <Route path={`${process.env.PUBLIC_URL}/forgot-password`} element={<ForgotPassword navigate={navigateTo} />} />
        <Route path={`${process.env.PUBLIC_URL}/login/mfa`} element={<TwoFactor navigate={navigateTo} />} />
        {/* <Route path={`${process.env.PUBLIC_URL}/success`} element={<Success navigate={navigateTo} />} /> */}
        <Route path={`${process.env.PUBLIC_URL}/account-activation/:activationToken`} element={<AccountActivation />} />
        <Route path={`${process.env.PUBLIC_URL}/reset-password/:resetToken`} element={<ResetPassword />} />

        {/* Admin routes go here */}
        <Route path={`${process.env.PUBLIC_URL}/admin/dashboard`} element={<AdminDashboard />} />
        {/* <Route path={`${process.env.PUBLIC_URL}/admin/add-currency`} element={<AddCurrency />} /> */}

        {/* User routes go here */}
        <Route path={`${process.env.PUBLIC_URL}/user/dashboard`} element={<UserDashboard />} />

        {/* Kyc routes go here */}
        <Route path={`${process.env.PUBLIC_URL}/user/welcome`} element={<Welcome />} />
        {/* Users routes go here */}
        <Route path={`${process.env.PUBLIC_URL}/admin/users`} element={<Users />} />
        {/* Users routes go here */}
        <Route path={`${process.env.PUBLIC_URL}/main/header`} element={<MainHeader />} />
        {/* Users routes go here */}
        <Route path={`${process.env.PUBLIC_URL}/admin/trustpilot`} element={<Trustpilot />} />
    
      </Routes>
    </Router>
  );
};

export default App;
