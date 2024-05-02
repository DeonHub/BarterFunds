import React from "react";
import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { LuWallet2 } from "react-icons/lu";
import { TbTransform } from "react-icons/tb";
import { TbTransfer } from "react-icons/tb";
import { RiExchangeDollarLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

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
      <div className="nk-sidebar nk-sidebar-fixed " data-content="sidebarMenu">
  {" "}
  {/* sidebar @s */}
  <div className="nk-sidebar-element nk-sidebar-head">
    <div className="nk-sidebar-brand">
      <a href="/frontend/user/index.html" className="logo-link nk-sidebar-logo">
        
        <img
          className="logo-img"
          src="/assets/images/logo.png"
          alt="dashboard logo"
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
            {/* .nk-menu-item */}
            <li className="nk-menu-item">
              <a href="/frontend/user/index.html" className="nk-menu-link">
              <span class="nk-menu-icon"><em class="icon la la-server"></em></span>
                <span className="nk-menu-text">Dashboard</span>
              </a>
            </li>
            <li className="nk-menu-heading">
              <h6 className="overline-title text-primary-alt">TRANSACTIONS</h6>
            </li>
            {/* .nk-menu-heading */}
            <li className="nk-menu-item">
              <a
                href="/frontend/user/panel/buy/btc.html"
                className="nk-menu-link"
              >
                <span className="nk-menu-icon">
                <span class="nk-menu-icon"><em class="icon la la-exchange"></em></span>
                </span>
                <span className="nk-menu-text">Buy Sell Panel</span>
                <span className="nk-menu-badge">HOT</span>
              </a>
            </li>
            <li className="nk-menu-item">
              <a
                href="/frontend/user/transactions.html"
                className="nk-menu-link"
              >
                <span className="nk-menu-icon">
                <span class="nk-menu-icon"><em class="icon la la-cart-plus"></em></span>
                </span>
                <span className="nk-menu-text">Manage Orders</span>
              </a>
            </li>
            <li className="nk-menu-item">
              <a href="/frontend/user/wallet.html" className="nk-menu-link">
                <span className="nk-menu-icon">
                <span class="nk-menu-icon"><em class="icon la la-wallet"></em></span>
                </span>
                <span className="nk-menu-text">Barter Wallet</span>
                <span className="nk-menu-badge">COMING SOON</span>
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
                <span class="nk-menu-icon"><em class="icon la la-user"></em></span>
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
                <span class="nk-menu-icon"><em class="icon la la-layer-group"></em></span>
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
            <li className="nk-menu-item has-sub">
              <a href="#" className="nk-menu-link nk-menu-toggle">
                <span className="nk-menu-icon">
                  <em className="icon la la-comments" />
                </span>
                <span className="nk-menu-text">Support Center</span>
              </a>
              <ul className="nk-menu-sub">
                <li className="nk-menu-item">
                  <a
                    href="/frontend/user/support.html"
                    className="nk-menu-link"
                  >
                    <span className="nk-menu-text">Create Ticket</span>
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
      </div>
      {/* .nk-sidebar-content */}
    </div>
    {/* .nk-sidebar-body */}
  </div>
  {/* .nk-sidebar-element */}
</div>


    );
  }
}

export default UserSidebar;
