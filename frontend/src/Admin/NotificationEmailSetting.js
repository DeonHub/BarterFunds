import React from "react";
import './Admin.css'
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";
import { withGlobalState } from '../withGlobalState';





class NotificationEmailSetting extends React.Component {
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
        <h6 className="page-title">Email Notification Settings</h6>
        <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
          <button
            type="button"
            data-bs-target="#testMailModal"
            data-bs-toggle="modal"
            className="btn btn-sm btn-outline--primary"
          >
            <i className="las la-paper-plane" /> Send Test Mail{" "}
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
                  <label className="mb-4">Email Send Method</label>
                  <select name="email_method" className="form-control">
                    <option value="php" selected="">
                      PHP Mail
                    </option>
                    <option value="smtp">SMTP</option>
                    <option value="sendgrid">SendGrid API</option>
                    <option value="mailjet">Mailjet API</option>
                  </select>
                </div>
                <div className="row mt-4 d-none configForm" id="smtp">
                  <div className="col-md-12">
                    <h6 className="mb-2">SMTP Configuration</h6>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Host </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. smtp.googlemail.com"
                        name="host"
                        defaultValue=""
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Port </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Available port"
                        name="port"
                        defaultValue=""
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Encryption</label>
                      <select className="form-control" name="enc">
                        <option value="ssl">SSL</option>
                        <option value="tls">TLS</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Username </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Normally your email address"
                        name="username"
                        defaultValue=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Password </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Normally your email password"
                        name="password"
                        defaultValue=""
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-4 d-none configForm" id="sendgrid">
                  <div className="col-md-12">
                    <h6 className="mb-2">SendGrid API Configuration</h6>
                  </div>
                  <div className="form-group col-md-12">
                    <label>App Key </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="SendGrid App key"
                      name="appkey"
                      defaultValue=""
                    />
                  </div>
                </div>
                <div className="row mt-4 d-none configForm" id="mailjet">
                  <div className="col-md-12">
                    <h6 className="mb-2">Mailjet API Configuration</h6>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Api Public Key</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mailjet Api Public Key"
                        name="public_key"
                        defaultValue=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Api Secret Key</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mailjet Api Secret Key"
                        name="secret_key"
                        defaultValue=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn--primary w-100 h-45">
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/* card end */}
        </div>
      </div>
      <div
        id="testMailModal"
        className="modal fade"
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Test Mail Setup</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="las la-times" />
              </button>
            </div>
            <form action="../../admin/notification/email/test" method="POST">
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
                        name="email"
                        className="form-control"
                        placeholder="Email Address"
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


export default NotificationEmailSetting;
