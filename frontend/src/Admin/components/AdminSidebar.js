import React from "react";
import '../Admin.css'

class AdminSidebar extends React.Component {
  constructor(props) {
    super(props);

    const currentYear = new Date().getFullYear();

    this.state = {
    currentYear: currentYear,
    };

  }

  render() {

    return (

      <div>
        <>
      <div className="sidebar bg--dark">
        <button className="res-sidebar-close-btn">
          <i className="las la-times" />
        </button>
        <div className="sidebar__inner">
          <div className="sidebar__logo">
            <a href="#" className="sidebar__main-logo">
              <img src="/assets/images/logo-dark.png" alt="sidebar logo" />
            </a>
          </div>
          <div className="sidebar__menu-wrapper" id="sidebar__menuWrapper">
            <ul className="sidebar__menu">
              <li className={`sidebar-menu-item ${this.props.active === 'dashboard' ? 'active' : ''}`}>
                <a href={`${process.env.PUBLIC_URL}/admin/dashboard`} className="nav-link ">
                  <i className="menu-icon las la-home" />
                  <span className="menu-title">Dashboard</span>
                </a>
              </li>
              <li className={`sidebar-menu-item ${this.props.active === 'users' ? 'active' : ''}`}>
                <a href={`${process.env.PUBLIC_URL}/admin/users`} className="">
                  <i className="menu-icon las la-users" />
                  <span className="menu-title">Users</span>
                </a>
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
                          20
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
              
              <li className={`sidebar-menu-item ${this.props.active === 'tickets' ? 'active' : ''}`}>
                <a href={`${process.env.PUBLIC_URL}/admin/tickets`} className="">
                  <i className="menu-icon la la-ticket" />
                  <span className="menu-title">Support Tickets</span>
                </a>
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
    </>
    

      </div>
    );
  }
}

export default AdminSidebar;
