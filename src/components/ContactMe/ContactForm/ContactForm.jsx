import React from 'react';
import './ContactForm.css';
import { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_9ergg8j', 'template_ofoar2d', formData, 'RvcnyogFF_iALglJ2')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send email.');
      });
  };

  return (
   <div className='contact-form-content'>
    <form>
        <div className='name-container'>
            <input type='text' name='firstname' placeholder='First Name' onChange={handleChange}/>
            <input type='text' name='lastname' placeholder='Last Name' onChange={handleChange} />
        </div>
        <input type='text' name='email' placeholder='Email' onChange={handleChange}/>
        <textarea type="text" name='message' placeholder='Message' rows={3}  onChange={handleChange}/>

        <button onClick={handleSubmit}>SEND</button>
    </form>
   </div>
  )
}

export default ContactForm