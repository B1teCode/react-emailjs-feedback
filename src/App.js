import React from 'react';
import ContactForm from './components/ContactForm';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <h1>Свяжитесь с нами</h1>
      <p>Укажите ваши контактные данные и мы вам перезвоним.</p>
      <ContactForm />
    </div>
  );
};

export default App;
