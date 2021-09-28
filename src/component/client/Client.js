import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";

import { API_URl } from "../api";
import axios from "axios";

function Client(props) {
  return (
    <div>
      <Sidebar />
      <Header />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* <!-- start page title --> */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">Clients</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/">TellyTell</Link>
                      </li>
                      <li className="breadcrumb-item active">Clients</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end page title --> */}

            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row ml-0 mr-0  mb-10">
                      <div className="col-sm-12 col-md-6">
                        <div className="dataTables_length">
                          <label className="w-100">
                            Show{" "}
                            <select
                              name=""
                              className="select-w custom-select custom-select-sm form-control form-control-sm"
                            >
                              <option value="10">10</option>
                              <option value="25">25</option>
                              <option value="50">50</option>
                              <option value="100">100</option>
                            </select>{" "}
                            entries
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <div className="dropdown d-block">
                          <Link to="/client/add">
                            <button
                              type="button"
                              className="btn btn-primary add-btn waves-effect waves-light float-right"
                            >
                              <i className="fa fa-plus" aria-hidden="true"></i>{" "}
                              Add New Client
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="table-responsive table-shoot">
                      <table className="table table-centered table-nowrap mb-0">
                        <thead className="thead-light">
                          <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Joined On</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Nadeem</td>
                            <td>Khan</td>
                            <td>nadeemkp181@gmail.com</td>
                            <td>07 Oct, 2019</td>
                            <td>
                              <span className="badge badge-pill badge-soft-success font-size-12">
                                Live
                              </span>
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-success btn-sm  waves-effect waves-light btn-table"
                              >
                                Suspend
                              </button>
                              <Link to="/client/view">
                                <button
                                  type="button"
                                  className="btn btn-info btn-sm  waves-effect waves-light btn-table ml-2"
                                >
                                  View
                                </button>
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="row mt-20">
                      <div className="col-sm-12 col-md-6 mb-20">
                        <div
                          className="dataTables_info"
                          id="datatable_info"
                          role="status"
                          aria-live="polite"
                        >
                          Showing 1 to 10 of 57 entries
                        </div>
                      </div>

                      <div className="col-sm-12 col-md-6">
                        <div className="dataTables_paginate paging_simple_numbers float-right">
                          <ul className="pagination">
                            <li className="paginate_button page-item previous disabled">
                              <a
                                href="#/"
                                aria-controls="datatable"
                                data-dt-idx="0"
                                tabIndex="0"
                                className="page-link"
                              >
                                Previous
                              </a>
                            </li>

                            <li className="paginate_button page-item active">
                              <a
                                href="#/"
                                aria-controls="datatable"
                                data-dt-idx="1"
                                tabIndex="0"
                                className="page-link"
                              >
                                1
                              </a>
                            </li>

                            <li className="paginate_button page-item ">
                              <a
                                href="#/"
                                aria-controls="datatable"
                                data-dt-idx="2"
                                tabIndex="0"
                                className="page-link"
                              >
                                2
                              </a>
                            </li>

                            <li className="paginate_button page-item ">
                              <a
                                href="#/"
                                aria-controls="datatable"
                                data-dt-idx="3"
                                tabIndex="0"
                                className="page-link"
                              >
                                3
                              </a>
                            </li>

                            <li className="paginate_button page-item next">
                              <a href="#/" tabIndex="0" className="page-link">
                                Next
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* <!-- end table-responsive --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- container-fluid --> */}
        </div>
        {/* <!-- End Page-content --> */}

        <Footer />
      </div>
    </div>
  );
}

export default Client;