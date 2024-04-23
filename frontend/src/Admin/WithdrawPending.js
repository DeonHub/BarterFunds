import React from "react";
import './Admin.css'
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";
import { withGlobalState } from '../withGlobalState';





class WithdrawPending extends React.Component {
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
        <h6 className="page-title">Pending Withdrawals</h6>
        <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
          <form action="" method="GET" className="d-flex flex-wrap sea gap-2">
            <div className="input-group w-auto flex-fill">
              <input
                type="search"
                name="search"
                className="form-control bg--white"
                placeholder="Search..."
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
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="card b-radius--10 ">
            <div className="card-body p-0">
              <div className="table-responsive--sm table-responsive">
                <table className="table table--light style--two">
                  <thead>
                    <tr>
                      <th>Gateway | Transaction</th>
                      <th>Initiated</th>
                      <th>User</th>
                      <th>Amount</th>
                      <th>Charge</th>
                      <th>Conversion</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span className="fw-bold">
                          <a href="../../admin/withdraw/pending?method=18">
                            Bitcoin
                          </a>
                        </span>
                        <br />
                        <small>M743QDY9E5H2</small>
                      </td>
                      <td>
                        2023-06-28 10:32 AM <br />3 weeks ago
                      </td>
                      <td>
                        <span className="fw-bold">Lucius Donaldson</span>
                        <br />
                        <span className="small">
                          {" "}
                          <a href="../../admin/withdraw/pending?search=Donaldson">
                            <span>@</span>Donaldson
                          </a>
                        </span>
                      </td>
                      <td>1,000.00 GHS</td>
                      <td>
                        <span className="text--danger">1.71 USD</span>
                      </td>
                      <td>
                        1 USD = 95.00 GHS
                        <br />
                        <strong>10.53 USD</strong>
                      </td>
                      <td>
                        <span className="badge badge--warning">Pending</span>
                      </td>
                      <td>
                        <a
                          href="../../admin/withdraw/details/pending.html"
                          className="btn btn-sm btn-outline--primary ms-1"
                        >
                          <i className="la la-desktop" />
                          Details{" "}
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* card end */}
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


export default WithdrawPending;
