import './style.scss'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsTelephone} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
   const formRef = useRef();
   const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm("service_36mp0in", "template_c47c985", formRef.current,'hZr9fXx1hDhrBOe3U')
         .then((result) => {
            formRef.current.reset();
         }, (error) => {
            console.log(error.text);
         });
  
   };
   return (
      <section id='contact'>
         <h5>
            Get In Touch
         </h5>
         <h2>
            Contact Me
         </h2>
         <div className="container contact__container">
            <div className="contact__options">
               <article className='contact__option'>
                  <MdOutlineEmail className='contact__option--icon'/>
                  <h4>Email</h4>
                  <h5>nvvquang1504@gmail.com</h5>
                  <a href="mailto:nvvquang1504@gmail.com">Send a message</a>
               </article>
               <article className='contact__option'>
                  <RiMessengerLine className='contact__option--icon'/>
                  <h4>Messenger</h4>
                  <h5>funny1504</h5>
                  <a href="https://m.me/funny1504">Send a message</a>
               </article>
               <article className='contact__option'>
                  <BsTelephone className='contact__option--icon'/>
                  <h4>Tell</h4>
                  <h5>+84898019214</h5>
                  <a href="tel:+84898019214">Send a message</a>
               </article>
            </div>
            <form onSubmit={sendEmail} ref={formRef} action="">
               <input type="text" name='name' placeholder='Your Full Name' required/>
               <input type="email" name='email' placeholder='Your Email Address' required/>
               <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
               <button className='btn btn-primary' type='submit'>Send Message</button>
            </form>
         </div>
      </section>
   );
};

export default Contact;
