import React, { useEffect, useState } from "react";
import "./Admin.css";
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";
import { withGlobalState } from "../withGlobalState";

import { users } from "./components/data";
import { Button, Table } from 'antd';

const Users = () => {

  useEffect(() => {
    document.title = 'Users | BarterFunds';
  }, [])

  const currentYear = new Date().getFullYear();

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredData = users.filter((user) =>
    user.user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Calculate the index range of items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  // Get the data for the current page
  const currentPageData = filteredData.slice(startIndex, endIndex);

  // Pagination handlers
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="page-wrapper default-version">
      <AdminSidebar active={"users"} />
      <AdminHeader />

      <div className="body-wrapper">
        <div className="bodywrapper__inner">
          <div className="d-flex mb-5 flex-wrap gap-3 justify-content-between align-items-center">
            <h6 className="page-title">All Users</h6>
            

            <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins">
            <div className="input-group w-auto flex-fill">
                  <input
                    type="search"
                    name="search"
                    className="form-control bg--white"
                    placeholder="Username / Email"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                  <button className="btn btn--primary" type="submit">
                    <i className="la la-search" />
                  </button>
                </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="card b-radius--10 ">
                <div className="card-body p-0">
                  <div className="table-responsive--md  table-responsive">

                    <table className="table table--light style--two table-responsive" id="users">
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
                        {currentPageData.length === 0 ? (
                          <tr>
                            <td colSpan="3">No data</td>{" "}
                            
                          </tr>
                        ) : (
                          currentPageData.map((user) => (
                            <tr key={user.id}>
                              <td>
                                <span className="fw-bold">
                                  {user.user.name}
                                </span>
                                <br />
                                <span className="small">
                                  <a href="users/detail/2365">
                                    <span>@</span>
                                    {user.user.username}
                                  </a>
                                </span>
                              </td>
                              <td>
                                {user.email}
                                <br />
                                {user.phone}
                              </td>
                              <td>
                                <span className="fw-bold" title="Somalia">
                                  {user.country}
                                </span>
                              </td>
                              <td>
                                {user.joinedAt} <br />
                                28 minutes ago
                              </td>
                              <td>
                                <span className="fw-bold">{user.balance}</span>
                              </td>
                              <td>
                                <a
                                  href={`${process.env.PUBLIC_URL}/admin/users/${user.id}`}
                                  className="btn btn-sm btn-outline--primary"
                                >
                                  <i className="las la-desktop" />
                                  Details{" "}
                                </a>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                { currentPageData.length === 0 ? (
                  <p></p>
                ) : (

                  <div className="card-footer py-4">
                  <nav>
                    <ul className="pagination">
                      <li
                        className="page-item"
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        <button
                          className="page-link"
                          disabled={currentPage === 1}
                        >
                          «
                        </button>
                      </li>
                      {[...Array(totalPages)].map((_, index) => (
                        <li
                          key={index}
                          className={`page-item ${
                            index + 1 === currentPage ? "active" : ""
                          }`}
                        >
                          <button
                            className="page-link"
                            onClick={() => goToPage(index + 1)}
                          >
                            {index + 1}
                          </button>
                        </li>
                      ))}
                      <li
                        className="page-item"
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                      >
                        <button
                          className="page-link"
                          disabled={currentPage === totalPages}
                        >
                           »
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
                )} 
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// class Users extends React.Component {
//   constructor(props) {
//     super(props);

//     const currentYear = new Date().getFullYear();
//     const data = [
//       { id: 1, name: 'John Doe', email: 'john@example.com', contact: "1234567890" },
//       { id: 2, name: 'Jane Smith', email: 'jane@example.com', contact: "1234567890" },
//       { id: 3, name: 'Gideon Impraom', email: 'gideon@example.com', contact: "1234567890" },
//       { id: 4, name: 'Samuel Diggs', email: 'sam@example.com', contact: "1234567890" },
//       { id: 5, name: 'Edmonds', email: 'info@example.com', contact: "1234567890" },
//       // Add more data objects as needed
//     ];

//     const headings = ['Name', 'Email', 'Contact']

//     this.state = {
//     currentYear: currentYear,
//     data: data,
//     headings: headings
//     };

//   }

//   render() {

//   }
// }

export default withGlobalState(Users);
