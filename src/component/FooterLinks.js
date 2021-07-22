import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

function FooterLinks(props) {
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
                    <h4 className="mb-0">Links
</h4>

                    <div className="page-title-right">
                        <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item"><Link to="/">TellyTell</Link></li>                                           
                            <li className="breadcrumb-item active">Links</li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>
        {/* <!-- end page title --> */}


{/* <!-- Row Starts -->              */}
<div className="row">
<div className="col-lg-12">
<div className="card">
<div className="card-body">
<div className="row">
    <div className="col-md-12 col-lg-9 col-xl-7">
        <form>
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group">
                        <label for="basicpill-phoneno-input" className="label-100">
                        Link 1 Name
                        </label>
                        <input type="text" className="form-control input-field"/>
                    </div>
                    <div className="form-group">
                        <label for="basicpill-phoneno-input" className="label-100">
                        URL
                        </label>
                        <input type="text" className="form-control input-field"/>
                    </div>			
                </div>
            </div>
        </form>
    </div>
</div>
</div>
</div>
</div>
</div>
{/* <!-- Row Ends --> */}
{/* <!-- Row Starts -->              */}
<div className="row">
<div className="col-lg-12">
<div className="card">
<div className="card-body">
<div className="row">
    <div className="col-md-12 col-lg-9 col-xl-7">
        <form>
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group">
                        <label for="basicpill-phoneno-input" className="label-100">
                        Link 2 Name
                        </label>
                        <input type="text" className="form-control input-field"/>
                    </div>
                    <div className="form-group">
                        <label for="basicpill-phoneno-input" className="label-100">
                        URL
                        </label>
                        <input type="text" className="form-control input-field"/>
                    </div>			
                </div>
            </div>
        </form>
    </div>
</div>
</div>
</div>
</div>
</div>
{/* <!-- Row Ends --> */}
{/* <!-- Row Starts -->              */}
<div className="row">
<div className="col-lg-12">
<div className="card">
<div className="card-body">
<div className="row">
    <div className="col-md-12 col-lg-9 col-xl-7">
        <form>
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group">
                        <label for="basicpill-phoneno-input" className="label-100">
                        Link 3 Name
                        </label>
                        <input type="text" className="form-control input-field"/>
                    </div>
                    <div className="form-group">
                        <label for="basicpill-phoneno-input" className="label-100">
                        URL
                        </label>
                        <input type="text" className="form-control input-field"/>
                    </div>			
                </div>
            </div>
        </form>
    </div>
</div>
</div>
</div>
</div>
</div>
{/* <!-- Row Ends --> */}
{/* <!-- Row Starts -->              */}
<div className="row">
<div className="col-lg-12">
<div className="card">
<div className="card-body">
<div className="row">
    <div className="col-md-12 col-lg-9 col-xl-7">
        <form>
            <div className="row">
                <div className="col-lg-12">
                    <div className="form-group">
                        <label for="basicpill-phoneno-input" className="label-100">
                        Link 4 Name
                        </label>
                        <input type="text" className="form-control input-field"/>
                    </div>
                    <div className="form-group">
                        <label for="basicpill-phoneno-input" className="label-100">
                        URL
                        </label>
                        <input type="text" className="form-control input-field"/>
                    </div>			
                </div>
            </div>
        </form>
    </div>
</div>
</div>
</div>
</div>
</div>
{/* <!-- Row Ends --> */}
{/* <!-- Row Starts -->              */}
<div className="row">
<div className="col-lg-12">
<div className="card">
<div className="card-body">
<div className="row">
    <div className="col-md-12 col-lg-9 col-xl-7">
        <form>
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
</div>
</div>
</div>
</div>
{/* <!-- Row Ends --> */}


    </div>
     {/* <!-- container-fluid --> */}
</div>
{/* <!-- End Page-content --> */}


<Footer/>
</div>
            
        </div>
    );
}

export default FooterLinks;