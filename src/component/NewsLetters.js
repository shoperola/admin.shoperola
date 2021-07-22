import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

function NewsLetters(props) {
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
                    <h4 className="mb-0">Newsletter Subscribers</h4>

                    <div className="page-title-right">
                        <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item"><Link to="/">TellyTell</Link></li>
                            <li className="breadcrumb-item active">Newsletter Subscribers</li>
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
<label className="w-100">Show <select name="" className="select-w custom-select custom-select-sm form-control form-control-sm">
<option value="10">10</option>
<option value="25">25</option>
<option value="50">50</option>
<option value="100">100</option>
</select> entries</label></div>
</div>
</div>


<div className="table-responsive table-shoot">
<table className="table table-centered table-nowrap mb-0">
<thead className="thead-light">
<tr>
<th>Email</th>
<th>IP</th>
<th>Data and Time</th>
</tr>
</thead>
<tbody>
<tr>
<td>test@test.com</td>
<td>192.168.10.1</td>
<td>22 Jul 2021 10:10 a.m.</td>	
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
<a href="#" aria-controls="datatable" data-dt-idx="0" tabindex="0" className="page-link">Previous</a>
</li>

<li className="paginate_button page-item active">
<a href="#" aria-controls="datatable" data-dt-idx="1" tabindex="0" className="page-link">1</a>
</li>

<li className="paginate_button page-item ">
<a href="#" aria-controls="datatable" data-dt-idx="2" tabindex="0" className="page-link">2</a>
</li>

<li className="paginate_button page-item ">
<a href="#" aria-controls="datatable" data-dt-idx="3" tabindex="0" className="page-link">3</a>
</li>

<li className="paginate_button page-item next">
<a href="#" tabindex="0" className="page-link">Next</a>
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
        </div>
    );
}

export default NewsLetters;