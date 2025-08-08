import React from 'react';
import { CheckCircle, ArrowRight, Target, TrendingUp, Shield } from 'lucide-react';

const SolutionSection: React.FC = () => {
  const benefits = [
    {
      icon: <Target className="w-6 h-6 text-cyan-100" />,
      title: "Реальные кейсы с цифрами",
      description: "покажу 3 объекта — сколько вложил, сколько заработал"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-cyan-100" />,
      title: "Готовые инвестпроекты",
      description: "от 47 млн (40% годовых) до 300 млн тг"
    },
    {
      icon: <Shield className="w-6 h-6 text-cyan-100" />,
      title: "Экономия на ошибках",
      description: "как не потерять 1.5 года и 6 млн тг (мой личный опыт)"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-cyan-100" />,
      title: "Инсайды рынка",
      description: "где и как покупать стрессовые активы банков со скидкой"
    }
  ];

  return (
    <section className="py-20 px-6 bg-slate-950 text-white font-inter">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Методология <span className="text-cyan-400">тройного роста</span>
          </h2>
          <div className="flex justify-center items-center space-x-4 text-2xl font-semibold mb-8">
            <span className="bg-teal-600 px-4 py-2 rounded">Анализ</span>
            <ArrowRight className="w-8 h-8 text-cyan-400" />
            <span className="bg-cyan-600 px-4 py-2 rounded">Концепция</span>
            <ArrowRight className="w-8 h-8 text-cyan-400" />
            <span className="bg-cyan-400 text-slate-900 px-4 py-2 rounded">Капитализация</span>
          </div>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            За 3 часа вы получите пошаговую систему, которая позволила мне и моим клиентам 
            <span className="text-cyan-300 font-bold"> увеличивать стоимость объектов в 2-3 раза, </span> 
            за счет правильной реконструкции
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="bg-cyan-600 p-3 rounded-lg">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-cyan-300">
                    ✅ {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-lg">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#contact-form">
  <button className="bg-[#53A4B1] hover:bg-[#38747E] text-white font-bold py-4 px-8 rounded-lg text-xl transition-all transform hover:scale-105 inline-flex items-center space-x-2">
    <span>Получить доступ к методологии</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </button>
</a>

        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
