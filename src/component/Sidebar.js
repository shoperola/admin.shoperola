import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Sidebar(props) {
  const [sideBar, setSideBar] = useState(false);

  return (
    <div className="vertical-menu" style={sideBar ? { width: 80 } : null}>
      {/* <!-- LOGO --> */}
      <div className="navbar-brand-box">
        <Link to="/" className="logo logo-dark">
          {!sideBar && (
            <span className="logo-lg">
              <img src="/assets/images/logo-light.png" alt="" height="20" />
            </span>
          )}
        </Link>
      </div>

      <button
        type="button"
        className="
        btn btn-sm
        px-3
        font-size-16
        header-item
        waves-effect
        vertical-menu-btn
      "
        onClick={() => setSideBar((prev) => !prev)}
      >
        {sideBar ? (
          <img src="/assets/images/logo-light.png" alt="" height="15" />
        ) : (
          <i className="fa fa-fw fa-bars"></i>
        )}
      </button>

      <div data-simplebar className="sidebar-menu-scroll">
        {/* <!--- Sidebar Begins --> */}
        <div id="sidebar-menu">
          {/* <!-- Left Menu Start --> */}
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="active">
              <Link to="/">
                <img
                  src="/assets/images/icons/dashboard-icon.png"
                  style={sideBar ? { width: 25 } : null}
                />
                {!sideBar && <span>Dashboard</span>}
              </Link>
            </li>
            <li>
              <Link to="/client">
                <img
                  src="/assets/images/icons/viewer-icon.png"
                  style={sideBar ? { width: 25 } : null}
                />
                {!sideBar && <span>Clients</span>}
              </Link>
            </li>
            {/* <li>
                        <a>
                        <img src="/assets/images/icons/revenue-icon.png"/>
                        <span>Revenue Management</span>
                        </a>
                        <ul className="sub-menu display-menu">
                        <li><Link to="/orders">Orders </Link></li>
                        <li><Link to="/payment/settings">Payment Setting</Link></li>
                        </ul>
                    </li> */}
            <li>
              <Link to="/newsletter">
                <img
                  src="/assets/images/icons/log-icon.png"
                  style={sideBar ? { width: 25 } : null}
                />
                {!sideBar && <span>Newsletter Subscribers</span>}
              </Link>
            </li>
            <li>
              <Link to="/contacts/request">
                <img
                  src="/assets/images/icons/log-icon.png"
                  style={sideBar ? { width: 25 } : null}
                />
                {!sideBar && <span>Contact Requests</span>}
              </Link>
            </li>
            <li>
              <Link to="/demo/request">
                <img
                  src="/assets/images/icons/log-icon.png"
                  style={sideBar ? { width: 25 } : null}
                />
                {!sideBar && <span>Demo Requests</span>}
              </Link>
            </li>
            <li>
              <Link to="/home/settings">
                <img
                  src="/assets/images/icons/log-icon.png "
                  style={sideBar ? { width: 25 } : null}
                />
                {!sideBar && <span>Home Page Settings</span>}
              </Link>
            </li>
            {!sideBar && (
              <li>
                <a>
                  <img src="/assets/images/icons/cms-icon.png" />
                  <span>Footer Settings</span>
                </a>

                <ul className="sub-menu display-menu">
                  <li>
                    <Link to="/social">Social Media</Link>
                  </li>
                  <li>
                    <Link to="/address">Address</Link>
                  </li>
                  <li>
                    <Link to="/logo">Logo</Link>
                  </li>
                  <li>
                    <Link to="/links">Links</Link>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
        {/* <!-- Sidebar Ends --> */}
      </div>
    </div>
  );
}

export default Sidebar;
