import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section
      id="contact-form"
      className="bg-gradient-to-r from-[#53A4B1] to-[#38747E] py-14 px-4 text-center"
    >
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-[#143A41]">Оставьте заявку — мы перезвоним</h2>
        <p className="text-[#306770] mb-8">
          Заполните форму ниже — и уже сегодня мы свяжемся с вами, чтобы обсудить детали.
        </p>
        <form
          action="https://formspree.io/f/your_form_id" // замените на ваш ID
          method="POST"
          className="space-y-6"
        >
          <div className="text-left">
            <label htmlFor="name" className="block mb-2 font-medium text-[#306770]">ФИО</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Иван Иванов"
              className="w-full p-3 border border-[#38747E] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#53A4B1] transition"
            />
          </div>
          <div className="text-left">
            <label htmlFor="phone" className="block mb-2 font-medium text-[#306770]">Телефон для связи</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="+7 (777) 123-45-67"
              className="w-full p-3 border border-[#38747E] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#53A4B1] transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#143A41] text-white py-3 rounded-xl font-semibold hover:bg-[#306770] transition"
          >
            Получить консультацию
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
