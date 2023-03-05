import React from "react";
import "./About.css";
import Navbar from "../Navbar/Navbar";
import myImage from "../../Pages/Images/pexels-vecislavas-popa-1571460.jpg";
import myImage2 from "../../Pages/Images/pexels-binyamin-mellish-186077.jpg";
function About() {
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
                  There is a lot of information that has to be gathered because landlords usually manage many properties. 
                  This is crucial for landlords to manage properties effectively. 
                  When it comes to the management of data, it is essential that the appropriate data and statistics be populated in order to make effective data management decisions. 
                  The Homely platform was created to link people who require effective statistics. This platform features a straightforward user interface and has been designed to be simple for users to use, making life easier for the use
                 </p>
                </div>
              </div>
              <div className="containerB">
                <div className="containerB1">
                  <p>
                  The company's guiding principles are accountability and transparency. 
                  Our organization places a lot of emphasis on giving our customers the best service possible because it is our top priority.
                   We take your feedback into account when making changes to a feature. Contact us at any time if you have any questions.  
                   We can be reached
                   We will pay attention and work to improve your experience.
                 </p>
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
  );
}

export default About;
