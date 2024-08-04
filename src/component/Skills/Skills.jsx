import React from 'react'
import style from "../Skills/Skills.module.css"
import percent1 from "../../Images/html-5-logo-svgrepo-com.svg";
import css from "../../Images/css-3.svg";
import java from "../../Images/javascript.svg";
import boot from "../../Images/bootstrap-4.svg";
import e6 from "../../Images/es6.svg";
import react from "../../Images/react.svg";
import arrow1 from "../../Images/arrow1.svg";
import arrow2 from "../../Images/arrow2.svg";
import colorSharp from "../../Images/color-sharp.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <section className= {style.skills}  id='skills'>
        <div className="container text-center ">
          <div className="row">
            <div className={style.skillBox}>
              <h2 className='mb-3  under'>Skills</h2>
              
              <Carousel responsive={responsive}  infinite={true} className={style.carsoul}>
                <div className="item ">
                <img src={percent1} alt="Image" />
                <h3>Html</h3>
                </div>
                <div className="item ">
                <img src={css} alt="Image" />
                <h3>Css</h3>
                </div>
                <div className="item ">
                <img src={java} alt="Image" />
                <h3>Java Script</h3>
                </div>
                <div className="item">
                <img src={boot} alt="Image" />
                <h3>Bootstrab</h3>
                </div>
                <div className="item">
                <img src={e6} alt="Image" />
                <h3>ES6</h3>
                </div>
                <div className="item">
                <img src={react} alt="Image" />
                <h3>React</h3>
                </div>
              </Carousel>
            </div> 
          </div>
        </div>
        <img src={colorSharp} alt="" className={style.imgg} />
      </section>
     
    </>
    
  )

}

export default Skills;
