import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';  // useNavigate import qilinadi
import './ContactPage.css'
import Navbar from '../Navbar/Navbar';

export const ContactPage = () => {
  const form = useRef();
  const navigate = useNavigate();  // useNavigate hookini chaqiramiz

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('avaz-chillpro-service33', 'avaz-chillpro-template33', form.current, {
        publicKey: '1xvuoHY7pkMiNrpX_',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // Email muvaffaqiyatli yuborilgandan so‘ng, Home sahifasiga yo‘naltiramiz
          navigate('/');  // Bu yerda Home sahifasi (/) ga yo'naltirish amalga oshiriladi
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <Navbar />
      <div className='login-popup'>
        <form className="login-popup-container" ref={form} onSubmit={sendEmail}>
          <div className="login-popup-title">
            <h1 className='lll'>ChillProService</h1>
          </div>
          <div className="login-popup-inputs">
            <input type="text" placeholder='Ismingiz*' name='to_name' />
            <input type="tel" placeholder='+998*' name='to_number' />
          </div>
          <button type="submit">Yuborish</button>
        </form>
      </div>
    </>
  );
};

export default ContactPage;