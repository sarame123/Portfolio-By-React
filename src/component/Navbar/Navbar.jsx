import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import navicon1 from '../../Images/nav-icon1.svg'
import navicon2 from '../../Images/github.svg'
import navicon3 from '../../Images/nav-icon3.svg'
import styles from '../Navbar/Navbar.module.css'
 const Navbar = () =>  {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-light `}>
  <div className="container">
  <a className={styles.title} href="/">
        Portfolio
      </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 ${styles.Links}`}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#skills">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects">Projects</a>
        </li>
      </ul>
      <div className="navbar-text text-info d-flex align-items-center ">
        <div className={`me-4 ${styles.socialIcon}`}>
            <a href="https://www.linkedin.com/in/sara-el-sahartey-8a0a30201/" target="_blank" ><img src={navicon1} className='p-2' alt=""  /></a>
            <a href="https://github.com/sarame123" target="_blank" ><img src={navicon2} className='p-2' alt=""  /></a>
           
        </div>
        <a href='#contact' className={styles.btn} ><span  className='' style={{ color: 'purple' }}>Let's Connect</span></a>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}
export default Navbar;
