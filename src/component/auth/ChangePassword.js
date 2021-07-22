import React from 'react';
import { Link } from 'react-router-dom';

function ChangePassword(props) {
    return (
        <div>
              <header id="page-topbar">
                <div className="navbar-header">
                    <div className="d-flex">
                        {/* <!-- LOGO --> */}
						
                    	
                        <div className="navbar-brand-box">
						
                            <a href="index.html" className="logo logo-dark">
                                <span className="logo-sm">
                                    <img src="assets/images/logo-sm.png" alt="" height="50"/>
                                </span>
                                <span className="logo-lg">
                                    <img src="assets/images/logo-dark.png" alt="" height="20"/>
                                </span>
                            </a>

                            <a href="index.html" className="logo logo-light">
                                <span className="logo-sm">
                                    <img src="assets/images/logo-sm.png" alt="" height="40"/>
                                </span>
                                <span className="logo-lg">
                                    <img src="assets/images/logo-light.png" alt="" height="20"/>
                                </span>
                            </a>
                        </div>

                       

					   <button type="button" className="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn">
                            <i className="fa fa-fw fa-bars"></i>
                        </button>

                        {/* <!--Start App Search--> */}
                        <form className="app-search d-none d-lg-block">
                            <div className="position-relative">
                                <input type="text" className="form-control" placeholder="Search..."/>
                                <span>
								<i className="fa fa-search" aria-hidden="true"></i>
								</span>
                            </div>
                        </form>
						
						 {/* <!--End App Search--> */}
						
                    </div>

                    <div className="d-flex">

 {/* <!--Start Mobile  Search--> */}

                        <div className="dropdown d-inline-block d-lg-none ml-2">
                            <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="fa fa-search" aria-hidden="true"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                                aria-labelledby="page-header-search-dropdown">
                    
                                <form className="p-3">
                                    <div className="form-group m-0">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username"/>
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>


 {/* <!--End Mobile  Search--> */}
                  
{/* <!--Start Notification Dropdown -->                 */}
                    

                        <div className="dropdown d-inline-block">
                            <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                               <i className="fa fa-bell-o" aria-hidden="true"></i>
                                <span className="badge badge-danger badge-pill">3</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                                aria-labelledby="page-header-notifications-dropdown">
                                <div className="p-3">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <h5 className="m-0 font-size-16"> Notifications </h5>
                                        </div>
                                   
                                    </div>
                                </div>
                                <div data-simplebar style={{maxHeight: "230px"}}>
                                    <a href="#" className="text-reset notification-item">
                                        <div className="media">
                                            <div className="avatar-xs mr-3">
                                                <span className="avatar-title bg-primary rounded-circle font-size-16">
                                                    <i className="uil-shopping-basket"></i>
                                                </span>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="mt-0 mb-1">Your order is placed</h6>
                                                <div className="font-size-12 text-muted">
                                                    <p className="mb-1">If several languages coalesce the grammar</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 3 min ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="text-reset notification-item">
                                        <div className="media">
                                            <img src="assets/images/users/avatar-3.jpg"
                                                className="mr-3 rounded-circle avatar-xs" alt="user-pic"/>
                                            <div className="media-body">
                                                <h6 className="mt-0 mb-1">James Lemire</h6>
                                                <div className="font-size-12 text-muted">
                                                    <p className="mb-1">It will seem like simplified English.</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 1 hours ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="text-reset notification-item">
                                        <div className="media">
                                            <div className="avatar-xs mr-3">
                                                <span className="avatar-title bg-success rounded-circle font-size-16">
                                                    <i className="uil-truck"></i>
                                                </span>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="mt-0 mb-1">Your item is shipped</h6>
                                                <div className="font-size-12 text-muted">
                                                    <p className="mb-1">If several languages coalesce the grammar</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 3 min ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="#" className="text-reset notification-item">
                                        <div className="media">
                                            <img src="assets/images/users/avatar-4.jpg"
                                                className="mr-3 rounded-circle avatar-xs" alt="user-pic"/>
                                            <div className="media-body">
                                                <h6 className="mt-0 mb-1">Salena Layfield</h6>
                                                <div className="font-size-12 text-muted">
                                                    <p className="mb-1">As a skeptical Cambridge friend of mine occidental.</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 1 hours ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
								
                       
								
								
                            </div>
                        </div>


{/* <!--End Notification Dropdown --> */}


{/* <!--Start Settings Dropdown --> */}

<div className="dropdown d-inline-block">
<button type="button" className="btn header-item waves-effect profile-drop" id="page-header-user-dropdown"
data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
<img className="rounded-circle header-profile-user" src="assets/images/users/avatar-4.jpg"
alt="Header Avatar"/>
<span className="d-none d-xl-inline-block ml-1 font-weight-medium font-size-15">Krishna</span>
<i className="uil-angle-down d-none d-xl-inline-block font-size-15"></i>
</button>

<div className="dropdown-menu dropdown-menu-right">
{/* <!-- item--> */}
<a className="dropdown-item" href="company-profile.html"><span className="align-middle">Company  Profile</span></a>

<a className="dropdown-item" href="change-password.html"><span className="align-middle">Change Password</span></a>

<a className="dropdown-item" href="login.html"><span className="align-middle">Sign out</span></a>
</div>



</div>

{/* <!--End Settings Dropdown --> */}


            
                    </div>
                </div>
            </header>
			
    {/* <!-- ========== Left Sidebar Start ========== --> */}
            <div className="vertical-menu">

                {/* <!-- LOGO --> */}
                <div className="navbar-brand-box">
                    <a href="index.html" className="logo logo-dark">
                        <span className="logo-sm">
                            <img src="assets/images/logo-sm.png" alt="" height="40"/>
                        </span>
                        <span className="logo-lg">
                            <img src="assets/images/logo-dark.png" alt="" height="20"/>
                        </span>
                    </a>

                    <a href="index.html" className="logo logo-light">
                        <span className="logo-sm">
                            <img src="assets/images/logo-sm.png" alt="" height="40"/>
                        </span>
                        <span className="logo-lg">
                            <img src="assets/images/logo-light.png" alt="" height="20"/>
                        </span>
                    </a>
                </div>

                <button type="button" className="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn">
                    <i className="fa fa-fw fa-bars"></i>
                </button>

                <div data-simplebar className="sidebar-menu-scroll">

                    {/* <!--- Sidemenu --> */}
                    <div id="sidebar-menu">
                        {/* <!-- Left Menu Start --> */}
                        <ul className="metismenu list-unstyled" id="side-menu">
                            

<li className="active">
<Link to="/">
<img src="assets/images/icons/dashboard-icon.png"/>
<span>Dashboard</span></Link>
</li>

<li>
<a href="viewers.html">
<img src="assets/images/icons/viewer-icon.png"/>
<span>Viewers</span></a>
</li>

<li>
<a>
<img src="assets/images/icons/cms-icon.png"/>
<span>Content Management</span>
</a>
<ul className="sub-menu display-menu">
<li><a href="videos.html">Videos</a></li>
<li><a href="banners.html">Banners</a></li>
<li><a href="categories.html">Categories</a></li>
<li><a href="crew.html">Crew</a></li>
<li><a href="tv-shows.html">TV Shows</a></li>
</ul>
</li>

<li>
<a>
<img src="assets/images/icons/revenue-icon.png"/>
<span>Revenue Management</span>
</a>
<ul className="sub-menu display-menu">
<li><Link to="/orders">Orders </Link></li>
<li><Link to="/payment/settings">Payment Setting</Link></li>
</ul>
</li>

<li>
<a>
<img src="assets/images/icons/configuration-icon.png"/>
<span>Configuration</span>
</a>
<ul className="sub-menu display-menu">
<li><a href="Genres.html">Genres </a></li>
<li><a href="languages.html">Languages </a></li>
<li><a href="age-restrictions.html">Age Restrictions</a></li>
<li><a href="parental-guidance.html">Parental Guidance</a></li>
</ul>
</li>


<li>
<a href="logs.html">
<img src="assets/images/icons/log-icon.png"/>
<span>Logs</span></a>
</li>


<li>
<a href="email-template.html">
<img src="assets/images/icons/email-template-icon.png"/>
<span>Email Template</span></a>
</li>

<li>
<a href="notifications.html">
<img src="assets/images/icons/notification-icon.png"/>
<span>Notifications</span></a>
</li>


<li>
<a href="site-preference.html">
<img src="assets/images/icons/site-preference.png"/>
<span>Site Preference</span></a>
</li>


<li>
<a href="cms.html">
<img src="assets/images/icons/content-icon.png"/>
<span>Content Management</span></a>
</li>


<li>
<a href="role-management.html">
<img src="assets/images/icons/roles-management-icon.png"/>
<span>Roles Management</span></a>
</li>


{/* <!-- 
<li>
<a href="help-center.html">
<img src="assets/images/icons/hepl-center-icon.png"/>
<span>Help Center</span></a>
</li>
 --> */}





                        </ul>
                    </div>
                   


				   {/* <!-- Sidebar --> */}
                </div>
            </div>
            {/* <!-- Left Sidebar End --> */}

            
            
            

            {/* <!-- ============================================================== --> */}
            {/* <!-- Start right Content here --> */}
            {/* <!-- ============================================================== --> */}
            <div className="main-content">

                <div className="page-content">
                    <div className="container-fluid">

                        {/* <!-- start page title --> */}
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-flex align-items-center justify-content-between">
                                    <h4 className="mb-0">Change Password</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><Link to="/">Telly Tell</Link></li>
                                            <li className="breadcrumb-item active">Change Password</li>
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
<div className="col-lg-12">
<div className="card">
<div className="card-body">


<div className="row">

<div className="col-md-12 col-lg-6 col-xl-6">

<h1 className="text-left head-small">Update Password</h1>


<form>




<div className="row">
<div className="col-lg-12">
<div className="form-group">
<label for="basicpill-phoneno-input" className="label-100">
Old Password
</label>
<input type="text" className="form-control input-field"/>
</div>
</div>
</div>


<div className="row">
<div className="col-lg-12">
<div className="form-group">
<label for="basicpill-phoneno-input" className="label-100">
New Password
</label>
<input type="text" className="form-control input-field"/>
</div>
</div>
</div>




<div className="row">
<div className="col-lg-12">
<div className="form-group">
<label for="basicpill-phoneno-input" className="label-100">
Confirm Password
</label>
<input type="text" className="form-control input-field"/>
</div>
</div>
</div>






<div className="row">
<div className="col-lg-12">
<div className="form-group text-left">

<a href="index.html">
<button type="button" className="btn btn-success btn-login waves-effect waves-light mr-3">Save</button>
</a>


</div>
</div>
</div>


</form>


</div>



</div>

{/* <!-- end table-responsive --> */}
</div>
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


                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12">
                                <script>document.write(new Date().getFullYear())</script> © SHOTT.
                            </div>
                        
                        </div>
                    </div>
                </footer>
            </div>
            
        </div>
    );
}

export default ChangePassword;