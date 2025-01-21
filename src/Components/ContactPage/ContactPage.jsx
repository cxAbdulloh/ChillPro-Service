import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactPage.css'
import Navbar from '../Navbar/Navbar';
import { refresh } from 'aos';

export const ContactPage= () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('avaz-chillpro-service33', 'avaz-chillpro-template33', form.current, {
        publicKey: '1xvuoHY7pkMiNrpX_',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleClick = () => {
    window.location.reload();
  };


  return (
    <>
    <Navbar/>
    <div className='login-popup'>
      <form className="login-popup-container" ref={form} onSubmit={sendEmail}>
      <div className="login-popup-title">
        <h1 className='lll'>ChillProService</h1>
        </div>
        <div className="login-popup-inputs" >
            <input type="text" placeholder='Ismingiz*' name='to_name'/>
            <input type="tel" placeholder='+998*' name='to_number'/>
        </div>
        <button onClick={handleClick}>Yuborish</button>
      </form>
    </div>
    </>
    
  );
};

export default ContactPage;