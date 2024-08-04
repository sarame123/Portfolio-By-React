import React, { useRef, useState } from 'react'
import headerimg from '../../Images/female-avatar-girl-face-woman-user-5-svgrepo-com.svg'
import { useEffect } from 'react';
import style from '../Home/Home.module.css'
import { ReactTyped } from 'react-typed';
import resume from '../../assets/Sara-Elsahartey.pdf'


export default function Home() {
  return (
    <>

      <section className={style.banner} id='home'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xs-12 col-md-6 col-lg-7">
              <span className={style.tagline} >Welcome to my Portfolio</span>
              <h1>{`Hi! I'm Sara Mohamed`}<span className={style.warb}> <ReactTyped strings={["I'm a Software Developer", "I'm a Front-End Developer"]} typeSpeed={100} loop /></span></h1>
              <p> I'm software developer with a
                background in front-end web development
                tools, currently looking for an opportunity to
                utilize my technical skills in a challenging
                working environment and become a valuable
                asset to the organization that I work for</p>
              <button className='btn btn-outline-dark text-white ' ><a className='text-decoration-none' href={resume} download='resume' >Download Cv</a><i class="bi bi-download ps-2"></i></button>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-5">
              <img src={headerimg} alt="header img" className='w-100' />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
