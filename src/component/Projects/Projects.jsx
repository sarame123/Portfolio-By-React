
import React from 'react';
import style from '../Projects/Projects.module.css';
import colorSharp2 from "../../Images/color-sharp2.png";
import allProjects from "../Projects/data";
import 'animate.css';

export default function Projects() {
    return (
        <section className={`${style.Projects}`} id='projects'>
            <div className="container text-center m-auto">
                <div className="row">
                    <div className={style.projectBox}>
                        <h2 className='under mt-5 animate__animated animate__bounce'>Projects</h2>
                        <p>Here are a few projects I've worked on recently.</p>
                    </div>
                    <div className={`row mb-5 gy-4 ${style.Proj}`}>
                        {allProjects.map((project, index) => (
                            <div 
                                className="col-sm-12 col-md-6 col-lg-4" 
                                key={index}
                            >
                                <div className={style.card}>
                                    <div className={style.cardImage}>
                                        <img 
                                            src={project.url} 
                                            alt={project.title} 
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className={style.cardBody}>
                                        <h3 className={style.title}>{project.title}</h3>
                                        <ul className={style.skills}>
                                            {project.skills.map((skill, index) => (
                                                <li key={index} className={style.skill}>
                                                    {skill}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className={style.links}>
                                            <a 
                                                href={project.demo} 
                                                target='_blank' 
                                                rel="noopener noreferrer" 
                                                className={style.link}
                                            >
                                                Demo
                                            </a>
                                            <a 
                                                href={project.source} 
                                                target='_blank' 
                                                rel="noopener noreferrer" 
                                                className={style.link}
                                            >
                                                Source
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <img className={style.imgg2} src={colorSharp2} alt="background" />
        </section>
    );
}

