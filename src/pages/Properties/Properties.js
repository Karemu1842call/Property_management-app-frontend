import React from 'react'
import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import PropertiesList from './PropertiesList';
import TopNaVBar from '../../components/TopNavBar'
import './Properties.css'

const Properties = () => {

  //fetch properties from database
  const [search, setSearch] = useState("");
  const [property, setProperty] = useState([]);
  const baseUrl = "https://web-production-07dae.up.railway.app/";
  useEffect(() => {
    getProperties();
  }, []);
  function getProperties() {
    fetch(`${baseUrl}properties`)
      .then((res) => res.json())
      .then((data) => {
        setProperty(data);
      });
  }

  return (
    <div className='container-fluid vh-100 mt-4'>
      <div className="row mh-100">
        <div className="dashboard-nav mh-100 col-2">
          <Navbar />
        </div>
        <div style={{backgroundColor:"#e9f9ff",maxHeight:"100%",overflowY:"scroll"}} className="dashboard-main mh-100 col-10">
          <TopNaVBar setSearch={setSearch} />
          <div className="Greeting-text row">
            <p>My Properties</p>
          </div>

          {property && (
            <PropertiesList
              search={search}
              property={property}
              getProperties={getProperties}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Properties