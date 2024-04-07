import React from "react";

class AdminDashboard extends React.Component {
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
        This is the admin dashboard page
      </div>
    );
  }
}

export default AdminDashboard;
