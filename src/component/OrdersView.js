import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

function OrdersView(props) {
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
                    <h4 className="mb-0">Revenue Management - Orders
</h4>

                    <div className="page-title-right">
                        <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item"><Link to="/">TellyTell</Link></li>
                            <li className="breadcrumb-item">Revenue Management - Orders
</li>
                            
                             <li className="breadcrumb-item">View Order</li>
                            
                                                                        
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

<h1 className="text-left head-small">View Order </h1>


<form>




<div className="row mt-20">
<div className="col-md-4 font-b">
User Name	
</div>
<div className="col-md-8">
Krishna Kola
</div>
</div>

<div className="row mt-20">
<div className="col-md-4 font-b">
Email
</div>
<div className="col-md-8">
Krishna.kola@gmail.com
</div>
</div>

<div className="row mt-20">
<div className="col-md-4 font-b">
Contact No	
</div>
<div className="col-md-8">
9703371164
</div>
</div>


<div className="row mt-20">
<div className="col-md-4 font-b">
Subscription Plan	
</div>
<div className="col-md-8">
yearly
</div>
</div>

<div className="row mt-20">
<div className="col-md-4 font-b">
Subscription Amount	
</div>
<div className="col-md-8">
<i className="fa fa-inr" aria-hidden="true"></i> 999
</div>
</div>

<div className="row mt-20">
<div className="col-md-4 font-b">
Order On	
</div>
<div className="col-md-8">
07 Oct, 2019	
</div>
</div>

<div className="row mt-20">
<div className="col-lg-12">
<div className="form-group text-left">
<a href="orders.html">
<button type="button" className="btn btn-success btn-login waves-effect waves-light mr-3">Back</button>
</a>
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
</div>
        </div>
    );
}

export default OrdersView;