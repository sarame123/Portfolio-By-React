import React from 'react'
import logo from "../../Images/logo.svg"
import icon1 from "../../Images/nav-icon1.svg"
import icon2 from "../../Images/nav-icon2.svg"
import icon3 from "../../Images/nav-icon3.svg"
export default function 
() {
  return (
    <div>
        <footer>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-6 col-lg-6">
              <img src={logo} alt="Logo" />
              </div>
              <div  className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={icon1} alt="Icon" /></a>
              <a href="#"><img src={icon2} alt="Icon" /></a>
              <a href="#"><img src={icon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </div>
            </div>
          </div>
        </footer>
        {/* <footer>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-6 col-lg-6">
              <img src={logo} alt="Logo" />
              </div>
              <div  className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={icon1} alt="Icon" /></a>
              <a href="#"><img src={icon2} alt="Icon" /></a>
              <a href="#"><img src={icon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </div>
            </div>
          </div>
        </footer> */}
    </div>
  )
}
