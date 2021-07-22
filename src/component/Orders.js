import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

function Orders(props) {
    return (
        <>
        <Sidebar/>
        <Header/>
        <div className="main-content">

        <div className="page-content">
            <div className="container-fluid">

                {/* <!-- start page title --> */}
                <div className="row">
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                            <h4 className="mb-0">Revenue Management - Orders</h4>

                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><Link to="/">TellyTell</Link></li>
                                    <li className="breadcrumb-item active">Revenue Management - Orders</li>
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
<div className="col-sm-12 col-md-12">
<div className="dataTables_length">
<label className="w-100">Show <select name="" className="select-w custom-select custom-select-sm form-control form-control-sm">
<option value="10">10</option>
<option value="25">25</option>
<option value="50">50</option>
<option value="100">100</option>
</select> entries</label></div></div>
</div>

<div className="table-responsive table-shoot">
<table className="table table-centered table-nowrap mb-0">
<thead className="thead-light">
<tr>
<th>User Name</th>
<th>Email</th>
<th>Contact No</th>
<th>Subscription Plan</th>
<th>Subscription Amount</th>
<th>Order On</th>
<th>Status</th>
<th>Action</th>
</tr>
</thead>
<tbody>


<tr>
<td>Nadeem Khan</td>
<td>nadeemkp181@gmail.com</td>
<td>9703371164</td>
<td>yearly</td>
<td><i className="fa fa-inr" aria-hidden="true"></i> 999</td>
<td>07 Oct, 2019</td>
<td><span className="badge badge-pill badge-soft-success font-size-12">Live</span></td>
<td><Link to="/orders/view">
<button type="button" className="btn btn-info btn-sm  waves-effect waves-light btn-table ml-2">
View</button></Link>
</td>
</tr>


<tr>
<td>Nadeem Khan</td>
<td>nadeemkp181@gmail.com</td>
<td>9703371164</td>
<td>yearly</td>
<td><i className="fa fa-inr" aria-hidden="true"></i> 999</td>
<td>07 Oct, 2019</td>
<td><span className="badge badge-pill badge-soft-success font-size-12">Live</span></td>
<td><Link to="/orders/view">
<button type="button" className="btn btn-info btn-sm  waves-effect waves-light btn-table ml-2">
View</button></Link>
</td>
</tr>



<tr>
<td>Nadeem Khan</td>
<td>nadeemkp181@gmail.com</td>
<td>9703371164</td>
<td>yearly</td>
<td><i className="fa fa-inr" aria-hidden="true"></i> 999</td>
<td>07 Oct, 2019</td>
<td><span className="badge badge-pill badge-soft-success font-size-12">Live</span></td>
<td><Link to="/orders/view">
<button type="button" className="btn btn-info btn-sm  waves-effect waves-light btn-table ml-2">
View</button></Link>
</td>
</tr>



<tr>
<td>Nadeem Khan</td>
<td>nadeemkp181@gmail.com</td>
<td>9703371164</td>
<td>yearly</td>
<td><i className="fa fa-inr" aria-hidden="true"></i> 999</td>
<td>07 Oct, 2019</td>
<td><span className="badge badge-pill badge-soft-success font-size-12">Live</span></td>
<td><Link to="/orders/view">
<button type="button" className="btn btn-info btn-sm  waves-effect waves-light btn-table ml-2">
View</button></Link>
</td>
</tr>



<tr>
<td>Nadeem Khan</td>
<td>nadeemkp181@gmail.com</td>
<td>9703371164</td>
<td>yearly</td>
<td><i className="fa fa-inr" aria-hidden="true"></i> 999</td>
<td>07 Oct, 2019</td>
<td><span className="badge badge-pill badge-soft-success font-size-12">Live</span></td>
<td><Link to="/orders/view">
<button type="button" className="btn btn-info btn-sm  waves-effect waves-light btn-table ml-2">
View</button></Link>
</td>
</tr>



<tr>
<td>Nadeem Khan</td>
<td>nadeemkp181@gmail.com</td>
<td>9703371164</td>
<td>yearly</td>
<td><i className="fa fa-inr" aria-hidden="true"></i> 999</td>
<td>07 Oct, 2019</td>
<td><span className="badge badge-pill badge-soft-success font-size-12">Live</span></td>
<td><Link to="/orders/view">
<button type="button" className="btn btn-info btn-sm  waves-effect waves-light btn-table ml-2">
View</button></Link>
</td>
</tr>



<tr>
<td>Nadeem Khan</td>
<td>nadeemkp181@gmail.com</td>
<td>9703371164</td>
<td>yearly</td>
<td><i className="fa fa-inr" aria-hidden="true"></i> 999</td>
<td>07 Oct, 2019</td>
<td><span className="badge badge-pill badge-soft-success font-size-12">Live</span></td>
<td><Link to="/orders/view">
<button type="button" className="btn btn-info btn-sm  waves-effect waves-light btn-table ml-2">
View</button></Link>
</td>
</tr>



<tr>
<td>Nadeem Khan</td>
<td>nadeemkp181@gmail.com</td>
<td>9703371164</td>
<td>yearly</td>
<td><i className="fa fa-inr" aria-hidden="true"></i> 999</td>
<td>07 Oct, 2019</td>
<td><span className="badge badge-pill badge-soft-success font-size-12">Live</span></td>
<td><Link to="/orders/view">
<button type="button" className="btn btn-info btn-sm  waves-effect waves-light btn-table ml-2">
View</button></Link>
</td>
</tr>



<tr>
<td>Nadeem Khan</td>
<td>nadeemkp181@gmail.com</td>
<td>9703371164</td>
<td>yearly</td>
<td><i className="fa fa-inr" aria-hidden="true"></i> 999</td>
<td>07 Oct, 2019</td>
<td><span className="badge badge-pill badge-soft-success font-size-12">Live</span></td>
<td><Link to="/orders/view">
<button type="button" className="btn btn-info btn-sm  waves-effect waves-light btn-table ml-2">
View</button></Link>
</td>
</tr>



<tr>
<td>Nadeem Khan</td>
<td>nadeemkp181@gmail.com</td>
<td>9703371164</td>
<td>yearly</td>
<td><i className="fa fa-inr" aria-hidden="true"></i> 999</td>
<td>07 Oct, 2019</td>
<td><span className="badge badge-pill badge-soft-success font-size-12">Live</span></td>
<td><Link to="/orders/view">
<button type="button" className="btn btn-info btn-sm  waves-effect waves-light btn-table ml-2">
View</button></Link>
</td>
</tr>



</tbody>
</table>
</div>


<div className="row mt-20">
<div className="col-sm-12 col-md-6 mb-20">
<div className="dataTables_info" id="datatable_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
</div>

<div className="col-sm-12 col-md-6">
<div className="dataTables_paginate paging_simple_numbers float-right">
<ul className="pagination">

<li className="paginate_button page-item previous disabled">
<a href="#" aria-controls="datatable" data-dt-idx="0" tabIndex="0" className="page-link">Previous</a>
</li>

<li className="paginate_button page-item active">
<a href="#" aria-controls="datatable" data-dt-idx="1" tabIndex="0" className="page-link">1</a>
</li>

<li className="paginate_button page-item ">
<a href="#" aria-controls="datatable" data-dt-idx="2" tabIndex="0" className="page-link">2</a>
</li>

<li className="paginate_button page-item ">
<a href="#" aria-controls="datatable" data-dt-idx="3" tabIndex="0" className="page-link">3</a>
</li>


<li className="paginate_button page-item next">
<a href="#" tabIndex="0" className="page-link">Next</a>
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


       <Footer/>
    </div>
    </>
    );
}

export default Orders;