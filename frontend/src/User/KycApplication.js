import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './User.css'
import UserSidebar from "./components/UserSidebar";
import UserHeader from "./components/UserHeader";
import UserFooter from "./components/UserFooter";


class KycApplication extends React.Component {
  constructor(props) {
    super(props);

    const currentYear = new Date().getFullYear();

    this.state = {
    currentYear: currentYear,
    };

  }

  render() {

    return (
      <div className="nk-body npc-crypto bg-white has-sidebar">
        <div className="nk-app-root">
            {/*Main Start*/}
            <div className="nk-main ">
                {/*Sidebar Start*/}
                <UserSidebar />
                {/*Sidebar End*/}
                <div className="nk-wrap ">
                    {/*Main Header Start*/}
                    <UserHeader />
                    {/*Main Header End*/}
                    {/*Content Start*/}
                    <div className="nk-content nk-content-fluid">
  <div className="container-xl wide-lg">
    <div className="nk-content-body">
      <div className="kyc-app wide-sm m-auto">
        <div className="nk-block-head nk-block-head-lg wide-xs mx-auto">
          <div className="nk-block-head-content text-center">
            <h2 className="nk-block-title fw-normal">KYC Verification</h2>
            <div className="nk-block-des">
              <p>
                To comply with regulation each participant will have to go
                through indentity verification (KYC/AML) to prevent fraud
                causes.{" "}
              </p>
            </div>
          </div>
        </div>
        {/* nk-block-head */}
        <div className="nk-block">
          <div className="card card-bordered">
            <div className="card-inner card-inner-lg">
              <div className="nk-kyc-app p-sm-2 text-center">
                <div className="nk-kyc-app-icon">
                  <em className="icon ni ni-files" />
                </div>
                <div className="nk-kyc-app-text mx-auto">
                  <p className="lead">
                    You have not submitted your necessary documents to verify
                    your identity. In order to purchase our tokens, please
                    verify your identity.
                  </p>
                </div>
                <div className="nk-kyc-app-action">
                  <a
                    href="/frontend/user/kyc/form.html"
                    className="btn btn-lg btn-primary"
                  >
                    Click here to complete your KYC
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center pt-4">
            <p>
              If you have any question, please contact our support team{" "}
              <a href="mailto:info@barter-funds.com">info@barter-funds.com</a>
            </p>
          </div>
        </div>
        {/* nk-block */}
      </div>
      {/* kyc-app */}
    </div>
  </div>
</div>

                    {/*Content End*/}
                    {/*Footer Start*/}
                    <UserFooter />
                    {/*Footer End*/}

                </div>
            </div>
            {/*Main End*/}

        </div>
      </div> 
  


    );
  }
}

export default KycApplication;
