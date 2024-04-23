import React, { useState, useEffect }  from "react";
import './Admin.css'
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";
import { withGlobalState } from "../withGlobalState";

const UserDetails = () => {

  useEffect(() => {
    document.title = "User Details | BarterFunds"
  }, [])

  return (
    <div className="page-wrapper default-version">
      <AdminSidebar active={'users'}/>
      <AdminHeader />
      <>
<div className="body-wrapper">
  <div className="bodywrapper__inner">
    <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
      <h6 className="page-title">User Details - Deon</h6>
      <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins"></div>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="row gy-4">
          <div className="col-xxl-3 col-sm-6">
            <div className="widget-two style--two box--shadow2 b-radius--5 bg--19">
              <div className="widget-two__icon b-radius--5 bg--primary">
                <i className="las la-money-bill-wave-alt" />
              </div>
              <div className="widget-two__content">
                <h3 className="text-white">₵0.00</h3>
                <p className="text-white">Balance</p>
              </div>
              <a href="#" className="widget-two__btn">
                View All
              </a>
            </div>
          </div>
          <div className="col-xxl-3 col-sm-6">
            <div className="widget-two style--two box--shadow2 b-radius--5 bg--1">
              <div className="widget-two__icon b-radius--5 bg--primary">
                <i className="fas fa-wallet" />
              </div>
              <div className="widget-two__content">
                <h3 className="text-white">₵0.00</h3>
                <p className="text-white">Withdrawn</p>
              </div>
              <a
                href="admin/withdraw/log?search=hearning"
                className="widget-two__btn"
              >
                View All
              </a>
            </div>
          </div>
          <div className="col-xxl-3 col-sm-6">
            <div className="widget-two style--two box--shadow2 b-radius--5 bg--primary">
              <div className="widget-two__icon b-radius--5 bg--primary">
                <i className="las la-sync" />
              </div>
              <div className="widget-two__content">
                <h3 className="text-white">0</h3>
                <p className="text-white">Exchanges</p>
              </div>
              <a
                href="admin/exchange/list?user_id=2365"
                className="widget-two__btn"
              >
                View All
              </a>
            </div>
          </div>
          <div className="col-xxl-3 col-sm-6">
            <div className="widget-two style--two box--shadow2 b-radius--5 bg--17">
              <div className="widget-two__icon b-radius--5 bg--primary">
                <i className="la la-ticket" />
              </div>
              <div className="widget-two__content">
                <h3 className="text-white">0</h3>
                <p className="text-white">Suport Tickets</p>
              </div>
              <a href="admin/ticket?user_id=2365" className="widget-two__btn">
                View All
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap gap-3 mt-4">
          <div className="flex-fill">
            <a
              href="admin/report/login/history?search=hearning"
              className="btn btn--primary btn--shadow w-100 btn-lg"
            >
              <i className="las la-list-alt" />
              Logins
            </a>
          </div>
          <div className="flex-fill">
            <a
              href="admin/users/notification-log/2365"
              className="btn btn--secondary btn--shadow w-100 btn-lg"
            >
              <i className="las la-bell" />
              Notifications
            </a>
          </div>
          <div className="flex-fill">
            <a
              href="admin/users/login/2365"
              target="_blank"
              className="btn btn--primary btn--gradi btn--shadow w-100 btn-lg"
            >
              <i className="las la-sign-in-alt" />
              Login as User{" "}
            </a>
          </div>
          <div className="flex-fill">
            <button
              type="button"
              className="btn btn--warning btn--gradi btn--shadow w-100 btn-lg userStatus"
              data-bs-toggle="modal"
              data-bs-target="#userStatusModal"
            >
              <i className="las la-ban" />
              Ban User
            </button>
          </div>
        </div>
        <div className="card mt-30">
          <div className="card-header">
            <h5 className="card-title mb-0">Information of Xasan Cabdi</h5>
          </div>
          <div className="card-body">
            <form
              action="admin/users/update/2365"
              method="POST"
              encType="multipart/form-data"
            >
              <input
                type="hidden"
                name="_token"
                defaultValue="3vuTExGZvcVqqtByZPqrvQL5B5yUgI769rrQKDaC"
              />
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group ">
                    <label>First Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="firstname"
                      required=""
                      defaultValue="Xasan"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-control-label">Last Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="lastname"
                      required=""
                      defaultValue="Cabdi"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Email </label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      defaultValue="[Email is protected for the demo]"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Mobile Number</label>
                    <div className="input-group ">
                      <span className="input-group-text mobile-code" />
                      <input
                        type="number"
                        name="mobile"
                        defaultValue=""
                        id="mobile"
                        className="form-control checkUser"
                        required=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12">
                  <div className="form-group ">
                    <label>Address</label>
                    <input
                      className="form-control"
                      type="text"
                      name="address"
                      defaultValue="1217 POINT MALLARD PKWY SE, Street Room"
                    />
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="form-group">
                    <label>City</label>
                    <input
                      className="form-control"
                      type="text"
                      name="city"
                      defaultValue="New York"
                    />
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="form-group ">
                    <label>State</label>
                    <input
                      className="form-control"
                      type="text"
                      name="state"
                      defaultValue="New York"
                    />
                  </div>
                </div>
               
                <div className="col-xl-3 col-md-6">
                  <div className="form-group ">
                    <label>Zip/Postal</label>
                    <input
                      className="form-control"
                      type="text"
                      name="zip"
                      defaultValue={10001}
                    />
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="form-group ">
                    <label>Country</label>
                    <input
                      className="form-control"
                      type="text"
                      name="state"
                      defaultValue="Ghana"
                    />
                  </div>
                </div>
               
              </div>
              <div className="row">
                <div className="form-group  col-xl-3 col-md-6 col-12">
                  <label>Email Verification</label>
                  <input
                    type="checkbox"
                    data-width="100%"
                    data-onstyle="-success"
                    data-offstyle="-danger"
                    data-bs-toggle="toggle"
                    data-on="Verified"
                    data-off="Unverified"
                    name="ev"
                    defaultChecked=""
                  />
                </div>
                <div className="form-group  col-xl-3 col-md-6 col-12">
                  <label>Mobile Verification</label>
                  <input
                    type="checkbox"
                    data-width="100%"
                    data-onstyle="-success"
                    data-offstyle="-danger"
                    data-bs-toggle="toggle"
                    data-on="Verified"
                    data-off="Unverified"
                    name="sv"
                    defaultChecked=""
                  />
                </div>
                <div className="form-group col-xl-3 col-md- col-12">
                  <label>2FA Verification </label>
                  <input
                    type="checkbox"
                    data-width="100%"
                    data-height={50}
                    data-onstyle="-success"
                    data-offstyle="-danger"
                    data-bs-toggle="toggle"
                    data-on="Enable"
                    data-off="Disable"
                    name="ts"
                  />
                </div>
                <div className="form-group col-xl-3 col-md- col-12">
                  <label>KYC </label>
                  <input
                    type="checkbox"
                    data-width="100%"
                    data-height={50}
                    data-onstyle="-success"
                    data-offstyle="-danger"
                    data-bs-toggle="toggle"
                    data-on="Verified"
                    data-off="Unverified"
                    name="kv"
                    defaultChecked=""
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12">
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn--primary w-100 h-45"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div
      id="userStatusModal"
      className="modal fade"
      tabIndex={-1}
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              <span>Ban User</span>
            </h5>
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="las la-times" />
            </button>
          </div>
          <form action="admin/users/status/2365" method="POST">
            <input
              type="hidden"
              name="_token"
              defaultValue="3vuTExGZvcVqqtByZPqrvQL5B5yUgI769rrQKDaC"
            />
            <div className="modal-body">
              <h6 className="mb-2">
                If you ban this user he/she won't able to access his/her
                dashboard.
              </h6>
              <div className="form-group">
                <label>Reason</label>
                <textarea
                  className="form-control"
                  name="reason"
                  rows={4}
                  required=""
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn--primary h-45 w-100">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</>


    </div>

  );

}


export default withGlobalState(UserDetails);
