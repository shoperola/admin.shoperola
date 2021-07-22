import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

function ContactRequestView(props) {
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
                    <h4 className="mb-0">Contact Requests
</h4>

                    <div className="page-title-right">
                        <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item"><Link to="/">TellyTell</Link></li>
                            <li className="breadcrumb-item">Contact Requests
</li>
                            
                             <li className="breadcrumb-item">View Details</li>
                            
                                                                        
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

<div className="col-md-12 col-lg-6 col-xl-6">

<h1 className="text-left head-small">View Details</h1>


<form>




<div className="row mt-20">
<div className="col-md-4 font-b">Name</div>
<div className="col-md-8">Krishna Kola</div>
</div>
<div className="row mt-20">
<div className="col-md-4 font-b">Email</div>
<div className="col-md-8">Krishna.kola@gmail.com</div>
</div>
<div className="row mt-20">
<div className="col-md-4 font-b">Message</div>
<div className="col-md-8">Display the message here</div>
</div>
<div className="row mt-20">
<div className="col-md-4 font-b">Date and Time</div>
<div className="col-md-8">Jul 20 2021 10:10 a.m.</div>
</div>
<div className="row mt-20">
<div className="col-md-4 font-b">IP</div>
<div className="col-md-8">192.168.10.10</div>
</div>

<div className="row mt-20">
<div className="col-md-4 font-b">Status</div>
<div className="col-md-8">Read</div>
</div>

<div className="row mt-20">
<div className="col-lg-12">
<div className="form-group text-left">
<a href="contact-requests.html">
<button type="button" className="btn btn-success btn-login waves-effect waves-light mr-3">Back</button></a>
</div>
</div>
</div>


</form>
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
     <Footer/>
</div>
       </div>
    );
}

export default ContactRequestView;