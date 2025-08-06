import React from 'react';
import { AlertTriangle, TrendingUp, Clock, DollarSign } from 'lucide-react';

const UrgencySection: React.FC = () => {
  const urgencyFactors = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Курс доллара растет",
      description: "каждый день промедления = потеря 0.5% капитала",
      color: "text-red-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Банки распродают активы",
      description: "окно возможностей закроется через 3-6 месяцев",
      color: "text-orange-600"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Ставки аренды взлетели",
      description: "кто не успел, опоздал на 40% роста",
      color: "text-yellow-600"
    }
  ];

  const limitations = [
    "Только 20 мест — для качественной проработки каждого кейса",
    "Без записи — конфиденциальная информация",
    "Одна встреча — следующая через 6 месяцев"
  ];

  return (
    <section className="py-20 px-6 bg-red-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Почему именно <span className="text-red-600">сейчас</span> и почему только <span className="text-red-600">20 человек</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {urgencyFactors.map((factor, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center border-l-4 border-red-500">
              <div className={`${factor.color} mb-4 flex justify-center`}>
                {factor.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                ⏰ {factor.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {factor.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 text-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-yellow-400">
            Ограничения встречи
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {limitations.map((limitation, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <p className="text-gray-300">{limitation}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Clock className="w-12 h-12 text-yellow-400" />
              <h3 className="text-3xl font-bold">Время — ваш главный враг</h3>
            </div>
            <p className="text-xl mb-8 leading-relaxed">
              Пока вы думаете, ваши конкуренты уже покупают объекты со скидками, 
              модернизируют их и захватывают рынок. <br />
              <span className="text-yellow-300 font-bold">Каждый день промедления стоит денег.</span>
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-4 px-8 rounded-lg text-xl transition-all transform hover:scale-105">
              Действовать прямо сейчас
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;