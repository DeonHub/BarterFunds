import React from "react";
import './Admin.css'
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";
import { withGlobalState } from '../withGlobalState';





class SettingsSocialCredentials extends React.Component {
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
        <h6 className="page-title">Social Login Credentials</h6>
        <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins"></div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card b-radius--10 ">
            <div className="card-body p-0">
              <div className="table-responsive--sm table-responsive">
                <table className="table table--light style--two custom-data-table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Client ID</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="fw-bold">Google</td>
                      <td>
                        509655116427-2ftndt4cvdi22ttl9apio3bjm3vi0j16.apps.googleusercontent.com
                      </td>
                      <td>
                        <span className="badge badge--success">Enabled</span>
                      </td>
                      <td>
                        <div className="d-flex justify-content-end flex-wrap gap-1">
                          <button
                            className="btn btn-outline--primary btn-sm editBtn"
                            data-client_id="509655116427-2ftndt4cvdi22ttl9apio3bjm3vi0j16.apps.googleusercontent.com"
                            data-client_secret="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"
                            data-key="google"
                          >
                            <i className="la la-cogs" />
                            Configure
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline--dark helpBtn"
                            data-target-key="google"
                          >
                            <i className="la la-question" />
                            Help{" "}
                          </button>
                          <button
                            className="btn btn-outline--danger btn-sm confirmationBtn"
                            data-question="Are you sure that you want to enable this login credential?"
                            data-action="../../admin/setting/social/credentials/status/google"
                          >
                            <i className="las la-eye-slash" />
                            Disable
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Facebook</td>
                      <td>705296487382875</td>
                      <td>
                        <span className="badge badge--success">Enabled</span>
                      </td>
                      <td>
                        <div className="d-flex justify-content-end flex-wrap gap-1">
                          <button
                            className="btn btn-outline--primary btn-sm editBtn"
                            data-client_id={705296487382875}
                            data-client_secret="72ce5fd29f948a49a32157d79fe47b1b"
                            data-key="facebook"
                          >
                            <i className="la la-cogs" />
                            Configure
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline--dark helpBtn"
                            data-target-key="facebook"
                          >
                            <i className="la la-question" />
                            Help{" "}
                          </button>
                          <button
                            className="btn btn-outline--danger btn-sm confirmationBtn"
                            data-question="Are you sure that you want to enable this login credential?"
                            data-action="../../admin/setting/social/credentials/status/facebook"
                          >
                            <i className="las la-eye-slash" />
                            Disable
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold">Linkedin</td>
                      <td>868mv3jobt5bqq</td>
                      <td>
                        <span className="badge badge--success">Enabled</span>
                      </td>
                      <td>
                        <div className="d-flex justify-content-end flex-wrap gap-1">
                          <button
                            className="btn btn-outline--primary btn-sm editBtn"
                            data-client_id="868mv3jobt5bqq"
                            data-client_secret="2GYeQjyzyhavFVr4"
                            data-key="linkedin"
                          >
                            <i className="la la-cogs" />
                            Configure
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline--dark helpBtn"
                            data-target-key="linkedin"
                          >
                            <i className="la la-question" />
                            Help{" "}
                          </button>
                          <button
                            className="btn btn-outline--danger btn-sm confirmationBtn"
                            data-question="Are you sure that you want to enable this login credential?"
                            data-action="../../admin/setting/social/credentials/status/linkedin"
                          >
                            <i className="las la-eye-slash" />
                            Disable
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Edit */}
      <div id="editModal" className="modal fade" tabIndex={-1} role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                Update Credential:
                <span className="credential-name" />
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="las la-times" />
              </button>
            </div>
            <form method="POST" action="">
              <input
                type="hidden"
                name="_token"
                defaultValue="H4ATodCIq10Ilj4glleG1Id1azCiq1obuuZmDmjX"
              />
              <div className="modal-body">
                <div className="form-group">
                  <label>Client ID</label>
                  <input
                    type="text"
                    className="form-control"
                    name="client_id"
                  />
                </div>
                <div className="form-group">
                  <label>Client Secret</label>
                  <input
                    type="text"
                    className="form-control"
                    name="client_secret"
                  />
                </div>
                <div className="form-group">
                  <label>Callback URL</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control callback"
                      readOnly=""
                    />
                    <button
                      type="button"
                      className="input-group-text copyInput"
                      title="Copy"
                    >
                      <i className="las la-clipboard" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn--primary w-100 h-45"
                  id="editBtn"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Help */}
      <div id="helpModal" className="modal fade" tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                How to get <span className="title-key" />
                credentials?
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="las la-times" />
              </button>
            </div>
            <div className="modal-body"></div>
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
                defaultValue="H4ATodCIq10Ilj4glleG1Id1azCiq1obuuZmDmjX"
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


export default SettingsSocialCredentials;
