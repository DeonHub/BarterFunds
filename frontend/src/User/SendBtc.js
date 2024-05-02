import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './User.css'
import UserSidebar from "./components/UserSidebar";
import UserHeader from "./components/UserHeader";
import UserFooter from "./components/UserFooter";


class SendBtc extends React.Component {
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
      <div className="buysell wide-xs m-auto">
        <div className="form-stage visible" id="stage1">
          <div className="navigation">
            <a
              href="#"
              id="buy-nav"
              onclick="loadLink('/frontend/user/panel/buy/btc.html')"
            >
              BUY
            </a>
            <a
              href="#"
              id="sell-nav"
              onclick="loadLink('/frontend/user/panel/sell/btc.html')"
            >
              SELL
            </a>
            <a
              href="#"
              className="active"
              id="send-nav"
              onclick="loadLink('/frontend/user/panel/send/btc.html')"
            >
              SEND
            </a>
            <a
              href="#"
              id="receive-nav"
              onclick="loadLink('/frontend/user/panel/receive/btc.html')"
            >
              RECEIVE
            </a>
          </div>
          {/* Currency Selection Block Start */}
          <div className="buysell-block">
            <form action="#" className="buysell-form">
              <div className="buysell-field form-group form-section">
                <div className="buysell-field form-group">
                  {/* .buysell-field currency selection*/}
                  <div className="form-label-group">
                    <label className="form-label">
                      Choose what you want to send
                    </label>
                  </div>
                  <input
                    type="hidden"
                    defaultValue="btc"
                    name="bs-currency"
                    id="buysell-choose-currency"
                  />
                  <div className="dropdown buysell-cc-dropdown">
                    <a
                      href="#"
                      className="buysell-cc-choosen dropdown-indicator"
                      data-bs-toggle="dropdown"
                    >
                      <div className="coin-item coin-btc">
                        <div className="coin-icon">
                        <img src="/assets/images/currency/btc.png" alt="Bitcoin (BTC)" />
                        </div>
                        <div className="coin-info">
                          <span className="coin-name">Bitcoin (BTC)</span>
                          <span className="coin-text">USD</span>
                        </div>
                      </div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-auto dropdown-menu-mxh">
                      <ul className="buysell-cc-list">
                        <li className="buysell-cc-item selected">
                          <a
                            href="/frontend/user/panel/send/btc.html"
                            className="buysell-cc-opt"
                            data-currency="btc"
                          >
                            <div className="coin-item coin-btc">
                              <div className="coin-icon">
                              <img src="/assets/images/currency/btc.png" alt="Bitcoin (BTC)" />
                              </div>
                              <div className="coin-info">
                                <span className="coin-name">Bitcoin (BTC)</span>
                                <span className="coin-text">USD</span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="buysell-cc-item">
                          <a
                            href="/frontend/user/panel/send/eth.html"
                            className="buysell-cc-opt"
                            data-currency="eth"
                          >
                            <div className="coin-item coin-eth">
                              <div className="coin-icon">
                              <img src="/assets/images/currency/ethereum.png" alt="Ethereum (ETH)" />
                              </div>
                              <div className="coin-info">
                                <span className="coin-name">
                                  Ethereum (ETH)
                                </span>
                                <span className="coin-text">USD</span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="buysell-cc-item">
                          <a
                            href="/frontend/user/panel/send/usdt.html"
                            className="buysell-cc-opt"
                            data-currency="usdt"
                          >
                            <div className="coin-item coin-usdt">
                              <div className="coin-icon">
                              <img src="/assets/images/currency/usdt.png" alt="Tether USDT (USDT)" />
                              </div>
                              <div className="coin-info">
                                <span className="coin-name">
                                  Tether TRC20 (USDT)
                                </span>
                                <span className="coin-text">USD</span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="buysell-cc-item">
                          <a
                            href="/frontend/user/panel/send/usdc.html"
                            className="buysell-cc-opt"
                            data-currency="usdc"
                          >
                            <div className="coin-item coin-usdc">
                              <div className="coin-icon">
                              <img src="/assets/images/currency/usdc.png" alt="USD Coin (USDC)" />
                              </div>
                              <div className="coin-info">
                                <span className="coin-name">
                                  USD Coin (USDC)
                                </span>
                                <span className="coin-text">USD</span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="buysell-cc-item">
                          <a
                            href="/frontend/user/panel/send/ltc.html"
                            className="buysell-cc-opt"
                            data-currency="ltc"
                          >
                            <div className="coin-item coin-ltc">
                              <div className="coin-icon">
                              <img src="/assets/images/currency/litecoin.png" alt="Litecoin (LTC)" />
                              </div>
                              <div className="coin-info">
                                <span className="coin-name">
                                  Litecoin (LTC)
                                </span>
                                <span className="coin-text">USD</span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="buysell-cc-item">
                          <a
                            href="/frontend/user/panel/send/bch.html"
                            className="buysell-cc-opt"
                            data-currency="bch"
                          >
                            <div className="coin-item coin-bch">
                              <div className="coin-icon">
                              <img src="/assets/images/currency/bch.png" alt="Bitcoin Cash (BCH)" />
                              </div>
                              <div className="coin-info">
                                <span className="coin-name">
                                  Bitcoin Cash (BCH)
                                </span>
                                <span className="coin-text">USD</span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="buysell-cc-item">
                          <a
                            href="/frontend/user/panel/send/paypal.html"
                            className="buysell-cc-opt"
                            data-currency="paypal"
                          >
                            <div className="coin-item coin-paypal">
                              <div className="coin-icon">
                              <img src="/assets/images/currency/paypal.png" alt="Paypal (PP)" />
                              </div>
                              <div className="coin-info">
                                <span className="coin-name">PayPal (PP)</span>
                                <span className="coin-text">USD</span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="buysell-cc-item">
                          <a
                            href="/frontend/user/panel/send/cny.html"
                            className="buysell-cc-opt"
                            data-currency="cny"
                          >
                            <div className="coin-item coin-cny">
                              <div className="coin-icon">
                              <img src="/assets/images/currency/alipay.png" alt="Yuan (RMB)" />
                              </div>
                              <div className="coin-info">
                                <span className="coin-name">Yuan (RMB)</span>
                                <span className="coin-text">CNY</span>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="buysell-cc-item">
                          <a
                            href="/frontend/user/panel/send/pm.html"
                            className="buysell-cc-opt"
                            data-currency="pm"
                          >
                            <div className="coin-item coin-pm">
                              <div className="coin-icon">
                                <img
                                  src="/assets/images/currency/perfectmoney.png"
                                  alt="Perfectmoney (PM)"
                                />
                              </div>
                              <div className="coin-info">
                                <span className="coin-name">
                                  Perfect Money (PM)
                                </span>
                                <span className="coin-text">USD</span>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* .dropdown-menu */}
                  </div>
                  {/* .dropdown */}
                </div>
                {/* .buysell-field currency selection*/}
                <div className="buysell-field form-group">
                  {" "}
                  {/* .buysell-field amount*/}
                  <div className="form-label-group">
                    <label className="form-label" htmlFor="buysell-amount">
                      I want to send
                    </label>
                  </div>
                  <div className="currency-box">
                    <input
                      type="text"
                      className="form-control form-control-lg form-control-number"
                      id="usd-input"
                      name="usd-input"
                      placeholder="Amount in USD"
                    />
                    <span className="currency-symbol">&nbsp;USD</span>
                    <img
                      src="/assets/images/payment/usd-icon.png"
                      alt="USD"
                      className="currency-image"
                    />
                  </div>
                  &nbsp;
                  <div className="form-label-group">
                    <label className="form-label" htmlFor="buysell-amount">
                      I will pay
                    </label>
                  </div>
                  <div className="currency-box">
                    <input
                      type="text"
                      className="form-control form-control-lg form-control-number"
                      id="ghs-input"
                      name="ghs-input"
                      placeholder="Amount in GHS"
                    />
                    <span className="currency-symbol">&nbsp;GHS</span>
                    <img
                      src="/assets/images/payment/cedis-icon.png"
                      alt="GHS"
                      className="currency-image"
                    />
                  </div>
                  <div className="form-note-group">
                    <span className="buysell-min form-note-alt">
                      Minimum: 50.00 USD
                    </span>
                    <span className="buysell-rate form-note-alt">
                      1 USD = 12.8 GHS
                    </span>
                  </div>
                </div>
                {/* .buysell-field amount*/}
                <div className="form-navigation">
                  <button
                    type="button"
                    className="btn btn-lg btn-block btn-primary"
                    onclick="nextStage('stage1', 'stage2')"
                  >
                    Continue To Send
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* Currency Selection Block End */}
        </div>
        <div className="form-stage" id="stage2">
          {/* .buysell-field usdt address*/}
          {/* Your stage 2 form fields go here */}
          <div className="buysell-field form-group">
            <div className="form-navigation">
              <label type="button" onclick="previousStage()">
                <i className="icon la la-arrow-left" />
              </label>
            </div>
            <div className="form-label-group">
              <label className="form-label">Receipient BTC Address</label>
            </div>
            <div className="currency-box">
              <input
                type="text"
                className="form-control form-control-lg form-control-number usdt-address-input"
                id="usdt-address-input"
                name="usdt-address-input"
                placeholder="1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71"
              />
              <span className="currency-symbol" />
              <div className="buysell-field form-group">
                <img
                  src="/assets/images/qr-upload.png"
                  alt="qr code"
                  className="currency-image"
                  id="uploaded-image"
                />
                <input
                  type="file"
                  className="form-control-file"
                  id="btc-qr-code"
                  name="btc-qr-code"
                  accept="image/*"
                  style={{ display: "none" }}
                />
              </div>
            </div>
          </div>
          <div className="buysell-field form-group">
            <div className="form-label-group">
              <label className="form-label">Select Transaction Type</label>
            </div>
            <div className="form-pm-group">
              <ul className="buysell-tt-list">
                <li className="buysell-tt-item">
                  <input
                    className="buysell-tt-control"
                    type="radio"
                    name="bs-method"
                    id="tt-online"
                  />
                  <label className="buysell-tt-label" htmlFor="tt-online">
                    <span className="tt-name">
                      Online Transaction
                      <span className="info-icon">
                        <em className="icon la la-info-circle" />
                        <div className="info-content">
                          <h6>Online Transactions:</h6>
                          <p>
                            This involves buying goods and services over the
                            internet, including subscriptions, purchases,
                            payments, and transfers on various websites.
                          </p>
                        </div>
                      </span>
                    </span>
                    <span className="tt-icon">
                      <em className="icon la la-cart-plus" />
                    </span>
                  </label>
                </li>
                <li className="buysell-tt-item">
                  <input
                    className="buysell-tt-control"
                    type="radio"
                    name="bs-method"
                    id="tt-b2b"
                  />
                  <label className="buysell-tt-label" htmlFor="tt-b2b">
                    <span className="tt-name">
                      B2B Transaction
                      <span className="info-icon">
                        <em className="icon la la-info-circle" />
                        <div className="info-content">
                          <h6>Business Transactions:</h6>
                          <p>
                            These transactions occur between businesses, such as
                            purchasing inventory, paying suppliers, or payment
                            to service providers such as freelancers.
                          </p>
                        </div>
                      </span>
                    </span>
                    <span className="tt-icon">
                      <em className="icon la la-suitcase" />
                    </span>
                  </label>
                </li>
                <li className="buysell-tt-item">
                  <input
                    className="buysell-tt-control"
                    type="radio"
                    name="bs-method"
                    id="tt-p2p"
                  />
                  <label className="buysell-tt-label" htmlFor="tt-p2p">
                    <span className="tt-name">
                      P2P Transaction
                      <span className="info-icon">
                        <em className="icon la la-info-circle" />
                        <div className="info-content">
                          <p className="bold-text">
                            Peer-to-Peer Transactions:
                          </p>
                          <p>
                            Transactions such as sending money directly
                            individuals, friends or family members.
                          </p>
                        </div>
                      </span>
                    </span>
                    <span className="tt-icon">
                      <em className="icon la la-user-friends" />
                    </span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          {/* .buysell-field payment method*/}
          <div className="form-navigation">
            <button
              type="button"
              className="btn btn-lg btn-block btn-primary"
              onclick="nextStage()"
            >
              Continue To Send
            </button>
          </div>
        </div>{" "}
        {/* .buysell-field usdt address*/}
        {/* Stage 3 */} {/* .buysell-field payment method*/}
        <div className="form-stage" id="stage3">
          <div className="form-navigation">
            <label type="button" onclick="previousStage()">
              <i className="icon la la-arrow-left" />
            </label>
          </div>
          <div className=" form-group">
            <label className="form-label" htmlFor="cf-default-textarea">
              Message
            </label>
            <div className="form-control-wrap">
              <textarea
                className="form-control form-control-sm"
                id="cf-default-textarea"
                placeholder="Write your message"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Attachment</label>
            <div className="form-control-wrap">
              <div className="nk-kycfm-upload-box">
                <div className="upload-zone">
                  <div className="dz-message" data-dz-message="">
                    <span className="dz-message-text">Drag and drop file</span>
                    <span className="dz-message-or">or</span>
                    <button className="btn btn-primary">SELECT</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-navigation">
            <button
              type="button"
              className="btn btn-lg btn-block btn-primary"
              onclick="nextStage()"
            >
              Continue To Send
            </button>
          </div>
        </div>
        {/* Stage 4 */} {/* .buysell-field payment method*/}
        <div className="form-stage" id="stage4">
          <div className="form-navigation">
            <label type="button" onclick="previousStage()">
              <i className="icon la la-arrow-left" />
            </label>
          </div>
          {/* Your stage 4 form fields go here */}
          <div className="nk-block-head nk-block-head-xs text-center">
            <h5 className="nk-block-title">Confirm Order</h5>
            <div className="nk-block-text">
              <div className="caption-text">
                You are about to send
                <strong>100</strong> USD for <strong>1280</strong> GHS
              </div>
              <span className="sub-text-sm">
                Exchange rate: 1 USD = 12.8 GHS
              </span>
            </div>
          </div>
          <div className="nk-block">
            <div className="buysell-overview">
              <ul className="buysell-overview-list">
                <li className="buysell-overview-item">
                  <span className="pm-title">Pay with</span>
                  <span className="pm-currency">
                    <em className="icon la la-wallet" />
                    <span>Mobile Money</span>
                  </span>
                </li>
                <li className="buysell-overview-item">
                  <span className="pm-title">Amount</span>
                  <span className="pm-currency">100.00 USD</span>
                </li>
                <li className="buysell-overview-item">
                  <span className="pm-title">Fees</span>
                  <span className="pm-currency">36.00 USD</span>
                </li>
                <li className="buysell-overview-item">
                  <span className="pm-title">Total Amount</span>
                  <span className="pm-currency">36.00 USD</span>
                </li>
              </ul>
              <div className="sub-text-sm">
                * Our transaction fee are included.
                <a href="#">See transaction fee</a>
              </div>
            </div>
            <div className="form-navigation">
              <button
                type="button"
                className="btn btn-lg btn-block btn-primary"
                onclick="nextStage()"
              >
                Confirm Your Order
              </button>
            </div>
          </div>
          {/* .nk-block */}
        </div>
        {/* Stage 4 */}
        
        <div className="form-stage" id="stage7">
          {/* Your stage 6 form fields go here */}
          <div className="nk-modal text-center">
            <em className="nk-modal-icon icon icon-circle icon-circle-xxl la la-check bg-success" />
            <h4 className="nk-modal-title">Successfully sent payment!</h4>
            <div className="nk-modal-text">
              <p className="caption-text">
                You’ve successfully bought
                <strong>100</strong>
                USD for <strong>1,200.00</strong> GHS.
              </p>
              <p className="sub-text-sm">
                Learn when you reciveve bitcoin in your wallet.
                <a href="#"> Click here</a>
              </p>
            </div>
            <div className="nk-modal-action-lg">
              <ul className="btn-group gx-4">
                <li>
                  <a
                    href="/frontend/user/transactions.html"
                    className="btn btn-lg btn-mw btn-primary"
                  >
                    Check Order Status
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <br />
          <div className="text-center w-100">
            <p>
              Earn upto GHS 100 for each friend your refer!{" "}
              <a href="#">Invite friends</a>
            </p>
          </div>
        </div>
      </div>
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

export default SendBtc;
