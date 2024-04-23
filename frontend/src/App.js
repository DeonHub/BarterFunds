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
import MainHeader from './Main/MainHeader';
import Trustpilot from './Admin/Trustpilot';

import NotFound from './NotFound';
import Users from './Admin/Users';
import Tickets from './Admin/Tickets';
import TicketDetails from './Admin/TicketDetails';
import UserDetails from './Admin/UserDetails';

import Currencies from './Admin/Currencies';
import CreateCurrency from './Admin/CreateCurrency';
// import CurrencyYuan from './Admin/CurrencyYuan';
// import CurrencyEthereum from './Admin/CurrencyEthereum';
// import CurrencyUsdc from './Admin/CurrencyUsdc';
// import CurrencyUsdt from './Admin/CurrencyUsdt';
// import CurrencyBch from './Admin/CurrencyBch';
import EditCurrency from './Admin/EditCurrency';
// import CurrencyPerfectmoney from './Admin/CurrencyPerfectmoney';
// import CurrencyPaypal from './Admin/CurrencyPaypal';
// import CurrencyLitecoin from './Admin/CurrencyLitecoin';
// import ExchangePending from './Admin/ExchangePending';
// import ExchangeApproved from './Admin/ExchangeApproved';
import ExchangeList from './Admin/ExchangeList';
import ExchangeDetails from './Admin/ExchangeDetails';
import PaymentGateways from './Admin/PaymentGateways';
import EditPaymentGateway from './Admin/EditPaymentGateway';


// import ExchangeDetailsCanceled from './Admin/ExchangeDetailsCanceled';
// import ExchangeDetailsPending from './Admin/ExchangeDetailsPending';
// import ExchangeDetailsRefunded from './Admin/ExchangeDetailsRefunded';
// import WithdrawDetailsPending from './Admin/WithdrawDetailsPending';
// import WithdrawPending from './Admin/WithdrawPending';
// import WithdrawRejected from './Admin/WithdrawRejected';
// import WithdrawApproved from './Admin/WithdrawApproved';
// import WithdrawLog from './Admin/WithdrawLog';
// import Users from './Admin/Users';
// import UsersActive from './Admin/UsersActive';
// import UsersBanned from './Admin/UsersBanned';
// import UsersDetail from './Admin/UsersDetail';
// import UsersEmailUnverified from './Admin/UsersEmailUnverified';
// import UsersKycPending from './Admin/UsersKycPending';
// import UsersKycUnverified from './Admin/UsersKycUnverified';
// import UsersMobileUnverified from './Admin/UsersMobileUnverified';
// import UsersSendNotification from './Admin/UsersSendNotification';
// import UsersWithBalance from './Admin/UsersWithBalance';




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
        <Route path={`${process.env.PUBLIC_URL}/account-activation/:activationToken`} element={<AccountActivation />} />
        <Route path={`${process.env.PUBLIC_URL}/reset-password/:resetToken`} element={<ResetPassword />} />

        {/* Admin routes go here */}
        <Route path={`${process.env.PUBLIC_URL}/admin/dashboard`} element={<AdminDashboard />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/users`} element={<Users />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/tickets`} element={<Tickets />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/tickets/:ticketId`} element={<TicketDetails />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/users/:userId`} element={<UserDetails />} />

        <Route path={`${process.env.PUBLIC_URL}/admin/currencies`} element={<Currencies />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/currencies/create-currency`} element={<CreateCurrency />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/currencies/edit-currency/:currencyId`} element={<EditCurrency />} />

        <Route path={`${process.env.PUBLIC_URL}/admin/exchanges`} element={<ExchangeList />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/exchanges/details/:exchangeId`} element={<ExchangeDetails />} />


        <Route path={`${process.env.PUBLIC_URL}/admin/payment-gateways`} element={<PaymentGateways />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/payment-gateways/edit-gateway/:gatewayId`} element={<EditPaymentGateway />} />


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
{/*         

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


        <Route path={`${process.env.PUBLIC_URL}/admin/exchange/refunded`} element={<ExchangeRefunded />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/exchange/pending`} element={<ExchangePending />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/exchange/all`} element={<ExchangeList />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/exchange/canceled`} element={<ExchangeCanceled />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/exchange/approved`} element={<ExchangeApproved />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/exchange/details/refunded`} element={<ExchangeDetailsRefunded />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/exchange/details/pending`} element={<ExchangeDetailsPending />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/exchange/details/canceled`} element={<ExchangeDetailsCanceled />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/exchange/details/approved`} element={<ExchangeDetailsApproved />} />


        <Route path={`${process.env.PUBLIC_URL}/admin/withdraw/rejected`} element={<WithdrawRejected />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/withdraw/pending`} element={<WithdrawPending />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/withdraw/log`} element={<WithdrawLog />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/withdraw/approved`} element={<WithdrawApproved />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/withdraw/details/pending`} element={<WithdrawDetailsPending />} />


        <Route path={`${process.env.PUBLIC_URL}/admin/users`} element={<Users />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/users/active`} element={<UsersActive />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/users/banned`} element={<UsersBanned />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/users/detail`} element={<UsersDetail />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/users/email-unverified`} element={<UsersEmailUnverified />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/users/kyc-pending`} element={<UsersKycPending/>} />
        <Route path={`${process.env.PUBLIC_URL}/admin/users/Kyc-unverified`} element={<UsersKycUnverified />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/users/mobile-unverified`} element={<UsersMobileUnverified />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/users/send-notification`} element={<UsersSendNotification />} />
        <Route path={`${process.env.PUBLIC_URL}/admin/users/with-balance`} element={<UsersWithBalance />} />
        
     */}

        {/* Catch-all route for 404 Not Found */}
        <Route element={<NotFound />} />

      </Routes>
    </Router>
  );
};

export default App;
