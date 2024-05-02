import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './User.css'
import UserSidebar from "./components/UserSidebar";
import UserHeader from "./components/UserHeader";
import UserFooter from "./components/UserFooter";


class UserWallet extends React.Component {
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
      <div className="nk-block-head">
        <div className="nk-block-head-sub">
          <span>Account Wallet</span>{" "}
        </div>
        {/* .nk-block-head-sub */}
        <div className="nk-block-between-md g-4">
          <div className="nk-block-head-content">
            <h2 className="nk-block-title fw-normal">Wallet / Assets</h2>
            <div className="nk-block-des">
              <p>Here is the list of your assets / wallets!</p>
            </div>
          </div>
          <div className="nk-block-head-content">
            <ul className="nk-block-tools gx-3">
              <li className="opt-menu-md dropdown">
                <a
                  href="#"
                  className="btn btn-dim btn-outline-light btn-icon"
                  data-bs-toggle="dropdown"
                >
                  <em className="icon ni ni-setting" />
                </a>
                <div className="dropdown-menu  dropdown-menu-xs dropdown-menu-end">
                  <ul className="link-list-plain sm">
                    <li>
                      <a href="#">Display</a>
                    </li>
                    <li>
                      <a href="#">Show</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#" className="btn btn-primary">
                  <span>Send</span>{" "}
                  <em className="icon ni ni-arrow-long-right" />
                </a>
              </li>
              <li>
                <a href="#" className="btn btn-dim btn-outline-light">
                  <span>Withdraw</span>
                  <em className="icon ni ni-arrow-long-right" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* .nk-block-between */}
      </div>
      {/* .nk-block-head */}
      <div className="nk-block">
        <div className="nk-block-head-sm">
          <div className="nk-block-head-content">
            <h5 className="nk-block-title title">Barter Accounts</h5>
          </div>
        </div>
        <div className="row g-gs">
          <div className="col-sm-6 col-lg-4 col-xl-6 col-xxl-4">
            <div className="card card-bordered is-dark">
              <div className="nk-wgw">
                <div className="nk-wgw-inner">
                  <a
                    className="nk-wgw-name"
                    href="/frontend/admin/wallet-bitcoin.html"
                  >
                    <div className="nk-wgw-icon is-default">
                      <em className="icon ni ni-sign-kobo" />
                    </div>
                    <h5 className="nk-wgw-title title">Barter Wallet</h5>
                  </a>
                  <div className="nk-wgw-balance">
                    <div className="amount">
                      40.509505
                      <span className="currency currency-nio">GHS</span>
                    </div>
                    <div className="amount-sm">
                      8,924.63<span className="currency currency-usd">USD</span>
                    </div>
                  </div>
                </div>
                <div className="nk-wgw-actions">
                  <ul>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-arrow-up-right" />
                        <span>Send</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-arrow-down-left" />
                        <span>Receive</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-arrow-to-right" />
                        <span>Withdraw</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="nk-wgw-more dropdown">
                  <a
                    href="#"
                    className="btn btn-icon btn-trigger"
                    data-bs-toggle="dropdown"
                  >
                    <em className="icon ni ni-more-h" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-xs dropdown-menu-end">
                    <ul className="link-list-plain sm">
                      <li>
                        <a href="#">Details</a>
                      </li>
                      <li>
                        <a href="#">Edit</a>
                      </li>
                      <li>
                        <a href="#">Delete</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* .card */}
          </div>
          {/* .col */}
          <div className="col-sm-6 col-lg-4 col-xl-6 col-xxl-4">
            <div className="card card-bordered">
              <div className="nk-wgw">
                <div className="nk-wgw-inner">
                  <a
                    className="nk-wgw-name"
                    href="/frontend/admin/wallet-bitcoin.html"
                  >
                    <div className="nk-wgw-icon">
                      <em className="icon ni ni-sign-eth" />
                    </div>
                    <h5 className="nk-wgw-title title">Ethereum Wallet</h5>
                  </a>
                  <div className="nk-wgw-balance">
                    <div className="amount">
                      0.452058<span className="currency currency-eth">ETH</span>
                    </div>
                    <div className="amount-sm">
                      1,583.25<span className="currency currency-usd">USD</span>
                    </div>
                  </div>
                </div>
                <div className="nk-wgw-actions">
                  <ul>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-arrow-up-right" />
                        <span>Send</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-arrow-down-left" />
                        <span>Receive</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-arrow-to-right" />
                        <span>Withdraw</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="nk-wgw-more dropdown">
                  <a
                    href="#"
                    className="btn btn-icon btn-trigger"
                    data-bs-toggle="dropdown"
                  >
                    <em className="icon ni ni-more-h" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-xs dropdown-menu-end">
                    <ul className="link-list-plain sm">
                      <li>
                        <a href="#">Details</a>
                      </li>
                      <li>
                        <a href="#">Edit</a>
                      </li>
                      <li>
                        <a href="#">Delete</a>
                      </li>
                      <li>
                        <a href="#">Make Default</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* .card */}
          </div>
          {/* .col */}
          <div className="col-sm-6 col-lg-4 col-xl-6 col-xxl-4">
            <div className="card card-bordered">
              <div className="nk-wgw">
                <div className="nk-wgw-inner">
                  <a
                    className="nk-wgw-name"
                    href="/frontend/admin/wallet-bitcoin.html"
                  >
                    <div className="nk-wgw-icon">
                      <em className="icon ni ni-sign-btc" />
                    </div>
                    <h5 className="nk-wgw-title title">Bitcoin Wallet</h5>
                  </a>
                  <div className="nk-wgw-balance">
                    <div className="amount">
                      4.434953<span className="currency currency-btc">BTC</span>
                    </div>
                    <div className="amount-sm">
                      28,247.63
                      <span className="currency currency-usd">USD</span>
                    </div>
                  </div>
                </div>
                <div className="nk-wgw-actions">
                  <ul>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-arrow-up-right" />
                        <span>Send</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-arrow-down-left" />
                        <span>Receive</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-arrow-to-right" />
                        <span>Withdraw</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="nk-wgw-more dropdown">
                  <a
                    href="#"
                    className="btn btn-icon btn-trigger"
                    data-bs-toggle="dropdown"
                  >
                    <em className="icon ni ni-more-h" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-xs dropdown-menu-end">
                    <ul className="link-list-plain sm">
                      <li>
                        <a href="#">Details</a>
                      </li>
                      <li>
                        <a href="#">Edit</a>
                      </li>
                      <li>
                        <a href="#">Delete</a>
                      </li>
                      <li>
                        <a href="#">Make Default</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* .card */}
          </div>
          {/* .col */}
        </div>
        {/* .row */}
      </div>
      <div className="nk-block nk-block-lg">
        <div className="nk-block-head-sm">
          <div className="nk-block-head-content">
            <h5 className="nk-block-title title">Fiat Accounts</h5>
          </div>
        </div>
        <div className="row g-gs">
          <div className="col-md-6 col-lg-4">
            <div className="card card-bordered">
              <div className="nk-wgw">
                <div className="nk-wgw-inner">
                  <a
                    className="nk-wgw-name"
                    href="/frontend/admin/wallet-bitcoin.html"
                  >
                    <div className="nk-wgw-icon is-default">
                      <em className="icon ni ni-sign-usd" />
                    </div>
                    <h5 className="nk-wgw-title title">USD Account</h5>
                  </a>
                  <div className="nk-wgw-balance">
                    <div className="amount">
                      12,495.90
                      <span className="currency currency-usd">USD</span>
                    </div>
                    <div className="amount-sm">
                      12,495.90
                      <span className="currency currency-usd">USD</span>
                    </div>
                  </div>
                </div>
                <div className="nk-wgw-actions">
                  <ul>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-arrow-up-right" />
                        <span>Send</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-arrow-down-left" />
                        <span>Receive</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-arrow-to-right" />
                        <span>Withdraw</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="nk-wgw-more dropdown">
                  <a
                    href="#"
                    className="btn btn-icon btn-trigger"
                    data-bs-toggle="dropdown"
                  >
                    <em className="icon ni ni-more-h" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-xs dropdown-menu-end">
                    <ul className="link-list-plain sm">
                      <li>
                        <a href="#">Details</a>
                      </li>
                      <li>
                        <a href="#">Edit</a>
                      </li>
                      <li>
                        <a href="#">Delete</a>
                      </li>
                      <li>
                        <a href="#">Make Default</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* .card */}
          </div>
          {/* .col */}
          <div className="col-md-6 col-lg-4">
            <div className="card card-bordered">
              <div className="nk-wgw">
                <div className="nk-wgw-inner">
                  <a
                    className="nk-wgw-name"
                    href="/frontend/admin/wallet-bitcoin.html"
                  >
                    <div className="nk-wgw-icon">
                      <em className="icon ni ni-sign-eur" />
                    </div>
                    <h5 className="nk-wgw-title title">EUR Account</h5>
                  </a>
                  <div className="nk-wgw-balance">
                    <div className="amount">
                      12,495.90
                      <span className="currency currency-eur">EUR</span>
                    </div>
                    <div className="amount-sm">
                      12,495.90
                      <span className="currency currency-usd">USD</span>
                    </div>
                  </div>
                </div>
                <div className="nk-wgw-actions">
                  <ul>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-arrow-up-right" />
                        <span>Send</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-arrow-down-left" />
                        <span>Receive</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <em className="icon ni ni-arrow-to-right" />
                        <span>Withdraw</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="nk-wgw-more dropdown">
                  <a
                    href="#"
                    className="btn btn-icon btn-trigger"
                    data-bs-toggle="dropdown"
                  >
                    <em className="icon ni ni-more-h" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-xs dropdown-menu-end">
                    <ul className="link-list-plain sm">
                      <li>
                        <a href="#">Details</a>
                      </li>
                      <li>
                        <a href="#">Edit</a>
                      </li>
                      <li>
                        <a href="#">Delete</a>
                      </li>
                      <li>
                        <a href="#">Make Default</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* .card */}
          </div>
          {/* .col */}
          <div className="col-md-6 col-lg-4">
            <div className="card card-bordered dashed h-100">
              <div className="nk-wgw-add">
                <div className="nk-wgw-inner">
                  <a href="#">
                    <div className="add-icon">
                      <em className="icon ni ni-plus" />
                    </div>
                    <h6 className="title">Add New Wallet</h6>
                  </a>
                  <span className="sub-text">
                    You can add your more wallet in your account to manage
                    separetly.
                  </span>
                </div>
              </div>
            </div>
            {/* .card */}
          </div>
          {/* .col */}
        </div>
        {/* .row */}
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

export default UserWallet;
