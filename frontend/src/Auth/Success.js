import React from "react";

class Success extends React.Component {
  constructor(props) {
    super(props);

  

  }
  



  render() {
    return (
        <div className="nk-app-root">

        <div className="nk-main ">
          
            <div className="nk-wrap nk-wrap-nosidebar">
             
                <div className="nk-content ">
                <div class="nk-block nk-block-middle nk-auth-body">
                        <div class="nk-block-head">
                            <div class="nk-block-head-content  text-success">
                                <h4 class="nk-block-title">🎉 Congratulations! 🎉</h4>
                                <h6> You’re now part of Barter Funds community. </h6>
                                <div class="nk-block-des">
                                    <p>You can now sign in with your new password</p>
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

export default Success;