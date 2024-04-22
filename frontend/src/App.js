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
import MainHeader from './Main/MainHeader';
import Trustpilot from './Admin/Trustpilot';
import Currency from './Admin/Currency';
import CurrencyCreate from './Admin/CurrencyCreate';
import CurrencyYuan from './Admin/CurrencyYuan';
import CurrencyEthereum from './Admin/CurrencyEthereum';
import CurrencyUsdc from './Admin/CurrencyUsdc';
import CurrencyUsdt from './Admin/CurrencyUsdt';
import CurrencyBch from './Admin/CurrencyBch';
import CurrencyBitcoin from './Admin/CurrencyBitcoin';
import CurrencyPerfectmoney from './Admin/CurrencyPerfectmoney';
import CurrencyPaypal from './Admin/CurrencyPaypal';
import CurrencyLitecoin from './Admin/CurrencyLitecoin';




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
        {/* Users routes go here */}
        

        {/* Admin currency routes go here */}
        <Route path={`${process.env.PUBLIC_URL}/admin/currency`} element={<Currency />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/currency/create`} element={<CurrencyCreate />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/currency/yuan`} element={<CurrencyYuan />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/currency/paypal`} element={<CurrencyPaypal />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/currency/perfectmoney`} element={<CurrencyPerfectmoney />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/currency/btc`} element={<CurrencyBitcoin />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/currency/bch`} element={<CurrencyBch />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/currency/usdt`} element={<CurrencyUsdt />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/currency/usdc`} element={<CurrencyUsdc />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/currency/eth`} element={<CurrencyEthereum />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/currency/ltc`} element={<CurrencyLitecoin />} />
    
      </Routes>
    </Router>
  );
};

export default App;
