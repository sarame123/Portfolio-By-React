import React, { useCallback, useEffect, useState } from 'react'
import style from '../Projects/Projects.module.css'
import colorSharp2 from "../../Images/color-sharp2.png"
import allProjects from "../Projects/data"
import axios from 'axios'
import 'animate.css';
export default function Projects() {



    return (
        <>
            <section className={`${style.Projects}`} id='projects'>
                <div className="container text-center m-auto">
                    <div className="row">
                        <div className={style.projectBox}>
                            <h2 className='under mt-5 animate__animated animate__bounce'>Projects</h2>
                            <p>  Here are a few projects I've worked on recently.</p>
                        </div>
                        <div className={`row mb-5 gy-3 ${style.Proj}`}>
                            {allProjects.map((project, index) =>
                                <div className={`col-sm-12  col-lg-4  g-2 animate__animated animate__backInRight `} key={index}>
                                    <div className={` ${style.cad}`}>
                                        <div className={style.main}>
                                            <div className={` ${style.imgg}`}>
                                                <div className="card-img">

                                                    <img src={project.url} className={`card-img-top img-fluid  ${style.imgg}`} alt={project.title} />
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div >
                                                    <h3 className={style.title}>{project.title}</h3>
                                                </div>
                                                <ul className={style.skills}>
                                                    {project.skills.map((skill, index) =>
                                                        <li key={index} className={style.skill}>
                                                            {skill}
                                                        </li>)}


                                                </ul>
                                                <div className={style.links}>
                                                    <a href={project.demo} target='_blank' className={style.link}>Demo</a>
                                                    <a href={project.source} target='_blank' className={style.link}>Source</a>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                            }
                        </div>





                    </div>
                </div>
                <img className={style.imgg2} src={colorSharp2}></img>
            </section>
        </>

    )
}
