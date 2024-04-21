import React from "react";
import './Admin.css'
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";





class UsersSendNotification extends React.Component {
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
        <h6 className="page-title">Notification to Verified Users</h6>
        <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
          <span className="text--primary">
            Notification will send via{" "}
            <span className="badge badge--warning">SMS</span>
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <form action="" className="notify-form">
              <input
                type="hidden"
                name="_token"
                defaultValue="H4ATodCIq10Ilj4glleG1Id1azCiq1obuuZmDmjX"
              />
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Subject </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email subject"
                        name="subject"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Message </label>
                      <textarea
                        name="message"
                        rows={10}
                        className="form-control nicEdit"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button
                  type="submit"
                  className="btn w-100 h-45 btn--primary me-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        data-bs-backdrop="static"
        id="notificationSending"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Notification Sending</h5>
            </div>
            <div className="modal-body">
              <h4 className="text--danger text-center">
                Don't close or refresh the window till finish
              </h4>
              <div className="mail-wrapper">
                <div className="mail-icon world-icon">
                  <i className="las la-globe" />
                </div>
                <div className="mailsent">
                  <div className="envelope">
                    <i className="line line1" />
                    <i className="line line2" />
                    <i className="line line3" />
                    <i className="icon fa fa-envelope" />
                  </div>
                </div>
                <div className="mail-icon mail-icon">
                  <i className="las la-envelope-open-text" />
                </div>
              </div>
              <div className="mt-3">
                <div className="progress">
                  <div className="progress-bar" style={{ width: "0%" }} />
                </div>
                <p>
                  Email sent <span className="sent">0</span> users out of 1367
                  users
                </p>
              </div>
            </div>
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


export default UsersSendNotification;
