import React from "react";

class Signup extends React.Component {
  constructor(props) {
    super(props);

  

  }
  



  render() {
    return (
        <div className="nk-app-root">

        <div className="nk-main ">
          
            <div className="nk-wrap nk-wrap-nosidebar">
             
                <div className="nk-content ">
                <div className="nk-block nk-block-middle nk-auth-body wide-xs">
                <div className="brand-logo pb-4 text-center">
                            <a href="/frontend/user/index.html" className="logo-link">
                               
                                <img className="logo-dark logo-img logo-img-lg" src="/assets/images/barterfunds-logo.png"
                                    srcset="/assets/images/barterfunds-logo.png 2x" alt="logo"/>
                            </a>
                        </div>
                        <div className="card card-bordered">
                            <div className="card-inner card-inner-lg">
                                <div className="nk-block-head">
                                    <div className="nk-block-head-content">
                                        <div className="nk-block-des">
                                            <p>Create New Account</p>
                                        </div>
                                    </div>
                                </div>
                                <form action="pages/auths/auth-success-v2.html">
                                    <div className="form-group">
                                        <label className="form-label" for="email">Email</label>
                                        <div className="form-control-wrap">
                                            <input type="text" className="form-control form-control-lg" id="email"
                                                placeholder="Enter your email address"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" for="password">Password</label>
                                        <div className="form-control-wrap">
                                            <a href="#" className="form-icon form-icon-right passcode-switch lg"
                                                data-target="password">
                                                <em className="passcode-icon icon-show icon ni ni-eye"></em>
                                                <em className="passcode-icon icon-hide icon ni ni-eye-off"></em>
                                            </a>
                                            <input type="password" className="form-control form-control-lg" id="password"
                                                placeholder="Enter your password"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-control-xs custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="checkbox"/>
                                            <label className="custom-control-label" for="checkbox">I agree to your
                                                <a href="#"> Terms and Conditions.</a></label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-lg btn-primary btn-block">Register</button>
                                    </div>
                                </form>
                                <div className="form-note-s2 text-center pt-4"> Already have an account? <a
                                        href="pages/auths/auth-login-v2.html"><strong>Signin instead</strong></a>
                                </div>
                                <div className="text-center pt-4 pb-3">
                                    <h6 className="overline-title overline-title-sap"><span>OR</span></h6>
                                </div>
                                <ul className="nav justify-center gx-8">
                                    <li className="nav-item"><a className="nav-link" href="#">Facebook</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Google</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="nk-footer nk-auth-footer-full">
                        <div className="container wide-lg">
                            <div className="row g-3">
                                <div className="col-lg-6 order-lg-last">
                                    <ul className="nav nav-sm justify-content-center justify-content-lg-end">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Terms & Condition</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Privacy Policy</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Help</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <div className="nk-block-content text-center text-lg-left">
                                        <p className="text-soft">&copy; 2024 Barter Funds. All Rights Reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
           
        </div>
        
    </div>
    );
  }
}

export default Signup;