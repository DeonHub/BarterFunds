import React from "react";
import './Admin.css'
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";





class Currency extends React.Component {
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
        <h6 className="page-title">Manage Currency</h6>
        <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
          <form action="" method="GET" className="d-flex flex-wrap sea gap-2">
            <div className="input-group w-auto flex-fill">
              <input
                type="search"
                name="search"
                className="form-control bg--white"
                placeholder="Search."
                defaultValue=""
              />
              <button className="btn btn--primary" type="submit">
                <i className="la la-search" />
              </button>
            </div>
          </form>
          <a className="btn btn-outline--primary" href={`${process.env.PUBLIC_URL}/admin/currency/create`}>
            <i className="las la-plus" />
            Add New
          </a>
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
                      <th>Currency</th>
                      <th>Buy At</th>
                      <th>Sell At</th>
                      <th>Send At</th>
                      <th>Receive At</th>
                      <th>Reserve Amount</th>
                      <th>Status</th>
                      <th>Action</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="user">
                          <div className="thumb">
                            <img src="/assets/images/currency/btc.png" />
                          </div>
                          <span className="name">Bitcoin</span>
                        </div>
                      </td>
                      <td>13.00 GHS</td>
                      <td>10.00 GHS</td>
                      <td>13.00 GHS</td>
                      <td>12.00 GHS</td>
                      <td>80,000.00 USD</td>
                      <td>
                        {" "}
                        <span className="badge badge--success">
                          Enabled
                        </span>{" "}
                      </td>
                      <td>
                        <a
                          href={`${process.env.PUBLIC_URL}/admin/currency/btc`}
                          className="btn btn-sm btn-outline--primary"
                        >
                          <i className="la la-pencil" />
                          Edit{" "}
                        </a>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline--danger  confirmationBtn"
                          data-action="currency/status/18"
                          data-question="Are you sure to disable this currency?"
                        >
                          <i className="la la-eye-slash" /> Disable{" "}
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="user">
                          <div className="thumb">
                            <img src="/assets/images/currency/ethereum.png" />
                          </div>
                          <span className="name">Ethereum</span>
                        </div>
                      </td>
                      <td>13.00 GHS</td>
                      <td>10.00 GHS</td>
                      <td>13.00 GHS</td>
                      <td>12.00 GHS</td>
                      <td>80,000.00 USD</td>
                      <td>
                        {" "}
                        <span className="badge badge--success">
                          Enabled
                        </span>{" "}
                      </td>
                      <td>
                        <a
                          href={`${process.env.PUBLIC_URL}/admin/currency/eth`}
                          className="btn btn-sm btn-outline--primary"
                        >
                          <i className="la la-pencil" />
                          Edit{" "}
                        </a>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline--danger  confirmationBtn"
                          data-action="currency/status/32"
                          data-question="Are you sure to disable this currency?"
                        >
                          <i className="la la-eye-slash" /> Disable{" "}
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="user">
                          <div className="thumb">
                            <img src="/assets/images/currency/perfectmoney.png" />
                          </div>
                          <span className="name">Perfect Money</span>
                        </div>
                      </td>
                      <td>13.00 GHS</td>
                      <td>10.00 GHS</td>
                      <td>13.00 GHS</td>
                      <td>12.00 GHS</td>
                      <td>80,000.00 USD</td>
                      <td>
                        {" "}
                        <span className="badge badge--success">
                          Enabled
                        </span>{" "}
                      </td>
                      <td>
                        <a
                          href={`${process.env.PUBLIC_URL}/admin/currency/perfectmoney`}
                          className="btn btn-sm btn-outline--primary"
                        >
                          <i className="la la-pencil" />
                          Edit{" "}
                        </a>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline--danger  confirmationBtn"
                          data-action="currency/status/17"
                          data-question="Are you sure to disable this currency?"
                        >
                          <i className="la la-eye-slash" /> Disable{" "}
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="user">
                          <div className="thumb">
                            <img src="/assets/images/currency/rmb.png" />
                          </div>
                          <span className="name">Yuan</span>
                        </div>
                      </td>
                      <td>13.00 GHS</td>
                      <td>10.00 GHS</td>
                      <td>13.00 GHS</td>
                      <td>12.00 GHS</td>
                      <td>80,000.00 RMB</td>
                      <td>
                        {" "}
                        <span className="badge badge--success">
                          Enabled
                        </span>{" "}
                      </td>
                      <td>
                        <a
                          href={`${process.env.PUBLIC_URL}/admin/currency/yuan`}
                          className="btn btn-sm btn-outline--primary"
                        >
                          <i className="la la-pencil" />
                          Edit{" "}
                        </a>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline--danger  confirmationBtn"
                          data-action="currency/status/16"
                          data-question="Are you sure to disable this currency?"
                        >
                          <i className="la la-eye-slash" /> Disable{" "}
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="user">
                          <div className="thumb">
                            <img src="/assets/images/currency/usdt.png" />
                          </div>
                          <span className="name">Tether USDT</span>
                        </div>
                      </td>
                      <td>13.00 GHS</td>
                      <td>10.00 GHS</td>
                      <td>13.00 GHS</td>
                      <td>12.00 GHS</td>
                      <td>80,000.00 USD</td>
                      <td>
                        {" "}
                        <span className="badge badge--success">
                          Enabled
                        </span>{" "}
                      </td>
                      <td>
                        <a
                          href={`${process.env.PUBLIC_URL}/admin/currency/usdt`}
                          className="btn btn-sm btn-outline--primary"
                        >
                          <i className="la la-pencil" />
                          Edit{" "}
                        </a>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline--danger  confirmationBtn"
                          data-action="currency/status/15"
                          data-question="Are you sure to disable this currency?"
                        >
                          <i className="la la-eye-slash" /> Disable{" "}
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="user">
                          <div className="thumb">
                            <img src="/assets/images/currency/usdc.png" />
                          </div>
                          <span className="name">USD Coin</span>
                        </div>
                      </td>
                      <td>13.00 GHS</td>
                      <td>10.00 GHS</td>
                      <td>13.00 GHS</td>
                      <td>12.00 GHS</td>
                      <td>80,000.00 USD</td>
                      <td>
                        {" "}
                        <span className="badge badge--success">
                          Enabled
                        </span>{" "}
                      </td>
                      <td>
                        <a
                          href={`${process.env.PUBLIC_URL}/admin/currency/usdc`}
                          className="btn btn-sm btn-outline--primary"
                        >
                          <i className="la la-pencil" />
                          Edit{" "}
                        </a>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline--danger  confirmationBtn"
                          data-action="currency/status/15"
                          data-question="Are you sure to disable this currency?"
                        >
                          <i className="la la-eye-slash" /> Disable{" "}
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="user">
                          <div className="thumb">
                            <img src="/assets/images/currency/bch.png" />
                          </div>
                          <span className="name">Bitcoin Cash</span>
                        </div>
                      </td>
                      <td>13.00 GHS</td>
                      <td>10.00 GHS</td>
                      <td>13.00 GHS</td>
                      <td>12.00 GHS</td>
                      <td>80,000.00 USD</td>
                      <td>
                        {" "}
                        <span className="badge badge--success">
                          Enabled
                        </span>{" "}
                      </td>
                      <td>
                        <a
                          href={`${process.env.PUBLIC_URL}/admin/currency/bch`}
                          className="btn btn-sm btn-outline--primary"
                        >
                          <i className="la la-pencil" />
                          Edit{" "}
                        </a>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline--danger  confirmationBtn"
                          data-action="currency/status/15"
                          data-question="Are you sure to disable this currency?"
                        >
                          <i className="la la-eye-slash" /> Disable{" "}
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="user">
                          <div className="thumb">
                            <img src="/assets/images/currency/litecoin.png" />
                          </div>
                          <span className="name">Litecoin</span>
                        </div>
                      </td>
                      <td>13.00 GHS</td>
                      <td>10.00 GHS</td>
                      <td>13.00 GHS</td>
                      <td>12.00 GHS</td>
                      <td>80,000.00 USD</td>
                      <td>
                        {" "}
                        <span className="badge badge--success">
                          Enabled
                        </span>{" "}
                      </td>
                      <td>
                        <a
                          href={`${process.env.PUBLIC_URL}/admin/currency/ltc`}
                          className="btn btn-sm btn-outline--primary"
                        >
                          <i className="la la-pencil" />
                          Edit{" "}
                        </a>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline--danger  confirmationBtn"
                          data-action="currency/status/15"
                          data-question="Are you sure to disable this currency?"
                        >
                          <i className="la la-eye-slash" /> Disable{" "}
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="user">
                          <div className="thumb">
                            <img src="/assets/images/currency/paypal.png" />
                          </div>
                          <span className="name">Paypal</span>
                        </div>
                      </td>
                      <td>13.00 GHS</td>
                      <td>10.00 GHS</td>
                      <td>13.00 GHS</td>
                      <td>12.00 GHS</td>
                      <td>80,000.00 USD</td>
                      <td>
                        {" "}
                        <span className="badge badge--success">
                          Enabled
                        </span>{" "}
                      </td>
                      <td>
                        <a
                          href={`${process.env.PUBLIC_URL}/admin/currency/paypal`}
                          className="btn btn-sm btn-outline--primary"
                        >
                          <i className="la la-pencil" />
                          Edit{" "}
                        </a>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline--danger  confirmationBtn"
                          data-action="currency/status/14"
                          data-question="Are you sure to disable this currency?"
                        >
                          <i className="la la-eye-slash" /> Disable{" "}
                        </button>
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


export default Currency;
