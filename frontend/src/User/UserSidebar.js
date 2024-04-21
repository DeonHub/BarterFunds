import React from "react";

class UserSidebar extends React.Component {
  constructor(props) {
    super(props);

    const currentYear = new Date().getFullYear();

    this.state = {
    currentYear: currentYear,
    };

  }

  render() {

    return (
      <>
  {/* sidebar @s */}
  <div className="nk-sidebar nk-sidebar-fixed " data-content="sidebarMenu">
    <div className="nk-sidebar-element nk-sidebar-head">
      <div className="nk-sidebar-brand">
        <a
          href="/frontend/user/index.html"
          className="logo-link nk-sidebar-logo"
        >
          <img
            className="logo-light logo-img"
            src="/assets/user/images/logo-dark.png"
            srcSet="/assets/images/barterfunds-logo.png 2x"
            alt="logo"
          />
          <img
            className="logo-dark logo-img"
            src="/assets/images/images/barterfunds-logo.png"
            srcSet="/assets/images/images/barterfunds-logo.png 2x"
            alt="logo-dark"
          />
        </a>
      </div>
      <div className="nk-menu-trigger me-n2">
        <a
          href="#"
          className="nk-nav-toggle nk-quick-nav-icon d-xl-none"
          data-target="sidebarMenu"
        >
          <em className="icon ni ni-arrow-left" />
        </a>
      </div>
    </div>
    {/* .nk-sidebar-element */}
    <div className="nk-sidebar-element">
      <div className="nk-sidebar-body" data-simplebar="">
        <div className="nk-sidebar-content">
          <div className="nk-sidebar-menu">
            <ul className="nk-menu">
              <li className="nk-menu-heading">
                <h6 className="overline-title text-primary-alt">OVERVIEW</h6>
              </li>
              {/* .nk-menu-item */}
              <li className="nk-menu-item">
                <a href="/frontend/user/index.html" className="nk-menu-link">
                  <span className="nk-menu-icon">
                    <em className="icon ni ni-dashboard" />
                  </span>
                  <span className="nk-menu-text">Dashboard</span>
                </a>
              </li>
              {/* .nk-menu-item */}
              <li className="nk-menu-heading">
                <h6 className="overline-title text-primary-alt">
                  TRANSACTIONS
                </h6>
              </li>
              {/* .nk-menu-item */}
              <li className="nk-menu-item">
                <a
                  href="/frontend/user/panel/buy/btc.html"
                  className="nk-menu-link"
                >
                  <span className="nk-menu-icon">
                    <em className="icon ni ni-panel" />
                  </span>
                  <span className="nk-menu-text">Buy Sell Panel</span>
                  <span className="nk-menu-badge">HOT</span>
                </a>
              </li>
              {/* .nk-menu-item */}
              <li className="nk-menu-heading">
                <h6 className="overline-title text-primary-alt">PAYMENTS</h6>
              </li>
              {/* .nk-menu-item */}
              <li className="nk-menu-item">
                <a href="/frontend/user/wallet.html" className="nk-menu-link">
                  <span className="nk-menu-icon">
                    <em className="icon ni ni-wallet-alt" />
                  </span>
                  <span className="nk-menu-text">Barter Wallet</span>
                  <span className="nk-menu-badge">COMING SOON</span>
                </a>
              </li>
              {/* .nk-menu-item */}
              <li className="nk-menu-item">
                <a
                  href="/frontend/user/transactions.html"
                  className="nk-menu-link"
                >
                  <span className="nk-menu-icon">
                    <em className="icon ni ni-sign-cc-alt" />
                  </span>
                  <span className="nk-menu-text">Manage Orders</span>
                </a>
              </li>
              {/* .nk-menu-item */}
              <li className="nk-menu-item">
                <a
                  href="/frontend/user/coming-soon.html"
                  className="nk-menu-link"
                >
                  <span className="nk-menu-icon">
                    <em className="icon ni ni-exchange" />
                  </span>
                  <span className="nk-menu-text">Exchange Rates</span>
                </a>
              </li>
              {/* .nk-menu-item */}
              <li className="nk-menu-heading">
                <h6 className="overline-title text-primary-alt">MENU</h6>
              </li>
              {/* .nk-menu-heading */}
              <li className="nk-menu-item has-sub">
                <a href="#" className="nk-menu-link nk-menu-toggle">
                  <span className="nk-menu-icon">
                    <em className="icon ni ni-users" />
                  </span>
                  <span className="nk-menu-text">My Account</span>
                </a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item">
                    <a
                      href="/frontend/user/user/profile.html"
                      className="nk-menu-link"
                    >
                      <span className="nk-menu-text">My Profile</span>
                    </a>
                  </li>
                </ul>
                {/* .nk-menu-sub */}
              </li>
              {/* .nk-menu-item */}
              <li className="nk-menu-item has-sub">
                <a href="#" className="nk-menu-link nk-menu-toggle">
                  <span className="nk-menu-icon">
                    <em className="icon ni ni-tranx" />
                  </span>
                  <span className="nk-menu-text">Transactions</span>
                </a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item">
                    <a
                      href="/frontend/user/order-history.html"
                      className="nk-menu-link"
                    >
                      <span className="nk-menu-text">Transaction History</span>
                    </a>
                  </li>
                </ul>
                {/* .nk-menu-sub */}
              </li>
              {/* .nk-menu-item */}
              <li className="nk-menu-item has-sub">
                <a href="#" className="nk-menu-link nk-menu-toggle">
                  <span className="nk-menu-icon">
                    <em className="icon ni ni-user" />
                  </span>
                  <span className="nk-menu-text">KYC</span>
                </a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item">
                    <a
                      href="/frontend/user/kyc/application.html"
                      className="nk-menu-link"
                    >
                      <span className="nk-menu-text">Get Started</span>
                    </a>
                  </li>
                </ul>
                {/* .nk-menu-sub */}
              </li>
              {/* .nk-menu-item */}
              <li className="nk-menu-item has-sub">
                <a href="#" className="nk-menu-link nk-menu-toggle">
                  <span className="nk-menu-icon">
                    <em className="icon ni ni-question" />
                  </span>
                  <span className="nk-menu-text">Support Center</span>
                </a>
                <ul className="nk-menu-sub">
                  <li className="nk-menu-item">
                    <a
                      href="/frontend/user/support.html"
                      className="nk-menu-link"
                    >
                      <span className="nk-menu-text">Live Chat</span>
                    </a>
                  </li>
                  <li className="nk-menu-item">
                    <a href="/frontend/user/faqs.html" className="nk-menu-link">
                      <span className="nk-menu-text">Faqs / Help</span>
                    </a>
                  </li>
                  <li className="nk-menu-item">
                    <a
                      href="https://wa.me/message/ON5PHWAZTGKWI1"
                      className="nk-menu-link"
                    >
                      <span className="nk-menu-text">Whatsapp Chat</span>
                    </a>
                  </li>
                  <li className="nk-menu-item">
                    <a href="tel:+233598870911" className="nk-menu-link">
                      <span className="nk-menu-text">Phone Call</span>
                    </a>
                  </li>
                </ul>
                {/* .nk-menu-sub */}
              </li>
              {/* .nk-menu-item */}
            </ul>
            {/* .nk-menu */}
          </div>
          {/* .nk-sidebar-menu */}
          <div className="nk-sidebar-footer">
            <ul className="nk-menu nk-menu-footer">
              <li className="nk-menu-item">
                <a href="#" className="nk-menu-link">
                  <span className="nk-menu-icon">
                    <em className="icon ni ni-help-alt" />
                  </span>
                  <span className="nk-menu-text">Support</span>
                </a>
              </li>
              <li className="nk-menu-item ms-auto">
                <div className="dropup">
                  <a
                    href="#"
                    className="nk-menu-link dropdown-indicator has-indicator"
                    data-bs-toggle="dropdown"
                    data-offset="0,10"
                  >
                    <span className="nk-menu-icon">
                      <em className="icon ni ni-globe" />
                    </span>
                    <span className="nk-menu-text">English</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                    <ul className="language-list">
                      <li>
                        <a href="#" className="language-item">
                          <img
                            src="/frontend/user/images/flags/uk.png"
                            alt=""
                            className="language-flag"
                          />
                          <span className="language-name">English</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="language-item">
                          <img
                            src="/frontend/user/images/flags/spanish.png"
                            alt=""
                            className="language-flag"
                          />
                          <span className="language-name">Spanish</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="language-item">
                          <img
                            src="/frontend/user/images/flags/french.png"
                            alt=""
                            className="language-flag"
                          />
                          <span className="language-name">French</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            {/* .nk-footer-menu */}
          </div>
          {/* .nk-sidebar-footer */}
        </div>
        {/* .nk-sidebar-content */}
      </div>
      {/* .nk-sidebar-body */}
    </div>
    {/* .nk-sidebar-element */}
  </div>
  {/* sidebar @e */}
</>

    );
  }
}

export default UserSidebar;
