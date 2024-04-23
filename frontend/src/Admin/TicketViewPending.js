import React from "react";
import './Admin.css'
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";
import { withGlobalState } from '../withGlobalState';





class TicketViewPending extends React.Component {
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
        <h6 className="page-title">Reply Ticket</h6>
        <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
          <a
            href="../../admin/ticket"
            className="btn btn-sm btn-outline--primary"
          >
            <i className="la la-undo" /> Back
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body ">
              <h6 className="card-title  mb-4">
                <div className="row">
                  <div className="col-sm-8 col-md-6">
                    [Ticket#77701447] Incidunt possimus
                  </div>
                  <div className="col-sm-4  col-md-6 text-sm-end mt-sm-0 mt-3">
                    <button
                      className="btn btn--danger btn-sm"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#DelModal"
                    >
                      <i className="fa fa-lg fa-times-circle" /> Close Ticket{" "}
                    </button>
                  </div>
                </div>
              </h6>
              <form
                action="../../admin/ticket/reply/10"
                encType="multipart/form-data"
                method="post"
                className="form-horizontal"
              >
                <input
                  type="hidden"
                  name="_token"
                  defaultValue="E6VfIKYhkOrK7AbIz100xrYSi12cX4lyZLsKfwsE"
                />
                <div className="row ">
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        rows={5}
                        required=""
                        id="inputMessage"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row form-group">
                      <div className="col-12">
                        <label htmlFor="inputAttachments">Attachments</label>{" "}
                        <span className="text--danger">
                          Max 5 files can be uploaded. Maximum upload size is
                          256M
                        </span>
                      </div>
                      <div className="col-9">
                        <div
                          className="file-upload-wrapper"
                          data-text="Select your file!"
                        >
                          <input
                            type="file"
                            name="attachments[]"
                            id="inputAttachments"
                            className="file-upload-field"
                          />
                        </div>
                      </div>
                      <div className="col-3">
                        <button
                          type="button"
                          className="btn btn--dark extraTicketAttachment ms-0"
                        >
                          <i className="fa fa-plus" />
                        </button>
                      </div>
                      <div className="col-12">
                        <div id="fileUploadsContainer" />
                      </div>
                      <div className="col-md-12 ticket-attachments-message text-muted mt-3">
                        Allowed File Extensions: .jpg, .jpeg, .png, .pdf, .doc,
                        .docx{" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 offset-md-3">
                    <button
                      className="btn btn--primary w-100 mt-4"
                      type="submit"
                      name="replayTicket"
                      value={1}
                    >
                      <i className="la la-fw la-lg la-reply" />
                      Reply{" "}
                    </button>
                  </div>
                </div>
              </form>
              <div className="row border border--primary border-radius-3 my-3 mx-2">
                <div className="col-md-3 border-end text-md-end text-start">
                  <h5 className="my-3">Jamalia Crawford</h5>
                  <p>
                    @<span>Jamalia Crawford</span>
                  </p>
                  <button
                    className="btn btn-danger btn-sm my-3 confirmationBtn"
                    data-question="Are you sure to delete this message?"
                    data-action="../../admin/ticket/delete/15"
                  >
                    <i className="la la-trash" />
                    Delete
                  </button>
                </div>
                <div className="col-md-9">
                  <p className="text-muted fw-bold my-3">
                    Posted on Sunday, 28th January 2024 @ 11:38
                  </p>
                  <p>Veniam aut labore d</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="DelModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"> Close Support Ticket!</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="las la-times" />
              </button>
            </div>
            <div className="modal-body">
              <p>Are you want to close this support ticket?</p>
            </div>
            <div className="modal-footer">
              <form method="post" action="../../admin/ticket/close/10">
                <input
                  type="hidden"
                  name="_token"
                  defaultValue="E6VfIKYhkOrK7AbIz100xrYSi12cX4lyZLsKfwsE"
                />
                <input type="hidden" name="replayTicket" defaultValue={2} />
                <button
                  type="button"
                  className="btn btn--dark"
                  data-bs-dismiss="modal"
                >
                  {" "}
                  No{" "}
                </button>
                <button type="submit" className="btn btn--primary">
                  {" "}
                  Yes{" "}
                </button>
              </form>
            </div>
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
                defaultValue="E6VfIKYhkOrK7AbIz100xrYSi12cX4lyZLsKfwsE"
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


export default TicketViewPending;
