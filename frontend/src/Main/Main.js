import React from "react";

class Main extends React.Component {
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
        This is the main page
      </div>
    );
  }
}

export default Main;
