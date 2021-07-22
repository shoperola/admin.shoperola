import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

function ClientView(props) {
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
					<h4 className="mb-0">Client Information</h4>

					<div className="page-title-right">
						<ol className="breadcrumb m-0">
							<li className="breadcrumb-item"><Link to="/">TellyTell</Link></li>
							<li className="breadcrumb-item active">Client</li>
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
</div>

<div className="col-sm-12 col-md-6">
<div className="dropdown d-block">
<a href="clients.html">
<button type="button" className="btn btn-primary add-btn waves-effect waves-light float-right">
Back
</button>
</a>
</div>
</div>

</div>
<div className="table-responsive table-shoot">
<table className="table table-centered table-nowrap mb-0">

<tbody>


<tr>
<td width="20%"><b>First Name</b></td>
<td>Nadeem</td>
</tr>
<tr>
<td width="20%"><b>Last Name</b></td>
<td>Khan</td>
</tr>
<tr>
<td width="20%"><b>Email</b></td>
<td>test@gmail.com</td>
</tr>
<tr>
<td width="20%"><b>Joined On</b></td>
<td>22 Jul 2021</td>
</tr>	
<tr>
<td width="20%"><b>Trail End Date</b></td>
<td>02 Aug 2021</td>
</tr>
<tr>
<td width="20%"><b>Unique Client ID</b></td>
<td>1234567890</td>
</tr>
<tr>
<td width="20%"><b>Unique URL</b></td>
<td>https://play.tellytell.com/1234</td>
</tr>	
<tr>
<td width="20%"><b>Subscription Status</b></td>
<td>Subscribed/Not Subscribed</td>
</tr>
<tr>
<td width="20%"><b>Subscription Package</b></td>
<td>$199</td>
</tr>
<tr>
<td width="20%"><b>Last Paid Amount</b></td>
<td>$199</td>
</tr>
<tr>
<td width="20%"><b>Last Paid Date</b></td>
<td>20 Jul 2021</td>
</tr>	
<tr>
<td width="20%"><b>Next Payment Date</b></td>
<td>20 Aug 2021</td>
</tr>	
</tbody>
</table>
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

export default ClientView;