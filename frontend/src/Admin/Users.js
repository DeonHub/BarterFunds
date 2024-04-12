import React from "react";
import './Admin.css'

class Users extends React.Component {
  constructor(props) {
    super(props);

    const currentYear = new Date().getFullYear();

    this.state = {
    currentYear: currentYear,
    };

  }

  render() {

    return (
        <div className="page-wrapper default-version">
        <div className="sidebar bg--dark">
          <button className="res-sidebar-close-btn">
            <i className="las la-times" />
          </button>
          <div className="sidebar__inner">
            <div className="sidebar__logo">
              <a href="#" className="sidebar__main-logo">
                <img src="/assets/images/logo-dark.png" alt="image" />
              </a>
            </div>
            <div className="sidebar__menu-wrapper" id="sidebar__menuWrapper">
              <ul className="sidebar__menu">
                <li className="sidebar-menu-item active">
                  <a href="index.html" className="nav-link ">
                    <i className="menu-icon las la-home" />
                    <span className="menu-title">Dashboard</span>
                  </a>
                </li>
                <li className="sidebar-menu-item sidebar-dropdown">
                  <a href="javascript:void(0)" className="">
                    <i className="menu-icon las la-users" />
                    <span className="menu-title">Manage Users</span>
                  </a>
                  <div className="sidebar-submenu ">
                    <ul>
                      <li className="sidebar-menu-item  ">
                        <a href="users/active.html" className="nav-link">
                          <i className="menu-icon las la-dot-circle" />
                          <span className="menu-title">Active Users</span>
                        </a>
                      </li>
                      <li className="sidebar-menu-item  ">
                        <a href="users/banned.html" className="nav-link">
                          <i className="menu-icon las la-dot-circle" />
                          <span className="menu-title">Banned Users</span>
                        </a>
                      </li>
                      <li className="sidebar-menu-item  ">
                        <a href="users/email-unverified.html" className="nav-link">
                          <i className="menu-icon las la-dot-circle" />
                          <span className="menu-title">Email Unverified</span>
                        </a>
                      </li>
                      <li className="sidebar-menu-item ">
                        <a href="users/mobile-unverified.html" className="nav-link">
                          <i className="menu-icon las la-dot-circle" />
                          <span className="menu-title">Mobile Unverified</span>
                        </a>
                      </li>
                      <li className="sidebar-menu-item ">
                        <a href="users/kyc-unverified.html" className="nav-link">
                          <i className="menu-icon las la-dot-circle" />
                          <span className="menu-title">KYC Unverified</span>
                        </a>
                      </li>
                      <li className="sidebar-menu-item ">
                        <a href="users/kyc-pending.html" className="nav-link">
                          <i className="menu-icon las la-dot-circle" />
                          <span className="menu-title">KYC Pending</span>
                        </a>
                      </li>
                      <li className="sidebar-menu-item ">
                        <a href="users/with-balance.html" className="nav-link">
                          <i className="menu-icon las la-dot-circle" />
                          <span className="menu-title">With Balance</span>
                        </a>
                      </li>
                      <li className="sidebar-menu-item  ">
                        <a href="users/users.html" className="nav-link">
                          <i className="menu-icon las la-dot-circle" />
                          <span className="menu-title">All Users</span>
                        </a>
                      </li>
                      <li className="sidebar-menu-item ">
                        <a href="users/send-notification.html" className="nav-link">
                          <i className="menu-icon las la-dot-circle" />
                          <span className="menu-title">Notification to All</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="sidebar-menu-item  ">
                  <a
                    href="currency/index.html"
                    className="nav-link"
                    data-default-url="currency/index.html"
                  >
                    <i className="menu-icon las la-money-bill" />
                    <span className="menu-title">Manage Currencies</span>
                  </a>
                </li>
                <li className="sidebar-menu-item  ">
                  <a href="gateway/automatic.html" className="nav-link">
                    <i className="menu-icon las la-credit-card" />
                    <span className="menu-title">Payment Gateways</span>
                  </a>
                </li>
                <li className="sidebar-menu-item sidebar-dropdown">
                  <a href="javascript:void(0)" className="">
                    <i className="menu-icon las la-exchange-alt" />
                    <span className="menu-title">Exchange</span>
                    <span className="menu-badge pill bg--danger ms-auto">
                      <i className="fa fa-exclamation" />
                    </span>
                  </a>
                  <div className="sidebar-submenu  ">
                    <ul>
                      <li className="sidebar-menu-item  ">
                        <a href="exchange/pending.html" className="nav-link">
                          <i className="menu-icon las la-dot-circle" />
                          <span className="menu-title">Pending Exchange</span>
                          <span className="menu-badge pill bg--danger ms-auto">
                            0
                          </span>
                        </a>
                      </li>
                      <li className="sidebar-menu-item  ">
                        <a href="exchange/canceled.html" className="nav-link">
                          <i className="menu-icon las la-dot-circle" />
                          <span className="menu-title">Canceled Exchange</span>
                        </a>
                      </li>
                      <li className="sidebar-menu-item  ">
                        <a href="exchange/refunded.html" className="nav-link">
                          <i className="menu-icon las la-dot-circle" />
                          <span className="menu-title">Refunded Exchange</span>
                        </a>
                      </li>
                      <li className="sidebar-menu-item  ">
                        <a href="exchange/approved.html" className="nav-link">
                          <i className="menu-icon las la-dot-circle" />
                          <span className="menu-title">Approved Exchange</span>
                        </a>
                      </li>
                      <li className="sidebar-menu-item  ">
                        <a href="exchange/list.html" className="nav-link">
                          <i className="menu-icon las la-dot-circle" />
                          <span className="menu-title">All Exchange</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="sidebar-menu-item sidebar-dropdown">
                  <a href="javascript:void(0)" className="">
                    <i className="menu-icon la la-bank" />
                    <span className="menu-title">Withdrawals </span>
                    <span className="menu-badge pill bg--danger ms-auto">
                      <i className="fa fa-exclamation" />
                    </span>
                  </a>
                  <div className="sidebar-submenu  ">
                    <ul>
                      <li className="sidebar-menu-item  ">
                        <a href="withdraw/pending.html" className="nav-link">
                          <i className="menu-icon las la-dot-circle" />
                          <span className="menu-title">Pending Withdrawals</span>
                          <span className="menu-badge pill bg--danger ms-auto">
                            12
                          </span>
                        </a>
                      </li>
                      <li className="sidebar-menu-item  ">
                        <a href="withdraw/approved.html" className="nav-link">
                          <i className="menu-icon las la-dot-circle" />
                          <span className="menu-title">Approved Withdrawals</span>
                        </a>
                      </li>
                      <li className="sidebar-menu-item  ">
                        <a href="withdraw/rejected.html" className="nav-link">
                          <i className="menu-icon las la-dot-circle" />
                          <span className="menu-title">Rejected Withdrawals</span>
                        </a>
                      </li>
                      <li className="sidebar-menu-item  ">
                        <a href="withdraw/log.html" className="nav-link">
                          <i className="menu-icon las la-dot-circle" />
                          <span className="menu-title">All Withdrawals</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="sidebar-menu-item sidebar-dropdown">
                  <a href="javascript:void(0)" className="">
                    <i className="menu-icon la la-ticket" />
                    <span className="menu-title">Support Ticket</span>
                    <span className="menu-badge pill bg--danger ms-auto">
                      <i className="fa fa-exclamation" />
                    </span>
                  </a>
                  <div className="sidebar-submenu  ">
                    <ul>
                      <li className="sidebar-menu-item  ">
                        <a href="ticket/pending.html" className="nav-link">
                          <i className="menu-icon las la-dot-circle" />
                          <span className="menu-title">Pending Ticket</span>
                          <span className="menu-badge pill bg--danger ms-auto">
                            6
                          </span>
                        </a>
                      </li>
                      <li className="sidebar-menu-item  ">
                        <a href="ticket/closed.html" className="nav-link">
                          <i className="menu-icon las la-dot-circle" />
                          <span className="menu-title">Closed Ticket</span>
                        </a>
                      </li>
                      <li className="sidebar-menu-item  ">
                        <a href="ticket/ticket/answered.html" className="nav-link">
                          <i className="menu-icon las la-dot-circle" />
                          <span className="menu-title">Answered Ticket</span>
                        </a>
                      </li>
                      <li className="sidebar-menu-item  ">
                        <a href="ticket/ticket.html" className="nav-link">
                          <i className="menu-icon las la-dot-circle" />
                          <span className="menu-title">All Ticket</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="sidebar-menu-item sidebar-dropdown">
                  <a href="javascript:void(0)" className="">
                    <i className="menu-icon la la-list" />
                    <span className="menu-title">Report </span>
                  </a>
                  <div className="sidebar-submenu  ">
                    <ul>
                      <li className="sidebar-menu-item ">
                        <a
                          href="report/referral/commission.html"
                          className="nav-link"
                        >
                          <i className="menu-icon las la-dot-circle" />
                          <span className="menu-title">Referall Commissions</span>
                        </a>
                      </li>
                      <li className="sidebar-menu-item ">
                        <a href="report/login/history.html" className="nav-link">
                          <i className="menu-icon las la-dot-circle" />
                          <span className="menu-title">Login History</span>
                        </a>
                      </li>
                      <li className="sidebar-menu-item ">
                        <a
                          href="report/notification/history.html"
                          className="nav-link"
                        >
                          <i className="menu-icon las la-dot-circle" />
                          <span className="menu-title">Notification History</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="sidebar-menu-item  ">
                  <a
                    href="subscriber.html"
                    className="nav-link"
                    data-default-url="subscriber"
                  >
                    <i className="menu-icon las la-thumbs-up" />
                    <span className="menu-title">Subscribers </span>
                  </a>
                </li>
                <li className="sidebar__menu-header">Settings</li>
                <li className="sidebar-menu-item ">
                  <a href="general-settings.html" className="nav-link">
                    <i className="menu-icon las la-life-ring" />
                    <span className="menu-title">General Setting</span>
                  </a>
                </li>
                <li className="sidebar-menu-item ">
                  <a href="setting/social/credentials.html" className="nav-link">
                    <i className="menu-icon las la-users-cog" />
                    <span className="menu-title">Social Credentials</span>
                  </a>
                </li>
                <li className="sidebar-menu-item ">
                  <a href="setting/system-configuration.html" className="nav-link">
                    <i className="menu-icon las la-cog" />
                    <span className="menu-title">System Configuration</span>
                  </a>
                </li>
                <li className="sidebar-menu-item  ">
                  <a
                    href="referral.html"
                    className="nav-link"
                    data-default-url="referral"
                  >
                    <i className="menu-icon las la-link" />
                    <span className="menu-title">Referral Setting</span>
                  </a>
                </li>
                <li className="sidebar-menu-item ">
                  <a href="setting/logo-icon.html" className="nav-link">
                    <i className="menu-icon las la-images" />
                    <span className="menu-title">Logo &amp; Favicon</span>
                  </a>
                </li>
                <li className="sidebar-menu-item ">
                  <a href="seo.html" className="nav-link">
                    <i className="menu-icon las la-globe" />
                    <span className="menu-title">SEO Manager</span>
                  </a>
                </li>
                <li className="sidebar-menu-item ">
                  <a href="kyc-settings.html" className="nav-link">
                    <i className="menu-icon las la-user-check" />
                    <span className="menu-title">KYC Setting</span>
                  </a>
                </li>
                <li className="sidebar-menu-item ">
                  <a href="blocked-ip.html" className="nav-link">
                    <i className="menu-icon las la-map-marked" />
                    <span className="menu-title">IP Blocking</span>
                  </a>
                </li>
                <li className="sidebar-menu-item sidebar-dropdown">
                  <a href="javascript:void(0)" className="">
                    <i className="menu-icon las la-bell" />
                    <span className="menu-title">Notification Setting</span>
                  </a>
                  <div className="sidebar-submenu  ">
                    <ul>
                      <li className="sidebar-menu-item  ">
                        <a href="notification/global.html" className="nav-link">
                          <i className="menu-icon las la-dot-circle" />
                          <span className="menu-title">Global Template</span>
                        </a>
                      </li>
                      <li className="sidebar-menu-item  ">
                        <a
                          href="notification/email/setting.html"
                          className="nav-link"
                        >
                          <i className="menu-icon las la-dot-circle" />
                          <span className="menu-title">Email Setting</span>
                        </a>
                      </li>
                      <li className="sidebar-menu-item  ">
                        <a href="notification/sms/setting.html" className="nav-link">
                          <i className="menu-icon las la-dot-circle" />
                          <span className="menu-title">SMS Setting</span>
                        </a>
                      </li>
                      <li className="sidebar-menu-item  ">
                        <a href="notification/templates.html" className="nav-link">
                          <i className="menu-icon las la-dot-circle" />
                          <span className="menu-title">Notification Templates</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="sidebar__menu-header">Frontend Manager</li>
                <li className="sidebar-menu-item ">
                  <a href="frontend/manage-pages.html" className="nav-link ">
                    <i className="menu-icon la la-list" />
                    <span className="menu-title">Manage Pages</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* sidebar end */}
        {/* navbar-wrapper start */}
        <nav className="navbar-wrapper bg--dark">
          <div className="navbar__left">
            <button type="button" className="res-sidebar-open-btn me-3">
              <i className="las la-bars" />
            </button>
            <form className="navbar-search">
              <input
                type="search"
                name="#0"
                className="navbar-search-field"
                id="searchInput"
                autoComplete="off"
                placeholder="Search here..."
              />
              <i className="las la-search" />
              <ul className="search-list" />
            </form>
          </div>
          <div className="navbar__right">
            <ul className="navbar__action-list">
              <li className="dropdown">
                <button
                  type="button"
                  className="primary--layer"
                  data-bs-toggle="dropdown"
                  data-display="static"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="las la-bell text--primary  icon-left-right " />
                </button>
                <div className="dropdown-menu dropdown-menu--md p-0 border-0 box--shadow1 dropdown-menu-right">
                  <div className="dropdown-menu__header">
                    <span className="caption">Notification</span>
                    <p>You have 63 unread notification</p>
                  </div>
                  <div className="dropdown-menu__body">
                    <a
                      href="notification/read/513"
                      className="dropdown-menu__item"
                    >
                      <div className="navbar-notifi">
                        <div className="navbar-notifi__left bg--green b-radius--rounded">
                          <img src="placeholder-image/350x300" alt="Profile Image" />
                        </div>
                        <div className="navbar-notifi__right">
                          <h6 className="notifi__title">New member registered</h6>
                          <span className="time">
                            <i className="far fa-clock" />
                            28 minutes ago
                          </span>
                        </div>
                      </div>
                      {/* navbar-notifi end */}
                    </a>
                    <a
                      href="notification/read/512"
                      className="dropdown-menu__item"
                    >
                      <div className="navbar-notifi">
                        <div className="navbar-notifi__left bg--green b-radius--rounded">
                          <img src="placeholder-image/350x300" alt="Profile Image" />
                        </div>
                        <div className="navbar-notifi__right">
                          <h6 className="notifi__title">
                            SMS Error: unexpected response from API
                          </h6>
                          <span className="time">
                            <i className="far fa-clock" />9 hours ago
                          </span>
                        </div>
                      </div>
                      {/* navbar-notifi end */}
                    </a>
                    <a
                      href="notification/read/511"
                      className="dropdown-menu__item"
                    >
                      <div className="navbar-notifi">
                        <div className="navbar-notifi__left bg--green b-radius--rounded">
                          <img src="placeholder-image/350x300" alt="Profile Image" />
                        </div>
                        <div className="navbar-notifi__right">
                          <h6 className="notifi__title">
                            New withdraw request from username
                          </h6>
                          <span className="time">
                            <i className="far fa-clock" />9 hours ago
                          </span>
                        </div>
                      </div>
                      {/* navbar-notifi end */}
                    </a>
                    <a
                      href="notification/read/510"
                      className="dropdown-menu__item"
                    >
                      <div className="navbar-notifi">
                        <div className="navbar-notifi__left bg--green b-radius--rounded">
                          <img src="placeholder-image/350x300" alt="Profile Image" />
                        </div>
                        <div className="navbar-notifi__right">
                          <h6 className="notifi__title">send 0 by Bkash</h6>
                          <span className="time">
                            <i className="far fa-clock" />9 hours ago
                          </span>
                        </div>
                      </div>
                      {/* navbar-notifi end */}
                    </a>
                    <a
                      href="notification/read/509"
                      className="dropdown-menu__item"
                    >
                      <div className="navbar-notifi">
                        <div className="navbar-notifi__left bg--green b-radius--rounded">
                          <img src="placeholder-image/350x300" alt="Profile Image" />
                        </div>
                        <div className="navbar-notifi__right">
                          <h6 className="notifi__title">New member registered</h6>
                          <span className="time">
                            <i className="far fa-clock" />9 hours ago
                          </span>
                        </div>
                      </div>
                      {/* navbar-notifi end */}
                    </a>
                    <a
                      href="notification/read/508"
                      className="dropdown-menu__item"
                    >
                      <div className="navbar-notifi">
                        <div className="navbar-notifi__left bg--green b-radius--rounded">
                          <img src="placeholder-image/350x300" alt="Profile Image" />
                        </div>
                        <div className="navbar-notifi__right">
                          <h6 className="notifi__title">send 0 by Bkash</h6>
                          <span className="time">
                            <i className="far fa-clock" />
                            14 hours ago
                          </span>
                        </div>
                      </div>
                      {/* navbar-notifi end */}
                    </a>
                    <a
                      href="notification/read/507"
                      className="dropdown-menu__item"
                    >
                      <div className="navbar-notifi">
                        <div className="navbar-notifi__left bg--green b-radius--rounded">
                          <img src="placeholder-image/350x300" alt="Profile Image" />
                        </div>
                        <div className="navbar-notifi__right">
                          <h6 className="notifi__title">New member registered</h6>
                          <span className="time">
                            <i className="far fa-clock" />
                            14 hours ago
                          </span>
                        </div>
                      </div>
                      {/* navbar-notifi end */}
                    </a>
                    <a
                      href="notification/read/505"
                      className="dropdown-menu__item"
                    >
                      <div className="navbar-notifi">
                        <div className="navbar-notifi__left bg--green b-radius--rounded">
                          <img src="placeholder-image/350x300" alt="Profile Image" />
                        </div>
                        <div className="navbar-notifi__right">
                          <h6 className="notifi__title">New member registered</h6>
                          <span className="time">
                            <i className="far fa-clock" />1 day ago
                          </span>
                        </div>
                      </div>
                      {/* navbar-notifi end */}
                    </a>
                    <a
                      href="notification/read/504"
                      className="dropdown-menu__item"
                    >
                      <div className="navbar-notifi">
                        <div className="navbar-notifi__left bg--green b-radius--rounded">
                          <img src="placeholder-image/350x300" alt="Profile Image" />
                        </div>
                        <div className="navbar-notifi__right">
                          <h6 className="notifi__title">send 0 by Rocket</h6>
                          <span className="time">
                            <i className="far fa-clock" />1 day ago
                          </span>
                        </div>
                      </div>
                      {/* navbar-notifi end */}
                    </a>
                    <a
                      href="notification/read/503"
                      className="dropdown-menu__item"
                    >
                      <div className="navbar-notifi">
                        <div className="navbar-notifi__left bg--green b-radius--rounded">
                          <img src="placeholder-image/350x300" alt="Profile Image" />
                        </div>
                        <div className="navbar-notifi__right">
                          <h6 className="notifi__title">send 0 by Payoneer</h6>
                          <span className="time">
                            <i className="far fa-clock" />1 day ago
                          </span>
                        </div>
                      </div>
                      {/* navbar-notifi end */}
                    </a>
                  </div>
                  <div className="dropdown-menu__footer">
                    <a href="notifications" className="view-all-message">
                      View all notification
                    </a>
                  </div>
                </div>
              </li>
              <li className="dropdown">
                <button
                  type="button"
                  className=""
                  data-bs-toggle="dropdown"
                  data-display="static"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="navbar-user">
                    <span className="navbar-user__thumb">
                      <img src="assets/images/default.png" alt="image" />
                    </span>
                    <span className="navbar-user__info">
                      <span className="navbar-user__name">admin</span>
                    </span>
                    <span className="icon">
                      <i className="las la-chevron-circle-down" />
                    </span>
                  </span>
                </button>
                <div className="dropdown-menu dropdown-menu--sm p-0 border-0 box--shadow1 dropdown-menu-right">
                  <a
                    href="profile"
                    className="dropdown-menu__item d-flex align-items-center px-3 py-2"
                  >
                    <i className="dropdown-menu__icon las la-user-circle" />
                    <span className="dropdown-menu__caption">Profile</span>
                  </a>
                  <a
                    href="password"
                    className="dropdown-menu__item d-flex align-items-center px-3 py-2"
                  >
                    <i className="dropdown-menu__icon las la-key" />
                    <span className="dropdown-menu__caption">Password</span>
                  </a>
                  <a
                    href="logout"
                    className="dropdown-menu__item d-flex align-items-center px-3 py-2"
                  >
                    <i className="dropdown-menu__icon las la-sign-out-alt" />
                    <span className="dropdown-menu__caption">Logout</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        {/* navbar-wrapper end */}
        <div className="body-wrapper">
          <div className="bodywrapper__inner">
            <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
              <h6 className="page-title">All Users</h6>
              <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                <form action="" method="GET" className="d-flex flex-wrap sea gap-2">
                  <div className="input-group w-auto flex-fill">
                    <input
                      type="search"
                      name="search"
                      className="form-control bg--white"
                      placeholder="Username / Email"
                      defaultValue=""
                    />
                    <button className="btn btn--primary" type="submit">
                      <i className="la la-search" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card b-radius--10 ">
                  <div className="card-body p-0">
                    <div className="table-responsive--md  table-responsive">
                      <table className="table table--light style--two">
                        <thead>
                          <tr>
                            <th>User</th>
                            <th>Email-Phone</th>
                            <th>Country</th>
                            <th>Joined At</th>
                            <th>Balance</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <span className="fw-bold">Xasan Cabdi</span>
                              <br />
                              <span className="small">
                                <a href="users/detail/2365">
                                  <span>@</span>hearning
                                </a>
                              </span>
                            </td>
                            <td>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </td>
                            <td>
                              <span className="fw-bold" title="Somalia">
                                SO
                              </span>
                            </td>
                            <td>
                              2023-07-27 09:50 PM <br />
                              28 minutes ago
                            </td>
                            <td>
                              <span className="fw-bold">₵0.00</span>
                            </td>
                            <td>
                              <a
                                href="users/detail/2365"
                                className="btn btn-sm btn-outline--primary"
                              >
                                <i className="las la-desktop" />
                                Details{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="fw-bold">Joy Emon</span>
                              <br />
                              <span className="small">
                                <a href="users/detail/2364">
                                  <span>@</span>109685850956500104850
                                </a>
                              </span>
                            </td>
                            <td>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </td>
                            <td>
                              <span className="fw-bold" title="" />
                            </td>
                            <td>
                              2023-07-27 12:42 PM <br />9 hours ago
                            </td>
                            <td>
                              <span className="fw-bold">₵0.00</span>
                            </td>
                            <td>
                              <a
                                href="users/detail/2364"
                                className="btn btn-sm btn-outline--primary"
                              >
                                <i className="las la-desktop" />
                                Details{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="fw-bold">Amit Halder</span>
                              <br />
                              <span className="small">
                                <a href="users/detail/2363">
                                  <span>@</span>102706799201014805283
                                </a>
                              </span>
                            </td>
                            <td>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </td>
                            <td>
                              <span className="fw-bold" title="" />
                            </td>
                            <td>
                              2023-07-27 07:57 AM <br />
                              14 hours ago
                            </td>
                            <td>
                              <span className="fw-bold">₵0.00</span>
                            </td>
                            <td>
                              <a
                                href="users/detail/2363"
                                className="btn btn-sm btn-outline--primary"
                              >
                                <i className="las la-desktop" />
                                Details{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="fw-bold">Md Hossain</span>
                              <br />
                              <span className="small">
                                <a href="users/detail/2362">
                                  <span>@</span>106962649904999221946
                                </a>
                              </span>
                            </td>
                            <td>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </td>
                            <td>
                              <span className="fw-bold" title="" />
                            </td>
                            <td>
                              2023-07-26 02:13 PM <br />1 day ago
                            </td>
                            <td>
                              <span className="fw-bold">₵0.00</span>
                            </td>
                            <td>
                              <a
                                href="users/detail/2362"
                                className="btn btn-sm btn-outline--primary"
                              >
                                <i className="las la-desktop" />
                                Details{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="fw-bold">Yoush Ljdjd</span>
                              <br />
                              <span className="small">
                                <a href="users/detail/2361">
                                  <span>@</span>gamegon
                                </a>
                              </span>
                            </td>
                            <td>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </td>
                            <td>
                              <span className="fw-bold" title="Bangladesh">
                                BD
                              </span>
                            </td>
                            <td>
                              2023-07-26 09:17 AM <br />1 day ago
                            </td>
                            <td>
                              <span className="fw-bold">₵0.00</span>
                            </td>
                            <td>
                              <a
                                href="users/detail/2361"
                                className="btn btn-sm btn-outline--primary"
                              >
                                <i className="las la-desktop" />
                                Details{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="fw-bold">Joy Emon</span>
                              <br />
                              <span className="small">
                                <a href="users/detail/2360">
                                  <span>@</span>100728078429022888081
                                </a>
                              </span>
                            </td>
                            <td>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </td>
                            <td>
                              <span className="fw-bold" title="" />
                            </td>
                            <td>
                              2023-07-26 08:36 AM <br />1 day ago
                            </td>
                            <td>
                              <span className="fw-bold">₵0.00</span>
                            </td>
                            <td>
                              <a
                                href="users/detail/2360"
                                className="btn btn-sm btn-outline--primary"
                              >
                                <i className="las la-desktop" />
                                Details{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="fw-bold">moses mungai</span>
                              <br />
                              <span className="small">
                                <a href="users/detail/2359">
                                  <span>@</span>115924879156619346211
                                </a>
                              </span>
                            </td>
                            <td>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </td>
                            <td>
                              <span className="fw-bold" title="" />
                            </td>
                            <td>
                              2023-07-25 10:32 PM <br />1 day ago
                            </td>
                            <td>
                              <span className="fw-bold">₵0.00</span>
                            </td>
                            <td>
                              <a
                                href="users/detail/2359"
                                className="btn btn-sm btn-outline--primary"
                              >
                                <i className="las la-desktop" />
                                Details{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="fw-bold">Sopuru Daniel</span>
                              <br />
                              <span className="small">
                                <a href="users/detail/2358">
                                  <span>@</span>intelligence
                                </a>
                              </span>
                            </td>
                            <td>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </td>
                            <td>
                              <span className="fw-bold" title="Nigeria">
                                NG
                              </span>
                            </td>
                            <td>
                              2023-07-25 03:39 PM <br />2 days ago
                            </td>
                            <td>
                              <span className="fw-bold">₵0.00</span>
                            </td>
                            <td>
                              <a
                                href="users/detail/2358"
                                className="btn btn-sm btn-outline--primary"
                              >
                                <i className="las la-desktop" />
                                Details{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="fw-bold">Ahmed Abdi</span>
                              <br />
                              <span className="small">
                                <a href="users/detail/2357">
                                  <span>@</span>102454937053602712547
                                </a>
                              </span>
                            </td>
                            <td>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </td>
                            <td>
                              <span className="fw-bold" title="" />
                            </td>
                            <td>
                              2023-07-24 02:16 PM <br />3 days ago
                            </td>
                            <td>
                              <span className="fw-bold">₵0.00</span>
                            </td>
                            <td>
                              <a
                                href="users/detail/2357"
                                className="btn btn-sm btn-outline--primary"
                              >
                                <i className="las la-desktop" />
                                Details{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="fw-bold">Jamilu Ahmad</span>
                              <br />
                              <span className="small">
                                <a href="users/detail/2356">
                                  <span>@</span>markarz
                                </a>
                              </span>
                            </td>
                            <td>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </td>
                            <td>
                              <span className="fw-bold" title="Nigeria">
                                NG
                              </span>
                            </td>
                            <td>
                              2023-07-24 09:20 AM <br />3 days ago
                            </td>
                            <td>
                              <span className="fw-bold">₵0.00</span>
                            </td>
                            <td>
                              <a
                                href="users/detail/2356"
                                className="btn btn-sm btn-outline--primary"
                              >
                                <i className="las la-desktop" />
                                Details{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="fw-bold">
                                rickeyponder rickeyponder
                              </span>
                              <br />
                              <span className="small">
                                <a href="users/detail/2355">
                                  <span>@</span>108523646412165088605
                                </a>
                              </span>
                            </td>
                            <td>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </td>
                            <td>
                              <span className="fw-bold" title="" />
                            </td>
                            <td>
                              2023-07-23 11:29 PM <br />3 days ago
                            </td>
                            <td>
                              <span className="fw-bold">₵0.00</span>
                            </td>
                            <td>
                              <a
                                href="users/detail/2355"
                                className="btn btn-sm btn-outline--primary"
                              >
                                <i className="las la-desktop" />
                                Details{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="fw-bold">md junaid</span>
                              <br />
                              <span className="small">
                                <a href="users/detail/2354">
                                  <span>@</span>junaidhossain2020
                                </a>
                              </span>
                            </td>
                            <td>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </td>
                            <td>
                              <span className="fw-bold" title="United Arab Emirates">
                                AE
                              </span>
                            </td>
                            <td>
                              2023-07-23 05:12 PM <br />4 days ago
                            </td>
                            <td>
                              <span className="fw-bold">₵0.00</span>
                            </td>
                            <td>
                              <a
                                href="users/detail/2354"
                                className="btn btn-sm btn-outline--primary"
                              >
                                <i className="las la-desktop" />
                                Details{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="fw-bold">Saker Mia</span>
                              <br />
                              <span className="small">
                                <a href="users/detail/2353">
                                  <span>@</span>saker87
                                </a>
                              </span>
                            </td>
                            <td>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </td>
                            <td>
                              <span className="fw-bold" title="Bangladesh">
                                BD
                              </span>
                            </td>
                            <td>
                              2023-07-23 11:39 AM <br />4 days ago
                            </td>
                            <td>
                              <span className="fw-bold">₵0.00</span>
                            </td>
                            <td>
                              <a
                                href="users/detail/2353"
                                className="btn btn-sm btn-outline--primary"
                              >
                                <i className="las la-desktop" />
                                Details{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="fw-bold">Amir Hossain</span>
                              <br />
                              <span className="small">
                                <a href="users/detail/2352">
                                  <span>@</span>ajamir
                                </a>
                              </span>
                            </td>
                            <td>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </td>
                            <td>
                              <span className="fw-bold" title="Bangladesh">
                                BD
                              </span>
                            </td>
                            <td>
                              2023-07-22 01:13 PM <br />5 days ago
                            </td>
                            <td>
                              <span className="fw-bold">₵0.00</span>
                            </td>
                            <td>
                              <a
                                href="users/detail/2352"
                                className="btn btn-sm btn-outline--primary"
                              >
                                <i className="las la-desktop" />
                                Details{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="fw-bold">charif hamza</span>
                              <br />
                              <span className="small">
                                <a href="users/detail/2351">
                                  <span>@</span>charifx
                                </a>
                              </span>
                            </td>
                            <td>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </td>
                            <td>
                              <span className="fw-bold" title="Morocco">
                                MA
                              </span>
                            </td>
                            <td>
                              2023-07-22 12:52 PM <br />5 days ago
                            </td>
                            <td>
                              <span className="fw-bold">₵0.00</span>
                            </td>
                            <td>
                              <a
                                href="users/detail/2351"
                                className="btn btn-sm btn-outline--primary"
                              >
                                <i className="las la-desktop" />
                                Details{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="fw-bold">Den Den</span>
                              <br />
                              <span className="small">
                                <a href="users/detail/2350">
                                  <span>@</span>denden
                                </a>
                              </span>
                            </td>
                            <td>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </td>
                            <td>
                              <span className="fw-bold" title="Colombia">
                                CO
                              </span>
                            </td>
                            <td>
                              2023-07-21 11:23 PM <br />5 days ago
                            </td>
                            <td>
                              <span className="fw-bold">₵0.00</span>
                            </td>
                            <td>
                              <a
                                href="users/detail/2350"
                                className="btn btn-sm btn-outline--primary"
                              >
                                <i className="las la-desktop" />
                                Details{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="fw-bold">John Onyeuwaoma</span>
                              <br />
                              <span className="small">
                                <a href="users/detail/2349">
                                  <span>@</span>114733388110241326454
                                </a>
                              </span>
                            </td>
                            <td>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </td>
                            <td>
                              <span className="fw-bold" title="" />
                            </td>
                            <td>
                              2023-07-21 09:33 PM <br />6 days ago
                            </td>
                            <td>
                              <span className="fw-bold">₵0.00</span>
                            </td>
                            <td>
                              <a
                                href="users/detail/2349"
                                className="btn btn-sm btn-outline--primary"
                              >
                                <i className="las la-desktop" />
                                Details{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="fw-bold">12412412 4124124124</span>
                              <br />
                              <span className="small">
                                <a href="users/detail/2348">
                                  <span>@</span>prosto
                                </a>
                              </span>
                            </td>
                            <td>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </td>
                            <td>
                              <span className="fw-bold" title="United States">
                                US
                              </span>
                            </td>
                            <td>
                              2023-07-21 01:17 PM <br />6 days ago
                            </td>
                            <td>
                              <span className="fw-bold">₵0.00</span>
                            </td>
                            <td>
                              <a
                                href="users/detail/2348"
                                className="btn btn-sm btn-outline--primary"
                              >
                                <i className="las la-desktop" />
                                Details{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="fw-bold">Honey Boy</span>
                              <br />
                              <span className="small">
                                <a href="users/detail/2347">
                                  <span>@</span>108523066825273594690
                                </a>
                              </span>
                            </td>
                            <td>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </td>
                            <td>
                              <span className="fw-bold" title="" />
                            </td>
                            <td>
                              2023-07-21 11:21 AM <br />6 days ago
                            </td>
                            <td>
                              <span className="fw-bold">₵0.00</span>
                            </td>
                            <td>
                              <a
                                href="users/detail/2347"
                                className="btn btn-sm btn-outline--primary"
                              >
                                <i className="las la-desktop" />
                                Details{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="fw-bold">Kenechukwu Nwachukwu</span>
                              <br />
                              <span className="small">
                                <a href="users/detail/2346">
                                  <span>@</span>kenzi144
                                </a>
                              </span>
                            </td>
                            <td>
                              [Email is protected for the demo]
                              <br />
                              [Mobile number is protected for the demo]
                            </td>
                            <td>
                              <span className="fw-bold" title="Nigeria">
                                NG
                              </span>
                            </td>
                            <td>
                              2023-07-21 10:41 AM <br />6 days ago
                            </td>
                            <td>
                              <span className="fw-bold">₵0.00</span>
                            </td>
                            <td>
                              <a
                                href="users/detail/2346"
                                className="btn btn-sm btn-outline--primary"
                              >
                                <i className="las la-desktop" />
                                Details{" "}
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="card-footer py-4">
                    <nav>
                      <ul className="pagination">
                        <li
                          className="page-item disabled"
                          aria-disabled="true"
                          aria-label="« Previous"
                        >
                          <span className="page-link" aria-hidden="true">
                            ‹
                          </span>
                        </li>
                        <li className="page-item active" aria-current="page">
                          <span className="page-link">1</span>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="users?page=2">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="users?page=3">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="users?page=4">
                            4
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="users?page=5">
                            5
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="users?page=6">
                            6
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="users?page=7">
                            7
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="users?page=8">
                            8
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="users?page=9">
                            9
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="users?page=10">
                            10
                          </a>
                        </li>
                        <li className="page-item disabled" aria-disabled="true">
                          <span className="page-link">...</span>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="users?page=68">
                            68
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="users?page=69">
                            69
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="users?page=2"
                            rel="next"
                            aria-label="Next »"
                          >
                            ›
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* bodywrapper__inner end */}
        </div>
        {/* body-wrapper end */}
      </div>
      
    );
  }
}

export default Users;
