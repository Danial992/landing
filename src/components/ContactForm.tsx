import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact-form" className="bg-gray-100 py-10 px-4 text-center">
      <h2 className="text-2xl font-semibold mb-4">Связаться с нами</h2>
      <form
        action="https://formspree.io/f/your_form_id"  // заменишь здесь на свой ID
        method="POST"
        className="max-w-md mx-auto space-y-4"
      >
        <div>
          <label htmlFor="name" className="block text-left mb-1">ФИО:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-left mb-1">Телефон:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Отправить
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
