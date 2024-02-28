
import React, { useState,useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/Contacts.css";
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import SendIcon from '@mui/icons-material/Send';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error('Please enter all fields!', {
        position: toast.POSITION.TOP_CENTER
      });
      return;
    }

    emailjs.sendForm('service_ehrqui5', 'template_1w4gr7l', form.current, 'AqaRtV03eJHNedKVN')
      .then((result) => {
        console.log(result.text, 'Successfully sent');
        // Clear form data after successful submission
        setName('');
        setEmail('');
        setMessage('');
        toast.success('Message sent successfully!', {
          position: toast.POSITION.TOP_Center
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        toast.error('Failed to send message. Please try again.', {
          position: toast.POSITION.TOP_RIGHT
        });
      });
  };

  return (
    <div className='contactBg '>
    <div className="contact-section d-sm-flex flex-sm-column  d-md-flex flex-md-row justify-content-md-between">
      <div className="contact-details">
        <h2>Contact Us</h2>
        <p><PersonIcon className='mr-3'/> Tulasi Subrahmanyam</p>
        <p><PhoneIcon className='mr-3'/> +91 9704698858</p>
        <p><MailIcon className='mr-3'/> subbuthoto91@gmail.com</p>
      </div>
      <div className="contact-form">
        <h2>Reach out to me</h2>
        <form ref={form} onSubmit={sendEmail} className='formData d-flex flex-column'>
        <div className='d-md-flex flex-md-row justify-content-md-start d-sm-flex flex-sm-column'>
          <div className='d-flex flex-column m-2'>
            <label>Name</label>
            <input type="text" name="user_name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
           <div className='d-flex flex-column m-2'>
            <label>Email</label>
            <input type="email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} />
           </div>
          </div>
            <div className='mb-2 d-flex flex-column'>
              <label style={{margin:"10px"}}>Message</label>
              <textarea name="message" className='text-message' value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>         
            <button type="submit" id="submitButton" class="sendButtonClass">
              Send  <SendIcon style={{fontSize:"16px",marginBottom:"3px",marginLeft:"5px"}}/>
          </button>
        </form>
      </div>
      <ToastContainer className="toastContainer"/>
    </div>
    
    </div>
  );
}

export default ContactSection;