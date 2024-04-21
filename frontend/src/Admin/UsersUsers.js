import React from "react";
import './Admin.css'
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";





class UsersUsers extends React.Component {
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
        <h6 className="page-title">All Users</h6>
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
                      <td>
                        <span className="fw-bold">Joy Emon</span>
                        <br />
                        <span className="small">
                          <a href="../../admin/users/detail/2360">
                            <span>@</span>100728078429022888081
                          </a>
                        </span>
                      </td>
                      <td>
                        [Email is protected for the demo]
                        <br />
                        [Mobile number is protected for the demo]
                      </td>
                      <td>
                        <span className="fw-bold" title="" />
                      </td>
                      <td>
                        2023-07-26 08:36 AM <br />
                        29 minutes ago
                      </td>
                      <td>
                        <span className="fw-bold">₵0.00</span>
                      </td>
                      <td>
                        <a
                          href="../../admin/users/detail/2365.html"
                          className="btn btn-sm btn-outline--primary"
                        >
                          <i className="las la-desktop" />
                          Details{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="fw-bold">moses mungai</span>
                        <br />
                        <span className="small">
                          <a href="../../admin/users/detail/2359">
                            <span>@</span>115924879156619346211
                          </a>
                        </span>
                      </td>
                      <td>
                        [Email is protected for the demo]
                        <br />
                        [Mobile number is protected for the demo]
                      </td>
                      <td>
                        <span className="fw-bold" title="" />
                      </td>
                      <td>
                        2023-07-25 10:32 PM <br />
                        10 hours ago
                      </td>
                      <td>
                        <span className="fw-bold">₵0.00</span>
                      </td>
                      <td>
                        <a
                          href="../../admin/users/detail/2359"
                          className="btn btn-sm btn-outline--primary"
                        >
                          <i className="las la-desktop" />
                          Details{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="fw-bold">Sopuru Daniel</span>
                        <br />
                        <span className="small">
                          <a href="../../admin/users/detail/2358">
                            <span>@</span>intelligence
                          </a>
                        </span>
                      </td>
                      <td>
                        [Email is protected for the demo]
                        <br />
                        [Mobile number is protected for the demo]
                      </td>
                      <td>
                        <span className="fw-bold" title="Nigeria">
                          NG
                        </span>
                      </td>
                      <td>
                        2023-07-25 03:39 PM <br />
                        17 hours ago
                      </td>
                      <td>
                        <span className="fw-bold">₵0.00</span>
                      </td>
                      <td>
                        <a
                          href="../../admin/users/detail/2358"
                          className="btn btn-sm btn-outline--primary"
                        >
                          <i className="las la-desktop" />
                          Details{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="fw-bold">Ahmed Abdi</span>
                        <br />
                        <span className="small">
                          <a href="../../admin/users/detail/2357">
                            <span>@</span>102454937053602712547
                          </a>
                        </span>
                      </td>
                      <td>
                        [Email is protected for the demo]
                        <br />
                        [Mobile number is protected for the demo]
                      </td>
                      <td>
                        <span className="fw-bold" title="" />
                      </td>
                      <td>
                        2023-07-24 02:16 PM <br />1 day ago
                      </td>
                      <td>
                        <span className="fw-bold">₵0.00</span>
                      </td>
                      <td>
                        <a
                          href="../../admin/users/detail/2357"
                          className="btn btn-sm btn-outline--primary"
                        >
                          <i className="las la-desktop" />
                          Details{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="fw-bold">Jamilu Ahmad</span>
                        <br />
                        <span className="small">
                          <a href="../../admin/users/detail/2356">
                            <span>@</span>markarz
                          </a>
                        </span>
                      </td>
                      <td>
                        [Email is protected for the demo]
                        <br />
                        [Mobile number is protected for the demo]
                      </td>
                      <td>
                        <span className="fw-bold" title="Nigeria">
                          NG
                        </span>
                      </td>
                      <td>
                        2023-07-24 09:20 AM <br />1 day ago
                      </td>
                      <td>
                        <span className="fw-bold">₵0.00</span>
                      </td>
                      <td>
                        <a
                          href="../../admin/users/detail/2356"
                          className="btn btn-sm btn-outline--primary"
                        >
                          <i className="las la-desktop" />
                          Details{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="fw-bold">
                          rickeyponder rickeyponder
                        </span>
                        <br />
                        <span className="small">
                          <a href="../../admin/users/detail/2355">
                            <span>@</span>108523646412165088605
                          </a>
                        </span>
                      </td>
                      <td>
                        [Email is protected for the demo]
                        <br />
                        [Mobile number is protected for the demo]
                      </td>
                      <td>
                        <span className="fw-bold" title="" />
                      </td>
                      <td>
                        2023-07-23 11:29 PM <br />2 days ago
                      </td>
                      <td>
                        <span className="fw-bold">₵0.00</span>
                      </td>
                      <td>
                        <a
                          href="../../admin/users/detail/2355"
                          className="btn btn-sm btn-outline--primary"
                        >
                          <i className="las la-desktop" />
                          Details{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="fw-bold">md junaid</span>
                        <br />
                        <span className="small">
                          <a href="../../admin/users/detail/2354">
                            <span>@</span>junaidhossain2020
                          </a>
                        </span>
                      </td>
                      <td>
                        [Email is protected for the demo]
                        <br />
                        [Mobile number is protected for the demo]
                      </td>
                      <td>
                        <span className="fw-bold" title="United Arab Emirates">
                          AE
                        </span>
                      </td>
                      <td>
                        2023-07-23 05:12 PM <br />2 days ago
                      </td>
                      <td>
                        <span className="fw-bold">₵0.00</span>
                      </td>
                      <td>
                        <a
                          href="../../admin/users/detail/2354"
                          className="btn btn-sm btn-outline--primary"
                        >
                          <i className="las la-desktop" />
                          Details{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="fw-bold">Saker Mia</span>
                        <br />
                        <span className="small">
                          <a href="../../admin/users/detail/2353">
                            <span>@</span>saker87
                          </a>
                        </span>
                      </td>
                      <td>
                        [Email is protected for the demo]
                        <br />
                        [Mobile number is protected for the demo]
                      </td>
                      <td>
                        <span className="fw-bold" title="Bangladesh">
                          BD
                        </span>
                      </td>
                      <td>
                        2023-07-23 11:39 AM <br />2 days ago
                      </td>
                      <td>
                        <span className="fw-bold">₵0.00</span>
                      </td>
                      <td>
                        <a
                          href="../../admin/users/detail/2353"
                          className="btn btn-sm btn-outline--primary"
                        >
                          <i className="las la-desktop" />
                          Details{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="fw-bold">Amir Hossain</span>
                        <br />
                        <span className="small">
                          <a href="../../admin/users/detail/2352">
                            <span>@</span>ajamir
                          </a>
                        </span>
                      </td>
                      <td>
                        [Email is protected for the demo]
                        <br />
                        [Mobile number is protected for the demo]
                      </td>
                      <td>
                        <span className="fw-bold" title="Bangladesh">
                          BD
                        </span>
                      </td>
                      <td>
                        2023-07-22 01:13 PM <br />3 days ago
                      </td>
                      <td>
                        <span className="fw-bold">₵0.00</span>
                      </td>
                      <td>
                        <a
                          href="../../admin/users/detail/2352"
                          className="btn btn-sm btn-outline--primary"
                        >
                          <i className="las la-desktop" />
                          Details{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="fw-bold">charif hamza</span>
                        <br />
                        <span className="small">
                          <a href="../../admin/users/detail/2351">
                            <span>@</span>charifx
                          </a>
                        </span>
                      </td>
                      <td>
                        [Email is protected for the demo]
                        <br />
                        [Mobile number is protected for the demo]
                      </td>
                      <td>
                        <span className="fw-bold" title="Morocco">
                          MA
                        </span>
                      </td>
                      <td>
                        2023-07-22 12:52 PM <br />3 days ago
                      </td>
                      <td>
                        <span className="fw-bold">₵0.00</span>
                      </td>
                      <td>
                        <a
                          href="../../admin/users/detail/2351"
                          className="btn btn-sm btn-outline--primary"
                        >
                          <i className="las la-desktop" />
                          Details{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="fw-bold">Den Den</span>
                        <br />
                        <span className="small">
                          <a href="../../admin/users/detail/2350">
                            <span>@</span>denden
                          </a>
                        </span>
                      </td>
                      <td>
                        [Email is protected for the demo]
                        <br />
                        [Mobile number is protected for the demo]
                      </td>
                      <td>
                        <span className="fw-bold" title="Colombia">
                          CO
                        </span>
                      </td>
                      <td>
                        2023-07-21 11:23 PM <br />4 days ago
                      </td>
                      <td>
                        <span className="fw-bold">₵0.00</span>
                      </td>
                      <td>
                        <a
                          href="../../admin/users/detail/2350"
                          className="btn btn-sm btn-outline--primary"
                        >
                          <i className="las la-desktop" />
                          Details{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="fw-bold">John Onyeuwaoma</span>
                        <br />
                        <span className="small">
                          <a href="../../admin/users/detail/2349">
                            <span>@</span>114733388110241326454
                          </a>
                        </span>
                      </td>
                      <td>
                        [Email is protected for the demo]
                        <br />
                        [Mobile number is protected for the demo]
                      </td>
                      <td>
                        <span className="fw-bold" title="" />
                      </td>
                      <td>
                        2023-07-21 09:33 PM <br />4 days ago
                      </td>
                      <td>
                        <span className="fw-bold">₵0.00</span>
                      </td>
                      <td>
                        <a
                          href="../../admin/users/detail/2349"
                          className="btn btn-sm btn-outline--primary"
                        >
                          <i className="las la-desktop" />
                          Details{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="fw-bold">12412412 4124124124</span>
                        <br />
                        <span className="small">
                          <a href="../../admin/users/detail/2348">
                            <span>@</span>prosto
                          </a>
                        </span>
                      </td>
                      <td>
                        [Email is protected for the demo]
                        <br />
                        [Mobile number is protected for the demo]
                      </td>
                      <td>
                        <span className="fw-bold" title="United States">
                          US
                        </span>
                      </td>
                      <td>
                        2023-07-21 01:17 PM <br />4 days ago
                      </td>
                      <td>
                        <span className="fw-bold">₵0.00</span>
                      </td>
                      <td>
                        <a
                          href="../../admin/users/detail/2348"
                          className="btn btn-sm btn-outline--primary"
                        >
                          <i className="las la-desktop" />
                          Details{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="fw-bold">Honey Boy</span>
                        <br />
                        <span className="small">
                          <a href="../../admin/users/detail/2347">
                            <span>@</span>108523066825273594690
                          </a>
                        </span>
                      </td>
                      <td>
                        [Email is protected for the demo]
                        <br />
                        [Mobile number is protected for the demo]
                      </td>
                      <td>
                        <span className="fw-bold" title="" />
                      </td>
                      <td>
                        2023-07-21 11:21 AM <br />4 days ago
                      </td>
                      <td>
                        <span className="fw-bold">₵0.00</span>
                      </td>
                      <td>
                        <a
                          href="../../admin/users/detail/2347"
                          className="btn btn-sm btn-outline--primary"
                        >
                          <i className="las la-desktop" />
                          Details{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="fw-bold">Kenechukwu Nwachukwu</span>
                        <br />
                        <span className="small">
                          <a href="../../admin/users/detail/2346">
                            <span>@</span>kenzi144
                          </a>
                        </span>
                      </td>
                      <td>
                        [Email is protected for the demo]
                        <br />
                        [Mobile number is protected for the demo]
                      </td>
                      <td>
                        <span className="fw-bold" title="Nigeria">
                          NG
                        </span>
                      </td>
                      <td>
                        2023-07-21 10:41 AM <br />4 days ago
                      </td>
                      <td>
                        <span className="fw-bold">₵0.00</span>
                      </td>
                      <td>
                        <a
                          href="../../admin/users/detail/2346"
                          className="btn btn-sm btn-outline--primary"
                        >
                          <i className="las la-desktop" />
                          Details{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="fw-bold">Future It Care Care</span>
                        <br />
                        <span className="small">
                          <a href="../../admin/users/detail/2345">
                            <span>@</span>113439262964201633853
                          </a>
                        </span>
                      </td>
                      <td>
                        [Email is protected for the demo]
                        <br />
                        [Mobile number is protected for the demo]
                      </td>
                      <td>
                        <span className="fw-bold" title="" />
                      </td>
                      <td>
                        2023-07-21 10:17 AM <br />4 days ago
                      </td>
                      <td>
                        <span className="fw-bold">₵0.00</span>
                      </td>
                      <td>
                        <a
                          href="../../admin/users/detail/2345"
                          className="btn btn-sm btn-outline--primary"
                        >
                          <i className="las la-desktop" />
                          Details{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="fw-bold">gkkk gk</span>
                        <br />
                        <span className="small">
                          <a href="../../admin/users/detail/2344">
                            <span>@</span>gnycod3
                          </a>
                        </span>
                      </td>
                      <td>
                        [Email is protected for the demo]
                        <br />
                        [Mobile number is protected for the demo]
                      </td>
                      <td>
                        <span className="fw-bold" title="Turkey">
                          TR
                        </span>
                      </td>
                      <td>
                        2023-07-19 08:44 PM <br />6 days ago
                      </td>
                      <td>
                        <span className="fw-bold">₵0.00</span>
                      </td>
                      <td>
                        <a
                          href="../../admin/users/detail/2344"
                          className="btn btn-sm btn-outline--primary"
                        >
                          <i className="las la-desktop" />
                          Details{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="fw-bold">NAME LAST</span>
                        <br />
                        <span className="small">
                          <a href="../../admin/users/detail/2343">
                            <span>@</span>102686122094900546367
                          </a>
                        </span>
                      </td>
                      <td>
                        [Email is protected for the demo]
                        <br />
                        [Mobile number is protected for the demo]
                      </td>
                      <td>
                        <span className="fw-bold" title="" />
                      </td>
                      <td>
                        2023-07-19 01:19 PM <br />6 days ago
                      </td>
                      <td>
                        <span className="fw-bold">₵0.00</span>
                      </td>
                      <td>
                        <a
                          href="../../admin/users/detail/2343"
                          className="btn btn-sm btn-outline--primary"
                        >
                          <i className="las la-desktop" />
                          Details{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="fw-bold">Test Test</span>
                        <br />
                        <span className="small">
                          <a href="../../admin/users/detail/2342">
                            <span>@</span>testare
                          </a>
                        </span>
                      </td>
                      <td>
                        [Email is protected for the demo]
                        <br />
                        [Mobile number is protected for the demo]
                      </td>
                      <td>
                        <span className="fw-bold" title="Romania">
                          RO
                        </span>
                      </td>
                      <td>
                        2023-07-18 08:56 PM <br />1 week ago
                      </td>
                      <td>
                        <span className="fw-bold">₵0.00</span>
                      </td>
                      <td>
                        <a
                          href="../../admin/users/detail/2342"
                          className="btn btn-sm btn-outline--primary"
                        >
                          <i className="las la-desktop" />
                          Details{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="fw-bold">Rakibul Hossain</span>
                        <br />
                        <span className="small">
                          <a href="../../admin/users/detail/2341">
                            <span>@</span>rakiblhasan125
                          </a>
                        </span>
                      </td>
                      <td>
                        [Email is protected for the demo]
                        <br />
                        [Mobile number is protected for the demo]
                      </td>
                      <td>
                        <span className="fw-bold" title="Bangladesh">
                          BD
                        </span>
                      </td>
                      <td>
                        2023-07-18 06:46 AM <br />1 week ago
                      </td>
                      <td>
                        <span className="fw-bold">₵0.00</span>
                      </td>
                      <td>
                        <a
                          href="../../admin/users/detail/2341"
                          className="btn btn-sm btn-outline--primary"
                        >
                          <i className="las la-desktop" />
                          Details{" "}
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
                    <a className="page-link" href="../../admin/users?page=2">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="../../admin/users?page=3">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="../../admin/users?page=4">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="../../admin/users?page=5">
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="../../admin/users?page=6">
                      6
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="../../admin/users?page=7">
                      7
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="../../admin/users?page=8">
                      8
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="../../admin/users?page=9">
                      9
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="../../admin/users?page=10">
                      10
                    </a>
                  </li>
                  <li className="page-item disabled" aria-disabled="true">
                    <span className="page-link">...</span>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="../../admin/users?page=68">
                      68
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="../../admin/users?page=69">
                      69
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="../../admin/users?page=2"
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


export default UsersUsers;
