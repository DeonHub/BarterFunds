import React from "react";

class Signup extends React.Component {
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
        This is the Signup page
      </div>
    );
  }
}

export default Signup;
