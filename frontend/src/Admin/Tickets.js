import React, { useEffect } from "react";
import './Admin.css'
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";
import { withGlobalState } from "../withGlobalState";


const Tickets = () => {

  useEffect(() => {
    document.title = "Support Tickets | BarterFunds"
  }, [])


  return (
    <div classNameName="page-wrapper default-version">
      <AdminSidebar active={'tickets'}/>
      <AdminHeader />
      
      <div className="body-wrapper">
          <div className="bodywrapper__inner">

              <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
                  <h6 className="page-title">Support Tickets</h6>
                  <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
                  </div>
              </div>

              <div className="row">
                  <div className="col-lg-12">
                      <div className="card b-radius--10 ">
                          <div className="card-body p-0">
                              <div className="table-responsive--sm table-responsive">
                                  <table className="table table--light">
                                      <thead>
                                          <tr>
                                              <th>Subject</th>
                                              <th>Submitted By</th>
                                              <th>Status</th>
                                              <th>Priority</th>
                                              <th>Last Reply</th>
                                              <th>Action</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr>
                                              <td>
                                                  <a href="../../admin/ticket/view/pending.html" className="fw-bold">
                                                      [Ticket#20587629]
                                                      Delay payment
                                                  </a>
                                              </td>

                                              <td>
                                                  <p className="fw-bold">
                                                      Michael Adzato</p>
                                              </td>
                                              <td>
                                                Pending
                                              </td>
                                              <td>
                                                  <span className="badge  badge--warning">Medium</span>
                                              </td>

                                              <td>
                                                  3 days ago
                                              </td>

                                              <td>
                                                  <a href={`${process.env.PUBLIC_URL}/admin/tickets/1234567890`}
                                                      className="btn btn-sm btn-outline--primary ms-1">
                                                      <i className="las la-desktop"></i>
                                                      Details </a>
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
      </div>

    </div>

  );
}



export default withGlobalState(Tickets);
