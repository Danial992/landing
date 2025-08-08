import React from 'react';
import { AlertTriangle, TrendingUp, Clock, DollarSign } from 'lucide-react';

const UrgencySection: React.FC = () => {
  const urgencyFactors = [
    {
      icon: <DollarSign className="w-8 h-8 text-[#143A41]" />,
      title: "Курс доллара растет",
      description: "каждый день промедления снижает ваш капитал примерно на 0.5%",
      color: "text-[#143A41]"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#306770]" />,
      title: "Банки распродают активы",
      description: "это окно возможностей будет открыто всего 3–6 месяцев",
      color: "text-[#306770]"
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-[#53A4B1]" />,
      title: "Ставки аренды взлетели",
      description: "те, кто не успеют, упустят до 40% роста дохода",
      color: "text-[#53A4B1]"
    }
  ];

  const limitations = [
    "Только 20 мест — чтобы уделить максимум внимания каждому инвестору",
    "Без записи — мы работаем только в условиях полной конфиденциальности",
    "Следующая подобная встреча состоится только через 6 месяцев"
  ];

  return (
    <section className="py-20 px-6 bg-[#E6F3F5]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#143A41] mb-6">
            Почему действовать <span className="text-[#53A4B1]">сейчас</span> нужно сейчас и почему мы <span className="text-[#53A4B1]">берём только 20 участников</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {urgencyFactors.map((factor, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center border-l-4 border-[#38747E]">
              <div className={`${factor.color} mb-4 flex justify-center`}>
                {factor.icon}
              </div>
              <h3 className="text-xl font-bold text-[#143A41] mb-3">
                ⏰ {factor.title}
              </h3>
              <p className="text-[#306770] leading-relaxed">
                {factor.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[#143A41] text-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-[#53A4B1]">
            Ограничения встречи
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {limitations.map((limitation, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#38747E] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <p className="text-[#E6F3F5]">{limitation}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#38747E] to-[#143A41] text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Clock className="w-12 h-12 text-[#53A4B1]" />
              <h3 className="text-3xl font-bold">Время — ваш главный враг</h3>
            </div>
            <p className="text-xl mb-8 leading-relaxed text-[#E6F3F5]">
              Пока вы раздумываете, другие инвесторы уже покупают объекты со скидкой, улучшают их и занимают лучшие позиции на рынке.
Каждый день промедления — это упущенная прибыль. <br />
              <span className="text-[#53A4B1] font-bold">Каждый день промедления стоит денег.</span>
            </p>
            <a href="#contact-form">
            <button className="bg-[#53A4B1] hover:bg-[#38747E] text-white font-bold py-4 px-8 rounded-lg text-xl transition-all transform hover:scale-105">
              Действовать прямо сейчас
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
