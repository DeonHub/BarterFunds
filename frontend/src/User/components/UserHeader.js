import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsCardText } from "react-icons/bs";

class UserHeader extends React.Component {
  constructor(props) {
    super(props);

    const currentYear = new Date().getFullYear();

    this.state = {
    currentYear: currentYear,
    };

  }

  render() {

    return (
      <div className="nk-header nk-header-fixed is-light">
      <div className="container-fluid">
        <div className="nk-header-wrap">
          <div className="nk-menu-trigger d-xl-none ms-n1">
            <a
              href="#"
              className="nk-nav-toggle nk-quick-nav-icon"
              data-target="sidebarMenu"
            >
              <em className="icon la la-bars" />
            </a>
          </div>
          <div className="nk-header-brand d-xl-none">
            <a href="/assets/index.html" className="logo-link">
              <img
                className="logo-light logo-img"
                src="/assets/images/logo.png"
                srcSet="/assets/images/logo2x.png 2x"
                alt="logo"
              />
              <img
                className="logo-dark logo-img"
                src="/assets/images/logo.png"
              />
            </a>
          </div>
          {/* .nk-header-brand */}
          <div className="nk-header-news d-none d-xl-block">
            <div className="nk-news-list">
              <a className="nk-news-item" href="#">
                <div className="nk-news-icon">
                  <em className="icon la la-newspaper"></em> 
                </div>
                <div className="nk-news-text">
                  <p>
                    Get realtime update on our exchange rates
                    <span> Subscribe to our newsletter now!</span>
                  </p>
                  <em className="icon la la-external-link"></em>
                </div>
              </a>
            </div>
          </div>
          {/* .nk-header-news */}
          <div className="nk-header-tools">
            <ul className="nk-quick-nav">
              <li className="dropdown user-dropdown">
                <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">
                  <div className="user-toggle">
                    <div className="user-avatar sm">
                      <em className="icon la la-user-alt" />
                    </div>
                    <div className="user-info d-none d-md-block">
                      <div className="user-status">Administrator</div>
                      <div className="user-name dropdown-indicator">
                        Michael Adzato
                      </div>
                    </div>
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-md dropdown-menu-end dropdown-menu-s1">
                  <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                    <div className="user-card">
                      <div className="user-avatar">
                        <span>AB</span>
                      </div>
                      <div className="user-info">
                        <span className="lead-text">Michael Adzato</span>
                        <span className="sub-text">info@barter-funds.com</span>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-inner">
                    <ul className="link-list">
                      <li>
                        <a href="/assets/user/profile.html">
                          <em className="icon la la-user-alt" />
                          <span>View Profile</span>
                        </a>
                      </li>
                      <li>
                        <a href="user/profile-setting.html">
                          <em className="icon la la-setting-alt" />
                          <span>Account Setting</span>
                        </a>
                      </li>
                      <li>
                        <a href="user/profile-activity.html">
                          <em className="icon ni ni-activity-alt" />
                          <span>Login Activity</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown-inner">
                    <ul className="link-list">
                      <li>
                        <a href="#">
                          <em className="icon ni ni-signout" />
                          <span>Sign out</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              {/* .dropdown */}
              <li className="dropdown notification-dropdown me-n1">
                <a
                  href="#"
                  className="dropdown-toggle nk-quick-nav-icon"
                  data-bs-toggle="dropdown"
                >
                  <div className="icon-status icon-status-info">
                    <em className="icon la la-bell" />
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-xl dropdown-menu-end dropdown-menu-s1">
                  <div className="dropdown-head">
                    <span className="sub-title nk-dropdown-title">
                      Notifications
                    </span>
                    <a href="#">Mark All as Read</a>
                  </div>
                  <div className="dropdown-body">
                    <div className="nk-notification">
                      <div className="nk-notification-item dropdown-inner">
                        <div className="nk-notification-icon">
                          <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right" />
                        </div>
                        <div className="nk-notification-content">
                          <div className="nk-notification-text">
                            You have requested to
                            <span>Widthdrawl</span>
                          </div>
                          <div className="nk-notification-time">2 hrs ago</div>
                        </div>
                      </div>
                      <div className="nk-notification-item dropdown-inner">
                        <div className="nk-notification-icon">
                          <em className="icon icon-circle bg-success-dim ni ni-curve-down-left" />
                        </div>
                        <div className="nk-notification-content">
                          <div className="nk-notification-text">
                            Your <span>Deposit Order</span> is placed
                          </div>
                          <div className="nk-notification-time">2 hrs ago</div>
                        </div>
                      </div>
                      <div className="nk-notification-item dropdown-inner">
                        <div className="nk-notification-icon">
                          <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right" />
                        </div>
                        <div className="nk-notification-content">
                          <div className="nk-notification-text">
                            You have requested to
                            <span>Widthdrawl</span>
                          </div>
                          <div className="nk-notification-time">2 hrs ago</div>
                        </div>
                      </div>
                      <div className="nk-notification-item dropdown-inner">
                        <div className="nk-notification-icon">
                          <em className="icon icon-circle bg-success-dim ni ni-curve-down-left" />
                        </div>
                        <div className="nk-notification-content">
                          <div className="nk-notification-text">
                            Your <span>Deposit Order</span> is placed
                          </div>
                          <div className="nk-notification-time">2 hrs ago</div>
                        </div>
                      </div>
                      <div className="nk-notification-item dropdown-inner">
                        <div className="nk-notification-icon">
                          <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right" />
                        </div>
                        <div className="nk-notification-content">
                          <div className="nk-notification-text">
                            You have requested to
                            <span>Widthdrawl</span>
                          </div>
                          <div className="nk-notification-time">2 hrs ago</div>
                        </div>
                      </div>
                      <div className="nk-notification-item dropdown-inner">
                        <div className="nk-notification-icon">
                          <em className="icon icon-circle bg-success-dim ni ni-curve-down-left" />
                        </div>
                        <div className="nk-notification-content">
                          <div className="nk-notification-text">
                            Your <span>Deposit Order</span> is placed
                          </div>
                          <div className="nk-notification-time">2 hrs ago</div>
                        </div>
                      </div>
                    </div>
                    {/* .nk-notification */}
                  </div>
                  {/* .nk-dropdown-body */}
                  <div className="dropdown-foot center">
                    <a href="#">View All</a>
                  </div>
                </div>
              </li>
              {/* .dropdown */}
            </ul>
            {/* .nk-quick-nav */}
          </div>
          {/* .nk-header-tools */}
        </div>
        {/* .nk-header-wrap */}
      </div>
      {/* .container-fliud */}
    </div>
    
      
    );
  }
}

export default UserHeader;
