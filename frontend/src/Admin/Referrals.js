import React from "react";
import './Admin.css'
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";



class Referrals extends React.Component {
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
        <AdminSidebar active={'referral'}/>
        <AdminHeader />
        <>
  <div className="body-wrapper">
    <div className="bodywrapper__inner">
      <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
        <h6 className="page-title">Referral Commissions</h6>
        
        <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
        <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
          <a
            href="#"
            className="btn btn-sm btn-outline--primary"
          >
            <i className="la la-undo" /> Referral Settings
          </a>
        </div>
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
                      <th>User</th>
                      <th>Commission From</th>
                      <th>Commission Level</th>
                      <th>Amount</th>
                      <th>Title</th>
                      <th>Transaction</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-muted text-center" colSpan="100%">
                        Data not found
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


export default Referrals;
