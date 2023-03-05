import React, { useEffect, useState } from 'react'
import './Dashboard.css'

const OverViewList = () => {

  const [property, setProperty] = useState([]);
  const baseUrl = "http://localhost:9292/";
  useEffect(() => {
    getProperties();
  }, []);
  function getProperties() {
    fetch(`${baseUrl}properties?limit=5`)
      .then((res) => res.json())
      .then((data) => {
        setProperty(data);
      });
  }

  const tableData = property.slice(0, 5).map((property) => {
    return (
      <div
        key={property.id}
        className="PropertyRow row gx-0 mx-3 my-3 px-4 py-1"
      >
        <div className="property_attr col">{property.property_name}</div>
        <div className="property_attr col">{property.location}</div>
        <div className="property_attr col">{property.property_type}</div>
        <div className="property_attr col">{property.property_size}</div>
      </div>
    );
  });
  

  return (
    <div className="container">
      <div
        style={{ backgroundColor: "#026995", borderRadius: "5px" }}
        className="row gx-0 mx-3 px-4 py-1"
      >
        <div className="table-headers col">Property Name</div>
        <div className="table-headers col">Property Type</div>
        <div className="table-headers col">Rent</div>
        <div className="table-headers col">Property-size</div>
        {/* <div className="table-headers col"></div> */}
      </div>
        { tableData }
    </div>
  )
}

export default OverViewList