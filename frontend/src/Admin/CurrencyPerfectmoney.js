import React from "react";
import './Admin.css'
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";
import { withGlobalState } from '../withGlobalState';





class CurrencyPerfectmoney extends React.Component {
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
        <h6 className="page-title">Edit Currency</h6>
        <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
          <a
            href="admin/currency/index"
            className="btn btn-sm btn-outline--primary"
          >
            Back
          </a>
        </div>
      </div>
      <form
        action="admin/currency/save/14"
        method="post"
        encType="multipart/form-data"
      >
        <input
          type="hidden"
          name="_token"
          defaultValue="UNzijgbfPpKQOf0c7hJOCc3eMA2Ck8HlQjqS8MD7"
        />
        <div className="row gy-4">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="row justify-content-center">
                  <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                    <div className="thumb mb-2">
                      <div className="avatar-preview">
                        <div
                          className="profilePicPreview"
                          style={{
                            backgroundImage:
                              'url("/assets/images/currency/paypal.png")'
                          }}
                        ></div>
                      </div>
                      <div className="avatar-edit">
                        <input
                          type="file"
                          name="image"
                          className="profilePicUpload"
                          id="image"
                          accept=".png, .jpg, .jpeg"
                        />
                      </div>
                    </div>
                    <small className="mt-3 text-muted text--small">
                      Supported files: <b>png, jpeg,jpg.</b> Image will be
                      resized into 400x400 px
                    </small>
                  </div>
                  <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-9">
                    <div className="row">
                      <div className="col-xxl-4 col-sm-12">
                        <div className="form-group">
                          <label>Currency Name</label>{" "}
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            defaultValue="Perfect Money"
                            required=""
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      <div className="col-xxl-4 col-sm-6">
                        <div className="form-group">
                          <label>Currency</label>{" "}
                          <input
                            type="text"
                            name="currency"
                            className="form-control currency"
                            required=""
                            defaultValue="USD"
                          />
                        </div>
                      </div>
                      <div className="col-xxl-4 col-sm-6">
                        <div className="form-group">
                          <label>Payment Gateway</label>{" "}
                          <select
                            name="payment_gateway"
                            className="form-control"
                            required=""
                          >
                            <option value={0}>Manual</option>
                            <option value={1} selected="">
                              Perfect Money
                            </option>
                            <option value={7}>PayStack</option>
                            <option value={9}>Flutterwave</option>
                            <option value={13}>Blockchain</option>
                            <option value={15}>CoinPayments</option>
                            <option value={24}>Authorize.net</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-sm-6">
                        <div className="form-group">
                          <label>Buy At</label>
                          <div className="input-group">
                            <input
                              type="number"
                              step="any"
                              className="form-control"
                              name="buy_at"
                              defaultValue="10.0"
                              required=""
                            />{" "}
                            <span className="input-group-text">GHS</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-sm-6">
                        <div className="form-group">
                          <label>Sell At</label>
                          <div className="input-group">
                            <input
                              type="number"
                              step="any"
                              className="form-control"
                              name="sell_at"
                              defaultValue="13"
                              required=""
                            />{" "}
                            <span className="input-group-text">GHS</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-sm-6">
                        <div className="form-group">
                          <label>Send At</label>
                          <div className="input-group">
                            <input
                              type="number"
                              step="any"
                              className="form-control"
                              name="send_at"
                              defaultValue="13.0"
                              required=""
                            />{" "}
                            <span className="input-group-text">GHS</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-sm-6">
                        <div className="form-group">
                          <label>Receive At</label>
                          <div className="input-group">
                            <input
                              type="number"
                              step="any"
                              className="form-control"
                              name="receive_at"
                              defaultValue="12.0"
                              required=""
                            />{" "}
                            <span className="input-group-text">GHS</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-sm-6">
                        <div className="form-group">
                          <label>Reserve</label>
                          <div className="input-group">
                            <input
                              type="number"
                              step="any"
                              className="form-control"
                              name="reserve"
                              defaultValue={10000.0}
                              required=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-sm-6">
                        <div className="form-group">
                          <label>Available For sell</label>{" "}
                          <input
                            type="checkbox"
                            data-width="100%"
                            data-size="large"
                            data-onstyle="-success"
                            data-offstyle="-danger"
                            data-bs-toggle="toggle"
                            data-on="Yes"
                            data-off="No"
                            name="available_for_sell"
                            defaultChecked=""
                          />
                        </div>
                      </div>
                      <div className="col-xxl-4 col-sm-6">
                        <div className="form-group">
                          <label>Available For buy</label>{" "}
                          <input
                            type="checkbox"
                            data-width="100%"
                            data-size="large"
                            data-onstyle="-success"
                            data-offstyle="-danger"
                            data-bs-toggle="toggle"
                            data-on="Yes"
                            data-off="No"
                            name="available_for_buy"
                            defaultChecked=""
                          />
                        </div>
                      </div>
                      <div className="col-xxl-4 col-sm-6">
                        <div className="form-group">
                          <label>Rate Show</label>{" "}
                          <input
                            type="checkbox"
                            data-width="100%"
                            data-size="large"
                            data-onstyle="-success"
                            data-offstyle="-danger"
                            data-bs-toggle="toggle"
                            data-on="Yes"
                            data-off="No"
                            name="rate_show"
                            defaultChecked=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-6">
            <div className="card">
              <h5 className="card-header bg--info">
                Limit &amp; Charge for Sell
              </h5>
              <div className="card-body">
                <div className="row">
                  <div className="form-group col-lg-6">
                    <label>Minimum Amount</label>
                    <div className="input-group">
                      <input
                        type="number"
                        step="any"
                        className="form-control rounded"
                        name="minimum_limit_for_sell"
                        required=""
                        defaultValue={10.0}
                      />
                    </div>
                  </div>
                  <div className="form-group col-lg-6">
                    <label>Maximum Amount</label>
                    <div className="input-group">
                      <input
                        type="number"
                        step="any"
                        className="form-control rounded"
                        name="maximum_limit_for_sell"
                        required=""
                        defaultValue={6000.0}
                      />
                    </div>
                  </div>
                  <div className="form-group col-lg-6">
                    <label>Fixed Charge</label>
                    <div className="input-group">
                      <input
                        type="number"
                        step="any"
                        className="form-control rounded"
                        name="fixed_charge_for_sell"
                        required=""
                        defaultValue={1.0}
                      />
                      <div className="input-group-text currency-symbol d-none" />
                    </div>
                  </div>
                  <div className="form-group col-lg-6">
                    <label>Percent Charge</label>
                    <div className="input-group">
                      <input
                        type="number"
                        step="any"
                        className="form-control"
                        name="percent_charge_for_sell"
                        required=""
                        defaultValue="0.50"
                      />
                      <div className="input-group-text">%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-6">
            <div className="card">
              <h5 className="card-header bg--warning">
                Limit &amp; Charge to Buy
              </h5>
              <div className="card-body">
                <div className="row">
                  <div className="form-group col-lg-6">
                    <label>Minimum Amount</label>
                    <div className="input-group">
                      <input
                        type="number"
                        step="any"
                        className="form-control rounded"
                        name="minimum_limit_for_buy"
                        required=""
                        defaultValue={1.0}
                      />
                    </div>
                  </div>
                  <div className="form-group col-lg-6">
                    <label>Maximum Amount</label>
                    <div className="input-group">
                      <input
                        type="number"
                        step="any"
                        className="form-control rounded"
                        name="maximum_limit_for_buy"
                        required=""
                        defaultValue={50000.0}
                      />
                    </div>
                  </div>
                  <div className="form-group col-lg-6">
                    <label>Fixed Charge</label>
                    <div className="input-group">
                      <input
                        type="number"
                        step="any"
                        className="form-control rounded"
                        name="fixed_charge_for_buy"
                        required=""
                        defaultValue={1.0}
                      />
                      <div className="input-group-text currency-symbol d-none" />
                    </div>
                  </div>
                  <div className="form-group col-lg-6">
                    <label>Percent Charge</label>
                    <div className="input-group">
                      <input
                        type="number"
                        step="any"
                        className="form-control"
                        name="percent_charge_for_buy"
                        required=""
                        defaultValue="0.60"
                      />
                      <div className="input-group-text">%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-6">
            <div className="card">
              <h5 className="card-header bg--info">
                Limit &amp; Charge for Send
              </h5>
              <div className="card-body">
                <div className="row">
                  <div className="form-group col-lg-6">
                    <label>Minimum Amount</label>
                    <div className="input-group">
                      <input
                        type="number"
                        step="any"
                        className="form-control rounded"
                        name="minimum_limit_for_send"
                        required=""
                        defaultValue={50.0}
                      />
                    </div>
                  </div>
                  <div className="form-group col-lg-6">
                    <label>Maximum Amount</label>
                    <div className="input-group">
                      <input
                        type="number"
                        step="any"
                        className="form-control rounded"
                        name="maximum_limit_for_send"
                        required=""
                        defaultValue={10000.0}
                      />
                    </div>
                  </div>
                  <div className="form-group col-lg-6">
                    <label>Fixed Charge</label>
                    <div className="input-group">
                      <input
                        type="number"
                        step="any"
                        className="form-control rounded"
                        name="fixed_charge_for_send"
                        required=""
                        defaultValue={1.0}
                      />
                      <div className="input-group-text currency-symbol d-none" />
                    </div>
                  </div>
                  <div className="form-group col-lg-6">
                    <label>Percent Charge</label>
                    <div className="input-group">
                      <input
                        type="number"
                        step="any"
                        className="form-control"
                        name="percent_charge_for_send"
                        required=""
                        defaultValue="3"
                      />
                      <div className="input-group-text">%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-6">
            <div className="card">
              <h5 className="card-header bg--warning">
                Limit &amp; Charge to Receive
              </h5>
              <div className="card-body">
                <div className="row">
                  <div className="form-group col-lg-6">
                    <label>Minimum Amount</label>
                    <div className="input-group">
                      <input
                        type="number"
                        step="any"
                        className="form-control rounded"
                        name="minimum_limit_for_receive"
                        required=""
                        defaultValue={10.0}
                      />
                    </div>
                  </div>
                  <div className="form-group col-lg-6">
                    <label>Maximum Amount</label>
                    <div className="input-group">
                      <input
                        type="number"
                        step="any"
                        className="form-control rounded"
                        name="maximum_limit_for_receive"
                        required=""
                        defaultValue={5000.0}
                      />
                    </div>
                  </div>
                  <div className="form-group col-lg-6">
                    <label>Fixed Charge</label>
                    <div className="input-group">
                      <input
                        type="number"
                        step="any"
                        className="form-control rounded"
                        name="fixed_charge_for_receive"
                        required=""
                        defaultValue={1.0}
                      />
                      <div className="input-group-text currency-symbol d-none" />
                    </div>
                  </div>
                  <div className="form-group col-lg-6">
                    <label>Percent Charge</label>
                    <div className="input-group">
                      <input
                        type="number"
                        step="any"
                        className="form-control"
                        name="percent_charge_for_receive"
                        required=""
                        defaultValue="20"
                      />
                      <div className="input-group-text">%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="forManualGateway my-4">
          <div className="card">
            <h5 className="card-header">Instruction</h5>
            <div className="card-body">
              <div className="form-group">
                <textarea
                  rows={8}
                  className="form-control nicEdit"
                  name="instruction"
                  defaultValue={"Further instructions for manual payments"}
                />
              </div>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-header d-flex justify-content-between">
              <h5>Transaction Proof Form</h5>
              <button
                type="button"
                className="btn btn-sm btn-outline--primary float-end form-generate-btn"
                append-to="#transaction-proof"
                input-name="transaction_proof"
              >
                Add New
              </button>
            </div>
            <div className="card-body">
              <div className="row addedField" id="transaction-proof" />
            </div>
          </div>
        </div>
        <div className="card my-4">
          <div className="card-header d-flex justify-content-between">
            <h5>Sending Form</h5>
            <button
              type="button"
              className="btn btn-sm btn-outline--primary float-end form-generate-btn"
              append-to="#sending-details"
            >
              Add New
            </button>
          </div>
          <div className="card-body">
            <div className="row addedField" id="sending-details" />
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn--primary w-100 h-45">
            Submit
          </button>
        </div>
      </form>
    </div>
    <div className="modal fade" id="formGenerateModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Generate Form</h5>
          </div>
          <form className="generate-form">
            <input
              type="hidden"
              name="_token"
              defaultValue="UNzijgbfPpKQOf0c7hJOCc3eMA2Ck8HlQjqS8MD7"
            />
            <div className="modal-body">
              <input type="hidden" name="update_id" defaultValue="" />
              <div className="form-group">
                <label>Form Type</label>{" "}
                <select name="form_type" className="form-control" required="">
                  <option value="">Select One</option>
                  <option value="text">Text</option>
                  <option value="textarea">Textarea</option>
                  <option value="select">Select</option>
                  <option value="checkbox">Checkbox</option>
                  <option value="radio">Radio</option>
                  <option value="file">File</option>
                </select>
              </div>
              <div className="form-group">
                <label>Is Required</label>{" "}
                <select name="is_required" className="form-control" required="">
                  <option value="">Select One</option>
                  <option value="required">Required</option>
                  <option value="optional">Optional</option>
                </select>
              </div>
              <div className="form-group">
                <label>Form Label</label>{" "}
                <input
                  type="text"
                  name="form_label"
                  className="form-control"
                  required=""
                />
              </div>
              <div className="form-group extra_area" />
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn--primary w-100 h-45 generatorSubmit"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* bodywrapper__inner end */}
</>

        
        

      </div>

    );
  }
}


export default CurrencyPerfectmoney;
