import React from "react";
import './Admin.css'
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";





class Subscriber extends React.Component {
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
        <h6 className="page-title">Subscriber Manager</h6>
        <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
          <a
            href="../../admin/subscriber/send-email"
            className="btn btn-sm btn-outline--primary"
          >
            <i className="las la-paper-plane" />
            Send Email
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card b-radius--10 ">
            <div className="card-body p-0">
              <div className="table-responsive--sm table-responsive">
                <table className="table table--light style--two">
                  <thead>
                    <tr>
                      <th>Email</th>
                      <th>Subscribe At</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>[Email is protected for the demo]</td>
                      <td>2023-02-14 04:15 PM</td>
                      <td>
                        <button
                          href="javascript:void(0)"
                          className="btn btn-sm btn-outline--danger confirmationBtn"
                          data-question="Are you sure to remove this subscriber?"
                          data-action="../../admin/subscriber/remove/4"
                        >
                          <i className="las la-trash" />
                          Remove{" "}
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>[Email is protected for the demo]</td>
                      <td>2023-02-02 07:14 PM</td>
                      <td>
                        <button
                          href="javascript:void(0)"
                          className="btn btn-sm btn-outline--danger confirmationBtn"
                          data-question="Are you sure to remove this subscriber?"
                          data-action="../../admin/subscriber/remove/3"
                        >
                          <i className="las la-trash" />
                          Remove{" "}
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>[Email is protected for the demo]</td>
                      <td>2023-02-02 07:13 PM</td>
                      <td>
                        <button
                          href="javascript:void(0)"
                          className="btn btn-sm btn-outline--danger confirmationBtn"
                          data-question="Are you sure to remove this subscriber?"
                          data-action="../../admin/subscriber/remove/2"
                        >
                          <i className="las la-trash" />
                          Remove{" "}
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>[Email is protected for the demo]</td>
                      <td>2023-02-02 07:13 PM</td>
                      <td>
                        <button
                          href="javascript:void(0)"
                          className="btn btn-sm btn-outline--danger confirmationBtn"
                          data-question="Are you sure to remove this subscriber?"
                          data-action="../../admin/subscriber/remove/1"
                        >
                          <i className="las la-trash" />
                          Remove{" "}
                        </button>
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


export default Subscriber;
