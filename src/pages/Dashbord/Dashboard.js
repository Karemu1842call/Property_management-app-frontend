import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import OverViewCard from './OverViewCard'
import TopNavBar from '../../components/TopNavBar'
import './Dashboard.css'

const Dashboard = () => {

  const [search, setSearch] = useState("");
  

  return (
    <div className="container-fluid">
      <div className="row mw-70">
        <div className="DashboardSideMenu dashboard-nav mh-100 col-2">
          <Navbar />
        </div>
        <div
          style={{
            backgroundColor: "#eaf9ff",
            maxHeight: "100%",
            overflowY: "scroll",
          }}
          className="dashboard-main mh-100 col-10"
        >
          <TopNavBar setSearch={setSearch} search={search} />
          <div className="Greeting-text row mx-5 my-4">
            <p>Hello, Bernard</p>
          </div>
          <OverViewCard />
        </div>
      </div>
    </div>
  )
}

export default Dashboard