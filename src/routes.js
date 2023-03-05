import React from "react"
import { Routes, Route } from "react-router-dom"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Dashboard from "./pages/Dashbord/Dashboard"
import Login from "./pages/Login/Login"
import AddPropertyForm from "./components/AddPropertyForm"
import Properties from "./pages/Properties/Properties"
import Tenants from "./pages/Tenants/Tenants"
import EditPropertyForm from "./components/EditPropertyForm"




const BaseRouter = () => {
    return (
      <>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/properties" element={<Properties />} />
            <Route path='/edit_properties' element={<EditPropertyForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact_us" element={<Contact />} />
            <Route path="/about_us" element={<About />} />
            <Route path="/tenants" element={<Tenants />} />
            <Route path="/add_property" element={<AddPropertyForm />} />
        </Routes>
      </>
    )
  }
  
  export default BaseRouter