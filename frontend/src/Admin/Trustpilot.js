import React from "react";
import './Admin.css'
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";





class Trustpilot extends React.Component {
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
        <h6 className="page-title">Trustpilot</h6>
        <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins"></div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card border mb-3">
            <div className="card-body">
              <form action="../../admin/trustpilot/widget" method="post">
                <input
                  type="hidden"
                  name="_token"
                  defaultValue="H4ATodCIq10Ilj4glleG1Id1azCiq1obuuZmDmjX"
                />
                <div className="form-group mb-3">
                  <label>Widget Code</label>
                  <textarea
                    name="code"
                    className="form-control"
                    rows={10}
                    defaultValue={
                      '                                                <script\n                                                src="https://cdn.commoninja.com/sdk/latest/commonninja.js"\n                                                defer></script>\n                                                <div\n                                                class="commonninja_component\n                                                pid-8fe58863-1703-4c54-a523-79c3b1366d8a"></div>\n                                            '
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn--primary w-100 h-45 mt-3"
                >
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


export default Trustpilot;
