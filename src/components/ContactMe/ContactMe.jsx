import React from 'react';
import './ContactMe.css';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';

const ContactMe = () => {
  return (
   <section className='contact-container' id='Contact'>
    <h5>Contact Me</h5>
    <div className='contact-content'>
        <div style={{flex:1}}>
            <ContactInfoCard 
            iconUrl='../assets/email.png'
            text= 'tejachippada15@gmail.com'
            click={() => window.location = 'mailto:tejachippada15@gmail.com'}
            />
             <ContactInfoCard 
            iconUrl='../assets/github.png'
            text= 'https://github.com/Tej7278-chippada'
            click={()=>{window.open('https://github.com/Tej7278-chippada')}}
            />
        </div>
        <div style={{flex:1}}>
            <ContactForm />
        </div>
    </div>
   </section>
  )
}

export default ContactMe