import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact-form" className="bg-gradient-to-r from-blue-50 to-blue-100 py-14 px-4 text-center">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Свяжитесь с нами</h2>
        <p className="text-gray-600 mb-8">
          Заполните форму, и мы свяжемся с вами в ближайшее время.
        </p>
        <form
          action="https://formspree.io/f/your_form_id" // замените на ваш ID
          method="POST"
          className="space-y-6"
        >
          <div className="text-left">
            <label htmlFor="name" className="block mb-2 font-medium text-gray-700">ФИО</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Иван Иванов"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <div className="text-left">
            <label htmlFor="phone" className="block mb-2 font-medium text-gray-700">Телефон</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="+7 (777) 123-45-67"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
