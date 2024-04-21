import React from "react";
import './Admin.css'
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";





class TicketClosed extends React.Component {
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


export default TicketClosed;
