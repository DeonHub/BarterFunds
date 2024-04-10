import React from "react";

class Login extends React.Component {
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
        This is the Login page
      </div>
    );
  }
}

export default Login;
