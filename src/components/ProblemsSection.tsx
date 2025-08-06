import React from 'react';
import { X, TrendingDown, DollarSign, Building, AlertTriangle } from 'lucide-react';

const ProblemsSection: React.FC = () => {
  const problems = [
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Ваше здание приносит 3-5% годовых",
      description: "пока инфляция съедает 15-20%"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Первичка душит вторичку",
      description: "BI Group задрал цены до 2.3 млн/м², и ваши старые здания никто не хочет арендовать"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Курс доллара растет",
      description: "а ваш актив в тенге дешевеет каждый день"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "«Безголовые коробки»",
      description: "построили тойхану за 200 млн, которая работает 3 месяца в году"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Банки сидят на стрессовых активах",
      description: "а вы не знаете, как их выкупить со скидкой 50%"
    }
  ];

  return (
    <section className="py-20 px-6 bg-red-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Почему <span className="text-red-600">87% владельцев</span> коммерческой недвижимости теряют деньги прямо сейчас?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-red-500">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-lg text-red-600">
                  <X className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-red-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Усиливающий факт:</h3>
          <p className="text-xl leading-relaxed">
            Склады, которые год назад сдавали по <span className="font-bold">3 000 тг/м²</span>, 
            сейчас уходят по <span className="font-bold">5 000 тг/м²</span>. 
            Те, кто не успел — потеряли <span className="font-bold text-yellow-300">40% потенциальной прибыли</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;