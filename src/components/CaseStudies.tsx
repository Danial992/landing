import React from 'react';
import { TrendingUp, Building, DollarSign, Calendar } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const cases = [
    {
      title: "БЦ «Конекта»",
      problem: "устаревший БЦ с низкими потолками",
      investment: "конфиденциально (раскрою на встрече)",
      result: "+20 см потолков, ставка аренды выросла с 5 000 до 12 000 тг/м²",
      roi: "+140%",
      icon: <Building className="w-8 h-8" />
    },
    {
      title: "Объект за 206 млн",
      problem: "купили за 110 млн тг",
      investment: "8 месяцев реконструкции",
      result: "продали за 206 млн тг",
      roi: "ROI 87%",
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      title: "Sandi House",
      problem: "потерял 1.5 года на документах",
      investment: "создал систему получения разрешений за 4 месяца",
      result: "экономия 6 млн тг на каждом следующем проекте",
      roi: "Урок на миллионы",
      icon: <Calendar className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-20 px-6 bg-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-cyan-600">Реальные</span> результаты проектов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Каждый кейс подкреплен документами, договорами и финансовыми отчетами
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-cyan-600 p-3 rounded-lg text-white">
                    {caseStudy.icon}
                  </div>
                  <h3 className="text-xl font-bold">{caseStudy.title}</h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Исходная ситуация:</h4>
                  <p className="text-gray-600">{caseStudy.problem}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Вложения:</h4>
                  <p className="text-gray-600">{caseStudy.investment}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Результат:</h4>
                  <p className="text-gray-600">{caseStudy.result}</p>
                </div>

                <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
                  <div className="flex items-center justify-center space-x-2">
                    <TrendingUp className="w-6 h-6 text-cyan-600" />
                    <span className="text-2xl font-bold text-cyan-600">{caseStudy.roi}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-8">
            Хотите узнать детали каждого кейса и как применить их к своим объектам?
          </p>
      <a href="#contact-form">
          <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all transform hover:scale-105">
            Получить разбор кейсов на встрече
          </button>
      </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
