import React from "react";
import './Admin.css'
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";
import { withGlobalState } from '../withGlobalState';





class ExchangePending extends React.Component {
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
        <h6 className="page-title">Pending Exchange</h6>
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
                        <span className="fw-bold">H8VWGS2HGYNE</span>
                        <br />
                        <small className="text-muted">
                          2023-07-26 09:22 AM
                        </small>
                      </td>
                      <td>
                        <span className="d-block">Joy Emon</span>
                        <span>
                          <a
                            className="text--primary"
                            href="../../admin/users/detail/pending.html"
                          >
                            <span className="text--primary">@</span>
                            100728078429022888081
                          </a>
                        </span>
                      </td>
                      <td>
                        <span className="d-block">Bkash</span>
                        <span className="text--primary">BDT</span>
                      </td>
                      <td>
                        <span className="d-block">1,000.00 BDT</span>
                        <span>1,000.00</span> +
                        <span className="text--danger">16.00</span>=
                        <span>1,016.00 BDT</span>
                      </td>
                      <td>
                        <span className="d-block">Web Money</span>
                        <span className="text--primary">USD</span>
                      </td>
                      <td>
                        <span className="d-block">11.58 USD</span>
                        <span>11.58</span> -
                        <span className="text--danger">2.12</span>=
                        <span>9.46 USD</span>
                      </td>
                      <td>
                        {" "}
                        <span className="badge badge--warning">Pending</span>
                      </td>
                      <td>
                        <a
                          href="../../admin/exchange/details/pending.html"
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
            <div className="card-footer py-4">
              <nav>
                <ul className="pagination">
                  <li
                    className="page-item disabled"
                    aria-disabled="true"
                    aria-label="« Previous"
                  >
                    <span className="page-link" aria-hidden="true">
                      ‹
                    </span>
                  </li>
                  <li className="page-item active" aria-current="page">
                    <span className="page-link">1</span>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="../../admin/exchange/pending?page=2"
                    >
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="../../admin/exchange/pending?page=3"
                    >
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="../../admin/exchange/pending?page=4"
                    >
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="../../admin/exchange/pending?page=5"
                    >
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="../../admin/exchange/pending?page=6"
                    >
                      6
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="../../admin/exchange/pending?page=7"
                    >
                      7
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="../../admin/exchange/pending?page=8"
                    >
                      8
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="../../admin/exchange/pending?page=2"
                      rel="next"
                      aria-label="Next »"
                    >
                      ›
                    </a>
                  </li>
                </ul>
              </nav>
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


export default ExchangePending;
