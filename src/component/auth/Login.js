import React from 'react';

function Login(props) {
    return (
        <div  className="authentication-bg h-100">
        <div className="account-pages pt-sm-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <a href="index.html" className="mb-5 d-block auth-logo">
                                <img src="assets/images/logo-dark.png" alt="" height="25" className="logo logo-dark"/>
                                <img src="assets/images/logo-light.png" alt="" height="25" className="logo logo-light"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="card">
                           
                            <div className="card-body p-4"> 
                                <div className="text-center mt-2">
                                    <h5 className="text-primary welcome-text">Welcome Back !</h5>
                                    <p className="text-muted">Sign In to TellyTell
</p>
                                </div>
                                <div className="p-2 mt-4">
                                    <form>
        
                                        <div className="form-group">
                                            <label for="username">Email</label>
                                            <input type="text" className="form-control input-field"  placeholder="Enter Email ID"/>
                                        </div>
                
                                        <div className="form-group">
                                          
                                            <label for="userpassword">Password</label>
                                            <input type="password" className="form-control input-field" placeholder="Enter password"/>
                                        </div>
                
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="auth-remember-check"/>
                                            <label className="custom-control-label" for="auth-remember-check">Remember me</label>
                                        </div>
                                        
                                        <div className="mt-3 text-right">
                                            
											<a href="index.html">
											
											<button className="btn btn-primary w-sm waves-effect waves-light" >Log In</button>
											</a>
                                        </div>
            
                             
									
									</form>
                                </div>
            
                            </div>
                        </div>

                

                    </div>
                </div>
                {/* <!-- end row --> */}
            </div>
            {/* <!-- end container --> */}
        </div>
</div>
    );
}

export default Login;