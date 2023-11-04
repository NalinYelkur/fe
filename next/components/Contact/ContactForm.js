import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl'
import { useForm } from 'react-hook-form';


const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully send and will back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        // console.log(contact)
    }

    const save = async data => {
        try {
            const url = `${baseUrl}/user/create-enquiry`;
      
            const response = await axios.post(url, data);
            // setContact(INITIAL_STATE);
            reset();
            alertContent();
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="contact-form">
            <h3></h3>

            {/* <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Your Name" 
                                className="form-control"
                                value={contact.name}
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="email" 
                                placeholder="Your Email" 
                                className="form-control"
                                value={contact.email}
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="number" 
                                placeholder="Phone number" 
                                className="form-control"
                                value={contact.number}
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="subject" 
                                placeholder="Your Website" 
                                className="form-control"
                                value={contact.subject}
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <textarea 
                                name="text" 
                                cols="30" 
                                rows="6" 
                                placeholder="Tell us more about your business— how are you looking to use PlugToChat?*" 
                                className="form-control"
                                value={contact.text}
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                    </div>
                    <div className="col-lg-12 col-sm-12 text-center">
                        <button type="submit" className="default-btn">
                            <i className='bx bxs-paper-plane'></i> 
                            Send Message <span></span>
                        </button>
                    </div>
                </div>
            </form> */}
            <form className='my-6 container' onSubmit={handleSubmit(save)}>
                <div className="form-group">
                    <label className="form-label">
                        Email Address
                    </label>
                    <input type="text"
                        {...register("email", {
                            required: 'Required Input', pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Invalid Email'
                            }
                        })}
                        className="form-control" placeholder="name@address.com" />
                    {
                        errors?.email && (
                            <small className='text-danger mt-3 ms-3'>{errors?.email?.message}</small>
                        )
                    }

                </div>
                <div className="form-group">
                    <label className="form-label">
                        Name
                    </label>
                    <input type="text"
                        {...register("name", {
                            required: 'Required Input'
                        })}
                        className="form-control" placeholder="Name" />
                    {
                        errors?.name && (
                            <small className='text-danger mt-3 ms-3'>{errors?.name?.message}</small>
                        )
                    }
                </div>
                <div className="form-group">
                    <label className="form-label">
                        Website
                    </label>
                    <input type="text"
                        {...register("website")}
                        className="form-control" placeholder="Website" />
                </div>
                <div className="form-group">
                    <label className="form-label">
                        Tell us more about your business— how are you looking to use PlugToChat?*
                    </label>
                    <textarea type="text"
                        {...register("content")}
                        className="form-control" />
                    {
                        errors?.content && (
                            <small className='text-danger mt-3 ms-3'>{errors?.content?.message}</small>
                        )
                    }
                </div>
                <div>
                    <button className='btn btn-success' type='submit' style={{
                        float: 'right', marginTop: '20px',
                        background: '#26272d',
                        borderColor: '#26272d',
                        color: '#ffffff',
                        fontSize: '16px',
                        lineHeight: '16px',
                        fontFamily: 'Inconsolata',
                        padding: '12px 24px',
                        borderRadius: '15px'
                    }}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;