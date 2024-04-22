import React from "react";
import './Admin.css'
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";





class GatewayEditCoinpayments extends React.Component {
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
        <AdminSidebar />
        <AdminHeader />
        <>
  <div className="body-wrapper">
    <div className="bodywrapper__inner">
      <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
        <h6 className="page-title">Update Gateway</h6>
        <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
          <a
            href="admin/gateway/automatic"
            className="btn btn-sm btn-outline--primary"
          >
            <i className="la la-undo" /> Back
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <form
              action="admin/gateway/automatic/update/503"
              method="POST"
              encType="multipart/form-data"
            >
              <input
                type="hidden"
                name="_token"
                defaultValue="UNzijgbfPpKQOf0c7hJOCc3eMA2Ck8HlQjqS8MD7"
              />
              <input type="hidden" name="alias" defaultValue="Coinpayments" />
              <input type="hidden" name="description" defaultValue="" />
              <div className="card-body">
                <div className="payment-method-item block-item">
                  <div className="payment-method-header">
                    <div className="content ps-0 w-100">
                      <div className="d-flex justify-content-between">
                        <h3>CoinPayments</h3>
                        <div className="input-group d-flex flex-wrap justify-content-end width-375">
                          <select className="newCurrencyVal ">
                            <option value="">Select currency</option>
                            <option
                              value="BTC.LN"
                              data-symbol="Bitcoin (Lightning Network)"
                            >
                              BTC.LN
                            </option>
                            <option value="LTC" data-symbol="Litecoin">
                              LTC
                            </option>
                            <option value="CPS" data-symbol="CPS Coin">
                              CPS
                            </option>
                            <option value="VLX" data-symbol="Velas">
                              VLX
                            </option>
                            <option value="APL" data-symbol="Apollo">
                              APL
                            </option>
                            <option value="AYA" data-symbol="Aryacoin">
                              AYA
                            </option>
                            <option value="BAD" data-symbol="Badcoin">
                              BAD
                            </option>
                            <option value="BCD" data-symbol="Bitcoin Diamond">
                              BCD
                            </option>
                            <option value="BCH" data-symbol="Bitcoin Cash">
                              BCH
                            </option>
                            <option value="BCN" data-symbol="Bytecoin">
                              BCN
                            </option>
                            <option value="BEAM" data-symbol="BEAM">
                              BEAM
                            </option>
                            <option value="BITB" data-symbol="Bean Cash">
                              BITB
                            </option>
                            <option value="BLK" data-symbol="BlackCoin">
                              BLK
                            </option>
                            <option value="BSV" data-symbol="Bitcoin SV">
                              BSV
                            </option>
                            <option value="BTAD" data-symbol="Bitcoin Adult">
                              BTAD
                            </option>
                            <option value="BTG" data-symbol="Bitcoin Gold">
                              BTG
                            </option>
                            <option value="BTT" data-symbol="BitTorrent">
                              BTT
                            </option>
                            <option value="CLOAK" data-symbol="CloakCoin">
                              CLOAK
                            </option>
                            <option value="CLUB" data-symbol="ClubCoin">
                              CLUB
                            </option>
                            <option value="CRW" data-symbol="Crown">
                              CRW
                            </option>
                            <option value="CRYP" data-symbol="CrypticCoin">
                              CRYP
                            </option>
                            <option value="CRYT" data-symbol="CryTrExCoin">
                              CRYT
                            </option>
                            <option value="CURE" data-symbol="CureCoin">
                              CURE
                            </option>
                            <option value="DASH" data-symbol="DASH">
                              DASH
                            </option>
                            <option value="DCR" data-symbol="Decred">
                              DCR
                            </option>
                            <option value="DEV" data-symbol="DeviantCoin">
                              DEV
                            </option>
                            <option value="DGB" data-symbol="DigiByte">
                              DGB
                            </option>
                            <option value="DOGE" data-symbol="Dogecoin">
                              DOGE
                            </option>
                            <option value="EBST" data-symbol="eBoost">
                              EBST
                            </option>
                            <option value="EOS" data-symbol="EOS">
                              EOS
                            </option>
                            <option value="ETC" data-symbol="Ether Classic">
                              ETC
                            </option>
                            <option value="ETH" data-symbol="Ethereum">
                              ETH
                            </option>
                            <option value="ETN" data-symbol="Electroneum">
                              ETN
                            </option>
                            <option value="EUNO" data-symbol="EUNO">
                              EUNO
                            </option>
                            <option value="EXP" data-symbol="EXP">
                              EXP
                            </option>
                            <option value="Expanse" data-symbol="Expanse">
                              Expanse
                            </option>
                            <option value="FLASH" data-symbol="FLASH">
                              FLASH
                            </option>
                            <option value="GAME" data-symbol="GameCredits">
                              GAME
                            </option>
                            <option value="GLC" data-symbol="Goldcoin">
                              GLC
                            </option>
                            <option value="GRS" data-symbol="Groestlcoin">
                              GRS
                            </option>
                            <option value="KMD" data-symbol="Komodo">
                              KMD
                            </option>
                            <option value="LOKI" data-symbol="LOKI">
                              LOKI
                            </option>
                            <option value="LSK" data-symbol="LSK">
                              LSK
                            </option>
                            <option value="MAID" data-symbol="MaidSafeCoin">
                              MAID
                            </option>
                            <option value="MUE" data-symbol="MonetaryUnit">
                              MUE
                            </option>
                            <option value="NAV" data-symbol="NAV Coin">
                              NAV
                            </option>
                            <option value="NEO" data-symbol="NEO">
                              NEO
                            </option>
                            <option value="NMC" data-symbol="Namecoin">
                              NMC
                            </option>
                            <option value="NVST" data-symbol="NVO Token">
                              NVST
                            </option>
                            <option value="NXT" data-symbol="NXT">
                              NXT
                            </option>
                            <option value="OMNI" data-symbol="OMNI">
                              OMNI
                            </option>
                            <option value="PINK" data-symbol="PinkCoin">
                              PINK
                            </option>
                            <option value="PIVX" data-symbol="PIVX">
                              PIVX
                            </option>
                            <option value="POT" data-symbol="PotCoin">
                              POT
                            </option>
                            <option value="PPC" data-symbol="Peercoin">
                              PPC
                            </option>
                            <option value="PROC" data-symbol="ProCurrency">
                              PROC
                            </option>
                            <option value="PURA" data-symbol="PURA">
                              PURA
                            </option>
                            <option value="QTUM" data-symbol="QTUM">
                              QTUM
                            </option>
                            <option value="RES" data-symbol="Resistance">
                              RES
                            </option>
                            <option value="RVN" data-symbol="Ravencoin">
                              RVN
                            </option>
                            <option value="RVR" data-symbol="RevolutionVR">
                              RVR
                            </option>
                            <option value="SBD" data-symbol="Steem Dollars">
                              SBD
                            </option>
                            <option value="SMART" data-symbol="SmartCash">
                              SMART
                            </option>
                            <option value="SOXAX" data-symbol="SOXAX">
                              SOXAX
                            </option>
                            <option value="STEEM" data-symbol="STEEM">
                              STEEM
                            </option>
                            <option value="STRAT" data-symbol="STRAT">
                              STRAT
                            </option>
                            <option value="SYS" data-symbol="Syscoin">
                              SYS
                            </option>
                            <option value="TPAY" data-symbol="TokenPay">
                              TPAY
                            </option>
                            <option value="TRIGGERS" data-symbol="Triggers">
                              TRIGGERS
                            </option>
                            <option value="TRX" data-symbol=" TRON">
                              TRX
                            </option>
                            <option value="UBQ" data-symbol="Ubiq">
                              UBQ
                            </option>
                            <option
                              value="UNIT"
                              data-symbol="UniversalCurrency"
                            >
                              UNIT
                            </option>
                            <option
                              value="USDT"
                              data-symbol="Tether USD (Omni Layer)"
                            >
                              USDT
                            </option>
                            <option
                              value="USDT.BEP20"
                              data-symbol="Tether USD (BSC Chain)"
                            >
                              USDT.BEP20
                            </option>
                            <option
                              value="USDT.ERC20"
                              data-symbol="Tether USD (ERC20)"
                            >
                              USDT.ERC20
                            </option>
                            <option
                              value="USDT.TRC20"
                              data-symbol="Tether USD (Tron/TRC20)"
                            >
                              USDT.TRC20
                            </option>
                            <option value="VTC" data-symbol="Vertcoin">
                              VTC
                            </option>
                            <option value="WAVES" data-symbol="Waves">
                              WAVES
                            </option>
                            <option value="XCP" data-symbol="Counterparty">
                              XCP
                            </option>
                            <option value="XEM" data-symbol="NEM">
                              XEM
                            </option>
                            <option value="XMR" data-symbol="Monero">
                              XMR
                            </option>
                            <option value="XSN" data-symbol="Stakenet">
                              XSN
                            </option>
                            <option value="XSR" data-symbol="SucreCoin">
                              XSR
                            </option>
                            <option value="XVG" data-symbol="VERGE">
                              XVG
                            </option>
                            <option value="XZC" data-symbol="ZCoin">
                              XZC
                            </option>
                            <option value="ZEC" data-symbol="ZCash">
                              ZEC
                            </option>
                            <option value="ZEN" data-symbol="Horizen">
                              ZEN
                            </option>
                          </select>
                          <button
                            type="button"
                            className="btn btn--primary input-group-text newCurrencyBtn"
                            data-crypto={1}
                            data-name="CoinPayments"
                          >
                            Add new
                          </button>
                        </div>
                      </div>
                      <p />
                    </div>
                  </div>
                  <div className="payment-method-body mt-2">
                    <h4 className="mb-3">Global Setting for CoinPayments</h4>
                    <div className="row">
                      <div className="form-group col-lg-6">
                        <label>Public Key</label>
                        <input
                          type="text"
                          className="form-control"
                          name="global[public_key]"
                          defaultValue="---------------"
                          required=""
                        />
                      </div>
                      <div className="form-group col-lg-6">
                        <label>Private Key</label>
                        <input
                          type="text"
                          className="form-control"
                          name="global[private_key]"
                          defaultValue="------------"
                          required=""
                        />
                      </div>
                      <div className="form-group col-lg-6">
                        <label>Merchant ID</label>
                        <input
                          type="text"
                          className="form-control"
                          name="global[merchant_id]"
                          defaultValue="93a1e014c4ad60a7980b4a7239673cb4"
                          required=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* payment-method-item start */}
                <input
                  type="hidden"
                  name="currency[1][symbol]"
                  defaultValue="$"
                />
                <div className="payment-method-item block-item child--item">
                  <div className="payment-method-header">
                    <div className="content w-100 ps-0">
                      <div className="d-flex justify-content-between">
                        <div className="form-group">
                          <h4 className="mb-3">CoinPayments - BTC</h4>
                          <input
                            type="text"
                            className="form-control"
                            name="currency[1][name]"
                            defaultValue="CoinPayments - BTC"
                            required=""
                          />
                        </div>
                        <div className="remove-btn">
                          <button
                            type="button"
                            className="btn btn--danger confirmationBtn"
                            data-question="Are you sure to delete this gateway currency?"
                            data-action="admin/gateway/automatic/remove/29"
                          >
                            <i className="la la-trash-o me-2" />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="payment-method-body">
                    <div className="row">
                      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="card border--primary mt-2">
                          <h5 className="card-header bg--primary">Range</h5>
                          <div className="card-body">
                            <div className="form-group">
                              <label>Minimum Amount</label>
                              <div className="input-group">
                                <input
                                  type="number"
                                  step="any"
                                  className="form-control"
                                  name="currency[1][min_amount]"
                                  defaultValue={1}
                                  required=""
                                />
                                <div className="input-group-text">GHS</div>
                              </div>
                            </div>
                            <div className="form-group">
                              <label>Maximum Amount</label>
                              <div className="input-group">
                                <input
                                  type="number"
                                  step="any"
                                  className="form-control"
                                  name="currency[1][max_amount]"
                                  defaultValue={10000}
                                  required=""
                                />
                                <div className="input-group-text">GHS</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="card border--primary mt-2">
                          <h5 className="card-header bg--primary">Charge</h5>
                          <div className="card-body">
                            <div className="form-group">
                              <label>Fixed Charge</label>
                              <div className="input-group">
                                <input
                                  type="number"
                                  step="any"
                                  className="form-control"
                                  name="currency[1][fixed_charge]"
                                  defaultValue={1}
                                  required=""
                                />
                                <div className="input-group-text">GHS</div>
                              </div>
                            </div>
                            <div className="form-group">
                              <label>Percent Charge</label>
                              <div className="input-group">
                                <input
                                  type="number"
                                  step="any"
                                  className="form-control"
                                  name="currency[1][percent_charge]"
                                  defaultValue={10}
                                  required=""
                                />
                                <div className="input-group-text">%</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="card border--primary mt-2">
                          <h5 className="card-header bg--primary">Currency</h5>
                          <div className="card-body">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Currency</label>
                                  <input
                                    type="text"
                                    name="currency[1][currency]"
                                    className="form-control border-radius-5 "
                                    defaultValue="BTC"
                                    readOnly=""
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Symbol</label>
                                  <input
                                    type="text"
                                    name="currency[1][symbol]"
                                    className="form-control border-radius-5 symbl"
                                    defaultValue="$"
                                    data-crypto={1}
                                    required=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <label>Rate</label>
                              <div className="input-group">
                                <div className="input-group-text">1 GHS =</div>
                                <input
                                  type="number"
                                  step="any"
                                  className="form-control"
                                  name="currency[1][rate]"
                                  defaultValue={10}
                                  required=""
                                />
                                <div className="input-group-text">
                                  <span className="currency_symbol">$</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* payment-method-item end */}
                {/* **new payment-method-item start */}
                <div className="payment-method-item child--item newMethodCurrency d-none">
                  <input
                    disabled=""
                    type="hidden"
                    name="currency[2][symbol]"
                    className="currencySymbol"
                  />
                  <div className="payment-method-header">
                    <div className="content w-100 ps-0">
                      <div className="d-flex justify-content-between">
                        <div className="form-group">
                          <h4 className="mb-3" id="payment_currency_name">
                            Name
                          </h4>
                          <input
                            disabled=""
                            type="text"
                            className="form-control"
                            name="currency[2][name]"
                            required=""
                          />
                        </div>
                        <div className="remove-btn">
                          <button
                            type="button"
                            className="btn btn-danger newCurrencyRemove"
                          >
                            <i className="la la-trash-o me-2" />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="payment-method-body">
                    <div className="row">
                      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="card border--primary mt-2">
                          <h5 className="card-header bg--primary">Range</h5>
                          <div className="card-body">
                            <div className="form-group">
                              <label>Minimum Amount</label>
                              <div className="input-group">
                                <div className="input-group-text">GHS</div>
                                <input
                                  disabled=""
                                  type="number"
                                  step="any"
                                  className="form-control"
                                  name="currency[2][min_amount]"
                                  required=""
                                />
                              </div>
                            </div>
                            <div className="form-group">
                              <label>Maximum Amount</label>
                              <div className="input-group">
                                <div className="input-group-text">GHS</div>
                                <input
                                  disabled=""
                                  type="number"
                                  step="any"
                                  className="form-control"
                                  name="currency[2][max_amount]"
                                  required=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="card border--primary mt-2">
                          <h5 className="card-header bg--primary">Charge</h5>
                          <div className="card-body">
                            <div className="form-group">
                              <label>Fixed Charge</label>
                              <div className="input-group">
                                <div className="input-group-text">GHS</div>
                                <input
                                  disabled=""
                                  type="number"
                                  step="any"
                                  className="form-control"
                                  name="currency[2][fixed_charge]"
                                  required=""
                                />
                              </div>
                            </div>
                            <div className="form-group">
                              <label>Percent Charge</label>
                              <div className="input-group">
                                <div className="input-group-text">%</div>
                                <input
                                  disabled=""
                                  type="number"
                                  step="any"
                                  className="form-control"
                                  name="currency[2][percent_charge]"
                                  required=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="card border--primary mt-2">
                          <h5 className="card-header bg--primary">Currency</h5>
                          <div className="card-body">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Currency</label>
                                  <input
                                    disabled=""
                                    type="step"
                                    className="form-control currencyText border-radius-5"
                                    name="currency[2][currency]"
                                    readOnly=""
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Symbol</label>
                                  <input
                                    disabled=""
                                    type="text"
                                    name="currency[2][symbol]"
                                    className="form-control border-radius-5 symbl"
                                    ata-crypto={1}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <label>Rate</label>
                              <div className="input-group">
                                <span className="input-group-text">
                                  <b>1</b>&nbsp; GHS&nbsp; =
                                </span>
                                <input
                                  disabled=""
                                  type="number"
                                  step="any"
                                  className="form-control"
                                  name="currency[2][rate]"
                                  required=""
                                />
                                <div className="input-group-text">
                                  <span className="currency_symbol" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* **new payment-method-item end */}
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn--primary w-100 h-45">
                  Submit{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        id="confirmationModal"
        className="modal fade"
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirmation Alert!</h5>
              <span
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="las la-times" />
              </span>
            </div>
            <form action="" method="POST">
              <input
                type="hidden"
                name="_token"
                defaultValue="UNzijgbfPpKQOf0c7hJOCc3eMA2Ck8HlQjqS8MD7"
              />
              <div className="modal-body">
                <p className="question" />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn--dark"
                  data-bs-dismiss="modal"
                >
                  No
                </button>
                <button type="submit" className="btn btn--primary">
                  Yes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* bodywrapper__inner end */}
  </div>
  {/* body-wrapper end */}
</>

        
        

      </div>

    );
  }
}


export default GatewayEditCoinpayments;
