import React from "react";
import './Admin.css'
import AdminSidebar from "./AdminSidebarX";
import AdminHeader from "./AdminHeader";





class NotificationSmsSetting extends React.Component {
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
        <h6 className="page-title">SMS Notification Settings</h6>
        <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
          <button
            type="button"
            data-bs-target="#testSMSModal"
            data-bs-toggle="modal"
            className="btn btn-outline--primary btn-sm"
          >
            {" "}
            <i className="las la-paper-plane" /> Send Test SMS
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <form action="" method="POST">
              <input
                type="hidden"
                name="_token"
                defaultValue="H4ATodCIq10Ilj4glleG1Id1azCiq1obuuZmDmjX"
              />
              <div className="card-body">
                <div className="form-group">
                  <label>Sms Send Method</label>
                  <select name="sms_method" className="form-control">
                    <option value="clickatell">Clickatell</option>
                    <option value="infobip">Infobip</option>
                    <option value="messageBird">Message Bird</option>
                    <option value="nexmo" selected="">
                      Nexmo
                    </option>
                    <option value="smsBroadcast">Sms Broadcast</option>
                    <option value="twilio">Twilio</option>
                    <option value="textMagic">Text Magic</option>
                    <option value="custom">Custom API</option>
                  </select>
                </div>
                <div className="row mt-4 d-none configForm" id="clickatell">
                  <div className="col-md-12">
                    <h6 className="mb-2">Clickatell Configuration</h6>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>API Key </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="API Key"
                        name="clickatell_api_key"
                        defaultValue="----------------"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-4 d-none configForm" id="infobip">
                  <div className="col-md-12">
                    <h6 className="mb-2">Infobip Configuration</h6>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Username </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        name="infobip_username"
                        defaultValue="------------8888888"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Password </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Password"
                        name="infobip_password"
                        defaultValue="-----------------"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-4 d-none configForm" id="messageBird">
                  <div className="col-md-12">
                    <h6 className="mb-2">Message Bird Configuration</h6>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>API Key </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="API Key"
                        name="message_bird_api_key"
                        defaultValue="-------------------"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-4 d-none configForm" id="nexmo">
                  <div className="col-md-12">
                    <h6 className="mb-2">Nexmo Configuration</h6>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>API Key </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="API Key"
                        name="nexmo_api_key"
                        defaultValue="----------------------"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>API Secret </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="API Secret"
                        name="nexmo_api_secret"
                        defaultValue="----------------------"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-4 d-none configForm" id="smsBroadcast">
                  <div className="col-md-12">
                    <h6 className="mb-2">Sms Broadcast Configuration</h6>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Username </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        name="sms_broadcast_username"
                        defaultValue="----------------------"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Password </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Password"
                        name="sms_broadcast_password"
                        defaultValue="-----------------------------"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-4 d-none configForm" id="twilio">
                  <div className="col-md-12">
                    <h6 className="mb-2">Twilio Configuration</h6>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Account SID </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Account SID"
                        name="account_sid"
                        defaultValue="-----------------------"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Auth Token </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Auth Token"
                        name="auth_token"
                        defaultValue="---------------------------"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>From Number </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="From Number"
                        name="from"
                        defaultValue="----------------------"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-4 d-none configForm" id="textMagic">
                  <div className="col-md-12">
                    <h6 className="mb-2">Text Magic Configuration</h6>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Username </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        name="text_magic_username"
                        defaultValue="-----------------------"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Apiv2 Key </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Apiv2 Key"
                        name="apiv2_key"
                        defaultValue="-------------------------------"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-4 d-none configForm" id="custom">
                  <div className="col-md-12">
                    <h6 className="mb-2">Custom API</h6>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>API URL </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <select
                            name="custom_api_method"
                            className="method-select"
                          >
                            <option value="get">GET</option>
                            <option value="post">POST</option>
                          </select>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          name="custom_api_url"
                          defaultValue="https://hostname/demo-api-v1"
                          placeholder="API URL"
                        />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-12">
                      <div className="table-responsive table-responsive--sm mb-3">
                        <table className=" table align-items-center table--light">
                          <thead>
                            <tr>
                              <th>Short Code</th>
                              <th>Description</th>
                            </tr>
                          </thead>
                          <tbody className="list">
                            <tr>
                              <td>
                                <span className="short-codes">
                                  {"{"}
                                  {"{"}message{"}"}
                                  {"}"}
                                </span>
                              </td>
                              <td>Message</td>
                            </tr>
                            <tr>
                              <td>
                                <span className="short-codes">
                                  {"{"}
                                  {"{"}number{"}"}
                                  {"}"}
                                </span>
                              </td>
                              <td>Number</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card border--dark mb-3">
                        <div className="card-header bg--dark d-flex justify-content-between">
                          <h5 className="text-white">Headers</h5>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-light float-right addHeader"
                          >
                            <i className="la la-fw la-plus" />
                            Add
                          </button>
                        </div>
                        <div className="card-body">
                          <div className="headerFields">
                            <div className="row mt-3">
                              <div className="col-md-5">
                                <input
                                  type="text"
                                  name="custom_header_name[]"
                                  className="form-control"
                                  defaultValue="api_key"
                                  placeholder="Headers Name"
                                />
                              </div>
                              <div className="col-md-5">
                                <input
                                  type="text"
                                  name="custom_header_value[]"
                                  className="form-control"
                                  defaultValue="test_api 555"
                                  placeholder="Headers Value"
                                />
                              </div>
                              <div className="col-md-2">
                                <button
                                  type="button"
                                  className="btn btn--danger btn-block removeHeader h-100"
                                >
                                  <i className="las la-times" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card border--dark mb-3">
                        <div className="card-header bg--dark d-flex justify-content-between">
                          <h5 className="text-white">Body</h5>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-light float-right addBody"
                          >
                            <i className="la la-fw la-plus" />
                            Add
                          </button>
                        </div>
                        <div className="card-body">
                          <div className="bodyFields">
                            <div className="row mt-3">
                              <div className="col-md-5">
                                <input
                                  type="text"
                                  name="custom_body_name[]"
                                  className="form-control"
                                  defaultValue="from_number"
                                  placeholder="Body Name"
                                />
                              </div>
                              <div className="col-md-5">
                                <input
                                  type="text"
                                  name="custom_body_value[]"
                                  defaultValue={5657545757}
                                  className="form-control"
                                  placeholder="Body Value"
                                />
                              </div>
                              <div className="col-md-2">
                                <button
                                  type="button"
                                  className="btn btn--danger btn-block removeBody h-100"
                                >
                                  <i className="las la-times" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn w-100 h-45 btn--primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/* card end */}
        </div>
      </div>
      <div id="testSMSModal" className="modal fade" tabIndex={-1} role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Test SMS Setup</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="las la-times" />
              </button>
            </div>
            <form action="../../admin/notification/sms/test" method="POST">
              <input
                type="hidden"
                name="_token"
                defaultValue="H4ATodCIq10Ilj4glleG1Id1azCiq1obuuZmDmjX"
              />
              <input type="hidden" name="id" />
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Sent to </label>
                      <input
                        type="text"
                        name="mobile"
                        className="form-control"
                        placeholder="Mobile"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn--primary w-100 h-45">
                  Submit
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


export default NotificationSmsSetting;
