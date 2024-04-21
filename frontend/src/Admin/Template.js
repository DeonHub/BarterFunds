import React from "react";
import './Admin.css'
import AdminSidebar from "./AdminSidebarX";
import AdminHeader from "./AdminHeader";





class Trustpilot extends React.Component {
  constructor(props) {
    super(props);

    const currentYear = new Date().getFullYear();

    this.state = {
    currentYear: currentYear,
    };

  }

  render() {

    return (
      <div className="page-wrapper default-version">
        <AdminSidebar />
        <AdminHeader />
        
        

      </div>

    );
  }
}


export default Trustpilot;
