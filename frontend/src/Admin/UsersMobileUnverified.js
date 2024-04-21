import React from "react";
import './Admin.css'
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";





class UsersMobileUnverified extends React.Component {
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
        <h6 className="page-title">Mobile Unverified Users</h6>
        <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
          <form action="" method="GET" className="d-flex flex-wrap sea gap-2">
            <div className="input-group w-auto flex-fill">
              <input
                type="search"
                name="search"
                className="form-control bg--white"
                placeholder="Username / Email"
                defaultValue=""
              />
              <button className="btn btn--primary" type="submit">
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
                      <th>User</th>
                      <th>Email-Phone</th>
                      <th>Country</th>
                      <th>Joined At</th>
                      <th>Balance</th>
                      <th>Action</th>
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


export default UsersMobileUnverified;
