import React from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { useLocation, useNavigate } from 'react-router-dom';
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

import UserProfile from './User/UserProfile';
import TransactionsPanel from './User/TransactionsPanel';

import UserKycs from './User/UserKycs';
import KycForm from './User/KycForm';
import OrderSuccess from './User/OrderSuccess';
import Transactions from './User/Transactions';
import UserWallet from './User/Wallet';
import UserSupport from './User/UserSupport';
// import UserWelcome from './User/Welcome';


import DigitalAssets from './Main/Pages/Header/DigitalAssets';
import Escrow from './Main/Pages/Header/Escrow';
import Invoice from './Main/Pages/Header/Invoice';
import Marketplace from './Main/Pages/Header/Marketplace';
import MultiCurrency from './Main/Pages/Header/MultiCurrency';
import PayForMe from './Main/Pages/Header/PayForMe';
import IntTransfer from './Main/Pages/Header/IntTransfer';
import VirtualCard from './Main/Pages/Header/VirtualCard';
import GiftCard from './Main/Pages/Header/GiftCard';


import Affiliate from './Main/Pages/Footer/Partnership/Affiliates';
import Developers from './Main/Pages/Footer/Partnership/Developers';
import Investors from './Main/Pages/Footer/Partnership/Investors';
import Partners from './Main/Pages/Footer/Partnership/Partners';
import AMLPolicy from './Main/Pages/Footer/Legal/AMLPolicy';
import AffiliatePolicy from './Main/Pages/Footer/Legal/AffiliatePolicy';
import CookiesPolicy from './Main/Pages/Footer/Legal/Cookies';
import PaymentPolicy from './Main/Pages/Footer/Legal/PaymentPolicy';
import PrivacyPolicy from './Main/Pages/Footer/Legal/PrivacyPolicy';
import RefundPolicy from './Main/Pages/Footer/Legal/RefundPolicy';
import Terms from './Main/Pages/Footer/Legal/Terms';
import FAQ from './Main/Pages/Footer/Help/FAQ';
import FeaturesPage from './Main/Pages/Footer/Help/FeaturesPage';
import Fees from './Main/Pages/Footer/Help/Fees';
import Support from './Main/Pages/Footer/Help/Support';
import About from './Main/Pages/Footer/Company/About';
import Contact from './Main/Pages/Footer/Company/Contact';
import Services from './Main/Pages/Footer/Company/Services';
import Products from './Main/Pages/Footer/Company/Products';
import Personal from './Main/Pages/Footer/Solutions/Personal';
import Business from './Main/Pages/Footer/Solutions/Business';
import Organization from './Main/Pages/Footer/Solutions/Organization';
import Freelance from './Main/Pages/Footer/Solutions/Freelance';
import HowItWorks from './Main/Pages/Footer/Resources/HowItWorks';
import Newsletter from './Main/Pages/Footer/Resources/Newsletter';
import Security from './Main/Pages/Footer/Resources/Security';

import ComingSoon from './Main/Pages/ComingSoon';
import PaypalFees from './Main/Pages/Tools/PaypalFees';



const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
      ReactGA.pageview(location.pathname);
  }, [location]);

  const navigateTo = (path) => {
      navigate(path);
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



        {/* User routes go here */}
        <Route path={`${process.env.PUBLIC_URL}/dashboard`} element={<UserDashboard />} />
        <Route path={`${process.env.PUBLIC_URL}/profile`} element={<UserProfile />} />
        {/* <Route path={`${process.env.PUBLIC_URL}/user/welcome`} element={<UserWelcome />} /> */}
        <Route path={`${process.env.PUBLIC_URL}/transactions-panel`} element={<TransactionsPanel />} />
        <Route path={`${process.env.PUBLIC_URL}/transactions`} element={<Transactions />} />
        <Route path={`${process.env.PUBLIC_URL}/transactions/success`} element={<OrderSuccess />} />
        <Route path={`${process.env.PUBLIC_URL}/kycs`} element={<UserKycs />} />
        <Route path={`${process.env.PUBLIC_URL}/wallet`} element={<UserWallet />} />
        <Route path={`${process.env.PUBLIC_URL}/support`} element={<UserSupport />} />
        <Route path={`${process.env.PUBLIC_URL}/kycs/application`} element={<KycForm />} />

        {/* Pages routes go here*/}
        <Route path={`${process.env.PUBLIC_URL}/coming-soon`} element={<ComingSoon/>} />

        {/* Header Pages routes go here*/}
        <Route path={`${process.env.PUBLIC_URL}/about`} element={<About />} />
        <Route path={`${process.env.PUBLIC_URL}/contact`} element={<Contact />} />
        <Route path={`${process.env.PUBLIC_URL}/services`} element={<Services />} />
        <Route path={`${process.env.PUBLIC_URL}/personal`} element={<Personal />} />
        <Route path={`${process.env.PUBLIC_URL}/business`} element={<Business />} />
        <Route path={`${process.env.PUBLIC_URL}/organization`} element={<Organization />} />
        <Route path={`${process.env.PUBLIC_URL}/freelance`} element={<Freelance />} />
        <Route path={`${process.env.PUBLIC_URL}/products`} element={<Products />} />
        <Route path={`${process.env.PUBLIC_URL}/how-it-works`} element={<HowItWorks />} />
        <Route path={`${process.env.PUBLIC_URL}/newsletter`} element={<Newsletter/>} />
        <Route path={`${process.env.PUBLIC_URL}/security`} element={<Security />} />
        <Route path={`${process.env.PUBLIC_URL}/digital-assets`} element={<DigitalAssets />} />
        <Route path={`${process.env.PUBLIC_URL}/escrow`} element={<Escrow />} />
        <Route path={`${process.env.PUBLIC_URL}/invoice`} element={<Invoice />} />
        <Route path={`${process.env.PUBLIC_URL}/marketplace`} element={<Marketplace />} />
        <Route path={`${process.env.PUBLIC_URL}/multicurrency`} element={<MultiCurrency />} />
        <Route path={`${process.env.PUBLIC_URL}/pay-for-me`} element={<PayForMe />} />
        <Route path={`${process.env.PUBLIC_URL}/transfer`} element={<IntTransfer />} />
        <Route path={`${process.env.PUBLIC_URL}/virtual-card`} element={<VirtualCard />} />
        <Route path={`${process.env.PUBLIC_URL}/gift-card`} element={<GiftCard />} />

        {/* Footer Pages routes go here*/}
        <Route path={`${process.env.PUBLIC_URL}/affiliates`} element={<Affiliate />} />
        <Route path={`${process.env.PUBLIC_URL}/developers`} element={<Developers />} />
        <Route path={`${process.env.PUBLIC_URL}/investors`} element={<Investors />} />
        <Route path={`${process.env.PUBLIC_URL}/affiliate-policy`} element={<AffiliatePolicy />} />
        <Route path={`${process.env.PUBLIC_URL}/aml-policy`} element={<AMLPolicy />} />
        <Route path={`${process.env.PUBLIC_URL}/cookies-policy`} element={<CookiesPolicy />} />
        <Route path={`${process.env.PUBLIC_URL}/payment-policy`} element={<PaymentPolicy />} />
        <Route path={`${process.env.PUBLIC_URL}/privacy-policy`} element={<PrivacyPolicy />} />
        <Route path={`${process.env.PUBLIC_URL}/refund-policy`} element={<RefundPolicy />} />
        <Route path={`${process.env.PUBLIC_URL}/terms-of-use`} element={<Terms />} />
        <Route path={`${process.env.PUBLIC_URL}/partners`} element={<Partners />} />
        <Route path={`${process.env.PUBLIC_URL}/faq`} element={<FAQ />} />
        <Route path={`${process.env.PUBLIC_URL}/features`} element={<FeaturesPage />} />
        <Route path={`${process.env.PUBLIC_URL}/fees`} element={<Fees />} />
        <Route path={`${process.env.PUBLIC_URL}/support-center`} element={<Support />} />


        {/* Tools routes go here*/}
        <Route path={`${process.env.PUBLIC_URL}/paypal-fees-checker`} element={<PaypalFees />} />
        
        

        <Route path={`${process.env.PUBLIC_URL}/*`} element={<NotFound />} />

      </Routes>
    </Router>
  );
};

export default App;
