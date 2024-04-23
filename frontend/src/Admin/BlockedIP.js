import React from "react";
import './Admin.css'
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";
import { withGlobalState } from '../withGlobalState';





class BlockedIP extends React.Component {
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
        <h6 className="page-title">IP Settings</h6>
        <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
          <form action="" method="GET" className="d-flex flex-wrap sea gap-2">
            <div className="input-group w-auto flex-fill">
              <input
                type="search"
                name="search"
                className="form-control bg--white"
                placeholder="IP Address"
                defaultValue=""
              />
              <button className="btn btn--primary" type="submit">
                <i className="la la-search" />
              </button>
            </div>
            <div className="input-group w-auto flex-fill">
              <input
                name="date"
                type="search"
                data-range="true"
                data-multiple-dates-separator=" - "
                data-language="en"
                data-format="Y-m-d"
                className="datepicker-here form-control bg--white pe-2"
                data-position="bottom right"
                placeholder="Start Date - End Date"
                autoComplete="off"
                defaultValue=""
              />
              <button className="btn btn--primary input-group-text">
                <i className="la la-search" />
              </button>
            </div>
          </form>
          <button
            type="button"
            className="btn btn-sm btn-outline--primary float-end openForm h-45"
          >
            <i className="la la-fw la-plus" />
            Add New{" "}
          </button>
        </div>
      </div>
      <div className="row mb-none-30">
        <div className="col-lg-12">
          <div className="card b-radius--10 ">
            <div className="card-body p-0">
              <div className="table-responsive--sm table-responsive">
                <table className="table table--light style--two custom-data-table">
                  <thead>
                    <tr>
                      <th>S.N.</th>
                      <th>IP Address</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="100%" className="text-muted text-center">
                        Data not found
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="ipDeleteModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="ipModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ipModalLabel">
                Unblock IP
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
            <form action="../../admin/blocked-ip/unblock" method="post">
              <input
                type="hidden"
                name="_token"
                defaultValue="H4ATodCIq10Ilj4glleG1Id1azCiq1obuuZmDmjX"
              />
              <div className="modal-body">
                <input type="hidden" name="id" defaultValue="" />
                <p>Are you sure to unblock this IP address from block list?</p>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn--danger w-100 h-45">
                  Unblock
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="createModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="createModal"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="createModal">
                Blocked IP Address
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
            <form action="../../admin/blocked-ip/insert" method="post">
              <input
                type="hidden"
                name="_token"
                defaultValue="H4ATodCIq10Ilj4glleG1Id1azCiq1obuuZmDmjX"
              />
              <div className="modal-body">
                <div className="form-group">
                  <p className="p-3 bg--warning text-dark">
                    Please exercise caution and ensure the accuracy of the IP
                    address before proceeding. Once added to the block list,
                    users or anyone associated with this IP address will be
                    denied access to your platform. Be careful don't block your
                    IP address any more.{" "}
                  </p>
                </div>
                <div className="form-group">
                  <label>IP Address</label>
                  <input
                    type="text"
                    name="ip_address"
                    required=""
                    className="form-control"
                  />
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


export default BlockedIP;
