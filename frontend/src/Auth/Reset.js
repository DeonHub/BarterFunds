import React from "react";

class Reset extends React.Component {
  constructor(props) {
    super(props);

  

  }
  



  render() {
    return (
        <div className="nk-app-root">

        <div className="nk-main ">
          
            <div className="nk-wrap nk-wrap-nosidebar">
             
                <div className="nk-content ">
                <div className="nk-block nk-block-middle nk-auth-body  wide-xs">
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
                                            <p>If you forgot your password, well, then we’ll email you instructions to
                                                reset your password.</p>
                                        </div>
                                    </div>
                                </div>
                                <form action="pages/auths/auth-success-v2.html">
                                    <div className="form-group">
                                        <div className="form-label-group">
                                            <label className="form-label" for="default-01">Email</label>
                                        </div>
                                        <div className="form-control-wrap">
                                            <input type="text" className="form-control form-control-lg" id="default-01"
                                                placeholder="Enter your email address"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-lg btn-primary btn-block">Send Reset Link</button>
                                    </div>
                                </form>
                                <div className="form-note-s2 text-center pt-4">
                                    <a href="pages/auths/auth-login-v2.html"><strong>Return to login</strong></a>
                                </div>
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

export default Reset;