import React from "react";
import './Admin.css'
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";





class Extensions extends React.Component {
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
        <h6 className="page-title">Extensions</h6>
        <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
          <div className="d-inline">
            <div className="input-group justify-content-end">
              <input
                type="text"
                name="search_table"
                className="form-control bg--white"
                placeholder="Search..."
              />
              <button className="btn btn--primary input-group-text">
                <i className="fa fa-search" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card b-radius--10 ">
            <div className="card-body p-0">
              <div className="table-responsive--sm table-responsive">
                <table className="table table--light style--two custom-data-table">
                  <thead>
                    <tr>
                      <th>Extension</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="user">
                          <div className="thumb">
                            <img
                              src="assets/images/extensions/customcaptcha.png"
                              alt="Custom Captcha"
                              className="plugin_bg"
                            />
                          </div>
                          <span className="name">Custom Captcha</span>
                        </div>
                      </td>
                      <td>
                        <span>
                          <span className="badge badge--warning">Disabled</span>
                        </span>
                      </td>
                      <td>
                        <div className="button--group">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline--primary ms-1 mb-2 editBtn"
                            data-name="Custom Captcha"
                            data-shortcode='{"random_key":{"title":"Random String","value":"SecureString"}}'
                            data-action="../../admin/extensions/update/3"
                          >
                            <i className="la la-cogs" />
                            Configure
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline--dark ms-1 mb-2 helpBtn"
                            data-description="Just put any random string"
                            data-support="na"
                          >
                            <i className="la la-question" />
                            Help{" "}
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline--success ms-1 mb-2 confirmationBtn"
                            data-action="../../admin/extensions/status/3"
                            data-question="Are you sure to enable this extension?"
                          >
                            <i className="la la-eye" />
                            Enable{" "}
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="user">
                          <div className="thumb">
                            <img
                              src="assets/images/extensions/Facebook.png"
                              alt="Facebook Comment "
                              className="plugin_bg"
                            />
                          </div>
                          <span className="name">Facebook Comment </span>
                        </div>
                      </td>
                      <td>
                        <span>
                          <span className="badge badge--warning">Disabled</span>
                        </span>
                      </td>
                      <td>
                        <div className="button--group">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline--primary ms-1 mb-2 editBtn"
                            data-name="Facebook Comment "
                            data-shortcode='{"app_key":{"title":"App Key","value":"----"}}'
                            data-action="../../admin/extensions/update/5"
                          >
                            <i className="la la-cogs" />
                            Configure
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline--dark ms-1 mb-2 helpBtn"
                            data-description="Key location is shown bellow"
                            data-support="fb_com.PNG"
                          >
                            <i className="la la-question" />
                            Help{" "}
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline--success ms-1 mb-2 confirmationBtn"
                            data-action="../../admin/extensions/status/5"
                            data-question="Are you sure to enable this extension?"
                          >
                            <i className="la la-eye" />
                            Enable{" "}
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="user">
                          <div className="thumb">
                            <img
                              src="assets/images/extensions/google_analytics.png"
                              alt="Google Analytics"
                              className="plugin_bg"
                            />
                          </div>
                          <span className="name">Google Analytics</span>
                        </div>
                      </td>
                      <td>
                        <span>
                          <span className="badge badge--warning">Disabled</span>
                        </span>
                      </td>
                      <td>
                        <div className="button--group">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline--primary ms-1 mb-2 editBtn"
                            data-name="Google Analytics"
                            data-shortcode='{"app_key":{"title":"App Key","value":"------"}}'
                            data-action="../../admin/extensions/update/4"
                          >
                            <i className="la la-cogs" />
                            Configure
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline--dark ms-1 mb-2 helpBtn"
                            data-description="Key location is shown bellow"
                            data-support="ganalytics.png"
                          >
                            <i className="la la-question" />
                            Help{" "}
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline--success ms-1 mb-2 confirmationBtn"
                            data-action="../../admin/extensions/status/4"
                            data-question="Are you sure to enable this extension?"
                          >
                            <i className="la la-eye" />
                            Enable{" "}
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="user">
                          <div className="thumb">
                            <img
                              src="assets/images/extensions/recaptcha3.png"
                              alt="Google Recaptcha 2"
                              className="plugin_bg"
                            />
                          </div>
                          <span className="name">Google Recaptcha 2</span>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge--success">Enabled</span>
                      </td>
                      <td>
                        <div className="button--group">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline--primary ms-1 mb-2 editBtn"
                            data-name="Google Recaptcha 2"
                            data-shortcode='{"site_key":{"title":"Site Key","value":"6LdPC88fAAAAADQlUf_DV6Hrvgm-pZuLJFSLDOWV"},"secret_key":{"title":"Secret Key","value":"6LdPC88fAAAAAG5SVaRYDnV2NpCrptLg2XLYKRKB"}}'
                            data-action="../../admin/extensions/update/2"
                          >
                            <i className="la la-cogs" />
                            Configure
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline--dark ms-1 mb-2 helpBtn"
                            data-description="Key location is shown bellow"
                            data-support="recaptcha.png"
                          >
                            <i className="la la-question" />
                            Help{" "}
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline--danger mb-2 confirmationBtn"
                            data-action="../../admin/extensions/status/2"
                            data-question="Are you sure to disable this extension?"
                          >
                            <i className="la la-eye-slash" />
                            Disable
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="user">
                          <div className="thumb">
                            <img
                              src="assets/images/extensions/tawky_big.png"
                              alt="Tawk.to"
                              className="plugin_bg"
                            />
                          </div>
                          <span className="name">Tawk.to</span>
                        </div>
                      </td>
                      <td>
                        <span>
                          <span className="badge badge--warning">Disabled</span>
                        </span>
                      </td>
                      <td>
                        <div className="button--group">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline--primary ms-1 mb-2 editBtn"
                            data-name="Tawk.to"
                            data-shortcode='{"app_key":{"title":"App Key","value":"------"}}'
                            data-action="../../admin/extensions/update/1"
                          >
                            <i className="la la-cogs" />
                            Configure
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline--dark ms-1 mb-2 helpBtn"
                            data-description="Key location is shown bellow"
                            data-support="twak.png"
                          >
                            <i className="la la-question" />
                            Help{" "}
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline--success ms-1 mb-2 confirmationBtn"
                            data-action="../../admin/extensions/status/1"
                            data-question="Are you sure to enable this extension?"
                          >
                            <i className="la la-eye" />
                            Enable{" "}
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
      <div id="editModal" className="modal fade" tabIndex={-1} role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                Update Extension:
                <span className="extension-name" />
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
            <form method="POST">
              <input
                type="hidden"
                name="_token"
                defaultValue="H4ATodCIq10Ilj4glleG1Id1azCiq1obuuZmDmjX"
              />
              <div className="modal-body">
                <div className="form-group">
                  <label className="col-md-12 control-label fw-bold">
                    Script
                  </label>
                  <div className="col-md-12">
                    <textarea
                      name="script"
                      className="form-control"
                      required=""
                      rows={8}
                      placeholder="Paste your script with proper key"
                      defaultValue={""}
                    />
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
      <div id="helpModal" className="modal fade" tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Need Help?</h5>
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


export default Extensions;
