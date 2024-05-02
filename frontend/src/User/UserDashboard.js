import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './User.css'
import UserSidebar from "./components/UserSidebar";
import UserHeader from "./components/UserHeader";
import UserFooter from "./components/UserFooter";


class UserDashboard extends React.Component {
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
        <div className="nk-main ">
          <UserSidebar />
          <div className="nk-wrap ">
            <UserHeader />
            <div className="nk-content nk-content-fluid">
  <div className="container-xl wide-lg">
    <div className="nk-content-body">
      <div className="nk-block">
        <div className="row gy-gs">
        <div className="col-lg-5 col-xl-4">
  <div className="nk-block">
    <div className="nk-block-head-xs">
      <div className="nk-block-head-content">
        <h5 className="nk-block-title title">Overview</h5>
      </div>
    </div>
    <div className="nk-block">
      <div className="card card-bordered text-light is-dark h-100">
        <div className="card-inner">
          <div className="nk-wg7">
            <div className="nk-wg7-stats">
              <div className="nk-wg7-title">Barter Wallet Balance</div>
              <div className="number-lg amount">GHS 290.00</div>
            </div>
            <div className="user-account-actions">
  <ul className="g-1">
    <li>
      <a href="#" className="btn btn-lg btn-primary">
        <span>Deposit</span>
      </a>
    </li>
    <li>
      <a href="#" className="btn btn-lg btn-primary">
        <span>Withdraw</span>
      </a>
    </li>
  </ul>
  <br></br>
  <div>
      <a href="#" className="btn btn-lg btn-primary">
        <span>Exchange</span>
      </a>
    </div>
</div>


          </div>
        </div>
      </div>
    </div>
  </div>
</div>

          <div className="col-lg-7 col-xl-8">
            <div className="nk-block">
              <div className="nk-block-head-xs">
                <div className="nk-block-between-md g-2">
                  <div className="nk-block-head-content">
                    <h5 className="nk-block-title title">Currencies</h5>
                  </div>
                </div>
              </div>
              
              {/* .nk-block-head */}
              <div className="row g-2">
                <div className="col-sm-4">
                  <div className="card bg-light">
                    <div className="nk-wgw sm">
                      <a
                        className="nk-wgw-inner"
                        href="/frontend/user/panel/buy/btc.html"
                      >
                        <div className="nk-wgw-name">
                          <div className="nk-wgw-icon">
                          <img
                              src="/assets/images/currency/btc.png"
                              alt="bitcoin"
                            />
                          </div>
                          <h5 className="nk-wgw-title title">Bitcoin</h5>
                        </div>
                        <div className="nk-wgw-balance">
                          <div className="amount">
                            4.434953
                            <span className="currency currency-nio">BTC</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                {/* .col */}
                <div className="col-sm-4">
                  <div className="card bg-light">
                    <div className="nk-wgw sm">
                      <a
                        className="nk-wgw-inner"
                        href="/frontend/user/panel/buy/usdc.html"
                      >
                        <div className="nk-wgw-name">
                          <div className="nk-wgw-icon">
                          <img
                              src="/assets/images/currency/usdc.png"
                              alt="usd coin"
                            />
                          </div>
                          <h5 className="nk-wgw-title title">USD Coin</h5>
                        </div>
                        <div className="nk-wgw-balance">
                          <div className="amount">
                            4.434953
                            <span className="currency currency-nio">USDC</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                {/* .col */}
                <div className="col-sm-4">
                  <div className="card bg-light">
                    <div className="nk-wgw sm">
                      <a
                        className="nk-wgw-inner"
                        href="/frontend/user/panel/buy/usdt.html"
                      >
                        <div className="nk-wgw-name">
                          <div className="nk-wgw-icon">
                          <img
                              src="/assets/images/currency/usdt.png"
                              alt="usdt"
                            />
                          </div>
                          <h5 className="nk-wgw-title title">Tether USDT</h5>
                        </div>
                        <div className="nk-wgw-balance">
                          <div className="amount">
                            4.434953
                            <span className="currency currency-usdt">USDT</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                {/* .col */}
                <div className="col-sm-4">
                  <div className="card bg-light">
                    <div className="nk-wgw sm">
                      <a
                        className="nk-wgw-inner"
                        href="/frontend/user/panel/buy/eth.html"
                      >
                        <div className="nk-wgw-name">
                          <div className="nk-wgw-icon">
                          <img
                              src="/assets/images/currency/ethereum.png"
                              alt="ethereum"
                            />
                          </div>
                          <h5 className="nk-wgw-title title">Ethereum</h5>
                        </div>
                        <div className="nk-wgw-balance">
                          <div className="amount">
                            0.000560
                            <span className="currency currency-eth">ETH</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                {/* .col */}
                <div className="col-sm-4">
                  <div className="card bg-light">
                    <div className="nk-wgw sm">
                      <a
                        className="nk-wgw-inner"
                        href="/frontend/user/panel/buy/ltc.html"
                      >
                        <div className="nk-wgw-name">
                          <div className="nk-wgw-icon">
                          <img
                              src="/assets/images/currency/litecoin.png"
                              alt="light coin"
                            />
                          </div>
                          <h5 className="nk-wgw-title title">Litecoin</h5>
                        </div>
                        <div className="nk-wgw-balance">
                          <div className="amount">
                            0.000560
                            <span className="currency currency-ltc">LTC</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                {/* .col */}
                <div className="col-sm-4">
                  <div className="card bg-light">
                    <div className="nk-wgw sm">
                      <a
                        className="nk-wgw-inner"
                        href="/frontend/user/panel/buy/bch.html"
                      >
                        <div className="nk-wgw-name">
                          <div className="nk-wgw-icon">
                          <img
                              src="/assets/images/currency/bch.png"
                              alt="bitcoin cash"
                            />
                          </div>
                          <h5 className="nk-wgw-title title">Bitcoin Cash</h5>
                        </div>
                        <div className="nk-wgw-balance">
                          <div className="amount">
                            0.000560
                            <span className="currency currency-bch">BCH</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                {/* .col */}
                <div className="col-sm-4">
                  <div className="card bg-light">
                    <div className="nk-wgw sm">
                      <a
                        className="nk-wgw-inner"
                        href="/frontend/user/panel/buy/paypal.html"
                      >
                        <div className="nk-wgw-name">
                          <div className="nk-wgw-icon">
                          <img
                              src="/assets/images/currency/paypal.png"
                              alt="paypal"
                            />
                          </div>
                          <h5 className="nk-wgw-title title">Paypal</h5>
                        </div>
                        <div className="nk-wgw-balance">
                          <div className="amount">
                            4.434953
                            <span className="currency currency-nio">PP</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                {/* .col */}
                <div className="col-sm-4">
                  <div className="card bg-light">
                    <div className="nk-wgw sm">
                      <a
                        className="nk-wgw-inner"
                        href="/frontend/user/panel/buy/cny.html"
                      >
                        <div className="nk-wgw-name">
                          <div className="nk-wgw-icon">
                          <img
                              src="/assets/images/currency/alipay.png"
                              alt="Alipay"
                            />
                          </div>
                          <h5 className="nk-wgw-title title">Yuan CNY</h5>
                        </div>
                        <div className="nk-wgw-balance">
                          <div className="amount">
                            4.434953
                            <span className="currency currency-btc">RMB</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                {/* .col */}
                <div className="col-sm-4">
                  <div className="card bg-light">
                    <div className="nk-wgw sm">
                      <a
                        className="nk-wgw-inner"
                        href="/frontend/user/panel/buy/pm.html"
                      >
                        <div className="nk-wgw-name">
                          <div className="nk-wgw-icon">
                            <img
                              src="/assets/images/currency/perfectmoney.png"
                              alt="perfectmoney Icon"
                            />
                          </div>
                          <h5 className="nk-wgw-title title">Perfect Money</h5>
                        </div>
                        <div className="nk-wgw-balance">
                          <div className="amount">
                            0.000560
                            <span className="currency currency-eth">PM</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                {/* .col */}
                <div className="col-sm-4"></div>
                {/* .row */}
              </div>
              {/* .nk-block */}
            </div>
            {/* .col */}
          </div>
          {/* .row */}
          <br />
          <div className="nk-block">
            <div className="card card-bordered">
              <div className="nk-refwg">
                <div className="nk-refwg-invite card-inner">
                  <div className="nk-refwg-head g-3">
                    <div className="nk-refwg-title">
                      <h5 className="title">Refer Us &amp; Earn</h5>
                      <div className="title-sub">
                        Use the bellow link to invite your friends.
                      </div>
                    </div>
                    <div className="nk-refwg-action">
                      <a href="#" className="btn btn-primary">
                        Invite
                      </a>
                    </div>
                  </div>
                  <div className="nk-refwg-url">
                    <div className="form-control-wrap">
                      <div
                        className="form-clip clipboard-init"
                        data-clipboard-target="#refUrl"
                        data-success="Copied"
                        data-text="Copy Link"
                      >
                        <span className="clipboard-text">Copy Link</span>
                      </div>
                      <div className="form-icon" />
                      <input
                        type="text"
                        className="form-control copy-text"
                        id="refUrl"
                        defaultValue="https://barter-funds.com/?ref=4945KD48"
                      />
                    </div>
                  </div>
                </div>
                {/* .nk-refwg-invite */}
                <div className="nk-refwg-stats card-inner bg-lighter">
                  <div className="nk-refwg-group g-3">
                    <div className="nk-refwg-name">
                      <h6 className="title">My Referral</h6>
                    </div>
                    <div className="nk-refwg-info g-3">
                      <div className="nk-refwg-sub">
                        <div className="title">0</div>
                        <div className="sub-text">Total Joined</div>
                      </div>
                      <div className="nk-refwg-sub">
                        <div className="title">0</div>
                        <div className="sub-text">Referral Earn</div>
                      </div>
                    </div>
                    <div className="nk-refwg-more dropdown mt-n1 me-n1">
                      <a
                        href="#"
                        className="btn btn-icon btn-trigger"
                        data-bs-toggle="dropdown"
                      />
                      <div className="dropdown-menu dropdown-menu-xs dropdown-menu-end">
                        <ul className="link-list-plain sm">
                          <li>
                            <a href="#">7 days</a>
                          </li>
                          <li>
                            <a href="#">15 Days</a>
                          </li>
                          <li>
                            <a href="#">30 Days</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="nk-refwg-ck">
                    <canvas className="chart-refer-stats" id="refBarChart" />
                  </div>
                </div>
                {/* .nk-refwg-stats */}
              </div>
              {/* .nk-refwg */}
            </div>
            {/* .card */}
          </div>
          {/* .nk-block */}
          <div className="nk-block">
            <div className="card card-bordered">
              <div className="card-inner card-inner-lg">
                <div className="align-center flex-wrap flex-md-nowrap g-4">
                  <div className="nk-block-image w-120px flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 120 118"
                    >
                      <path
                        d="M8.916,94.745C-.318,79.153-2.164,58.569,2.382,40.578,7.155,21.69,19.045,9.451,35.162,4.32,46.609.676,58.716.331,70.456,1.845,84.683,3.68,99.57,8.694,108.892,21.408c10.03,13.679,12.071,34.71,10.747,52.054-1.173,15.359-7.441,27.489-19.231,34.494-10.689,6.351-22.92,8.733-34.715,10.331-16.181,2.192-34.195-.336-47.6-12.281A47.243,47.243,0,0,1,8.916,94.745Z"
                        transform="translate(0 -1)"
                        fill="#f6faff"
                      />
                      <rect
                        x={18}
                        y={32}
                        width={84}
                        height={50}
                        rx={4}
                        ry={4}
                        fill="#fff"
                      />
                      <rect
                        x={26}
                        y={44}
                        width={20}
                        height={12}
                        rx={1}
                        ry={1}
                        fill="#e5effe"
                      />
                      <rect
                        x={50}
                        y={44}
                        width={20}
                        height={12}
                        rx={1}
                        ry={1}
                        fill="#e5effe"
                      />
                      <rect
                        x={74}
                        y={44}
                        width={20}
                        height={12}
                        rx={1}
                        ry={1}
                        fill="#e5effe"
                      />
                      <rect
                        x={38}
                        y={60}
                        width={20}
                        height={12}
                        rx={1}
                        ry={1}
                        fill="#e5effe"
                      />
                      <rect
                        x={62}
                        y={60}
                        width={20}
                        height={12}
                        rx={1}
                        ry={1}
                        fill="#e5effe"
                      />
                      <path
                        d="M98,32H22a5.006,5.006,0,0,0-5,5V79a5.006,5.006,0,0,0,5,5H52v8H45a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2H73a2,2,0,0,0,2-2V94a2,2,0,0,0-2-2H66V84H98a5.006,5.006,0,0,0,5-5V37A5.006,5.006,0,0,0,98,32ZM73,94v4H45V94Zm-9-2H54V84H64Zm37-13a3,3,0,0,1-3,3H22a3,3,0,0,1-3-3V37a3,3,0,0,1,3-3H98a3,3,0,0,1,3,3Z"
                        transform="translate(0 -1)"
                        fill="#798bff"
                      />
                      <path
                        d="M61.444,41H40.111L33,48.143V19.7A3.632,3.632,0,0,1,36.556,16H61.444A3.632,3.632,0,0,1,65,19.7V37.3A3.632,3.632,0,0,1,61.444,41Z"
                        transform="translate(0 -1)"
                        fill="#6576ff"
                      />
                      <path
                        d="M61.444,41H40.111L33,48.143V19.7A3.632,3.632,0,0,1,36.556,16H61.444A3.632,3.632,0,0,1,65,19.7V37.3A3.632,3.632,0,0,1,61.444,41Z"
                        transform="translate(0 -1)"
                        fill="none"
                        stroke="#6576ff"
                        strokeMiterlimit={10}
                        strokeWidth={2}
                      />
                      <line
                        x1={40}
                        y1={22}
                        x2={57}
                        y2={22}
                        fill="none"
                        stroke="#fffffe"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                      <line
                        x1={40}
                        y1={27}
                        x2={57}
                        y2={27}
                        fill="none"
                        stroke="#fffffe"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                      <line
                        x1={40}
                        y1={32}
                        x2={50}
                        y2={32}
                        fill="none"
                        stroke="#fffffe"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                      <line
                        x1="30.5"
                        y1="87.5"
                        x2="30.5"
                        y2="91.5"
                        fill="none"
                        stroke="#9cabff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <line
                        x1="28.5"
                        y1="89.5"
                        x2="32.5"
                        y2="89.5"
                        fill="none"
                        stroke="#9cabff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <line
                        x1="79.5"
                        y1="22.5"
                        x2="79.5"
                        y2="26.5"
                        fill="none"
                        stroke="#9cabff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <line
                        x1="77.5"
                        y1="24.5"
                        x2="81.5"
                        y2="24.5"
                        fill="none"
                        stroke="#9cabff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="90.5"
                        cy="97.5"
                        r={3}
                        fill="none"
                        stroke="#9cabff"
                        strokeMiterlimit={10}
                      />
                      <circle
                        cx={24}
                        cy={23}
                        r="2.5"
                        fill="none"
                        stroke="#9cabff"
                        strokeMiterlimit={10}
                      />
                    </svg>
                  </div>
                  <div className="nk-block-content">
                    <div className="nk-block-content-head px-lg-4">
                      <h5>We’re here to help you!</h5>
                      <p className="text-soft">
                        Ask a question or file a support ticket, manage request,
                        report an issues. Our team support team will get back to
                        you by email.
                      </p>
                    </div>
                  </div>
                  <div className="nk-block-content flex-shrink-0">
                    <a href="#" className="btn btn-lg btn-outline-primary">
                      Get Support Now
                    </a>
                  </div>
                </div>
              </div>
              {/* .card-inner */}
            </div>
            {/* .card */}
          </div>
          {/* .nk-block */}
        </div>
      </div>
    </div>
    {/* content @e */}
  </div>
</div>
<UserFooter />

          </div>
        </div>


      </div>

      </div> 
  


    );
  }
}

export default UserDashboard;
