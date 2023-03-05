import React from "react";
import "../Tenants/Tenants.css";

function TenantsList({ search, tenant, getTenants }) {
  const tableData = tenant
    .filter((item) => {
      return search === ""
        ? item
        : item.name.toLowerCase().includes(search.toLowerCase());
    })
    .map((tenant) => {
      return (
        <div className="PropertyRow row gx-0 mx-3 my-3 px-4 py-1">
          <div className="property_attr col">{tenant.name}</div>
          <div className="property_attr col">{tenant.email}</div>
          <div className="property_attr col">{tenant.phone_number}</div>
          <div className="property_attr col">{`Sh.${tenant.rent}`}</div>
          <div className="col">
            <button
              onClick={() => {
                handleDelClick(tenant.id, tenant.name);
              }}
              className="deleteBtn"
            >
              Delete
            </button>
          </div>
        </div>
      );
    });

  ///delete tenant functionality
  function handleDelClick(id, name) {
    fetch(`http://localhost:9292/tenant/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then(getTenants());
    });
    (alert`Deleted`)
  }

  return (
    <div className="container">
      <div
        style={{ backgroundColor: "#026995", borderRadius: "5px" }}
        className="row gx-0 mx-3 px-4 py-1"
      >
        <div className="table-headers col">Tenant Name</div>
        <div className="table-headers col">Tenant Email</div>
        <div className="table-headers col">Number</div>
        <div className="table-headers col">Rent</div>
        <div className="table-headers col">Delete</div>
      </div>
      {tableData}
    </div>
  );
}

export default TenantsList;
