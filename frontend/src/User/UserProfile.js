import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './User.css'
import UserSidebar from "./components/UserSidebar";
import UserHeader from "./components/UserHeader";
import UserFooter from "./components/UserFooter";


class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    const currentYear = new Date().getFullYear();

    this.state = {
    currentYear: currentYear,
    };

  }

  render() {

    return (
      <div className="nk-body npc-crypto bg-white has-sidebar">
        <div className="nk-app-root">
            {/*Main Start*/}
            <div className="nk-main ">
                {/*Sidebar Start*/}
                <UserSidebar />
                {/*Sidebar End*/}
                <div className="nk-wrap ">
                    {/*Main Header Start*/}
                    <UserHeader />
                    {/*Main Header End*/}
                    {/*Content Start*/}
                    <div className="nk-content nk-content-fluid">
  <div className="container-xl wide-lg">
    <div className="nk-content-body">
      <div className="nk-block">
        <div className="card card-bordered">
          <div className="card-aside-wrap">
            <div className="card-inner card-inner-lg">
              <div className="nk-block-head nk-block-head-lg">
                <div className="nk-block-between">
                  <div className="nk-block-head-content">
                    <h4 className="nk-block-title">Personal Information</h4>
                    <div className="nk-block-des">
                      <p>
                        Basic info, like your name and address, that you use on
                        Nio Platform.
                      </p>
                    </div>
                  </div>
                  <div className="nk-block-head-content align-self-start d-lg-none">
                    <a
                      href="#"
                      className="toggle btn btn-icon btn-trigger mt-n1"
                      data-target="userAside"
                    >
                      <em className="icon ni ni-menu-alt-r" />
                    </a>
                  </div>
                </div>
              </div>
              {/* .nk-block-head */}
              <div className="nk-block">
                <div className="nk-data data-list">
                  <div className="data-head">
                    <h6 className="overline-title">Basics</h6>
                  </div>
                  <div
                    className="data-item"
                    data-bs-toggle="modal"
                    data-bs-target="#profile-edit"
                  >
                    <div className="data-col">
                      <span className="data-label">Full Name</span>
                      <span className="data-value">Michael Adzato</span>
                    </div>
                    <div className="data-col data-col-end">
                      <span className="data-more">
                        <em className="icon ni ni-forward-ios" />
                      </span>
                    </div>
                  </div>
                  {/* data-item */}
                  <div
                    className="data-item"
                    data-bs-toggle="modal"
                    data-bs-target="#profile-edit"
                  >
                    <div className="data-col">
                      <span className="data-label">Display Name</span>
                      <span className="data-value">Ishtiyak</span>
                    </div>
                    <div className="data-col data-col-end">
                      <span className="data-more">
                        <em className="icon ni ni-forward-ios" />
                      </span>
                    </div>
                  </div>
                  {/* data-item */}
                  <div className="data-item">
                    <div className="data-col">
                      <span className="data-label">Email</span>
                      <span className="data-value">info@barter-funds.com</span>
                    </div>
                    <div className="data-col data-col-end">
                      <span className="data-more disable">
                        <em className="icon ni ni-lock-alt" />
                      </span>
                    </div>
                  </div>
                  {/* data-item */}
                  <div
                    className="data-item"
                    data-bs-toggle="modal"
                    data-bs-target="#profile-edit"
                  >
                    <div className="data-col">
                      <span className="data-label">Phone Number</span>
                      <span className="data-value text-soft">Not add yet</span>
                    </div>
                    <div className="data-col data-col-end">
                      <span className="data-more">
                        <em className="icon ni ni-forward-ios" />
                      </span>
                    </div>
                  </div>
                  {/* data-item */}
                  <div
                    className="data-item"
                    data-bs-toggle="modal"
                    data-bs-target="#profile-edit"
                  >
                    <div className="data-col">
                      <span className="data-label">Date of Birth</span>
                      <span className="data-value">29 Feb, 1986</span>
                    </div>
                    <div className="data-col data-col-end">
                      <span className="data-more">
                        <em className="icon ni ni-forward-ios" />
                      </span>
                    </div>
                  </div>
                  {/* data-item */}
                  <div
                    className="data-item"
                    data-bs-toggle="modal"
                    data-bs-target="#profile-edit"
                    data-tab-target="#address"
                  >
                    <div className="data-col">
                      <span className="data-label">Address</span>
                      <span className="data-value">
                        2337 Kildeer Drive,
                        <br />
                        Kentucky, Canada
                      </span>
                    </div>
                    <div className="data-col data-col-end">
                      <span className="data-more">
                        <em className="icon ni ni-forward-ios" />
                      </span>
                    </div>
                  </div>
                  {/* data-item */}
                </div>
                {/* data-list */}
                <div className="nk-data data-list">
                  <div className="data-head">
                    <h6 className="overline-title">Preferences</h6>
                  </div>
                  <div className="data-item">
                    <div className="data-col">
                      <span className="data-label">Language</span>
                      <span className="data-value">English (United State)</span>
                    </div>
                    <div className="data-col data-col-end">
                      <a href="#" className="link link-primary">
                        Change Language
                      </a>
                    </div>
                  </div>
                  {/* data-item */}
                  <div className="data-item">
                    <div className="data-col">
                      <span className="data-label">Date Format</span>
                      <span className="data-value">M d, YYYY</span>
                    </div>
                    <div className="data-col data-col-end">
                      <a href="#" className="link link-primary">
                        Change
                      </a>
                    </div>
                  </div>
                  {/* data-item */}
                  <div className="data-item">
                    <div className="data-col">
                      <span className="data-label">Timezone</span>
                      <span className="data-value">Bangladesh (GMT +6)</span>
                    </div>
                    <div className="data-col data-col-end">
                      <a href="#" className="link link-primary">
                        Change
                      </a>
                    </div>
                  </div>
                  {/* data-item */}
                </div>
                {/* data-list */}
              </div>
              {/* .nk-block */}
            </div>
            <div
              className="card-aside card-aside-left user-aside toggle-slide toggle-slide-left toggle-break-lg"
              data-toggle-body="true"
              data-content="userAside"
              data-toggle-screen="lg"
              data-toggle-overlay="true"
            >
              <div className="card-inner-group" data-simplebar="">
                <div className="card-inner">
                  <div className="user-card">
                    <div className="user-avatar bg-primary">
                      <span>AB</span>
                    </div>
                    <div className="user-info">
                      <span className="lead-text">Michael Adzato</span>
                      <span className="sub-text">info@barter-funds.com</span>
                    </div>
                    <div className="user-action">
                      <div className="dropdown">
                        <a
                          className="btn btn-icon btn-trigger me-n2"
                          data-bs-toggle="dropdown"
                          href="#"
                        >
                          <em className="icon ni ni-more-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <ul className="link-list-opt no-bdr">
                            <li>
                              <a href="#">
                                <em className="icon ni ni-camera-fill" />
                                <span>Change Photo</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <em className="icon ni ni-edit-fill" />
                                <span>Update Profile</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* .user-card */}
                </div>
                {/* .card-inner */}
                <div className="card-inner">
                  <div className="user-account-info py-0">
                    <h6 className="overline-title-alt">Nio Wallet Account</h6>
                    <div className="user-balance">
                      12.395769{" "}
                      <small className="currency currency-btc">BTC</small>
                    </div>
                    <div className="user-balance-sub">
                      Locked{" "}
                      <span>
                        0.344939{" "}
                        <span className="currency currency-btc">BTC</span>
                      </span>
                    </div>
                  </div>
                </div>
                {/* .card-inner */}
                <div className="card-inner p-0">
                  <ul className="link-list-menu">
                    <li>
                      <a
                        className="active"
                        href="/frontend/user/user/profile-regular.html"
                      >
                        <em className="icon ni ni-user-fill-c" />
                        <span>Personal Infomation</span>
                      </a>
                    </li>
                    <li>
                      <a href="/frontend/user/user/profile-notification.html">
                        <em className="icon ni ni-bell-fill" />
                        <span>Notifications</span>
                      </a>
                    </li>
                    <li>
                      <a href="/frontend/user/user/profile-activity.html">
                        <em className="icon ni ni-activity-round-fill" />
                        <span>Account Activity</span>
                      </a>
                    </li>
                    <li>
                      <a href="/frontend/user/user/profile-setting.html">
                        <em className="icon ni ni-lock-alt-fill" />
                        <span>Security Settings</span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* .card-inner */}
              </div>
              {/* .card-inner-group */}
            </div>
            {/* card-aside */}
          </div>
          {/* .card-aside-wrap */}
        </div>
        {/* .card */}
      </div>
      {/* .nk-block */}
    </div>
  </div>
</div>

                    {/*Content End*/}
                    {/*Footer Start*/}
                    <UserFooter />
                    {/*Footer End*/}

                </div>
            </div>
            {/*Main End*/}

        </div>
      </div> 
  


    );
  }
}

export default UserProfile;
