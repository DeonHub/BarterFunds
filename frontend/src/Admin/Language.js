import React from "react";
import './Admin.css'
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";





class Language extends React.Component {
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
        <h6 className="page-title">Language Manager</h6>
        <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
          <a
            className="btn btn-sm btn-outline--primary"
            data-bs-toggle="modal"
            data-bs-target="#createModal"
          >
            <i className="las la-plus" />
            Add New
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mb-30">
          <div className="card bl--5-primary">
            <div className="card-body">
              <p className="text--primary">
                While you are adding a new keyword, it will only add to this
                current language only. Please be careful on entering a keyword,
                please make sure there is no extra space. It needs to be exact
                and case-sensitive.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="card b-radius--10 ">
            <div className="card-body p-0">
              <div className="table-responsive--sm table-responsive">
                <table className="table table--light style--two custom-data-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Code</th>
                      <th>Default</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>English</td>
                      <td>
                        <strong>en</strong>
                      </td>
                      <td>
                        <span className="badge badge--success">Default</span>
                      </td>
                      <td>
                        <div className="button--group">
                          <a
                            href="../../admin/language/edit/1"
                            className="btn btn-sm btn-outline--success"
                          >
                            <i className="la la-code" />
                            Translate{" "}
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="btn btn-sm btn-outline--primary ms-1 editBtn"
                            data-url="../../admin/language/update/1"
                            data-lang='{"name":"English","text_align":null,"is_default":1}'
                          >
                            <i className="la la-pen" />
                            Edit{" "}
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Hindi</td>
                      <td>
                        <strong>hn</strong>
                      </td>
                      <td>
                        <span className="badge badge--warning">Selectable</span>
                      </td>
                      <td>
                        <div className="button--group">
                          <a
                            href="../../admin/language/edit/5"
                            className="btn btn-sm btn-outline--success"
                          >
                            <i className="la la-code" />
                            Translate{" "}
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="btn btn-sm btn-outline--primary ms-1 editBtn"
                            data-url="../../admin/language/update/5"
                            data-lang='{"name":"Hindi","text_align":null,"is_default":0}'
                          >
                            <i className="la la-pen" />
                            Edit{" "}
                          </a>
                          <button
                            className="btn btn-sm btn-outline--danger confirmationBtn"
                            data-question="Are you sure to remove this language from this system?"
                            data-action="../../admin/language/delete/5"
                          >
                            <i className="la la-trash" />
                            Remove{" "}
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Bangla</td>
                      <td>
                        <strong>bn</strong>
                      </td>
                      <td>
                        <span className="badge badge--warning">Selectable</span>
                      </td>
                      <td>
                        <div className="button--group">
                          <a
                            href="../../admin/language/edit/9"
                            className="btn btn-sm btn-outline--success"
                          >
                            <i className="la la-code" />
                            Translate{" "}
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="btn btn-sm btn-outline--primary ms-1 editBtn"
                            data-url="../../admin/language/update/9"
                            data-lang='{"name":"Bangla","text_align":null,"is_default":0}'
                          >
                            <i className="la la-pen" />
                            Edit{" "}
                          </a>
                          <button
                            className="btn btn-sm btn-outline--danger confirmationBtn"
                            data-question="Are you sure to remove this language from this system?"
                            data-action="../../admin/language/delete/9"
                          >
                            <i className="la la-trash" />
                            Remove{" "}
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* table end */}
              </div>
            </div>
          </div>
          {/* card end */}
        </div>
      </div>
      <div
        className="modal fade"
        id="createModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="createModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="createModalLabel">
                {" "}
                Add New Language
              </h4>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="las la-times" />
              </button>
            </div>
            <form
              className="form-horizontal"
              method="post"
              action="../../admin/language"
            >
              <input
                type="hidden"
                name="_token"
                defaultValue="H4ATodCIq10Ilj4glleG1Id1azCiq1obuuZmDmjX"
              />
              <div className="modal-body">
                <div className="row form-group">
                  <label>Language Name</label>
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      defaultValue=""
                      name="name"
                      required=""
                    />
                  </div>
                </div>
                <div className="row form-group">
                  <label>Language Code</label>
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      defaultValue=""
                      name="code"
                      required=""
                    />
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-md-12">
                    <label htmlFor="inputName">Default Language</label>
                    <input
                      type="checkbox"
                      data-width="100%"
                      data-height="40px"
                      data-onstyle="-success"
                      data-offstyle="-danger"
                      data-bs-toggle="toggle"
                      data-on="SET"
                      data-off="UNSET"
                      name="is_default"
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn--primary w-100 h-45"
                  id="btn-save"
                  value="add"
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
        id="editModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="editModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="editModalLabel">
                Edit Language
              </h4>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="las la-times" />
              </button>
            </div>
            <form method="post">
              <input
                type="hidden"
                name="_token"
                defaultValue="H4ATodCIq10Ilj4glleG1Id1azCiq1obuuZmDmjX"
              />
              <div className="modal-body">
                <div className="form-group">
                  <label>Language Name</label>
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      defaultValue=""
                      name="name"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="inputName">Default Language</label>
                  <input
                    type="checkbox"
                    data-width="100%"
                    data-height="40px"
                    data-onstyle="-success"
                    data-offstyle="-danger"
                    data-bs-toggle="toggle"
                    data-on="SET"
                    data-off="UNSET"
                    name="is_default"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn--primary w-100 h-45"
                  id="btn-save"
                  value="add"
                >
                  Submit
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


export default Language;
