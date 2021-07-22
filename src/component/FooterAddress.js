import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

function FooterAddress(props) {
    return (
        <div>
            <Sidebar/>
            <Header/>
            <div className="main-content">

<div className="page-content">
    <div className="container-fluid">

        {/* <!-- start page title --> */}
        <div className="row">
            <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                    <h4 className="mb-0">Address
</h4>

                    <div className="page-title-right">
                        <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item"><Link to="/">TellyTell</Link></li>                                           
                            <li className="breadcrumb-item active">Address</li>
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
<h1 className="text-left head-small">Address</h1>
<form>

<div className="row">
<div className="col-lg-12">
<div className="form-group">
<label for="basicpill-phoneno-input" className="label-100">
Company Name
</label>
<input type="text" className="form-control input-field"/>
</div>
</div>
</div>
<div className="row">
<div className="col-lg-12">
<div className="form-group">
<label for="basicpill-phoneno-input" className="label-100">
Address
</label>
<input type="text" className="form-control input-field"/>
</div>
</div>
</div>
<div className="row">
<div className="col-lg-12">
<div className="form-group">
<label for="basicpill-phoneno-input" className="label-100">
City
</label>
<input type="text" className="form-control input-field"/>
</div>
</div>
</div>
<div className="row">
<div className="col-lg-12">
<div className="form-group">
<label for="basicpill-phoneno-input" className="label-100">
State
</label>
<input type="text" className="form-control input-field"/>
</div>
</div>
</div>
<div className="row">
<div className="col-lg-12">
<div className="form-group">
<label for="basicpill-phoneno-input" className="label-100">
Country
</label>
<input type="text" className="form-control input-field"/>
</div>
</div>
</div>
<div className="row">
<div className="col-lg-12">
<div className="form-group">
<label for="basicpill-phoneno-input" className="label-100">
Pincode
</label>
<input type="text" className="form-control input-field"/>
</div>
</div>
</div>	
<div className="row">
<div className="col-lg-12">
<div className="form-group">
<label for="basicpill-phoneno-input" className="label-100">
Website
</label>
<input type="text" className="form-control input-field"/>
</div>
</div>
</div>	
<div className="row">
<div className="col-lg-12">
<div className="form-group">
<label for="basicpill-phoneno-input" className="label-100">
Contact Number
</label>
<input type="text" className="form-control input-field"/>
</div>
</div>
</div>
<div className="row">
<div className="col-lg-12">
<div className="form-group">
<label for="basicpill-phoneno-input" className="label-100">
Email
</label>
<input type="text" className="form-control input-field"/>
</div>
</div>
</div>	
<div className="row">
<div className="col-lg-12">
<div className="form-group text-left">
<a href="footer-social-media.html">
<button type="button" className="btn btn-success btn-login waves-effect waves-light mr-3">Save</button>
</a>
<a href="#">
<button type="button" className="btn btn-success btn-cancel waves-effect waves-light mr-3">Cancel</button>
</a>
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


<Footer/>
</div>
        </div>
    );
}

export default FooterAddress;