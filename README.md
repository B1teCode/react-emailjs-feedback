# Contact Form Project

This project is a simple contact form built with React. It allows users to submit their contact information, which is then sent to a specified email address using EmailJS.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [License](#license)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/contact-form.git
    cd contact-form
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the development server:

    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

3. Fill in the form and submit to send the contact information.

## Configuration

1. Register on [EmailJS](https://www.emailjs.com/).
2. Create a new email service and email template on EmailJS.
3. Get your `Service ID`, `Template ID`, and `User ID` from EmailJS.
4. Replace the placeholders in the `ContactForm.js` file with your actual EmailJS credentials:

    ```javascript
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
    ```

## Project Structure

---

# Проект контактной формы

Этот проект представляет собой простую контактную форму, созданную с помощью React. Он позволяет пользователям отправлять свою контактную информацию, которая затем отправляется на указанный адрес электронной почты с использованием EmailJS.

## Содержание

- [Установка](#установка)
- [Использование](#использование)
- [Конфигурация](#конфигурация)
- [Структура проекта](#структура-проекта)
- [Скриншоты](#скриншоты)
- [Лицензия](#лицензия)

## Установка

1. Клонируйте репозиторий:

    ```bash
    git clone https://github.com/your-username/contact-form.git
    cd contact-form
    ```

2. Установите зависимости:

    ```bash
    npm install
    ```

## Использование

1. Запустите сервер разработки:

    ```bash
    npm start
    ```

2. Откройте браузер и перейдите на `http://localhost:3000`.

3. Заполните форму и отправьте, чтобы отправить контактную информацию.

## Конфигурация

1. Зарегистрируйтесь на [EmailJS](https://www.emailjs.com/).
2. Создайте новый email-сервис и шаблон письма на EmailJS.
3. Получите ваш `Service ID`, `Template ID` и `User ID` на EmailJS.
4. Замените плейсхолдеры в файле `ContactForm.js` на ваши реальные данные EmailJS:

    ```javascript
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
    ```

## Структура проекта

