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
// import AdminDashboard from './Admin/AdminDashboard';
import UserDashboard from './User/UserDashboard';

import NotFound from './NotFound';
// import Users from './Admin/Users';
// import Tickets from './Admin/Tickets';
// import TicketDetails from './Admin/TicketDetails';
// import UserDetails from './Admin/UserDetails';

// import Currencies from './Admin/Currencies';
// import CreateCurrency from './Admin/CreateCurrency';
// import AdminResetPassword from './Admin/AdminResetPassword';

// import CurrencyYuan from './Admin/CurrencyYuan';
// import CurrencyEthereum from './Admin/CurrencyEthereum';
// import CurrencyUsdc from './Admin/CurrencyUsdc';
// import CurrencyUsdt from './Admin/CurrencyUsdt';
// import CurrencyBch from './Admin/CurrencyBch';


// import EditCurrency from './Admin/EditCurrency';

// import ExchangeList from './Admin/Transactions';
// import ExchangeDetails from './Admin/TransactionDetails';

// import Kycs from './Admin/Kycs';
// import KycDetails from './Admin/KycDetails';

// import PaymentGateways from './Admin/PaymentGateways';
// import EditPaymentGateway from './Admin/EditPaymentGateway';
// import CreatePaymentGateway from './Admin/CreatePaymentGateway';

// import Withdrawals from './Admin/Withdrawals';
// import WithdrawalDetails from './Admin/WithdrawalDetails';
// import Referrals from './Admin/Referrals';
// import Reports from './Admin/Reports';
// import Notifications from './Admin/Notifications';

// import TransactionDetails from './Admin/TransactionDetails';
// import Transactions from './Admin/Transactions';

import UserProfile from './User/UserProfile';
import TransactionsPanel from './User/TransactionsPanel';

import UserKycs from './User/UserKycs';
import KycForm from './User/KycForm';
import OrderSuccess from './User/OrderSuccess';
import Transactions from './User/Transactions';
import UserWallet from './User/Wallet';
import UserSupport from './User/UserSupport';
// import UserWelcome from './User/Welcome';


const App = () => {

  const navigateTo = (path) => {
    window.location.href = path;
  };



  return (
    <Router>
      <Routes>

        {/* Main routes go here */}
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Main />} />
 
        {/* Auth routes go here */}
        <Route path={`${process.env.PUBLIC_URL}/login`} element={<Login navigate={navigateTo} />}/>
        <Route path={`${process.env.PUBLIC_URL}/signup`} element={<Signup navigate={navigateTo} />} />
        <Route path={`${process.env.PUBLIC_URL}/forgot-password`} element={<ForgotPassword navigate={navigateTo} />} />
        <Route path={`${process.env.PUBLIC_URL}/login/mfa`} element={<TwoFactor navigate={navigateTo} />} />
        <Route path={`${process.env.PUBLIC_URL}/account-activation/:activationToken`} element={<AccountActivation />} />
        <Route path={`${process.env.PUBLIC_URL}/reset-password/:resetToken`} element={<ResetPassword />} />

        {/* Admin routes go here */}

        {/* <Route path={`${process.env.PUBLIC_URL}/admin/dashboard`} element={<AdminDashboard />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/reset-password`} element={<AdminResetPassword />} />

        <Route path={`${process.env.PUBLIC_URL}/admin/users`} element={<Users />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/users/:userId`} element={<UserDetails />} />

        <Route path={`${process.env.PUBLIC_URL}/admin/kycs`} element={<Kycs />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/kycs/:kycId`} element={<KycDetails />} />


        <Route path={`${process.env.PUBLIC_URL}/admin/tickets`} element={<Tickets />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/tickets/:ticketId`} element={<TicketDetails />} />


        <Route path={`${process.env.PUBLIC_URL}/admin/currencies`} element={<Currencies />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/currencies/create-currency`} element={<CreateCurrency />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/currencies/edit-currency/:currencyId`} element={<EditCurrency />} />

        <Route path={`${process.env.PUBLIC_URL}/admin/transactions`} element={<Transactions />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/transactions/details/:transactionId`} element={<TransactionDetails />} />


        <Route path={`${process.env.PUBLIC_URL}/admin/payment-gateways`} element={<PaymentGateways />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/payment-gateways/create-gateway`} element={<CreatePaymentGateway />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/payment-gateways/edit-gateway/:gatewayId`} element={<EditPaymentGateway />} />


        <Route path={`${process.env.PUBLIC_URL}/admin/withdrawals`} element={<Withdrawals />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/withdrawals/details/:withdrawalId`} element={<WithdrawalDetails />} />


        <Route path={`${process.env.PUBLIC_URL}/admin/referrals`} element={<Referrals />} />

        <Route path={`${process.env.PUBLIC_URL}/admin/reports`} element={<Reports />} />


        <Route path={`${process.env.PUBLIC_URL}/admin/notifications`} element={<Notifications />} /> */}



        {/* User routes go here */}
        <Route path={`${process.env.PUBLIC_URL}/user/dashboard`} element={<UserDashboard />} />
        <Route path={`${process.env.PUBLIC_URL}/user/profile`} element={<UserProfile />} />
        {/* <Route path={`${process.env.PUBLIC_URL}/user/welcome`} element={<UserWelcome />} /> */}
        <Route path={`${process.env.PUBLIC_URL}/user/transactions-panel`} element={<TransactionsPanel />} />
        <Route path={`${process.env.PUBLIC_URL}/user/transactions`} element={<Transactions />} />
        <Route path={`${process.env.PUBLIC_URL}/user/transactions/success`} element={<OrderSuccess />} />
        <Route path={`${process.env.PUBLIC_URL}/user/kycs`} element={<UserKycs />} />
        <Route path={`${process.env.PUBLIC_URL}/user/wallet`} element={<UserWallet />} />
        <Route path={`${process.env.PUBLIC_URL}/user/support`} element={<UserSupport />} />
        <Route path={`${process.env.PUBLIC_URL}/user/kycs/application`} element={<KycForm />} />
        
        
        

        <Route path={`${process.env.PUBLIC_URL}/*`} element={<NotFound />} />

      </Routes>
    </Router>
  );
};

export default App;
