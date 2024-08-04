import React, { useRef, useState } from 'react'
import style from '../Contact/Contact.module.css'
import contactImg from "../../Images/contact-us.svg";
import { Formik, useFormik } from 'formik'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-hot-toast";
import { Toaster } from 'react-hot-toast';
import "react-toastify/dist/ReactToastify.css";
export default function Contact() {


    let { values, handleBlur, handleChange,resetForm } = useFormik({
        initialValues: {
            user_name:"",
            user_email:"",
            message: ""
        },


    })


    const form = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_kpnkrc9', 'template_pwmw3yq', form.current, {
            publicKey: 'JLL48y4rzKqs9DWyI',
        })
            .then(
                () => {
                    // console.log('SUCCESS!');
                    toast.success("message sent successfully");
                    resetForm();

                },
                (error) => {
                    toast.error('FAILED...', error.text);
                },
            );
    };




    return (
        <>
            <section className={style.contactInfo} id='contact'>
                <div className="container  text-center  ">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xs-12 col-md-6 col-lg-5 ">
                            <img src={contactImg} alt="contactImg" className='w-100' />
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-7">
                            <h2>Get In Touch</h2>
                            <form ref={form} onSubmit={handleSubmit}>
                                <div className="row   ">

                                    <input type="text" placeholder='Name' name='user_name' value={values.user_name} onChange={handleChange} onBlur={handleBlur} />


                                </div>
                                <div className="row ">

                                    <input type="email" placeholder='Email' name='user_email' value={values.user_email} onChange={handleChange} onBlur={handleBlur} />




                                </div>
                                <div className='row'>
                                    <textarea value={values.message} name='message' id="" placeholder='Message' rows="5" onChange={handleChange} onBlur={handleBlur}></textarea>


                                </div>
                                <button type='submit' className='mt-3 m-auto d-flex'><span>send</span></button>
                                <Toaster toastOptions={{
                                    success: {
                                        style: {
                                            border: ' 1px solid green',
                                            width: '40%',
                                            height: '100px',
                                            position: "top-right"
                                        },

                                    },
                                   
                                }} />

                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
