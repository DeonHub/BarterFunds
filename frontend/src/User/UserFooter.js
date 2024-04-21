import React from "react";

class UserFooter extends React.Component {
  constructor(props) {
    super(props);

    const currentYear = new Date().getFullYear();

    this.state = {
    currentYear: currentYear,
    };

  }

  render() {

    return (
        <>
        <div className="nk-footer">
          <div className="container-fluid">
            <div className="nk-footer-wrap">
              <div className="nk-footer-copyright">
                {" "}
                © 2024 Barter Funds. All Rights Reserved. Powered by:
                <a href="#" target="_blank">
                  {" "}
                  Currency Technologies
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* footer @e */}
      </>
      
    );
  }
}

export default UserFooter;
