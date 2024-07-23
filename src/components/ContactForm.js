import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_63nborp', 'template_2dtvg8a', formData, '26wp0ZGs_sogu-lvI')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setMessage('Контакты успешно отправлены!');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setMessage('Произошла ошибка при отправке. Пожалуйста, попробуйте снова.');
      });

    setFormData({
      name: '',
      phone: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Имя и фамилия *</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Ахмад Ахмадов'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Номер телефона *</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder='+992 XX XXX XX XX'
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Перезвоните мне</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default ContactForm;
