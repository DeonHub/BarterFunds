import React from "react";
import './Admin.css'
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";
import { withGlobalState } from '../withGlobalState';





class ExchangeRefunded extends React.Component {
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
        <h6 className="page-title">Refunded Exchange</h6>
        <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
          <form action="" method="GET" className="d-flex flex-wrap sea gap-2">
            <div className="input-group w-auto flex-fill">
              <input
                type="search"
                name="search"
                className="form-control bg--white"
                placeholder="Exchange ID/TRX"
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
      <div className="row">
        <div className="col-lg-12">
          <div className="card b-radius--10 ">
            <div className="card-body p-0">
              <div className="table-responsive--md  table-responsive">
                <table className="table table--light style--two">
                  <thead>
                    <tr>
                      <th>S.N.</th>
                      <th>Exchange ID</th>
                      <th>User</th>
                      <th>Received Method</th>
                      <th>Received Amount</th>
                      <th>Send Method</th>
                      <th>Send Amount</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <span className="fw-bold">K1YXM7XJRMMC</span>
                        <br />
                        <small className="text-muted">
                          2022-12-14 04:47 AM
                        </small>
                      </td>
                      <td>
                        <span className="d-block">Michael Adzato</span>
                        <span>
                          <a
                            className="text--primary"
                            href="../../admin/users/detail/44"
                          >
                            <span className="text--primary">@</span>meekynerd
                          </a>
                        </span>
                      </td>
                      <td>
                        <span className="d-block">Mobile Money</span>
                        <span className="text--primary">GHS</span>
                      </td>
                      <td>
                        <span className="d-block">10.00 GHS</span>
                        <span>10.00</span> +
                        <span className="text--danger">0.00</span>=
                        <span>10.00 GHS</span>
                      </td>
                      <td>
                        <span className="d-block">PayPal</span>
                        <span className="text--primary">USD</span>
                      </td>
                      <td>
                        <span className="d-block">9.67 USD</span>
                        <span>9.67</span> -
                        <span className="text--danger">0.00</span>=
                        <span>9.67 USD</span>
                      </td>
                      <td>
                        {" "}
                        <span>
                          <span className="badge badge--warning">Refunded</span>
                          <br />7 months ago
                        </span>
                      </td>
                      <td>
                        <a
                          href="../../admin/exchange/details/refunded.html"
                          className="btn btn-sm btn-outline--primary"
                        >
                          <i className="las la-desktop" />
                          Details
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
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


export default ExchangeRefunded;
