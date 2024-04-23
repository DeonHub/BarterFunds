import React from "react";
import './Admin.css'
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";
import { withGlobalState } from '../withGlobalState';





class SettingsSystemConfiguration extends React.Component {
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
        <h6 className="page-title">System Configuration</h6>
        <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins"></div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <form action="" method="post">
              <input
                type="hidden"
                name="_token"
                defaultValue="H4ATodCIq10Ilj4glleG1Id1azCiq1obuuZmDmjX"
              />
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item d-flex flex-wrap flex-sm-nowrap gap-2 justify-content-between align-items-center">
                    <div>
                      <p className="fw-bold mb-0">User Registration</p>
                      <p className="mb-0">
                        <small>
                          If you disable this module, no one can register on
                          this system
                        </small>
                      </p>
                    </div>
                    <div className="form-group">
                      <input
                        type="checkbox"
                        data-width="100%"
                        data-size="large"
                        data-onstyle="-success"
                        data-offstyle="-danger"
                        data-bs-toggle="toggle"
                        data-height={35}
                        data-on="Enable"
                        data-off="Disable"
                        name="registration"
                        defaultChecked=""
                      />
                    </div>
                  </li>
                  <li className="list-group-item d-flex flex-wrap flex-sm-nowrap gap-2 justify-content-between align-items-center">
                    <div>
                      <p className="fw-bold mb-0">Force SSL</p>
                      <p className="mb-0">
                        <small>
                          By enabling{" "}
                          <span className="fw-bold">
                            Force SSL (Secure Sockets Layer)
                          </span>
                          the system will force a visitor that he/she must have
                          to visit in secure mode. Otherwise, the site will be
                          loaded in secure mode.
                        </small>
                      </p>
                    </div>
                    <div className="form-group">
                      <input
                        type="checkbox"
                        data-width="100%"
                        data-size="large"
                        data-onstyle="-success"
                        data-offstyle="-danger"
                        data-bs-toggle="toggle"
                        data-height={35}
                        data-on="Enable"
                        data-off="Disable"
                        name="force_ssl"
                      />
                    </div>
                  </li>
                  <li className="list-group-item d-flex flex-wrap flex-sm-nowrap gap-2 justify-content-between align-items-center">
                    <div>
                      <p className="fw-bold mb-0">Agree Policy</p>
                      <p className="mb-0">
                        <small>
                          If you enable this module, that means a user must have
                          to agree with your system's{" "}
                          <a href="../../admin/frontend/frontend-sections/policy_pages">
                            policies
                          </a>
                          during registration.
                        </small>
                      </p>
                    </div>
                    <div className="form-group">
                      <input
                        type="checkbox"
                        data-width="100%"
                        data-size="large"
                        data-onstyle="-success"
                        data-offstyle="-danger"
                        data-bs-toggle="toggle"
                        data-height={35}
                        data-on="Enable"
                        data-off="Disable"
                        name="agree"
                        defaultChecked=""
                      />
                    </div>
                  </li>
                  <li className="list-group-item d-flex flex-wrap flex-sm-nowrap gap-2 justify-content-between align-items-center">
                    <div>
                      <p className="fw-bold mb-0">Force Secure Password</p>
                      <p className="mb-0">
                        <small>
                          By enabling this module, a user must set a secure
                          password while signing up or changing the password.
                        </small>
                      </p>
                    </div>
                    <div className="form-group">
                      <input
                        type="checkbox"
                        data-width="100%"
                        data-size="large"
                        data-onstyle="-success"
                        data-offstyle="-danger"
                        data-bs-toggle="toggle"
                        data-height={35}
                        data-on="Enable"
                        data-off="Disable"
                        name="secure_password"
                      />
                    </div>
                  </li>
                  <li className="list-group-item d-flex flex-wrap flex-sm-nowrap gap-2 justify-content-between align-items-center">
                    <div>
                      <p className="fw-bold mb-0">KYC Verification</p>
                      <p className="mb-0">
                        <small>
                          If you enable
                          <span className="fw-bold">
                            KYC (Know Your Client)
                          </span>
                          module, users must have to submit{" "}
                          <a href="../../admin/kyc-setting">
                            the required data
                          </a>
                          . Otherwise, any money out transaction will be
                          prevented by this system.
                        </small>
                      </p>
                    </div>
                    <div className="form-group">
                      <input
                        type="checkbox"
                        data-width="100%"
                        data-size="large"
                        data-onstyle="-success"
                        data-offstyle="-danger"
                        data-bs-toggle="toggle"
                        data-height={35}
                        data-on="Enable"
                        data-off="Disable"
                        name="kv"
                      />
                    </div>
                  </li>
                  <li className="list-group-item d-flex flex-wrap flex-sm-nowrap gap-2 justify-content-between align-items-center">
                    <div>
                      <p className="fw-bold mb-0">Email Verification</p>
                      <p className="mb-0">
                        <small>
                          If you enable{" "}
                          <span className="fw-bold">Email Verification</span>,
                          users have to verify their email to access the
                          dashboard. A 6-digit verification code will be sent to
                          their email to be verified. <br />
                          <span className="fw-bold">
                            <i>Note:</i>
                          </span>
                          <i>
                            Make sure that the{" "}
                            <span className="fw-bold">Email Notification</span>{" "}
                            module is enabled
                          </i>
                        </small>
                      </p>
                    </div>
                    <div className="form-group">
                      <input
                        type="checkbox"
                        data-width="100%"
                        data-size="large"
                        data-onstyle="-success"
                        data-offstyle="-danger"
                        data-bs-toggle="toggle"
                        data-height={35}
                        data-on="Enable"
                        data-off="Disable"
                        name="ev"
                      />
                    </div>
                  </li>
                  <li className="list-group-item d-flex flex-wrap flex-sm-nowrap gap-2 justify-content-between align-items-center">
                    <div>
                      <p className="fw-bold mb-0">Email Notification</p>
                      <p className="mb-0">
                        <small>
                          If you enable this module, the system will send emails
                          to users where needed. Otherwise, no email will be
                          sent.
                          <code>
                            So be sure before disabling this module that, the
                            system doesn't need to send any emails.
                          </code>
                        </small>
                      </p>
                    </div>
                    <div className="form-group">
                      <input
                        type="checkbox"
                        data-width="100%"
                        data-size="large"
                        data-onstyle="-success"
                        data-offstyle="-danger"
                        data-bs-toggle="toggle"
                        data-height={35}
                        data-on="Enable"
                        data-off="Disable"
                        name="en"
                      />
                    </div>
                  </li>
                  <li className="list-group-item d-flex flex-wrap flex-sm-nowrap gap-2 justify-content-between align-items-center">
                    <div>
                      <p className="fw-bold mb-0">Mobile Verification</p>
                      <p className="mb-0">
                        <small>
                          If you enable{" "}
                          <span className="fw-bold">Mobile Verification</span>,
                          users have to verify their mobile to access the
                          dashboard. A 6-digit verification code will be sent to
                          their mobile to be verified. <br />
                          <span className="fw-bold">
                            <i>Note:</i>
                          </span>
                          <i>
                            Make sure that the{" "}
                            <span className="fw-bold">SMS Notification</span>{" "}
                            module is enabled
                          </i>
                        </small>
                      </p>
                    </div>
                    <div className="form-group">
                      <input
                        type="checkbox"
                        data-width="100%"
                        data-size="large"
                        data-onstyle="-success"
                        data-offstyle="-danger"
                        data-bs-toggle="toggle"
                        data-height={35}
                        data-on="Enable"
                        data-off="Disable"
                        name="sv"
                      />
                    </div>
                  </li>
                  <li className="list-group-item d-flex flex-wrap flex-sm-nowrap gap-2 justify-content-between align-items-center">
                    <div>
                      <p className="fw-bold mb-0">SMS Notification</p>
                      <p className="mb-0">
                        <small>
                          If you enable this module, the system will send SMS to
                          users where needed. Otherwise, no SMS will be sent.
                          <code>
                            So be sure before disabling this module that, the
                            system doesn't need to send any SMS.
                          </code>
                        </small>
                      </p>
                    </div>
                    <div className="form-group">
                      <input
                        type="checkbox"
                        data-width="100%"
                        data-size="large"
                        data-onstyle="-success"
                        data-offstyle="-danger"
                        data-bs-toggle="toggle"
                        data-height={35}
                        data-on="Enable"
                        data-off="Disable"
                        name="sn"
                        defaultChecked=""
                      />
                    </div>
                  </li>
                  <li className="list-group-item d-flex flex-wrap flex-sm-nowrap gap-2 justify-content-between align-items-center">
                    <div>
                      <p className="fw-bold mb-0">Show Notice Bar</p>
                      <p className="mb-0">
                        <small>
                          If you enable this module, the system will show a
                          notice/offer bar at the top of the page.
                        </small>
                      </p>
                    </div>
                    <div className="form-group">
                      <input
                        type="checkbox"
                        data-width="100%"
                        data-size="large"
                        data-onstyle="-success"
                        data-offstyle="-danger"
                        data-bs-toggle="toggle"
                        data-height={35}
                        data-on="Enable"
                        data-off="Disable"
                        name="show_notice_bar"
                        defaultChecked=""
                      />
                    </div>
                  </li>
                  <li className="list-group-item d-flex flex-sm-nowrap justify-content-between align-items-center flex-wrap gap-2">
                    <div>
                      <p className="fw-bold mb-0">Language</p>
                      <p className="mb-0">
                        <small>
                          If you disable this module, that means no one can
                          change the language
                        </small>
                      </p>
                    </div>
                    <div className="form-group">
                      <input
                        name="multi_language"
                        data-width="100%"
                        data-size="large"
                        data-onstyle="-success"
                        data-offstyle="-danger"
                        data-bs-toggle="toggle"
                        data-height={35}
                        data-on="Enable"
                        data-off="Disable"
                        type="checkbox"
                        defaultChecked=""
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card-footer">
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


export default SettingsSystemConfiguration;
