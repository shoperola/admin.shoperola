import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URl } from "../api";
import { isAutheticated } from "../auth/authHelper";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";

function ClientAdd(props) {
  const { token } = isAutheticated();
  const [data, setData] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       let res = await axios.get(`${API_URl}/admin/view_social`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       setData(res.data?.data);
  //       setState({
  //         facebook: res.data.data[0]?.facebook,
  //         twitter: res.data.data[0]?.twitter,
  //         instagram: res.data.data[0]?.instagram,
  //         linkedin: res.data.data[0]?.linkedin,
  //       });
  //     };
  //     fetchData();
  //   }, []);

  //   const [State, setState] = useState({
  //     facebook: "",
  //     twitter: "",
  //     instagram: "",
  //     linkedin: "",
  //   });
  //   const handleChange = (e) => {
  //     setState({
  //       ...State,
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  //   const handleSubmit = async (e) => {
  //     if (data[0]?._id) {
  //       let resData = await axios.patch(
  //         `${API_URl}/admin/update_social/${data[0]?._id}`,
  //         {
  //           facebook: State.facebook,
  //           twitter: State.twitter,
  //           instagram: State.instagram,
  //           linkedin: State.linkedin,
  //         },
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );
  //       if (resData) {
  //         window.location.reload();
  //       }
  //     } else {
  //       let res = await axios.post(
  //         `${API_URl}/admin/add_social`,
  //         {
  //           facebook: State.facebook,
  //           twitter: State.twitter,
  //           instagram: State.instagram,
  //           linkedin: State.linkedin,
  //         },
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );
  //       if (res) {
  //         window.location.reload();
  //       }
  //     }
  //   };

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
                  <h4 className="mb-0">Add Client</h4>

                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item">
                        <Link to="/">TellyTell</Link>
                      </li>
                      <li className="breadcrumb-item active">Add Client</li>
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
                    <div className="row">
                      <div className="col-md-12 col-lg-9 col-xl-7">
                        <h1 className="text-left head-small">Add Client</h1>
                        <form>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label
                                  for="basicpill-phoneno-input"
                                  className="label-100"
                                >
                                  First Name
                                </label>
                                <input
                                  //   value={State.facebook}
                                  name="first_name"
                                  //   onChange={handleChange}
                                  type="text"
                                  className="form-control input-field"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label
                                  for="basicpill-phoneno-input"
                                  className="label-100"
                                >
                                  Last Name
                                </label>
                                <input
                                  //   value={State.twitter}
                                  name="last_name"
                                  //   onChange={handleChange}
                                  type="text"
                                  className="form-control input-field"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label
                                  for="basicpill-phoneno-input"
                                  className="label-100"
                                >
                                  Email
                                </label>
                                <input
                                  //   value={State.instagram}
                                  name="email"
                                  //   onChange={handleChange}
                                  type="text"
                                  className="form-control input-field"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label
                                  for="basicpill-phoneno-input"
                                  className="label-100"
                                >
                                  Password
                                </label>
                                <input
                                  //   value={State.linkedin}
                                  name="password"
                                  //   onChange={handleChange}
                                  type="text"
                                  className="form-control input-field"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label
                                  for="basicpill-phoneno-input"
                                  className="label-100"
                                >
                                  Store Name
                                </label>
                                <input
                                  //   value={State.linkedin}
                                  name="store_name"
                                  //   onChange={handleChange}
                                  type="text"
                                  className="form-control input-field"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label
                                  for="basicpill-phoneno-input"
                                  className="label-100"
                                >
                                  Which Industry will the client be operating
                                  in?
                                </label>
                                <input
                                  //   value={State.linkedin}
                                  name="industry"
                                  //   onChange={handleChange}
                                  type="text"
                                  className="form-control input-field"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label
                                  for="basicpill-phoneno-input"
                                  className="label-100"
                                >
                                  Company Name
                                </label>
                                <input
                                  //   value={State.linkedin}
                                  name="company_name"
                                  //   onChange={handleChange}
                                  type="text"
                                  className="form-control input-field"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label
                                  for="basicpill-phoneno-input"
                                  className="label-100"
                                >
                                  Country
                                </label>
                                <input
                                  //   value={State.linkedin}
                                  name="country"
                                  //   onChange={handleChange}
                                  type="text"
                                  className="form-control input-field"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label
                                  for="basicpill-phoneno-input"
                                  className="label-100"
                                >
                                  State
                                </label>
                                <input
                                  //   value={State.linkedin}
                                  name="state"
                                  //   onChange={handleChange}
                                  type="text"
                                  className="form-control input-field"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label
                                  for="basicpill-phoneno-input"
                                  className="label-100"
                                >
                                  City
                                </label>
                                <input
                                  //   value={State.linkedin}
                                  name="city"
                                  //   onChange={handleChange}
                                  type="text"
                                  className="form-control input-field"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label
                                  for="basicpill-phoneno-input"
                                  className="label-100"
                                >
                                  Address
                                </label>
                                <input
                                  //   value={State.linkedin}
                                  name="address"
                                  //   onChange={handleChange}
                                  type="text"
                                  className="form-control input-field"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label
                                  for="basicpill-phoneno-input"
                                  className="label-100"
                                >
                                  Pincode
                                </label>
                                <input
                                  //   value={State.linkedin}
                                  name="pincode"
                                  //   onChange={handleChange}
                                  type="text"
                                  className="form-control input-field"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label
                                  for="basicpill-phoneno-input"
                                  className="label-100"
                                >
                                  Contact Number
                                </label>
                                <input
                                  //   value={State.linkedin}
                                  name="cont_number"
                                  //   onChange={handleChange}
                                  type="text"
                                  className="form-control input-field"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group text-left">
                                <button
                                  //   onClick={handleSubmit}
                                  type="button"
                                  className="btn btn-success btn-login waves-effect waves-light mr-3"
                                >
                                  Save
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-success btn-cancel waves-effect waves-light mr-3"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>

                    {/* <!-- end table-responsive --> */}

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

export default ClientAdd;
