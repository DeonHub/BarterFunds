import React from "react";
import UserSidebar from "./UserSidebar";
import UserHeader from "./UserHeader";
import UserFooter from "./UserFooter";

class UserDashboard extends React.Component {
  constructor(props) {
    super(props);

    const currentYear = new Date().getFullYear();

    this.state = {
    currentYear: currentYear,
    };

  }

  render() {

    return (
      <div className="nk-app-root">
  {/* main @s */}
  <div className="nk-main ">
  <UserSidebar /> 
  <UserHeader />
  <UserFooter />
  </div>
</div>

    );
  }
}

export default UserDashboard;
