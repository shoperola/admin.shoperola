import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAutheticated, signout } from "../component/auth/authHelper";

function Header(props) {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
  });
  const { token } = isAutheticated();
  useEffect(() => {
    axios
      .get(`https://api.Shoperola.com/admin`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const userdata = response.data.data;
        setData({
          ...data,
          firstName: userdata.firstName,
          lastName: userdata.lastName,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex">
          {/* <!-- LOGO --> */}

          <div className="navbar-brand-box">
            <a href="index.html" className="logo logo-light">
              <span className="logo-sm">
                <img src="/assets/images/logo-sm.png" alt="" height="40" />
              </span>
              <span className="logo-lg">
                <img src="/assets/images/logo-light.png" alt="" />
              </span>
            </a>
          </div>

          <button
            type="button"
            className="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn"
          >
            <i className="fa fa-fw fa-bars"></i>
          </button>
        </div>

        <div className="d-flex">
          {/* <!--Start Settings Dropdown --> */}
          <div className="dropdown d-inline-block">
            <button
              type="button"
              className="profile-drop btn header-item waves-effect"
              id="page-header-user-dropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {/* profile logo */}
              {/* <img className="rounded-circle header-profile-user" src=""
                                alt="Header Avatar" /> */}
              <span className="d-none d-xl-inline-block ml-1 font-weight-medium font-size-15">
                {data.firstName && data.lastName
                  ? `${data.firstName + " " + data.lastName}`
                  : "......"}
              </span>
              <i className="uil-angle-down d-none d-xl-inline-block font-size-15"></i>
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              {/* <!-- item--> */}
              <Link className="dropdown-item" to="/resetPassword">
                <span className="align-middle">Change Password</span>
              </Link>
              <span onClick={signout}>
                <Link className="dropdown-item" to="/">
                  <span className="align-middle">Sign out</span>
                </Link>
              </span>
            </div>
          </div>
          {/* <!--End Settings Dropdown --> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
