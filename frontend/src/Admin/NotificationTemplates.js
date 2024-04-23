import React from "react";
import './Admin.css'
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";
import { withGlobalState } from '../withGlobalState';





class NotificationTemplate extends React.Component {
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
        <h6 className="page-title">Notification Templates</h6>
        <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins"></div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body px-0">
              <div className="table-responsive--sm table-responsive">
                <table className="table table--light style--two custom-data-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Subject</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Approved Exchange</td>
                      <td>Your Exchange Approved</td>
                      <td>
                        <a
                          href="template/edit/19.html"
                          className="btn btn-sm btn-outline--primary ms-1 editGatewayBtn"
                        >
                          <i className="la la-pencil" />
                          Edit{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Balance - Added</td>
                      <td>Your Account has been Credited</td>
                      <td>
                        <a
                          href="template/edit/1.html"
                          className="btn btn-sm btn-outline--primary ms-1 editGatewayBtn"
                        >
                          <i className="la la-pencil" />
                          Edit{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Balance - Subtracted</td>
                      <td>Your Account has been Debited</td>
                      <td>
                        <a
                          href="template/edit/2.html"
                          className="btn btn-sm btn-outline--primary ms-1 editGatewayBtn"
                        >
                          <i className="la la-pencil" />
                          Edit{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Cancel Exchange</td>
                      <td>Your Exchange Canceled</td>
                      <td>
                        <a
                          href="template/edit/18.html"
                          className="btn btn-sm btn-outline--primary ms-1 editGatewayBtn"
                        >
                          <i className="la la-pencil" />
                          Edit{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Default Template</td>
                      <td>
                        {"{"}
                        {"{"}subject{"}"}
                        {"}"}
                      </td>
                      <td>
                        <a
                          href="template/edit/15.html"
                          className="btn btn-sm btn-outline--primary ms-1 editGatewayBtn"
                        >
                          <i className="la la-pencil" />
                          Edit{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Deposit - Automated - Successful</td>
                      <td>Deposit Completed Successfully</td>
                      <td>
                        <a
                          href="template/edit/3.html"
                          className="btn btn-sm btn-outline--primary ms-1 editGatewayBtn"
                        >
                          <i className="la la-pencil" />
                          Edit{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Deposit - Manual - Approved</td>
                      <td>Your Deposit is Approved</td>
                      <td>
                        <a
                          href="template/edit/4.html"
                          className="btn btn-sm btn-outline--primary ms-1 editGatewayBtn"
                        >
                          <i className="la la-pencil" />
                          Edit{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Deposit - Manual - Requested</td>
                      <td>Deposit Request Submitted Successfully</td>
                      <td>
                        <a
                          href="template/edit/6.html"
                          className="btn btn-sm btn-outline--primary ms-1 editGatewayBtn"
                        >
                          <i className="la la-pencil" />
                          Edit{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>KYC Approved</td>
                      <td>KYC has been approved</td>
                      <td>
                        <a
                          href="template/edit/16.html"
                          className="btn btn-sm btn-outline--primary ms-1 editGatewayBtn"
                        >
                          <i className="la la-pencil" />
                          Edit{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>KYC Rejected</td>
                      <td>KYC has been rejected</td>
                      <td>
                        <a
                          href="template/edit/17.html"
                          className="btn btn-sm btn-outline--primary ms-1 editGatewayBtn"
                        >
                          <i className="la la-pencil" />
                          Edit{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Password - Reset - Code</td>
                      <td>Password Reset</td>
                      <td>
                        <a
                          href="template/edit/7.html"
                          className="btn btn-sm btn-outline--primary ms-1 editGatewayBtn"
                        >
                          <i className="la la-pencil" />
                          Edit{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Password - Reset - Confirmation</td>
                      <td>You have reset your password</td>
                      <td>
                        <a
                          href="template/edit/8.html"
                          className="btn btn-sm btn-outline--primary ms-1 editGatewayBtn"
                        >
                          <i className="la la-pencil" />
                          Edit{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Referral Commission</td>
                      <td>User Referral Commission</td>
                      <td>
                        <a
                          href="template/edit/21.html"
                          className="btn btn-sm btn-outline--primary ms-1 editGatewayBtn"
                        >
                          <i className="la la-pencil" />
                          Edit{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Refund Exchange</td>
                      <td>Your Exchange Refunded</td>
                      <td>
                        <a
                          href="template/edit/20.html"
                          className="btn btn-sm btn-outline--primary ms-1 editGatewayBtn"
                        >
                          <i className="la la-pencil" />
                          Edit{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Support - Reply</td>
                      <td>Reply Support Ticket</td>
                      <td>
                        <a
                          href="template/edit/9.html"
                          className="btn btn-sm btn-outline--primary ms-1 editGatewayBtn"
                        >
                          <i className="la la-pencil" />
                          Edit{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Verification - Email</td>
                      <td>Please verify your email address</td>
                      <td>
                        <a
                          href="template/edit/10.html"
                          className="btn btn-sm btn-outline--primary ms-1 editGatewayBtn"
                        >
                          <i className="la la-pencil" />
                          Edit{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Verification - SMS</td>
                      <td>Verify Your Mobile Number</td>
                      <td>
                        <a
                          href="template/edit/11.html"
                          className="btn btn-sm btn-outline--primary ms-1 editGatewayBtn"
                        >
                          <i className="la la-pencil" />
                          Edit{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Withdraw - Approved</td>
                      <td>
                        Withdraw Request has been Processed and your money is
                        sent
                      </td>
                      <td>
                        <a
                          href="template/edit/12.html"
                          className="btn btn-sm btn-outline--primary ms-1 editGatewayBtn"
                        >
                          <i className="la la-pencil" />
                          Edit{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Withdraw - Rejected</td>
                      <td>
                        Withdraw Request has been Rejected and your money is
                        refunded to your account
                      </td>
                      <td>
                        <a
                          href="template/edit/13.html"
                          className="btn btn-sm btn-outline--primary ms-1 editGatewayBtn"
                        >
                          <i className="la la-pencil" />
                          Edit{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Withdraw - Requested</td>
                      <td>Withdraw Request Submitted Successfully</td>
                      <td>
                        <a
                          href="template/edit/14.html"
                          className="btn btn-sm btn-outline--primary ms-1 editGatewayBtn"
                        >
                          <i className="la la-pencil" />
                          Edit{" "}
                        </a>
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
    </div>
    {/* bodywrapper__inner end */}
  </div>
  {/* body-wrapper end */}
</>

        
        

      </div>

    );
  }
}


export default NotificationTemplate;
