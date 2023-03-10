import React from 'react'
import { Link } from 'react-router-dom';



const PropertiesList = ({ search, property, getProperties }) => {

  const tableData = property
    .filter((item) => {
      return search === ""
        ? item
        : item.property_name.toLowerCase().includes(search.toLowerCase());
    })
    .map((property) => {
      return (
        <div
          key={property.id}
          className="PropertyRow row gx-0 mx-3 my-3 px-4 py-1"
        >
          <div className="property_attr col">{property.property_name}</div>
          <div className="property_attr col">{property.location}</div>
          <div className="property_attr col">{property.property_type}</div>
          <div className="property_attr col">{property.property_size}</div>

          <div className="col">
            <button
              onClick={() => {
                handleDelClick(property.id);
              }}
              className="deleteBtn"
            >
              Delete
            </button>
          </div>
          <div className="col">
            <Link to="/edit_properties">
              <button
                className="editBtn"
              >
                Edit
              </button>
            </Link>
           
          </div>

        </div>
      );
    });

  // delete functionality
  function handleDelClick(id) {
    fetch(`https://web-production-07dae.up.railway.app/property/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then(getProperties());
    });
    alert`Deleted`;
  }
  
  
  
  return (
    <div className='container'>
      <div
        style={{ backgroundColor: "#026995", borderRadius: "5px" }}
        className="row gx-0 mx-3 px-4 py-1">
        <div className="table-headers col">Property name</div>
        <div className="table-headers col">Location</div>
        <div className="table-headers col">Property Type</div>
        <div className="table-headers col">Size in sq feet</div>
        <div className="table-headers col">Delete</div>
        <div className="table-headers col">Edit</div>
      </div>
      
      {tableData}
    </div>
  )
}

export default PropertiesList