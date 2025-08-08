import React from 'react';
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  Coffee,
} from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#143A41] via-[#306770] to-[#143A41] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            23 августа вы либо <span className="text-[#53A4B1]">начнете зарабатывать</span> на реконструкции недвижимости,
            <br />
            либо позволите <span className="text-[#38747E]">инфляции забирать</span> ваши деньги
          </h2>
        </div>

<div className="bg-[#306770] rounded-2xl p-8 mb-12">
  <h3 className="text-2xl font-bold text-center mb-6 text-[#53A4B1]">
    Пока вы читаете этот текст...
  </h3>
  <div className="space-y-4 text-lg text-white text-center max-w-4xl mx-auto">
    <p>📈 Курс доллара вырос еще на 0.2%</p>
    <p>🏢 Ваша недвижимость дешевеет</p>
    <p>🏗️ Первичка забирает ваших арендаторов</p>
    <p>🏦 Банки распродают лучшие активы тем, кто знает как с ними работать</p>
  </div>
  <div className="text-center mt-8">
    <p className="text-2xl font-bold text-white">
      Встреча 23 августа — это ваш шанс переломить ситуацию.
    </p>
  </div>
</div>


        <div className="text-center mb-16">
          <a href="#contact-form">
          <button className="bg-[#53A4B1] hover:bg-[#38747E] text-white font-bold py-6 px-12 rounded-lg text-2xl transition-all transform hover:scale-105 inline-flex items-center space-x-4 shadow-2xl">
            <span>Занять место на встрече сейчас</span>
            <ArrowRight className="w-8 h-8" />
          </button>
          </a>
          <p className="text-[#83b7c2] mt-4">
            Или получите личную консультацию прямо сегодня
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#143A41] rounded-lg p-6">
            <h4 className="text-xl font-bold mb-4 text-[#53A4B1]">Свяжитесь с нами напрямую:</h4>
            <div className="space-y-3 text-[#53A4B1]">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#53A4B1]" />
                <span>WhatsApp для вопросов: +7 XXX XXX XX XX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#53A4B1]" />
                <span>Email: info@steeltech.kz</span>
              </div>
            </div>
          </div>

          <div className="bg-[#143A41] rounded-lg p-6">
            <h4 className="text-xl font-bold mb-4 text-[#53A4B1]">Информация о встрече:</h4>
            <div className="space-y-3 text-sm text-[#53A4B1]">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#53A4B1]" />
                <span>г. Алматы, пр. Абая (точный адрес после регистрации)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-[#53A4B1]" />
                <span>23 августа 2024</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-[#53A4B1]" />
                <span>12:00–15:00</span>
              </div>
              <div className="flex items-center space-x-3">
                <Coffee className="w-5 h-5 text-[#53A4B1]" />
                <span>Кофе-брейк включен</span>
              </div>
            </div>
          </div>
        </div>

        <footer className="text-center text-[#53A4B1] text-sm border-t border-[#306770] pt-8">
          <div className="mb-4">
            <p className="text-lg font-semibold text-[#53A4B1]">Steeltech Group</p>
            <p>БИН: [указать]</p>
            <p>Лицензии на строительную деятельность</p>
          </div>
          <p>
            Мы гарантируем конфиденциальность. Все материалы встречи защищены соглашением о неразглашении.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default FinalCTA;
