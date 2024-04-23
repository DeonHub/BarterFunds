import React from "react";
import './Admin.css'
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";
import { withGlobalState } from '../withGlobalState';





class Referral extends React.Component {
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
        <h6 className="page-title">Manage Referral</h6>
        <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins"></div>
      </div>
      <div className="row">
        <div className="col-sm-8 col-lg-8 col-xl-6 mx-auto">
          <div className="card border--primary parent">
            <div className="card-header bg--primary">
              <h5 className="text-white float-start">
                Exchange Referral Commission
              </h5>
              <a
                href="../../admin/status"
                className="btn btn--danger btn-sm float-end"
              >
                <i className="las la-toggle-off" />
                Disable Now
              </a>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex flex-wrap justify-content-between">
                  <span className="fw-bold">Level 5</span>
                  <span className="fw-bold">2.00%</span>
                </li>
                <li className="list-group-item d-flex flex-wrap justify-content-between">
                  <span className="fw-bold">Level 4</span>
                  <span className="fw-bold">4.00%</span>
                </li>
                <li className="list-group-item d-flex flex-wrap justify-content-between">
                  <span className="fw-bold">Level 3</span>
                  <span className="fw-bold">5.00%</span>
                </li>
                <li className="list-group-item d-flex flex-wrap justify-content-between">
                  <span className="fw-bold">Level 2</span>
                  <span className="fw-bold">6.00%</span>
                </li>
                <li className="list-group-item d-flex flex-wrap justify-content-between">
                  <span className="fw-bold">Level 1</span>
                  <span className="fw-bold">8.00%</span>
                </li>
              </ul>
              <div className="border-line-area">
                <h6 className="border-line-title">Update Setting</h6>
              </div>
              <div className="form-group mb-0">
                <label>Number of Level</label>
                <div className="input-group">
                  <input
                    type="text"
                    name="level"
                    min={1}
                    placeholder="Type a number & hit ENTER ↵"
                    className="form-control"
                  />
                  <button type="button" className="btn btn--primary generate">
                    Generate
                  </button>
                </div>
                <span className="text--danger required-message d-none">
                  Please enter a number
                </span>
              </div>
              <form
                action="../../admin/referral"
                method="post"
                className="d-none levelForm"
              >
                <input
                  type="hidden"
                  name="_token"
                  defaultValue="H4ATodCIq10Ilj4glleG1Id1azCiq1obuuZmDmjX"
                />
                <h6 className="text--danger my-3">
                  The old setting will be removed after generating new
                </h6>
                <div className="form-group">
                  <div className="referralLevels" />
                </div>
                <button type="submit" className="btn btn--primary h-45 w-100">
                  Submit
                </button>
              </form>
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


export default Referral;
