import React from "react";

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
      <div>
        This is the user dashboard page
      </div>
    );
  }
}

export default UserDashboard;
