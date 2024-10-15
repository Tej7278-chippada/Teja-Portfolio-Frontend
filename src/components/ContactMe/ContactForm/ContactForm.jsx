import React, { useState } from 'react';
import './ContactForm.css';
import axios from 'axios';
// import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fname: '',
    sname: '',
    email: '',
    message: ''
  });
  // const [formData, setFormData] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   message: ''
  // });
  const [status, setStatus] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   emailjs.send('service_9ergg8j', 'template_ofoar2d', formData, 'RvcnyogFF_iALglJ2')
  //     .then((response) => {
  //       console.log('SUCCESS!', response.status, response.text);
  //       alert('Email sent successfully!');
  //       setFormData({
  //         firstName: '',
  //         lastName: '',
  //         email: '',
  //         message: ''
  //       });
  //     }, (error) => {
  //       console.log('FAILED...', error);
  //       alert('Failed to send email.');
  //     });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post('http://localhost:5000/send-email', formData);
      const response = await axios.post('https://backend-demo-2-156a59c3faa0.herokuapp.com/send-email', formData);
      if (response.status === 200) {
        setStatus('Email sent successfully!');
        setFormData({ fname: '', sname: '', email: '', message: '' });
      }
    } catch (error) {
      setStatus('Failed to send email.');
      console.error('Error sending email:', error);
    }
  };

  return (
   <div className='contact-form-content'>
    <form>
        <div className='name-container'>
            <input type='text' id='name' name='fname' placeholder='First Name' value={formData.fname} onChange={handleChange} required/>
            <input type='text' id='name' name='sname' placeholder='Last Name' value={formData.sname} onChange={handleChange} required/>
        </div>
        <input type='text' id='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} required/>
        <textarea type="text" id='message' name='message' placeholder='Message' rows={3} value={formData.message} onChange={handleChange} required/>

        <button onClick={handleSubmit}>SEND</button>
    </form>
    {status && <p>{status}</p>}
   </div>
  )
}

export default ContactForm