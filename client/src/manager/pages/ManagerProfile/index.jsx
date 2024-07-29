import React from 'react'
import "../../../style.css";
import Navbar from "../../components/NavBar";

import MenuBar from "../../components/MenuBar";
import Footer from "../../components/Footer";

function ManagerProfile() {
  return (
    <div className="wrapper">
      <Navbar />
      <MenuBar />
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2"></div>
          </div>
        </div>
        <div>
          Manager Profile
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default ManagerProfile