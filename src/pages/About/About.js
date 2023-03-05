import React from 'react'
import Navbar from '../Navbar/Navbar'
import myImage from '../../images/pexels-vecislavas-popa-1571460.jpg'
import myImage2 from '../../images/pexels-binyamin-mellish-186077.jpg'
import './About.css'

const About = () => {
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="dashboard-nav mh-100 col-2">
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
          <div>
            <div className="mainContainer">
              <div className="containerA">
                <div className="containerA1">
                  <img src={myImage} alt="house"/>
                </div>
                <div className="containerA2">
                  <p>
                  At Homely Homes, we are committed to making property management more efficient and effective. Our platform is designed to help landlords and property managers collect, manage, and analyze data in order to make better decisions and improve the overall management of their properties.
                  </p>
                </div>
              </div>
              <div className="containerB">
                <div className="containerB1">
              
                We believe in transparency, accountability, and listening to our clients. Our goal is to provide the highest level of service possible, and we are always looking for ways to improve our platform and make it even more useful for our users.
                 
                </div>
                <div className="containerB2">
                  <img src={myImage2} alt="house"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About