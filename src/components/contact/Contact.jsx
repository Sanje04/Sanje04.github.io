import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineMail, MdMessage} from 'react-icons/md';
import {RiWhatsappFill} from 'react-icons/ri';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zqqzl0b', 'template_yure9ap', form.current, 'iYduZT9Gu0GNgl5t-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>sanje.divakaran@gmail.com</h5>
            <a href="mailto::sanje.divakaran@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <MdMessage className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Sanje Divakaran</h5>
            <a href="mailto::sanje.divakaran@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiWhatsappFill className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+12899876708</h5>
            <a href="https://api.whatsapp.com/send?phone+12899876708">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact